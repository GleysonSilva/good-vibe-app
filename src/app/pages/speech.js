import React, { useState, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

//import icon
import {
  faStop,
  faPlay,
  faEraser,
  faVolumeLow,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../components/CardMusic";

//import styles
import "./style.css";

export default function CompontensAPP() {
  const [text, setText] = useState(null);
  const [rate, setRate] = useState(0.9);
  const [number, setNumber] = useState(0);
  const [repetition, setRepetition] = useState(null);
  const [voiceIndex, setVoiceIndex] = useState("0");
  const [audioBackground, setAudioBackground] = useState(false);

  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    onResult: (result) => {
      setNumber(number + 1);
    },
  });
  const voice = voices[voiceIndex] || null;

  const handleText = async (_) => {
    for (let index = 0; index < repetition; index++) {
      await speak({
        text: text,
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
    <div className="col-12">
      <div className="col-12">
        <div className="row">
          <h5>Musica Fundo</h5>
        </div>
        <Card />
      </div>
      <p>Repedições: {number}</p>
      <div className="col-12 d-flex justify-content-center align-items-end">
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
      </div>
      <div className="col-12 d-flex">
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
      </div>
      <div className="col-12 d-flex justify-content-center">
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
        {text && repetition && repetition !== 0 && (
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
