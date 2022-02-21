import React, { useState, useEffect } from "react";
import { useSpeechSynthesis, useSpeechRecognition } from "react-speech-kit";

//import icon
import {
  faStop,
  faPlay,
  faEraser,
  faVolumeLow,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import CardText from "@material-ui/core/Card";

//import styles
import "./style.css";

export default function CompomentSpeech({}) {
  const [text, setText] = useState(null);
  const [rate, setRate] = useState(0.9);
  const [number, setNumber] = useState(0);
  const [repetition, setRepetition] = useState(null);
  const [voiceIndex, setVoiceIndex] = useState("0");
  const [value, setValue] = useState("");

  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    onResult: (result) => {
      setNumber(number + 1);
    },
  });
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  const voice = voices[voiceIndex] || null;

  const handleText = async (_) => {
    for (let index = 0; index < repetition; index++) {
      await speak({
        text: text ? text : value,
        speaking: !speaking,
        rate,
        voice,
      });
    }
  };

  var a;
  const chargebattery = () => {
    setTimeout(function () {
      return <FontAwesomeIcon icon={faVolumeLow} color="#8ce196" size="2x" />;
    }, 1000);
    setTimeout(function () {
      return <FontAwesomeIcon icon={faVolumeHigh} color="#8ce196" size="2x" />;
    }, 2000);
    setTimeout(function () {
      return <FontAwesomeIcon icon={faVolumeHigh} color="#8ce196" size="2x" />;
    }, 3000);
    // setTimeout(function () {
    //   a.innerHTML = "&#xf240;";
    // }, 4000);
  };
  useEffect(() => {}, []);

  return (
    <div className="col-12 col-md-6 card-center">
      {/* <p>Repedições: {number}</p> 
       <div className="row my-3">
        <h5>Gravador</h5>
      </div>

      <div className="row justify-content-center">
        <textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />

        <div id="fora" onMouseDown={listen} onMouseUp={stop}>
          <div id="dentro"></div>
        </div>

        {/* <button className=""></button> 
        {listening && <div>Go ahead I'm listening</div>}
      </div> */}
      <div className="row my-3">
        <h5>Atividades</h5>
      </div>
      <div className="row">
        <div className="col-6">
          <span>{rate}</span>
          <input
            className="range"
            type="range"
            min="0.5"
            max="2"
            defaultValue="0.9"
            step="0.1"
            id="rate"
            onChange={(event) => {
              setRate(event.target.value);
            }}
          />
        </div>
        <div className="col-6">
          <input
            type="number"
            name="repetition"
            id=""
            placeholder="Nº Repedições.."
            value={repetition}
            onChange={(e) => setRepetition(e.target.value)}
          />
        </div>
        {/* <div className="col-6 d-flex justify-content-center"></div> */}
        <div className="col-12 d-flex justify-content-center pr-0 pl-0">
          <select
            id="voice"
            name="voice"
            value={voiceIndex || ""}
            onChange={(event) => {
              setVoiceIndex(event.target.value);
            }}
          >
            <option value="">Default</option>
            {voices.map((option, index) => (
              <option key={option.voiceURI} value={index}>
                {`${option.lang} - ${option.name}`}
              </option>
            ))}
          </select>
        </div>{" "}
        {/* <CardText className="col-6 mr-2 p-0 card-music"></CardText> */}
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
      </div>

      <div className="col-12 mt-3 d-flex justify-content-around">
        {repetition && repetition !== 0 && (
          <>
            <FontAwesomeIcon
              className="icon"
              icon={faStop}
              color="#ed9d9d"
              size="2x"
              onClick={() => {
                cancel();
              }}
            />
            <FontAwesomeIcon
              className="icon"
              icon={faPlay}
              color="#8ce196"
              size="2x"
              onClick={() => handleText()}
            />
          </>
        )}
        <FontAwesomeIcon
          className="icon"
          icon={faEraser}
          size="2x"
          onClick={() => {
            setNumber(0);
            setText("");
            setRepetition(0);
          }}
        />
      </div>
    </div>
  );
}
