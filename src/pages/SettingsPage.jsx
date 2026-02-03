import React from 'react'

const SettingsPage = () => {
  return (
    <div>
      <div className="mb-4">
        <h1 className="h2 fw-bold">Configurações</h1>
        <p className="text-muted mb-0">Configurações do sistema</p>
      </div>

      <div className="row">
        <div className="col-md-3">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action active">
              <i className="bi bi-building me-2"></i>
              Empresa
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <i className="bi bi-credit-card me-2"></i>
              Faturação
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <i className="bi bi-percent me-2"></i>
              Impostos
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <i className="bi bi-shield-lock me-2"></i>
              Segurança
            </a>
          </div>
        </div>

        <div className="col-md-9">
          <div className="card card-custom">
            <div className="card-header">
              <h5 className="card-title mb-0">Informação da Empresa</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Nome da Empresa</label>
                    <input type="text" className="form-control input-custom" 
                           defaultValue="Minha Empresa Lda" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">NIF</label>
                    <input type="text" className="form-control input-custom" 
                           defaultValue="123456789" />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label className="form-label">Endereço</label>
                  <input type="text" className="form-control input-custom" 
                         defaultValue="Rua Exemplo, 123, Lisboa" />
                </div>
                
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control input-custom" 
                           defaultValue="contato@minhaempresa.pt" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Telefone</label>
                    <input type="tel" className="form-control input-custom" 
                           defaultValue="+351 123 456 789" />
                  </div>
                </div>
                
                <div className="d-flex justify-content-end">
                  <button type="button" className="btn btn-secondary me-2">
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-primary-custom">
                    Guardar Alterações
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage