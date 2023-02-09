import React from "react";
import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
    // Step 1:
    // Look at the structure of the data within ./data/albums.json and create an interface describing its structure

    // On page load, fetch the data from this API and set it to state described by the interface
    // Then display the data in the ul below. You may change or add any styling that you like.

    // Step 2:
    // Create up & down buttons in each li.
    // If it is the first item in the list, it should only display a down button.
    // If it is the last item in the list, it should only display an up button.
    // Finally, make the list sortable by clicking on any of the buttons.

    return (
        <div className="App">
            <h1>Here are the 4 best albums of all time:</h1>
            <ul>
                {/* Display your LIs here - their content can be simple, 
            just an album title and the buttons will suffice */}
            </ul>
        </div>
    );
}
