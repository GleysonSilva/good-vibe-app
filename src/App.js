import React, { useState } from "react";
import "./App.css";
import { createMuiTheme } from "@material-ui/core/styles";
import Speech from "./app/components/speech";
import Number from "./app/components/number";

function App() {
  const theme = createMuiTheme({
    palette: {
      // type: "dark",
      Background: "#000",
      primary: {
        main: "#101010",
        contrastText: "#fff",
      },
    },
  });
  const [check, setcheck] = useState(true);

  // let theme = createMuiTheme();
  return (
    // <ThemeProvider theme={theme}>
    <div className="App" theme={theme}>
      <header className="App-header">
        {/* <div className="col-12 col-sm-12 col-md-5 card"> */}
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
        <div>
          developer 🔥
          {/* <FavoriteIcon style={{ color: "red" }} fontSize="small" />{" "} */}
          <a href="https://www.instagram.com/gleeysonsilva/" className="">
            GleeysonSilva
          </a>
        </div>
        {/* </div> */}
      </header>
      {/* <main></main>
        <footer
          style={{ color: "#fff", fontSize: "10px" }}
          className="footer-text"
        ></footer> */}
    </div>
    // </ThemeProvider>
  );
}

export default App;