const modalData = [
  {
    Img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    Tag: "Climatização",
    Id: "hvac",
    Title: "Manutenção HVAC",
    Description:
      "Soluções completas em Climatização, Refrigeração e Controlo Ambiental para Edifícios Comerciais, Industriais e Residenciais.",
    Other: [
      "Climatização centralizada e descentralizada",
      "Instalação e manutenção de sistemas AVAC",
      "Diagnóstico e reparação de avarias",
      "Planos de manutenção preventiva",
      "Refrigeração comercial e industrial",
      "Controlo e monitorização ambiental",
    ],
  },
  {
    Img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    Tag: "Electricidade",
    Id: "electricos",
    Title: "Sistemas Eléctricos",
    Description:
      "Projectos, instalação e manutenção de redes eléctricas de baixa e média tensão para todas as instalações.",
    Other: [
      "Projecto e instalação de redes eléctricas",
      "Automação e controlo industrial",
      "Certificações e testes eléctricos",
      "Quadros eléctricos e distribuição",
      "Sistemas de iluminação e emergência",
      "Manutenção correctiva e preventiva",
    ],
  },
  {
    Img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    Tag: "Energia",
    Id: "geradores",
    Title: "Grupos Geradores",
    Description:
      "Fornecimento, instalação e manutenção de grupos geradores e postos de transformação para garantir energia contínua.",
    Other: [
      "Venda e instalação de grupos geradores",
      "Postos de transformação (PT)",
      "Sistemas de transferência automática (ATS)",
      "Manutenção periódica e reparações",
      "Monitorização remota de consumo",
      "Fornecimento de combustível e peças",
    ],
  },
  {
    Img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
    Tag: "Engenharia",
    Id: "construcao-civil",
    Title: "Construção Civil",
    Description:
      "Projectamos, Desenvolvemos e Construímos: Serviços completos de Arquitectura, Engenharia e Construção Civil.",
    Other: [
      "Concepção integrada de arquitectura e engenharia",
      "Execução de edifícios e infra-estruturas",
      "Fundações e estruturas de betão armado",
      "Acabamentos internos e revestimentos externos",
      "Gestão e fiscalização de obras",
      "Reabilitação e remodelação de activos",
    ],
  },
  {
    Img: "https://images.unsplash.com/photo-1639600993675-2281b2c939f0?w=800&q=80",
    Tag: "Hidráulica",
    Id: "canalizacao",
    Title: "Canalização",
    Description: "Redes hidráulicas eficientes, confiáveis e silenciosas",
    Other: [
      "Soluções Integradas para Redes Hidrossanitárias",
      "Sistemas Avançados de Pressurização de Água",
      "Elevadores, Plataformas e Equipamentos de Mobilidade Vertical",
      "Automação e Gestão Técnica Centralizada (GTC)",
      "Detecção Inteligente de Fugas e Perdas",
      "Manutenção Especializada de Infra-estruturas Prediais",
    ],
  },
  {
    Img: "https://images.unsplash.com/photo-1627309366653-2dedc084cdf1?w=800&q=80",
    Tag: "Importação e Exportação",
    Id: "comercio",
    Title: "Comércio",
    Description:
      "Desenvolvimento de Operações de Comércio Internacional e Actividades Industriais com Parceiros Estratégicos em Múltiplos Mercados.",
    Other: [
      "Importação e Exportação de Equipamentos, Materiais e Mercadorias",
      "Exportação de Serviços Técnicos Especializados",
      "Gestão Logística e Desalfandegamento Aduaneiro",
      "Representação Comercial e Desenvolvimento de Negócios",
      "Consultoria e Assessoria em Comércio Internacional",
      "Fornecimento de Peças, Componentes e Consumíveis Industriais",
    ],
  },
  {
    Img: "https://images.unsplash.com/photo-1740657254989-42fe9c3b8cce?w=800&q=80",
    Tag: "Limpeza industrial",
    Id: "saneamento",
    Title: "Saneamento",
    Description:
      "Serviços de higienização, desinfecção e saneamento para ambientes industriais, comerciais e institucionais seguros e em conformidade.",
    Other: [
      "Limpeza industrial e pós-obra",
      "Higienização e desinfecção de espaços",
      "Controlo de pragas",
      "Limpeza de reservatórios e tanques",
      "Recolha e gestão de resíduos",
      "Planos de limpeza periódica",
    ],
  },
  {
    Img: "https://images.unsplash.com/photo-1634586621169-93e12e0bd604?w=800&q=80",
    Tag: "Reabilitação",
    Id: "remodelacao",
    Title: "Remodelação",
    Description:
      "Serviços especializados de reabilitação, remodelação e fiscalização de obras, assegurados por uma equipa técnica qualificada para garantir qualidade, segurança e conformidade em todas as fases do projecto.",
    Other: [
      "Remodelação de Interiores e Espaços Exteriores",
      "Reabilitação e Reforço Estrutural de Edifícios",
      "Fiscalização Técnica e Acompanhamento de Obras",
      "Consultoria Técnica e Estudos de Viabilidade",
      "Orçamentação, Planeamento e Gestão de Projectos",
      "Certificação e Controlo de Qualidade",
    ],
  },
];

function makeServiceHTML(service) {
  const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(`Olá, gostaria de pedir um orçamento de ${service.Title}.`);
  return `
    <div class="modal-overlay">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button class="modal-close" aria-label="Fechar">×</button>
        <div class="modal-image" style="background-image: url('${service.Img}')">
          <div class="modal-image-overlay"></div>
          <div class="modal-image-content">
            <span class="modal-category">${service.Tag}</span>
            <h2 class="modal-title" id="modal-title">${service.Title}</h2>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-section">
            <h3 class="modal-section-title">Descrição</h3>
            <p class="modal-desc">${service.Description}</p>
          </div>
          <div class="modal-section">
            <h3 class="modal-section-title">Serviços Incluídos</h3>
            <ul class="modal-list">
              ${service.Other.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>
          <div class="modal-cta">
            <a class="btn btn-primary" href="${wa}" target="_blank" rel="noopener noreferrer">Pedir orçamento</a>
            <a class="btn btn-outline" href="/trabalhos/${service.Id}/">Ver trabalhos de ${service.Title}</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Cartões de serviços: rato e teclado, ligados ao modal por identificador
document.querySelectorAll(".service-card[data-service]").forEach(card => {
  const open = () => {
    const service = modalData.find(s => s.Id === card.dataset.service);
    if (service) HS.open(makeServiceHTML(service));
  };
  card.addEventListener("click", open);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
  });
});
