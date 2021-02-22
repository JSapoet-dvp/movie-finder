import './styles/style.css';
import Container from "./components/Container"

function App() {
  return (
    <div className="App">
      <header className="header1">
        <h3 onClick={() => window.location.reload(false)}>
          MF
          <span className="fas fa-film"></span>
        </h3>
      </header>
      <Container />
    </div>
  );
}

export default App;

// <header className="header">
// <h1>Movie Finder</h1>
// </header>

// <h3 onClick="window.location.reload()">
