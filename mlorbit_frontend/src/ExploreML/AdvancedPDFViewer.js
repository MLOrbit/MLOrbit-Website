// src/ExploreML/AdvancedPDFViewer.jsx
import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Icons
import { GiHighlighter } from "react-icons/gi";

// Custom Hooks
import useHighlight from "./useHighlight";

// Styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/highlight/lib/styles/index.css";
import "./AdvancedPDFViewer.css";
import "./highlight.css";

function AdvancedPDFViewer() {
    // Retrieve PDF path from React Router
    const location = useLocation();
    const { pdfPath } = location.state || {};

    // Initialize highlight hook with pdfPath for persistence
    const {
        highlightPluginInstance,
        highlights,
        color,
        setColor,
        thickness,
        setThickness,
        handleHighlight,
        removeHighlight,
        clearHighlights,
    } = useHighlight(pdfPath);

    // Initialize default layout plugin
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    // States for Text-to-Speech (TTS)
    const [textToRead, setTextToRead] = useState("");
    const [speechRate, setSpeechRate] = useState(1);
    const [selectedVoice, setSelectedVoice] = useState(null);
    const [voices, setVoices] = useState([]);

    // Load available voices on mount
    useEffect(() => {
        const loadVoices = () => {
            const availableVoices = window.speechSynthesis.getVoices();
            setVoices(availableVoices);
            if (!selectedVoice && availableVoices.length > 0) {
                setSelectedVoice(availableVoices[0]);
            }
        };
        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;

        // Cleanup on unmount
        return () => {
            window.speechSynthesis.onvoiceschanged = null;
        };
    }, [selectedVoice]);

    // Handle Text-to-Speech
    const handleTextToSpeech = useCallback(() => {
        if (textToRead.trim()) {
            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
            }

            const utterance = new SpeechSynthesisUtterance(textToRead);
            utterance.rate = speechRate;
            if (selectedVoice) utterance.voice = selectedVoice;

            utterance.onend = () => {
                console.log("Speech synthesis finished.");
            };

            utterance.onerror = (e) => {
                console.error("Speech synthesis error:", e);
                alert("An error occurred during speech synthesis.");
            };

            window.speechSynthesis.speak(utterance);
        } else {
            alert("Please enter some text to read aloud.");
        }
    }, [textToRead, speechRate, selectedVoice]);

    return (
        <div className="advanced-pdf-viewer">
            {pdfPath ? (
                <>
                    {/* Toolbar */}
                    <div className="toolbar" role="toolbar" aria-label="PDF Viewer Toolbar">
                        {/* Highlight Controls */}
                        <div className="highlight-controls">
                            <label>
                                Color:
                                <input
                                    type="color"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                    aria-label="Select highlight color"
                                />
                            </label>
                            <label>
                                Thickness:
                                <input
                                    type="number"
                                    min="1"
                                    max="10"
                                    value={thickness}
                                    onChange={(e) => setThickness(parseInt(e.target.value, 10))}
                                    aria-label="Select highlight thickness"
                                />
                            </label>
                            <button
                                className="btn btn-highlight"
                                onClick={handleHighlight}
                                aria-label="Highlight selected text"
                            >
                                <GiHighlighter /> Highlight
                            </button>
                        </div>

                        {/* Text-to-Speech Controls */}
                        <div className="tts-controls" role="region" aria-label="Text to Speech Controls">
                            <textarea
                                className="tts-input"
                                placeholder="Enter text to read aloud..."
                                value={textToRead}
                                onChange={(e) => setTextToRead(e.target.value)}
                                aria-label="Text to read aloud"
                            />
                            <button className="btn btn-primary" onClick={handleTextToSpeech} aria-label="Play audio">
                                Play Audio
                            </button>
                            <label>
                                Speed:
                                <input
                                    type="number"
                                    min="0.5"
                                    max="2"
                                    step="0.1"
                                    value={speechRate}
                                    onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                                    aria-label="Speech rate"
                                />
                            </label>
                            <label>
                                Voice:
                                <select
                                    className="voice-select"
                                    value={selectedVoice?.name || ""}
                                    onChange={(e) =>
                                        setSelectedVoice(
                                            voices.find((voice) => voice.name === e.target.value)
                                        )
                                    }
                                    aria-label="Select voice"
                                >
                                    <option value="">Default</option>
                                    {voices.map((voice, idx) => (
                                        <option key={idx} value={voice.name}>
                                            {voice.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                    </div>

                    {/* PDF Viewer */}
                    <div className="viewer-wrapper">
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                            <Viewer
                                fileUrl={pdfPath}
                                plugins={[defaultLayoutPluginInstance, highlightPluginInstance]}
                                defaultScale={1.0} // Set a fixed zoom level
                                aria-label="PDF Viewer"
                            />
                        </Worker>
                    </div>

                    {/* Highlights Section */}
                    <div className="highlights-section" role="region" aria-label="Highlights">
                        <h3>Highlights</h3>
                        {highlights.length > 0 ? (
                            <ul>
                                {highlights.map((h) => (
                                    <li key={h.id} style={{ color: h.color }}>
                                        {h.text}
                                        <button
                                            className="btn btn-remove-highlight"
                                            onClick={() => removeHighlight(h.id)}
                                            aria-label={`Remove highlight for "${h.text}"`}
                                        >
                                            &times;
                                        </button>
                                    </li>
                                ))}
                                <button className="btn btn-clear-highlights" onClick={clearHighlights} aria-label="Clear all highlights">
                                    Clear All
                                </button>
                            </ul>
                        ) : (
                            <p>No highlights yet.</p>
                        )}
                    </div>
                </>
            ) : (
                <div className="pdf-error">
                    <h2>No PDF Selected</h2>
                    <p>Please select a PDF to view.</p>
                </div>
            )}
        </div>
    );

}

export default AdvancedPDFViewer;
