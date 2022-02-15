import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import audioB from "../audio/soothing-breeze.mp3";

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
  audio.volume = "0.08";
  return (
    <div className={`row ${classes.root} justify-content-center`}>
      <Card className="col-6 m-0 p-0 card-music">
        <div className="col-12 background-color" />
        <div className="col-12 d-flex justify-content-between card-play">
          <div className="card-title-music">
            <span className="title-music">Soothing Breeze</span>
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
    </div>
  );
}
