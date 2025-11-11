# Mini site: Desperdício de Alimentos (Frutal/MG)

Inclui:
- Banner com estatísticas (hero.jpg)
- SEO + Open Graph/Twitter Cards
- Favicon
- Contador de visitas (CountAPI + badge hits.sh)
- Navbar fixa com **Doar Agora**, link para **Voluntariar** e **Estatísticas**, com **scroll suave**
- Seção de doação (Sesc Mesa Brasil PIX + lista de ONGs de Frutal)
- Formulário de **voluntariado** (Formspree via AJAX) com fallback **mailto** (jjesus2024@outlook.com.br)
- **Mapa** com pontos de referência em Frutal
- Seção **Estatísticas e impactos** com **PNG** e **SVG** dos gráficos

## Estrutura
```
index.html
styles.css
script.js
hero.jpg
favicon.png
img/
  ├─ infografico_pizza.png
  ├─ infografico_brasil_mundo.png
  ├─ pizza.svg
  └─ brasil_mundo.svg
```

## Publicar no GitHub Pages (Project Pages)
1. Acesse seu repo `Desperd-cio_Alimentos` → **Add file → Upload files**.
2. Faça upload de todos os arquivos acima na **raiz** do branch `main`.
3. Em **Settings → Pages**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / **Folder**: `/` (root)
4. Aguarde 1–2 minutos: `https://SEU_USUARIO.github.io/Desperd-cio_Alimentos/`

> Use **caminhos relativos** (`./hero.jpg`, `./favicon.png`) — já aplicado — para evitar 404.

## Formulário (Formspree)
- Substitua `REPLACE_FORM_ID` em `index.html` pelo ID do seu formulário (ex.: `https://formspree.io/f/abcd1234`).
- Com Formspree ativo, o envio mostra mensagens na página.
- Sem Formspree, o fallback abrirá e-mail para **jjesus2024@outlook.com.br**.

## Fontes
- **PNUMA/UNEP — Food Waste Index 2024**: 1,05 bilhão t; 132 kg per capita; 60/28/12; 8–10% GEE.
- **G1**: ~27 mi t/ano; **41 kg/pessoa/ano**.
- **CNN Brasil**: até **46 mi t/ano / ~30% da produção**; Brasil entre os 10 países que mais desperdiçam.
- **Pacto Contra a Fome**: causas e impactos (planejamento, logística, cultura do excesso).

Links diretos:
- PNUMA/ONU: https://brasil.un.org/pt-br/264460-%C3%ADndice-de-desperd%C3%ADcio-de-alimentos-2024
- G1: https://g1.globo.com/df/distrito-federal/noticia/2024/09/29/desperdicio-de-alimentos-voce-sabia-que-cada-brasileiro-joga-fora-em-media-41-kg-de-comida-por-ano.ghtml
- CNN Brasil: https://www.cnnbrasil.com.br/nacional/brasil-descarta-30-dos-alimentos-produzidos-diz-onu/
- Pacto Contra a Fome: https://pactocontrafome.org/desperdicio-de-alimentos/
