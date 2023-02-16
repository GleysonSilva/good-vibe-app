import React, { useState } from "react";
import "./App.css";
import { createMuiTheme } from "@material-ui/core/styles";
import Speech from "./app/pages/speech";
import Number from "./app/pages/number";
import { ThemeProvider } from "@material-ui/styles";
import Card from "./app/components/CardMusic";

//import icon
import { faVolumeHigh, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const theme = createMuiTheme({
    palette: {
      Background: "#000",
      primary: {
        main: "#101010",
        contrastText: "#fff",
      },
    },
  });
  const [check, setcheck] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <div className="App" theme={theme}>
        <header className="App-header">{/* <Sidenav /> */}</header>

        {/* <header className="App-header">
        <div class="switch__container">
          <input
            id="switch-flat"
            class="switch switch--flat"
            type="checkbox"
            value={check}
            onClick={(e) => setcheck(!check)}
          />
          <label for="switch-flat"></label>
        </div>
        {check ? <Speech /> : <Number />}
      </header> */}

        <main>
          <h3> Boa noite</h3>
          <div className="col-12 col-md-6 card-center">
            <div className="row my-3">
              <h5>Musica Fundo</h5>
            </div>
            <Card />
          </div>{" "}
          <div className="col-12 col-md-6 card-center">
            <button className="button-view" onClick={() => setcheck(!check)}>
              <FontAwesomeIcon
                icon={!check ? faList : faVolumeHigh}
                color="#7e7a80"
                size="1x"
              />
            </button>
          </div>
          <div className="col-12">{check ? <Speech /> : <Number />}</div>
        </main>
        <footer
          style={{ color: "#fff", fontSize: "12px" }}
          className="footer-text"
        >
          <div>
            developer 🔥
            <a href="https://www.instagram.com/gleeysonsilva/" className="">
              GleeysonSilva
            </a>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
