import React, { useState, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

//import icon
import { faStop, faPlay, faEraser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import styles
import "./style.css";

export default function CompontensAPP() {
  const [text, setText] = useState(null);
  const [number, setNumber] = useState(0);
  // const [value, setValue] = useState("");
  const [repetition, setRepetition] = useState(null);
  const [rate, setRate] = useState(0.9);
  const [voiceIndex, setVoiceIndex] = useState({
    default: true,
    lang: "pt-BR",
    localService: true,
    name: "Microsoft Daniel - Portuguese (Brazil)",
    voiceURI: "Microsoft Daniel - Portuguese (Brazil)",
  });
  const m = new SpeechSynthesisUtterance("teste");

  const aa = [{ name: "texte 1" }, { name: "texte 2" }, { name: "texte 3" }];

  const fm = () => {
    aa.forEach(async (element, index) => {
      await window.speechSynthesis.speak(m);
      await setNumber(index);
    });
  };

  console.log("number", number);

  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    onResult: (result) => {
      // console.log("number", number);
      setNumber(number + 1);
    },
  });
  const voice = voices[voiceIndex] || null;

  const handleText = async (_) => {
    for (let index = 0; index < repetition; index++) {
      // await setNumber(index);
      await speak({
        text: text,
        speaking: !speaking,
        rate,
        voice,
      });
    }
    // array.forEach((element) => {
    //   speak({ text: element.text, speaking: element.speaking });
    // });
  };
  // const setSpeak = async (_) => {
  //   let a = await speak({
  //     text: text,
  //     speaking: !speaking,
  //   });
  //   console.log("a", a);
  //   return;
  // };

  // const handleText = async (_) => {
  //   console.log("Start");

  //   for (let index = 0; index < repetition; index++) {
  //     await setTimeout(async () => {
  //       await setSpeak();
  //       await console.log("index", index);
  //       // await setNumber(number + 1);
  //     }, 1000);
  //   }

  //   console.log("End");
  // };

  return (
    <div className="p-3">
      <div className="row">
        <div className="col-12">
          <p className="title-text"> {text}</p>
        </div>
      </div>
      <p>Repedições: {number}</p>
      <div className="col-12 d-flex justify-content-center align-items-end">
        <div className="col-6">
          <span className="">{rate}</span>
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
      <div className="col-12 d-flex justify-content-center">
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
              onClick={cancel}
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

      <button onClick={fm}>TESTE</button>
    </div>
  );
}

// https://mikeyparton.github.io/react-speech-kit/
// https://github.com/MikeyParton/react-speech-kit/blob/master/examples/src/useSpeechSynthesis.jsx
// https://codepen.io/anyssa/pen/PoNBMxJ
