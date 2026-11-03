# Orçamento DALU Calhas

Folha de orçamento/recibo da DALU Calhas. Abre no computador e no celular:
https://jeffersom450-blip.github.io/orcamento-dalu/

- Computador: edita direto na folha. Celular (até 760px): formulário + "Ver folha" + "Enviar" (compartilha a imagem no WhatsApp).
- Instalar no celular: abrir o link → iPhone: Compartilhar → "Adicionar à Tela de Início"; Android: menu ⋮ → "Instalar app".
- Dados ficam no aparelho (localStorage `dalu-orcamento-v1`). Computador e celular não se sincronizam; para passar de um para o outro use Ajustes → Fazer backup / Restaurar backup.
- Arquivo único `index.html` (visual Win11 dark + folha DALU), fontes em `fontes/`, `js/html2canvas.min.js` para gerar a imagem.

## Atualizar
1. Editar `index.html`.
2. Subir `VERSAO` em `sw.js`.
3. `git commit` + `git push` (conta pessoal jeffersom450-blip). O GitHub Pages publica em ~1 min.

Testar local: configuração `orcamento-dalu` em `Desktop\.claude\launch.json` (http://localhost:8766).
