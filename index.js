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
    Tag: "Eletricidade",
    Id: "eletricos",
    Title: "Sistemas Elétricos",
    Description:
      "Projetos, instalação e manutenção de redes elétricas de baixa e média tensão para todas as instalações.",
    Other: [
      "Projeto e instalação de redes elétricas",
      "Automação e controlo industrial",
      "Certificações e testes elétricos",
      "Quadros elétricos e distribuição",
      "Sistemas de iluminação e emergência",
      "Manutenção corretiva e preventiva",
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
    Id: "construcao",
    Title: "Construção Civil",
    Description:
      "Projetamos, Desenvolvemos e Construímos: Serviços completos de Arquitetura, Engenharia e Construção Civil.",
    Other: [
      "Conceção integrada de arquitetura e engenharia",
      "Execução de edifícios e infraestruturas",
      "Fundações e estruturas de betão armado",
      "Acabamentos internos e revestimentos externos",
      "Gestão e fiscalização de obras",
      "Reabilitação e remodelação de ativos",
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
      "Deteção Inteligente de Fugas e Perdas",
      "Manutenção Especializada de Infraestruturas Prediais",
    ],
  },
  {
    Img: "https://images.unsplash.com/photo-1627309366653-2dedc084cdf1?w=800&q=80",
    Tag: "Importação e Exportação",
    Id: "comercio",
    Title: "Comércio",
    Description:
      "Desenvolvimento de Operações de Comércio Internacional e Atividades Industriais com Parceiros Estratégicos em Múltiplos Mercados.",
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
      "Serviços de higienização, desinfeção e saneamento para ambientes industriais, comerciais e institucionais seguros e em conformidade.",
    Other: [
      "Limpeza industrial e pós-obra",
      "Higienização e desinfeção de espaços",
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
      "Serviços especializados de reabilitação, remodelação e fiscalização de obras, assegurados por uma equipa técnica qualificada para garantir qualidade, segurança e conformidade em todas as fases do projeto.",
    Other: [
      "Remodelação de Interiores e Espaços Exteriores",
      "Reabilitação e Reforço Estrutural de Edifícios",
      "Fiscalização Técnica e Acompanhamento de Obras",
      "Consultoria Técnica e Estudos de Viabilidade",
      "Orçamentação, Planeamento e Gestão de Projetos",
      "Certificação e Controlo de Qualidade",
    ],
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

// Hero: sem vídeo em ecrãs pequenos ou com movimento reduzido (poupa dados)
const heroVideo = document.querySelector('.hero-video');
if (heroVideo && (window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
  heroVideo.remove();
}

// Modal
const WHATSAPP_NUMBER = "244923212197";
let lastFocus = null;

function makeHTML(service) {
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
            <a class="btn btn-primary" href="${wa}" target="_blank" rel="noopener noreferrer">Pedir orçamento deste serviço</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function openModal(id) {
  const service = modalData.find(s => s.Id === id);
  if (!service || document.querySelector(".modal-overlay")) return;
  lastFocus = document.activeElement;
  document.body.style.overflow = 'hidden';
  document.body.insertAdjacentHTML("beforeend", makeHTML(service));
  document.querySelector(".modal-close").focus();
}

function closeModal() {
  const modal = document.querySelector(".modal-overlay");
  if (modal) {
    modal.remove();
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }
}

// Cartões de serviços: rato e teclado, ligados ao modal por identificador
document.querySelectorAll(".service-card[data-service]").forEach(card => {
  const open = () => openModal(card.dataset.service);
  card.addEventListener("click", open);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open();
    }
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-close") || e.target.classList.contains("modal-overlay")) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  const overlay = document.querySelector(".modal-overlay");
  if (!overlay) return;
  if (e.key === "Escape") {
    closeModal();
    return;
  }
  if (e.key === "Tab") {
    const items = overlay.querySelectorAll('button, a[href]');
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

// Formulário de contacto
// Cole aqui o endereço do Formspree (ex.: "https://formspree.io/f/xxxxxxxx").
// Enquanto estiver vazio, o pedido abre no WhatsApp com a mensagem já escrita.
const FORM_ENDPOINT = "";

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

function setStatus(msg, type) {
  formStatus.textContent = msg;
  formStatus.className = 'form-status' + (type ? ' ' + type : '');
}

function buildWhatsAppLink(d) {
  const text = [
    `Olá, o meu nome é ${d.nome}.`,
    `Serviço: ${d.servico}.`,
    `${d.mensagem}`,
    `Contacto: ${d.telefone}${d.email ? ' | ' + d.email : ''}`,
  ].join('\n');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(text);
}

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(contactForm);
    const d = Object.fromEntries(fd.entries());
    d.nome = (d.nome || '').trim();
    d.telefone = (d.telefone || '').trim();
    d.mensagem = (d.mensagem || '').trim();

    if (d.website) { // campo isco: bots
      setStatus('Pedido enviado. Obrigado!', 'ok');
      contactForm.reset();
      return;
    }
    if (!d.nome || !d.mensagem) {
      setStatus('Preencha o nome e a mensagem.', 'err');
      return;
    }
    if (d.telefone.replace(/\D/g, '').length < 9) {
      setStatus('Indique um número de telefone válido.', 'err');
      return;
    }

    const btn = contactForm.querySelector('button[type="submit"]');
    btn.disabled = true;

    if (!FORM_ENDPOINT) {
      window.open(buildWhatsAppLink(d), '_blank', 'noopener');
      setStatus('A abrir o WhatsApp com o seu pedido. Basta enviar a mensagem.', 'ok');
      btn.disabled = false;
      return;
    }

    fd.append('_subject', `Novo pedido de orçamento: ${d.servico}`);
    setStatus('A enviar...', '');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('Falha no envio');
      setStatus('Pedido enviado. Respondemos o mais depressa possível.', 'ok');
      contactForm.reset();
    } catch (err) {
      setStatus('Não foi possível enviar. Fale connosco pelo WhatsApp ou por telefone.', 'err');
    } finally {
      btn.disabled = false;
    }
  });
}
