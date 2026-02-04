import logo from './logo.svg';
import './App.css';
import ConfiguracoesSistema from './pages/ConfiguracoesSistema'; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

import ConfiguracoesSistemaPage from './pages/ConfiguracoesSistema';

function App() {
  return (
    <Router>
      <Routes>
        {/* Outras rotas existentes */}
        <Route path="/configuracoes" element={<ConfiguracoesSistema />} />
      </Routes>
    </Router>
  );
}

export default App;
