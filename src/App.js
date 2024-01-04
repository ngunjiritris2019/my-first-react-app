import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Nairobi" />

        <footer>
          Coded by Beatrice Ngunjiri, open-sourced on{" "}
          <a
            href="https://github.com/ngunjiritris2019/my-first-react-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
