import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import './App.css';

// Páginas
import ConfiguracoesSistema from './pages/ConfiguracoesSistema';
import PlanoContasPage from './pages/PlanoContasPage';
import logo from './logo.svg';

// Tema do Material-UI
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Routes>
            {/* Rota para a página inicial (React default) */}
            <Route 
              path="/" 
              element={
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
              } 
            />
            
            {/* Rota para Plano de Contas */}
            <Route path="/plano-contas" element={<PlanoContasPage />} />
            
            {/* Rota para Configurações do Sistema */}
            <Route path="/configuracoes" element={<ConfiguracoesSistema />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;