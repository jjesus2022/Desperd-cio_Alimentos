# Mini site: Desperdício de Alimentos

Inclui:
- Banner com estatísticas
- SEO + OG tags
- Favicon
- Contador de visitas
- Mapa de doação
- Botão fixo "Doar Agora" na navbar
- Scroll suave até seção de doação

## Publicar
1. Suba todos os arquivos na raiz do repositório.
2. Ative GitHub Pages em Settings → Pages.
3. URL: https://SEU_USUARIO.github.io/Desperd-cio_Alimentos/


## Voluntariado — como receber as inscrições
- **Netlify**: mantenha o formulário como está. Publique o site no Netlify e acesse o menu **Forms** para ver os envios.
- **GitHub Pages**: abra `script.js` e substitua `SEU_EMAIL_AQUI` pelo seu e-mail. O envio abrirá seu app de e-mail com os dados preenchidos.

## Formulário (Formspree)
1. Crie uma conta em formspree.io e gere um formulário **(Free)**.
2. Você receberá um endpoint no formato: `https://formspree.io/f/XXXXX`.
3. Abra `index.html` e **substitua** `REPLACE_FORM_ID` pelo ID do seu formulário.
4. Publicado no GitHub Pages, o envio ocorrerá via AJAX e exibirá uma mensagem de sucesso/erro na página.

> Observação: o fallback por e-mail no `script.js` permanece ativo apenas se você **não** definir um endpoint do Formspree.