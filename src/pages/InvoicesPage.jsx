// src/pages/InvoicesPage.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const InvoicesPage = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h2 fw-bold">Faturação</h1>
          <p className="text-muted mb-0">Gerir faturas e recibos</p>
        </div>
        <Link to="/faturacao/nova" className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i>
          Nova Fatura
        </Link>
      </div>
      
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Lista de Faturas</h5>
          <p className="text-muted">Página de faturação em construção...</p>
          <Link to="/" className="btn btn-outline-primary">
            Voltar ao Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

export default InvoicesPage