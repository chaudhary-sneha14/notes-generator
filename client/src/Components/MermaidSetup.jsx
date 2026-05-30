import React, { useEffect, useRef } from "react";

import mermaid from "mermaid";


// ================= MERMAID CONFIG =================

// Initialize Mermaid settings
mermaid.initialize({

  startOnLoad: false, // We will manually render diagrams
  theme: "default",  // Default diagram theme
});


// ================= CLEAN DIAGRAM FUNCTION =================

// This function cleans Mermaid text
const cleanMermaidChart = (diagram) => {

 
  if (!diagram) return "";

  // Replace Windows line breaks with normal line breaks
  // trim() removes extra spaces from start/end
  let clean = diagram.replace(/\r\n/g, "\n").trim();

  // If user forgot "graph TD"
  // automatically add it
  if (!clean.startsWith("graph")) {  //TD means top down graph
    clean = `graph TD\n${clean}`;
  }

  return clean;
};


// ================= AUTO FIX NODES =================

// Mermaid requires unique node IDs
// This function automatically creates them
const autoFixNodes = (diagram) => {

  // Counter for generating IDs
  let index = 0;

  // Stores already used nodes
  const used = new Map();

  // Find all [Node] patterns
  return diagram.replace(/\[(.*?)\]/g, (match, label) => {

    // Remove extra spaces
    const key = label.trim();

    // If node already exists reuse it
    if (used.has(key)) {
      return used.get(key);
    }

    // Increase counter
    index++;

    // Create unique ID
    // Example: N1, N2
    const id = `N${index}`;

    // Create Mermaid node format
    // Example: N1["Login"]
    const node = `${id}["${key}"]`;

    // Save node for reuse
    used.set(key, node);

    // Replace original node
    return node;
  });
};


// ================= MAIN COMPONENT =================

function MermaidSetup({ diagram }) {

  // useRef gives access to actual HTML div
  const containerRef = useRef(null);


  // useEffect runs after component renders
  useEffect(() => {


    if (!diagram || !containerRef.current) return;


    // Function to render Mermaid diagram
    const renderDiagram = async () => {
      try {

        // Clear previous diagram
        containerRef.current.innerHTML = "";

        // Create unique diagram ID
        const uniqueId = `mermaid-${Math.random()
          .toString(36)
          .substring(2, 9)}`;

        // Step 1 -> Clean diagram
        // Step 2 -> Fix duplicate nodes
        const safeChart = autoFixNodes(
          cleanMermaidChart(diagram)
        );

        // Convert Mermaid text -> SVG diagram
        const { svg } = await mermaid.render(
          uniqueId,
          safeChart
        );

        // Put SVG inside div
        containerRef.current.innerHTML = svg;

      } catch (error) {

        console.error("Mermaid render failed:", error);
      }
    };

    // Call rendering function
    renderDiagram();

  }, [diagram]); // Re-run whenever diagram changes


  // ================= UI =================

  return (

    // Main container
    <div className="bg-white border rounded-lg p-4 overflow-x-auto">

      {/* Mermaid diagram will appear here */}
      <div ref={containerRef} />

    </div>
  );
}

export default MermaidSetup;