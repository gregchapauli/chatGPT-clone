import React from "react";

export default function OptionSelection({ arrayItems }) {
  return (
    <>
      <h1 className="heading">React AI APP</h1>

      <div className="grid-main">
        {arrayItems.map((item) => {
          return (
            <div className="grid-child">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
