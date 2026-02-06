const ModulosConfig = () => {
  const [modules, setModules] = useState({
    ativos: ['faturacao', 'contabilidade', 'tesouraria'],
    fluxosPersonalizados: true,
    integracaoBancos: false,
    assinaturasEletronicas: true,
  });

  const allModules = [
    { id: 'faturacao', label: 'Faturação', icon: 'receipt' },
    { id: 'contabilidade', label: 'Contabilidade', icon: 'calculator' },
    { id: 'tesouraria', label: 'Tesouraria', icon: 'cash-coin' },
    { id: 'ativos', label: 'Ativos Fixos', icon: 'building' },
    { id: 'rh', label: 'Recursos Humanos', icon: 'people' },
    { id: 'projetos', label: 'Projetos', icon: 'clipboard-data' },
    { id: 'inventario', label: 'Inventário', icon: 'boxes' },
    { id: 'crm', label: 'CRM', icon: 'person-lines-fill' },
  ];

  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <div className="bg-info bg-opacity-10 p-3 rounded-circle me-3">
          <i className="bi bi-puzzle text-info fs-4"></i>
        </div>
        <div>
          <h3 className="h4 mb-1">Configuração de Módulos</h3>
          <p className="text-muted mb-0">Ative e personalize os módulos do sistema</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-light">
              <h5 className="mb-0">Módulos Disponíveis</h5>
            </div>
            <div className="card-body">
              <div className="row">
                {allModules.map(module => (
                  <div className="col-md-6 mb-3" key={module.id}>
                    <div className={`card ${modules.ativos.includes(module.id) ? 'border-primary' : ''}`}>
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <div className="d-flex align-items-center mb-2">
                              <div className={`p-2 rounded-circle me-3 ${modules.ativos.includes(module.id) ? 'bg-primary' : 'bg-secondary'}`}>
                                <i className={`bi bi-${module.icon} text-white`}></i>
                              </div>
                              <h6 className="mb-0">{module.label}</h6>
                            </div>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={modules.ativos.includes(module.id)}
                              onChange={(e) => {
                                const newAtivos = e.target.checked
                                  ? [...modules.ativos, module.id]
                                  : modules.ativos.filter(m => m !== module.id);
                                setModules({...modules, ativos: newAtivos});
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-light">
              <h5 className="mb-0">Personalização</h5>
            </div>
            <div className="card-body">
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={modules.fluxosPersonalizados}
                  onChange={(e) => setModules({...modules, fluxosPersonalizados: e.target.checked})}
                />
                <label className="form-check-label">Personalização de fluxos de trabalho</label>
              </div>
              
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={modules.integracaoBancos}
                  onChange={(e) => setModules({...modules, integracaoBancos: e.target.checked})}
                />
                <label className="form-check-label">Integração com bancos</label>
              </div>
              
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={modules.assinaturasEletronicas}
                  onChange={(e) => setModules({...modules, assinaturasEletronicas: e.target.checked})}
                />
                <label className="form-check-label">Assinaturas eletrónicas</label>
              </div>
              
              <div className="mt-4">
                <h6>Bancos Integrados</h6>
                <div className="d-flex flex-wrap gap-2">
                  {['CGD', 'BPI', 'Santander', 'Millennium', 'Novo Banco'].map(banco => (
                    <span key={banco} className="badge bg-secondary">{banco}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-light">
              <h5 className="mb-0">Configuração de Fluxos de Trabalho</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h6>Aprovação de Faturas</h6>
                      <select className="form-select">
                        <option>Fluxo Simples</option>
                        <option>Fluxo com Validação Financeira</option>
                        <option>Fluxo Multi-departamental</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h6>Processamento de Pagamentos</h6>
                      <select className="form-select">
                        <option>Automático</option>
                        <option>Com Aprovação</option>
                        <option>Agendado</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h6>Encerramento Mensal</h6>
                      <select className="form-select">
                        <option>Manual</option>
                        <option>Assistido</option>
                        <option>Automático</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};