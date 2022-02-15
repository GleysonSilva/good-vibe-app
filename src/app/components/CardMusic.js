import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import "./style.css";
import audioB from "../audio/soothing-breeze.mp3";

import { faCirclePlay, faCirclePause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles({
  root: {
    "& .MuiPaper-rounded": {
      borderRadius: "13px",
    },
    "& .MuiPaper-root": {
      backgroundColor: "#3e444f",
    },
  },
});

export default function CardMusic() {
  const classes = useStyles();

  var audio = new Audio(audioB);
  audio.volume = "0.07";
  return (
    <div className={`row ${classes.root} justify-content-center`}>
      <Card className="col-6 m-0 p-0 card-music">
        <div className="col-12 background-color" />
        <div className="col-12 d-flex justify-content-between card-play">
          <div className="card-title-music">
            <span className="title-music">Soothing Breeze</span>
            <span className="sub-title-music">BASS</span>
          </div>
          <div className="px-0">
            <IconButton aria-label="play/pause">
              <FontAwesomeIcon
                className="icon"
                icon={faCirclePlay}
                color="#8ce196"
                size="1x"
                onClick={() => {
                  audio.play();
                }}
              />
              <FontAwesomeIcon
                className="icon"
                classes="ml-3"
                icon={faCirclePause}
                color=""
                size="1x"
                onClick={() => {
                  audio.pause();
                }}
              />
            </IconButton>
          </div>
        </div>
      </Card>
    </div>
  );
}
