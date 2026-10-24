# Plano de Implementação: Lista de Presentes

Este documento divide o desenvolvimento da Lista de Presentes em tarefas modulares, incrementais e testáveis.

---

### Tarefa 1: Mock de Dados de Produtos
* **Objetivo:** Criar um conjunto de dados estáticos para simular a resposta da planilha Google Sheets.
* **Escopo:**
  * **Dentro:** Arquivo JSON ou JS exportando um array de objetos contendo `id`, `produto` e `sessao` de pelo menos 6 itens distribuídos em 3 categorias distintas.
  * **Fora:** Chamadas de API, hooks customizados, lógica de reserva ou estado dinâmico.

---

### Tarefa 2: Componente Card de Presente
* **Objetivo:** Criar o componente visual de exibição individual de cada presente.
* **Escopo:**
  * **Dentro:** Componente `GiftCard` recebendo propriedades do produto; exibição do título; estilo com borda fina e tom de fundo apropriado; layout responsivo básico.
  * **Fora:** Botão interativo funcional, modais, lógica de cliques ou controle de estado se está reservado.

---

### Tarefa 3: Agrupamento e Renderização por Seção
* **Objetivo:** Agrupar os presentes mockados por categoria ("sessao") e renderizar na tela sob subtítulos elegantes.
* **Escopo:**
  * **Dentro:** Lógica em JavaScript para agrupar a lista mockada por `sessao`; renderização dos grupos com cabeçalho serifado; exibição em grid responsivo (1 coluna mobile, 2 ou 3 colunas desktop).
  * **Fora:** Modificação de dados de presentes ou lógica de reserva.

---

### Tarefa 4: Estado Local de Reservado
* **Objetivo:** Integrar o estado de reserva ("reservado") no nível da aplicação utilizando estados em memória.
* **Escopo:**
  * **Dentro:** Alterar os dados para incluir propriedade `reservado: boolean`; estilo do card visualmente desabilitado (opacidade, cursor e remoção do botão de ação) quando `reservado` for verdadeiro; preservação da privacidade (não exibir o nome de quem reservou).
  * **Fora:** Modal ou formulário de preenchimento (reserva imediata ao clique, apenas para testar o estado); persistência de dados (ao atualizar a página, volta ao estado inicial).

---

### Tarefa 5: Modal / Formulário de Reserva
* **Objetivo:** Criar um modal que solicita o nome do convidado ao clicar em um presente disponível.
* **Escopo:**
  * **Dentro:** Layout do modal centralizado; campo de input de texto para o Nome; validação simples (nome não pode ser vazio); botões "Confirmar" e "Cancelar".
  * **Fora:** Alterar o estado dos presentes ou salvar os dados de fato.

---

### Tarefa 6: Ligação do Modal com o Estado Local
* **Objetivo:** Conectar o formulário do modal ao clique do card para marcar temporariamente o item como reservado.
* **Escopo:**
  * **Dentro:** Exibição do modal somente ao clicar em um presente disponível; passagem do ID do item selecionado; atualização do estado em memória após confirmação com o nome; fechamento do modal.
  * **Fora:** Comunicação com o backend ou salvamento em base de dados real.

---

### Tarefa 7: Estados de Carregamento e Vazio
* **Objetivo:** Implementar visualizações para indicar quando a lista está sendo carregada ou se não houver itens cadastrados.
* **Escopo:**
  * **Dentro:** Tela de loading (skeletons ou spinner no padrão de cores); tela de lista vazia ("Nenhum presente disponível no momento").
  * **Fora:** Lógica real de timeout ou integração real de rede.

---

### Tarefa 8: Configuração do Backend (Google Apps Script)
* **Objetivo:** Escrever o código Google Apps Script que servirá como API REST para a planilha do Google Drive.
* **Escopo:**
  * **Dentro:** Funções `doGet()` para retornar a lista de produtos (marcando quais estão reservados) e `doPost()` para salvar uma reserva (nome e data) na aba correspondente da planilha.
  * **Fora:** Alterações no código frontend da aplicação React.

---

### Tarefa 9: Integração da Aplicação com a API (GET e POST)
* **Objetivo:** Substituir os dados mockados e o estado local por requisições HTTP reais usando `fetch` para a URL do Apps Script.
* **Escopo:**
  * **Dentro:** Hook customizado ou chamadas assíncronas em `useEffect` para ler dados (`GET`); envio da reserva (`POST`) ao confirmar no modal; tratamento de loading real e recarregamento dos dados pós-reserva.
  * **Fora:** Armazenamento local temporário (localStorage/sessionStorage).

---

### Tarefa 10: Deploy na Vercel
* **Objetivo:** Publicar a aplicação no ar na Vercel para testes públicos.
* **Escopo:**
  * **Dentro:** Configuração do projeto na Vercel; definição de variáveis de ambiente se necessárias (ex: URL da API); deploy e testes de usabilidade em produção.
  * **Fora:** Modificações de funcionalidades do sistema.
