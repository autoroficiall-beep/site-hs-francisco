const modalData = [
  {
    Img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    Tag: "Climatização",
    Title: "Manutenção HVAC",
    Description:
      "Soluções completas em Climatização, Refrigeração e Controle Ambiental para Edifícios Comerciais, Industriais e Residenciais.",
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
    Tag: "Eletricidade",
    Title: "Sistemas Elétricos",
    Description:
      "Projetos, instalação e manutenção de redes elétricas de baixa e média tensão para todas as instalações.",
    Other: [
      "Projecto e instalação de redes elétricas",
      "Automação e controlo industrial",
      "Certificações e testes elétricos",
      "Quadros elétricos e distribuição",
      "Sistemas de iluminação e emergência",
      "Manutenção corretiva e preventiva",
    ],
  },
  {
    Img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    Tag: "energia",
    Title: "Grupos Geradores",
    Description:
      "Fornecimento, instalação e manutenção de grupos geradores e postos de transformação para garantir energia contínua.",
    Other: [
      "Venda e instalação de grupos geradores",
      "Postos de transformação (PT)",
      "Sistemas de transferência automática (ATS)",
      "Manutenção periódica e reparações",
      "Monitorização remota de consumo",
      "Fornecimento de combustível e peças.",
    ]
  },
  {
    Img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
    Tag: "engenharia",
    Title: "Construção Civil",
    Description:
      "Projetamos, Desenvolvemos e Construímos: Serviços completos de Arquitetura, Engenharia e Construção Civil.",
    Other: [
      "Concepção integrada de arquitetura e engenharia",
      "Execução de edifícios e infraestruturas",
      "Fundações e estruturas de betão armado",
      "Acabamentos internos e revestimentos externos",
      "Gestão e fiscalização de obras",
      "Reabilitação e remodelação de ativos",
    ]
  },
  {
    Img: "https://images.unsplash.com/photo-1639600993675-2281b2c939f0?w=800q=80",
    Tag: "hidráulica",
    Title: "Canalização",
    Description:
      "Redes hidráulicas eficientes, confiáveis e silenciosas",
    Other: [
      "Soluções Integradas para Redes Hidrossanitárias",
      "Sistemas Avançados de Pressurização de Água",
      "Elevadores, Plataformas e Equipamentos de Mobilidade Vertical",
      "Automação e Gestão Técnica Centralizada (GTC)",
      "Deteção Inteligente de Fugas e Perdas",
     "Manutenção Especializada de Infraestruturas Prediais",
    ]
  },
  {
    Img: "https://images.unsplash.com/photo-1627309366653-2dedc084cdf1?w=800q=80",
    Tag: "Importação e Exportação",
    Title: "Comércio",
    Description
      "Desenvolvimento de Operações de Comércio Internacional e Atividades Industriais com Parceiros Estratégicos em Múltiplos Mercados." opcv ,
    Other: [
      "Importação e Exportação de Equipamentos, Materiais e Mercadorias",
      "Exportação de Serviços Técnicos Especializados",
      "Gestão Logística e Desalfandegamento Aduaneiro",
      "Representação Comercial e Desenvolvimento de Negócios",
      "Consultoria e Assessoria em Comércio Internacional",
      "Fornecimento de Peças, Componentes e Consumíveis Industriais",
    ]
  },
  {
    Img: "https://images.unsplash.com/photo-1740657254989-42fe9c3b8cce?w=800q=80",
    Tag: "Limpeza industrial",
    Title: "saneamento",
    Description:
    "Soluções Integradas de Comércio Internacional e Atividades Industriais, promovendo parcerias estratégicas e oportunidades de negócio em mercados globais.",
    Other: [
      "Soluções de Importação e Exportação para Mercados Internacionais",
      "Serviços Técnicos Especializados para Projetos Globais",
      "Logística Integrada, Transporte e Desalfandegamento",
      "Representação de Marcas e Empresas em Mercados Estratégicos",
      "Consultoria Estratégica em Comércio Externo",
      "Distribuição e Fornecimento de Peças e Componentes Industriais de Alta Qualidade",
    ],
  },
  {
    Img: "https://images.unsplash.com/photo-1634586621169-93e12e0bd604?w=800q=80",
    Tag: "Reabilitação",
    Title: "Remodelação",
    Description:
    "Serviços especializados de reabilitação, remodelação e fiscalização de obras, assegurados por uma equipa técnica qualificada para garantir qualidade, segurança e conformidade em todas as fases do projeto.",
    Other: [
      "Remodelação de Interiores e Espaços Exteriores",
      "Reabilitação e Reforço Estrutural de Edifícios",
      "Fiscalização Técnica e Acompanhamento de Obras",
      "Consultoria Técnica e Estudos de Viabilidade",
      "Orçamentação, Planeamento e Gestão de Projetos",
      "Certificação e Controlo de Qualidade",
    ]
  },
];

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navToggleBar = document.querySelector('.nav-toggle-bar');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggleBar.classList.toggle('open');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggleBar.classList.remove('open');
  });
});

// Reveal animation on scroll
const reveal = () => {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('revealed');
    }
  });
};

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Modal functions
function makeHTML(service) {
  return `
    <div class="modal-overlay">
      <div class="modal">
        <button class="modal-close" aria-label="Fechar">×</button>
        <div class="modal-image" style="background-image: url('${service.Img}')">
          <div class="modal-image-overlay"></div>
          <div class="modal-image-content">
            <span class="modal-category">${service.Tag}</span>
            <h2 class="modal-title">${service.Title}</h2>
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
        </div>
      </div>
    </div>
  `;
}

function openModal(index) {
  if (document.querySelector(".modal-overlay")) return;
  document.body.style.overflow = 'hidden';
  document.body.insertAdjacentHTML("beforeend", makeHTML(modalData[index]));
}

function closeModal() {
  const modal = document.querySelector(".modal-overlay");
  if (modal) {
    modal.remove();
    document.body.style.overflow = '';
  }
}

// Bind click handlers for service cards
document.querySelectorAll(".service-card").forEach((card, index) => {
  card.addEventListener("click", () => {
    openModal(index);
  });
});

// Global listeners for closing modal
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-close") || e.target.classList.contains("modal-overlay")) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
