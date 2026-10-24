# Especificação Técnica: Lista de Presentes de Casamento - Clara & Luiz

Este documento descreve o funcionamento e a arquitetura planejada para a página de Lista de Presentes.

---

## 1. Visão Geral
- **Acesso Público e Simples:** A página é pública, de acesso livre a qualquer convidado, sem necessidade de criação de conta, login ou senha.
- **Hospedagem Independente:** Será hospedada separadamente do site/convite principal de casamento.
- **Objetivo Central:** Permitir que os convidados visualizem os presentes disponíveis, escolham um item e o reservem inserindo apenas seu nome.

---

## 2. Modelo de Dados
Os dados serão centralizados em uma planilha do Google Sheets (integração futura, não desenvolvida nesta etapa). O modelo de dados trabalhará com duas abas principais:

### Aba "Produtos"
Representa o catálogo de itens cadastrados pelos noivos.
- **Campos:**
  - `id`: Identificador único do produto (inteiro/string).
  - `produto`: Nome descritivo do presente (ex: "Toalha de Banho").
  - `sessao`: Categoria/agrupamento do presente (ex: "Cama, Mesa e Banho").

### Aba "Reservas"
Representa a relação de presentes escolhidos pelos convidados.
- **Campos:**
  - `id`: Identificador único correspondente ao ID do produto.
  - `produto`: Nome do produto reservado.
  - `sessao`: Categoria do produto reservado.
  - `nome`: Nome inserido pelo convidado que reservou o item.
  - `data_reserva`: Data e hora em que a reserva foi confirmada.

*Exemplo de Registro:*
- `Produtos`: `id=1`, `produto="Toalha de Banho"`, `sessao="Cama, Mesa e Banho"`
- `Reservas` (se reservado): `id=1`, `produto="Toalha de Banho"`, `sessao="Cama, Mesa e Banho"`, `nome="Maria Silva"`, `data_reserva="2026-08-23T12:00:00Z"`

---

## 3. Regras de Negócio
- **Agrupamento por Seção:** Os presentes devem ser renderizados organizados em blocos ou abas de acordo com a sua `sessao` (categoria), facilitando a navegação.
- **Exclusividade de Reserva:** Cada presente listado só pode ser reservado por uma única pessoa. Assim que reservado, ele deixa de estar elegível para escolha.
- **Exibição Visual de Reservado:**
  - O card do presente reservado permanece na listagem para fins informativos.
  - Fica visualmente desabilitado (ex: tom cinza ou opacidade reduzida, sem possibilidade de clique).
  - O nome de quem realizou a reserva **não deve ser exibido publicamente** na listagem, preservando a privacidade do convidado.
- **Fluxo de Reserva:**
  - O convidado clica em um card disponível.
  - Abre-se um modal ou formulário simples solicitando o preenchimento do **nome completo**.
  - Após a confirmação, o item é marcado como reservado e a listagem é atualizada.

---

## 4. Escopo Explícito (Fora de Escopo)
Para manter o sistema simples, direto e focado na facilidade de uso, os seguintes recursos **não existem** e não serão desenvolvidos nesta página:
- **Sem autenticação:** Nenhuma área de login ou verificação de e-mail/telefone para convidados.
- **Sem alteração/exclusão pelo convidado:** Convidados não podem desfazer ou editar uma reserva depois de confirmada (caso haja necessidade de erro, os noivos farão manualmente no painel/planilha).
- **Sem painel administrativo (por enquanto):** Nenhuma área logada no frontend para gerenciamento dos itens pelos noivos. O gerenciamento e a limpeza de dados são feitos diretamente na planilha fonte de dados.

---

## 5. Identidade Visual
A página seguirá fielmente a identidade visual clássica e minimalista configurada no Tailwind:
- **Cores base:** Fundo em `cream` (`#F7F1E7`), variações em `cream-dark` (`#EFE5D3`), e textos/acentos em tons terrosos `brown` (`#6B4226`) e `ink` (`#3A2A1E`).
- **Tipografia:** Uso da fonte cursiva `font-script` para o título principal (nomes dos noivos) e a elegante serifada `font-serif` para os títulos de seções, textos informativos e botões.
