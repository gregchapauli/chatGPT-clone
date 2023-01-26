import React from "react";

export default function Translation({ doStuff, setInput, result }) {
  const title = document.querySelector("h3");

  function typewriter(txt) {
    // if (index < txt.length) {
    //   title.innerHTML += `<span>${txt[index]}</span>`;
    //   setTimeout(() => {
    //     typewriter(txt, index + 1);
    //   }, 100);
    // }
    for (let i = 0; i < txt.length; i++) {
      setTimeout(() => {
        title.innerHTML += `<span>${txt[i]}</span>`;
      }, 1000);
    }
  }
  typewriter(result);

  return (
    <div className="app">
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="action-btn" onClick={doStuff}>
        Ask me something!
      </button>

      <h3 className="result-text">{/* {result.length > 0 ? result : ""} */}</h3>
    </div>
  );
}
