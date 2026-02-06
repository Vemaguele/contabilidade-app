// src/App.jsx - VERSÃO COMPLETA COM TODAS AS ROTAS
import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ConfigProvider } from './context/ConfigContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import ProtectedRoute from './auth/ProtectedRoute'
import LoginPage from './auth/LoginPage'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'


// Importe TODAS as páginas
import DashboardPage from './pages/DashboardPage'
import InvoicesPage from './pages/InvoicesPage'
import AccountingPage from './pages/AccountingPage'
import ClientsPage from './pages/ClientsPage'
import SuppliersPage from './pages/SuppliersPage'
import ReportsPage from './pages/ReportsPage'
import BanksPage from './pages/BanksPage'
import TesourariaPage from './pages/TesourariaPage'
import IvaImpostosPage from './pages/IvaImpostosPage'
import FolhaPagamentoPage from './pages/FolhaPagamentoPage'
import StockPage from './pages/StockPage'
import ComprasPage from './pages/ComprasPage'
import VendasCrmPage from './pages/VendasCrmPage'
import ImobilizadoPage from './pages/ImobilizadoPage'
import DocumentosPage from './pages/DocumentosPage'
import EFaturacaoPage from './pages/EFaturacaoPage'
import ControloGestaoPage from './pages/ControloGestaoPage'
import ProjetosPage from './pages/ProjetosPage'
import MobilePage from './pages/MobilePage'
import ConfiguracoesSistema from './pages/ConfiguracoesSistema'
import AdminPage from './pages/AdminPage'
import PerfilPage from './pages/PerfilPage'

// Layout padrão para páginas protegidas
const ProtectedLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <div className="d-flex flex-grow-1 overflow-hidden">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <main className="main-content flex-grow-1 overflow-auto">
          <div className="container-fluid py-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

// Componente principal das rotas
const AppRoutes = () => {
  return (
    <Routes>
      {/* Rota pública - Login */}
      <Route path="/login" element={<LoginPage />} />
      
      {/* Rota raiz - Redireciona para dashboard se autenticado */}
      <Route path="/" element={
        <ProtectedRoute>
          <ProtectedLayout>
            <DashboardPage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      {/* ===== ROTAS PRINCIPAIS ===== */}
      <Route path="/dashboard" element={
        <ProtectedRoute requiredPermission="Dashboard">
          <ProtectedLayout>
            <DashboardPage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/faturacao" element={
        <ProtectedRoute requiredPermission="Faturação">
          <ProtectedLayout>
            <InvoicesPage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/contabilidade" element={
        <ProtectedRoute requiredPermission="Contabilidade">
          <ProtectedLayout>
            <AccountingPage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/clientes" element={
        <ProtectedRoute requiredPermission="Clientes">
          <ProtectedLayout>
            <ClientsPage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/fornecedores" element={
        <ProtectedRoute requiredPermission="Fornecedores">
          <ProtectedLayout>
            <SuppliersPage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/relatorios" element={
        <ProtectedRoute requiredPermission="Relatórios">
          <ProtectedLayout>
            <ReportsPage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/bancos" element={
        <ProtectedRoute requiredPermission="Bancos">
          <ProtectedLayout>
            <BanksPage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      {/* ===== ROTAS FINANCEIRAS ===== */}
      <Route path="/tesouraria" element={
        <ProtectedRoute requiredPermission="Tesouraria">
          <ProtectedLayout>
            <TesourariaPage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/iva-impostos" element={
        <ProtectedRoute requiredPermission="IVA/Impostos">
          <ProtectedLayout>
            <IvaImpostosPage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/folha-pagamento" element={
        <ProtectedRoute requiredPermission="Folha de Pagamento">
          <ProtectedLayout>
            <FolhaPagamentoPage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      {/* ===== ROTAS OPERACIONAIS ===== */}
      <Route path="/stock" element={
        <ProtectedRoute requiredPermission="Stock Básico">
          <ProtectedLayout>
            <StockPage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/compras" element={
        <ProtectedRoute requiredPermission="Compras">
          <ProtectedLayout>
            <ComprasPage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/vendas-crm" element={
        <ProtectedRoute requiredPermission="Vendas & CRM">
          <ProtectedLayout>
            <VendasCrmPage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/imobilizado" element={
        <ProtectedRoute requiredPermission="Imobilizado">
          <ProtectedLayout>
            <ImobilizadoPage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      {/* ===== ROTAS DE GESTÃO ===== */}
      <Route path="/documentos" element={
        <ProtectedRoute requiredPermission="Document Management">
          <ProtectedLayout>
            <DocumentosPage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/e-faturacao" element={
        <ProtectedRoute requiredPermission="E-faturação">
          <ProtectedLayout>
            <EFaturacaoPage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/controlo-gestao" element={
        <ProtectedRoute requiredPermission="Controlo de Gestão">
          <ProtectedLayout>
            <ControloGestaoPage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/projetos" element={
        <ProtectedRoute requiredPermission="Projetos">
          <ProtectedLayout>
            <ProjetosPage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/mobile" element={
        <ProtectedRoute requiredPermission="Mobile Access">
          <ProtectedLayout>
            <MobilePage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      {/* ===== ROTAS DE SISTEMA ===== */}
      <Route 
        path="/configuracoes" 
        element={
          <ProtectedRoute requiredPermission="Configurações">
            <ProtectedLayout>
             <ConfiguracoesSistema />
            </ProtectedLayout>
          </ProtectedRoute>
      } />
      
      <Route path="/admin" element={
        <ProtectedRoute requiredLevel={1}> {/* Apenas nível 1 (Admin) */}
          <ProtectedLayout>
            <AdminPage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/perfil" element={
        <ProtectedRoute>
          <ProtectedLayout>
            <PerfilPage />
          </ProtectedLayout>
        </ProtectedRoute>
      } />
      
      {/* Rota 404 - Página não encontrada */}
      <Route path="*" element={
        <ProtectedRoute>
          <ProtectedLayout>
            <div className="text-center py-5">
              <h1 className="display-1 text-muted">404</h1>
              <h3 className="mb-3">Página não encontrada</h3>
              <p className="text-muted mb-4">
                A página que procura não existe ou foi movida.
              </p>
              <a href="/" className="btn btn-primary">
                <i className="bi bi-house me-1"></i> Voltar ao Dashboard
              </a>
            </div>
          </ProtectedLayout>
        </ProtectedRoute>
      } />
    </Routes>
  )
}

// App principal
function App() {
  return (
    <Router>
      <AuthProvider>
          <ConfigProvider>
              <AppRoutes />
          </ConfigProvider>       
      </AuthProvider>
    </Router>
  );
}

export default App
