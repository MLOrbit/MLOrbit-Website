// highlight.js
import { useState, useCallback } from "react";
import { highlightPlugin } from "@react-pdf-viewer/highlight";
import { v4 as uuidv4 } from "uuid";

export default function useHighlight() {
    // Store the array of highlight objects
    const [highlights, setHighlights] = useState([]);
    // Chosen highlight color
    const [color, setColor] = useState("#ffff00");
    // Chosen highlight thickness
    const [thickness, setThickness] = useState(2);

    // Create the highlight plugin instance
    const highlightPluginInstance = highlightPlugin();

    // Access plugin’s methods
    const { selectionRange, highlightSelection } = highlightPluginInstance;

    // Finalize highlight of selected text
    const handleHighlight = useCallback(() => {
        if (selectionRange && selectionRange.text) {
            const newHighlight = {
                id: uuidv4(),
                ...selectionRange,
                color: color,
                thickness: thickness,
            };

            // Use the plugin's highlightSelection method to apply the highlight
            highlightSelection({
                highlightId: newHighlight.id,
                color: newHighlight.color,
                thickness: newHighlight.thickness,
            });

            // Add the new highlight to the state
            setHighlights((prev) => [...prev, newHighlight]);
        } else {
            alert("Please select some text in the PDF first.");
        }
    }, [selectionRange, color, thickness, highlightSelection]);

    // Remove a specific highlight
    const removeHighlight = useCallback((id) => {
        setHighlights((prev) => prev.filter((h) => h.id !== id));
    }, []);

    // Clear all highlights
    const clearHighlights = useCallback(() => {
        setHighlights([]);
    }, []);

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
