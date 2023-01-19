import React from "react";

export default function Translation({ doStuff, setInput }) {
  return (
    <div>
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="action-btn" onClick={doStuff}>
        DO YOUR STUFF!
      </button>
    </div>
  );
}
