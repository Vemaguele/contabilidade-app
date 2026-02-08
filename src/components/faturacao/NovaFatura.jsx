import React, { useState } from 'react';
import { useConfig } from '../../context/ConfigContext';

const NovaFatura = () => {
  const { configs } = useConfig();
  const { empresa, faturacao, imposto } = configs;

  const [fatura, setFatura] = useState({
    numero: `FAT/${new Date().getFullYear()}/001`,
    cliente: '',
    data: new Date().toISOString().split('T')[0],
    itens: [],
    subtotal: 0,
    iva: 0,
    total: 0,
    status: 'rascunho'
  });

  const [novoItem, setNovoItem] = useState({
    descricao: '',
    quantidade: 1,
    precoUnitario: 0,
    ivaAplicavel: imposto.ivaRate
  });

  const adicionarItem = () => {
    if (!novoItem.descricao.trim()) {
      alert('Por favor, insira uma descrição para o item');
      return;
    }

    const valorItem = novoItem.quantidade * novoItem.precoUnitario;
    const ivaItem = valorItem * (novoItem.ivaAplicavel / 100);
    
    const novoItemCompleto = {
      ...novoItem,
      valorTotal: valorItem,
      ivaValor: ivaItem,
      id: Date.now()
    };

    setFatura(prev => ({
      ...prev,
      itens: [...prev.itens, novoItemCompleto],
      subtotal: prev.subtotal + valorItem,
      iva: prev.iva + ivaItem,
      total: prev.total + valorItem + ivaItem
    }));

    setNovoItem({
      descricao: '',
      quantidade: 1,
      precoUnitario: 0,
      ivaAplicavel: imposto.ivaRate
    });
  };

  const removerItem = (id) => {
    const item = fatura.itens.find(item => item.id === id);
    if (!item) return;

    setFatura(prev => ({
      ...prev,
      itens: prev.itens.filter(item => item.id !== id),
      subtotal: prev.subtotal - item.valorTotal,
      iva: prev.iva - item.ivaValor,
      total: prev.total - (item.valorTotal + item.ivaValor)
    }));
  };

  const gerarFatura = () => {
    if (fatura.itens.length === 0) {
      alert('Adicione pelo menos um item à fatura');
      return;
    }

    const faturaCompleta = {
      ...fatura,
      empresaInfo: {
        nome: empresa.nome,
        nif: empresa.nif,
        endereco: empresa.endereco,
        email: empresa.email,
        telefone: empresa.telefone
      },
      configAplicada: {
        ivaRate: imposto.ivaRate,
        formatos: faturacao.formatos,
        fluxoAprovacao: faturacao.fluxoAprovacao
      },
      dataCriacao: new Date().toISOString()
    };

    console.log('Fatura gerada:', faturaCompleta);
    alert(`Fatura ${fatura.numero} criada com sucesso!`);
    
    // Resetar formulário
    setFatura({
      numero: `FAT/${new Date().getFullYear()}/00${fatura.itens.length + 1}`,
      cliente: '',
      data: new Date().toISOString().split('T')[0],
      itens: [],
      subtotal: 0,
      iva: 0,
      total: 0,
      status: 'rascunho'
    });
  };

  return (
    <div className="container-fluid p-0">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">
            <i className="bi bi-file-earmark-plus me-2"></i>
            Nova Fatura
          </h4>
        </div>
        
        <div className="card-body">
          {/* Cabeçalho com dados da empresa */}
          {/* Cabeçalho com dados da empresa */}
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header bg-light d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">Dados da Empresa</h6>
                  {empresa.logotipo && (
                    <div className="logotipo-container">
                      <img 
                        src={empresa.logotipo} 
                        alt="Logotipo" 
                        className="img-fluid rounded"
                        style={{ maxHeight: '40px' }}
                      />
                    </div>
                  )}
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-start mb-3">
                    {empresa.logotipo && (
                      <div className="me-3">
                        <img 
                          src={empresa.logotipo} 
                          alt="Logotipo" 
                          className="img-fluid rounded"
                          style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                        />
                      </div>
                    )}
                    <div>
                      <h5 className="mb-1">{empresa.nome || "Empresa Exemplo LDA"}</h5>
                      <p className="mb-1 text-muted">
                        <i className="bi bi-card-text me-1"></i>
                        NIF: {empresa.nif || "123456789"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-12">
                      <p className="mb-1">
                        <i className="bi bi-geo-alt me-1"></i>
                        {empresa.endereco || "Rua das Flores, 123"}
                      </p>
                      <p className="mb-1">
                        <i className="bi bi-envelope me-1"></i>
                        {empresa.email || "geral@empresa.pt"}
                      </p>
                      <p className="mb-0">
                        <i className="bi bi-telephone me-1"></i>
                        {empresa.telefone || "+351 123 456 789"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

          {/* Adicionar Itens */}
          <div className="card mb-4">
            <div className="card-header bg-light d-flex justify-content-between align-items-center">
              <h6 className="mb-0">Adicionar Itens</h6>
              <span className="badge bg-primary">IVA: {imposto.ivaRate}%</span>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label">Descrição *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={novoItem.descricao}
                    onChange={(e) => setNovoItem({...novoItem, descricao: e.target.value})}
                    placeholder="Descrição do item"
                  />
                </div>
                <div className="col-md-2">
                  <label className="form-label">Quantidade</label>
                  <input
                    type="number"
                    className="form-control"
                    value={novoItem.quantidade}
                    onChange={(e) => setNovoItem({...novoItem, quantidade: parseFloat(e.target.value) || 1})}
                    min="1"
                  />
                </div>
                <div className="col-md-2">
                  <label className="form-label">Preço Unitário (€)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={novoItem.precoUnitario}
                    onChange={(e) => setNovoItem({...novoItem, precoUnitario: parseFloat(e.target.value) || 0})}
                    step="0.01"
                  />
                </div>
                <div className="col-md-2">
                  <label className="form-label">IVA (%)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={novoItem.ivaAplicavel}
                    onChange={(e) => setNovoItem({...novoItem, ivaAplicavel: parseFloat(e.target.value) || 0})}
                  />
                </div>
                <div className="col-md-2 d-flex align-items-end">
                  <button 
                    className="btn btn-primary w-100" 
                    onClick={adicionarItem}
                    disabled={!novoItem.descricao.trim()}
                  >
                    <i className="bi bi-plus-circle me-1"></i> Adicionar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Lista de Itens */}
          {fatura.itens.length > 0 ? (
            <div className="card mb-4">
              <div className="card-header bg-light d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Itens da Fatura ({fatura.itens.length})</h6>
                <span className="badge bg-success">{fatura.itens.length} itens</span>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th style={{width: '40%'}}>Descrição</th>
                        <th className="text-center">Qtd</th>
                        <th className="text-end">Preço Unitário</th>
                        <th className="text-end">IVA %</th>
                        <th className="text-end">Total</th>
                        <th className="text-end">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fatura.itens.map((item) => (
                        <tr key={item.id}>
                          <td>{item.descricao}</td>
                          <td className="text-center">{item.quantidade}</td>
                          <td className="text-end">{item.precoUnitario.toFixed(2)} €</td>
                          <td className="text-end">{item.ivaAplicavel}%</td>
                          <td className="text-end">
                            {(item.valorTotal + item.ivaValor).toFixed(2)} €
                          </td>
                          <td className="text-end">
                            <button 
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => removerItem(item.id)}
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="alert alert-info">
              <i className="bi bi-info-circle me-2"></i>
              Nenhum item adicionado à fatura. Adicione itens acima.
            </div>
          )}

          {/* Totais */}
          <div className="row">
            <div className="col-md-6 offset-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span className="fw-bold">{fatura.subtotal.toFixed(2)} €</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>IVA ({imposto.ivaRate}%):</span>
                    <span className="fw-bold text-danger">{fatura.iva.toFixed(2)} €</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span className="h5">Total:</span>
                    <span className="h4 text-primary">{fatura.total.toFixed(2)} €</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Configurações Aplicadas */}
          <div className="card mt-4">
            <div className="card-header bg-light">
              <h6 className="mb-0">
                <i className="bi bi-gear me-2"></i>
                Configurações Aplicadas
              </h6>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <p className="mb-1">
                    <i className="bi bi-percent me-2 text-primary"></i>
                    <strong>Taxa de IVA:</strong> {imposto.ivaRate}%
                  </p>
                  <p className="mb-1">
                    <i className="bi bi-diagram-3 me-2 text-primary"></i>
                    <strong>Fluxo de Aprovação:</strong> {faturacao.fluxoAprovacao}
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="mb-1">
                    <i className="bi bi-filetype-pdf me-2 text-primary"></i>
                    <strong>Formatos:</strong> {faturacao.formatos.join(', ')}
                  </p>
                  <p className="mb-1">
                    <i className="bi bi-envelope me-2 text-primary"></i>
                    <strong>Envio por Email:</strong> {faturacao.envioEmail ? 'Sim' : 'Não'}
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="mb-1">
                    <i className="bi bi-robot me-2 text-primary"></i>
                    <strong>Criação Automática:</strong> {faturacao.criacaoAutomatica ? 'Ativa' : 'Inativa'}
                  </p>
                  <p className="mb-1">
                    <i className="bi bi-bell me-2 text-primary"></i>
                    <strong>Alertas:</strong> {faturacao.alertasAnomalias ? 'Ativos' : 'Inativos'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="d-flex justify-content-end gap-2 mt-4">
            <button 
              className="btn btn-outline-secondary"
              onClick={() => {
                if (window.confirm('Tem certeza que deseja cancelar? Os dados não salvos serão perdidos.')) {
                  setFatura({
                    numero: `FAT/${new Date().getFullYear()}/001`,
                    cliente: '',
                    data: new Date().toISOString().split('T')[0],
                    itens: [],
                    subtotal: 0,
                    iva: 0,
                    total: 0,
                    status: 'rascunho'
                  });
                }
              }}
            >
              <i className="bi bi-x-circle me-2"></i>
              Cancelar
            </button>
            
            <button 
              className="btn btn-primary" 
              onClick={gerarFatura}
              disabled={fatura.itens.length === 0}
            >
              <i className="bi bi-check-circle me-2"></i>
              Criar Fatura
            </button>
            
            {faturacao.formatos.includes('pdf') && (
              <button 
                className="btn btn-success"
                disabled={fatura.itens.length === 0}
              >
                <i className="bi bi-file-earmark-pdf me-2"></i>
                Gerar PDF
              </button>
            )}
            
            {faturacao.formatos.includes('xml') && (
              <button 
                className="btn btn-warning"
                disabled={fatura.itens.length === 0}
              >
                <i className="bi bi-code me-2"></i>
                Gerar XML
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovaFatura;