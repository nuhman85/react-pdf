import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { usePDF } from "react-to-pdf";

function App() {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  return (
    <>
      <div>
        <button onClick={() => toPDF()}>Download PDF</button>
        <div ref={targetRef}>Content to be generated to PDF</div>
      </div>
    </>
  );
}

export default App;
