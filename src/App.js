import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />

      <footer>
        Coded by Beatrice Ngunjiri, open-source on{" "}
        <a
          href="https://github.com/ngunjiritris2019/my-first-react-app"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
