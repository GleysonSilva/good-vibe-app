import React, { useState } from "react";
import "./App.css";
import { createMuiTheme } from "@material-ui/core/styles";
import Speech from "./app/pages/speech";
import Number from "./app/pages/number";
import { ThemeProvider } from "@material-ui/styles";

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

        <main>{check ? <Speech /> : <Number />}</main>
        <footer
          style={{ color: "#fff", fontSize: "10px" }}
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
