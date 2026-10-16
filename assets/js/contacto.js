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
