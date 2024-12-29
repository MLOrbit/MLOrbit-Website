// src/ExploreML/useHighlight.js
import { useState, useCallback, useEffect } from "react";
import { highlightPlugin } from "@react-pdf-viewer/highlight";
import { v4 as uuidv4 } from "uuid";

export default function useHighlight(pdfPath) {
    const [highlights, setHighlights] = useState([]);
    const [color, setColor] = useState("#ffff00"); // Default yellow
    const [thickness, setThickness] = useState(2); // Default thickness

    // Initialize the highlight plugin without custom rendering
    const highlightPluginInstance = highlightPlugin();

    const { selectionRange, highlightSelection } = highlightPluginInstance;

    const handleHighlight = useCallback(() => {
        if (selectionRange && selectionRange.text) {
            console.log("Highlighting text:", selectionRange.text);
            const newHighlight = {
                id: uuidv4(),
                ...selectionRange,
                color: color,
                thickness: thickness,
            };

            highlightSelection({
                highlightId: newHighlight.id,
                color: newHighlight.color,
                thickness: newHighlight.thickness,
            });

            setHighlights((prev) => [...prev, newHighlight]);
        } else {
            alert("Please select some text in the PDF first.");
        }
    }, [selectionRange, color, thickness, highlightSelection]);

    const removeHighlight = useCallback((id) => {
        setHighlights((prev) => prev.filter((h) => h.id !== id));
    }, []);

    const clearHighlights = useCallback(() => {
        setHighlights([]);
    }, []);

    // Load highlights from localStorage on mount or when pdfPath changes
    useEffect(() => {
        if (pdfPath) {
            const storedHighlights = localStorage.getItem(`highlights-${pdfPath}`);
            if (storedHighlights) {
                setHighlights(JSON.parse(storedHighlights));
            }
        }
    }, [pdfPath]);

    // Save highlights to localStorage whenever they change
    useEffect(() => {
        if (pdfPath) {
            localStorage.setItem(`highlights-${pdfPath}`, JSON.stringify(highlights));
        }
    }, [highlights, pdfPath]);

    return {
        highlightPluginInstance,
        highlights,
        color,
        setColor,
        thickness,
        setThickness,
        handleHighlight,
        removeHighlight,
        clearHighlights,
    };
}
