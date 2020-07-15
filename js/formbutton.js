
window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};

          

formbutton("create", {
  action: "https://formspree.io//xdowpojg",
title: "👏 Fale comigo", 
description: "Deixe sua mensagem que em breve te retornarei!",
formStatus: "Obrigado! Em breve entrarei em contato.",
  fields: [{
            name: "name",
            type: "text",
            label: "Seu nome",
            placeholder: "Digite seu nome...",
            required: true,
            },
            {
            name: "email",
            type: "email",
            label: "Seu Email",
            placeholder: "Digite seu email...",
            required: true
          },
          {
            name: "Message",
            type: "textarea",
            label: "Sua mensagem",
            placeholder: "Como posso te ajudar?",
            },
          {
          type: "submit",
          label: "Enviar",
        
            }
            ],  
      onResponse: function(ok, setStatus) {
      if (ok) {
        setStatus("Sua solicitação foi recebida. Entraremos em contato em breve.🤩");
      } else {
        setStatus("<span style='color:red'>Oops! Houve algum problema.</span>");
      }
      //...
    }, 
        theme: "classic",
        styles: {
              fontFamily:'"Lato", sans-serif',
              button: {
              background: "#6610f2"
              },
        title: {
                background: "#6610f2",
                letterSpacing: "0.05em",
                textTransform: "uppercase"
              }
            },
        
            // ...
    });
