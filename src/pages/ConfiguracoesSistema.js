import React from 'react';
import ConfiguracoesSistema from '../components/Configuracoes/ConfiguracoesSistema';

const ConfiguracoesSistemaPage = () => {

<Route path="/configuracoes" element={
  <ProtectedRoute requiredPermission="Configurações">
    <ProtectedLayout>
      <ConfiguracoesSistema />  {/* POR ESTE */}
    </ProtectedLayout>
  </ProtectedRoute>
} />

  return (
    <div className="container-fluid p-0">
      <ConfiguracoesSistema />
    </div>
  );
};

export default ConfiguracoesSistemaPage;