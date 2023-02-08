import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import audioB from "../audio/soothing-breeze.mp3";
import audioB1 from "../audio/soothing-breeze-1.mp3";

import { faCirclePlay, faCirclePause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const useStyles = makeStyles({
  root: {
    "& .MuiPaper-rounded": {
      borderRadius: "13px",
    },
    "& .MuiPaper-root": {
      backgroundColor: "#323437",
    },
  },
});

export default function CardMusic() {
  const classes = useStyles();

  var audio = new Audio(audioB);
  var audioSB1 = new Audio(audioB1);
  audio.volume = "0.08";
  audioSB1.volume = "0.08";

  return (
    <div className={`d-flex ${classes.root} justify-content-start`}>
      <Card className="col-6 mr-2 p-0 card-music">
        <div className="col-12 background-img" />
        <div className="col-12 d-flex justify-content-between card-play">
          <div className="card-title-music">
            <span className="title-music">Soothing </span>
            <span className="sub-title-music">BASS</span>
          </div>
          <div className="m-2">
            <IconButton aria-label="play/pause" className="p-0">
              <FontAwesomeIcon
                className="icon"
                icon={faCirclePlay}
                color="#8ce196"
                size="1x"
                onClick={() => {
                  audio.play();
                  audioSB1.pause();
                }}
              />
            </IconButton>
            <IconButton aria-label="play/pause" className="ml-2 p-0">
              <FontAwesomeIcon
                className="icon"
                icon={faCirclePause}
                color=""
                size="1x"
                onClick={() => {
                  audio.pause();
                }}
              />{" "}
            </IconButton>
          </div>
        </div>
      </Card>
      <Card className="col-6 mr-2 p-0 card-music">
        <div className="col-12 background-img-1" />
        <div className="col-12 d-flex justify-content-between card-play">
          <div className="card-title-music">
            <span className="title-music">Breeze</span>
            <span className="sub-title-music">GUITAR</span>
          </div>
          <div className="m-2">
            <IconButton aria-label="play/pause" className="p-0">
              <FontAwesomeIcon
                className="icon"
                icon={faCirclePlay}
                color="#8ce196"
                size="1x"
                onClick={() => {
                  audioSB1.play();
                  audio.pause();
                }}
              />
            </IconButton>
            <IconButton aria-label="play/pause" className="ml-2 p-0">
              <FontAwesomeIcon
                className="icon"
                icon={faCirclePause}
                color=""
                size="1x"
                onClick={() => {
                  audioSB1.pause();
                }}
              />
            </IconButton>
          </div>
        </div>
      </Card>
    </div>
  );
}
