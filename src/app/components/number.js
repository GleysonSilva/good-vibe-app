import React, { useState, useEffect } from "react";
import "./style.css";

// import icon
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Number() {
  const [number, setnumber] = useState(0);
  const [open, setopen] = useState(false);
  const [text, setText] = useState("");

  const handleSum = () => {
    if (number !== 120) setnumber(number + 1);
    window.speechSynthesis.speak(m);

    setopen(!open);
  };
  const m = new SpeechSynthesisUtterance(text);

  const handleSubtract = () => {
    if (number !== 0) setnumber(number - 1);
  };

  return (
    <div className="row">
      {number % 2 === 0 ? (
        <span
          id="title"
          className={
            open
              ? `col-12 title-number flip-vertical-left`
              : `col-12 title-number flip-vertical-left`
          }
          onClick={handleSum}
        >
          {number}
        </span>
      ) : (
        <span
          id="title"
          className={
            open
              ? `col-12 title-number flip-vertical-left`
              : `col-12 title-number flip-vertical-left`
          }
          onClick={handleSum}
        >
          {number}
        </span>
      )}

      <textarea
        id="message"
        name="message"
        placeholder="Texto.."
        rows={4}
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <div className="col-12 d-flex justify-content-center ">
        <button className="button" onClick={handleSubtract}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>
    </div>
  );
}
