// Trabalhos realizados, por serviço.
// Para acrescentar um trabalho: copie o MODELO, preencha e cole dentro do array do serviço certo.
// As imagens ficam em /assets/img/trabalhos/<servico>/ e os vídeos em /assets/video/trabalhos/.
// Cada trabalho só aparece na página do seu serviço (ex.: "construcao-civil" só mostra construção civil).
const SERVICE_NAMES = {
  "hvac": "Manutenção de HVAC",
  "electricos": "Sistemas Eléctricos",
  "geradores": "Grupos Geradores",
  "construcao-civil": "Construção Civil",
  "canalizacao": "Canalização e Hidráulica",
  "comercio": "Importação e Exportação",
  "saneamento": "Limpeza Industrial",
  "remodelacao": "Remodelação e Reabilitação"
};

/* MODELO
{
  titulo: "Nome da obra",
  local: "Bairro, Luanda",
  ano: "2026",
  resumo: "Duas frases sobre o que foi feito e o resultado.",
  capa: "/assets/img/trabalhos/construcao-civil/nome-da-obra-1.jpg",
  imagens: [
    { src: "/assets/img/trabalhos/construcao-civil/nome-da-obra-1.jpg", alt: "Descrição da imagem" },
    { src: "/assets/img/trabalhos/construcao-civil/nome-da-obra-2.jpg", alt: "Descrição da imagem" },
  ],
  videos: [
    { src: "/assets/video/trabalhos/nome-da-obra.mp4", poster: "/assets/img/trabalhos/construcao-civil/nome-da-obra-1.jpg" },
  ],
},
*/
const TRABALHOS = {
  "hvac": [],
  "electricos": [],
  "geradores": [],
  "construcao-civil": [],
  "canalizacao": [],
  "comercio": [],
  "saneamento": [],
  "remodelacao": [],
};
