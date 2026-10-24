# Clara & Luiz — Lista de Presentes

Bem-vindo ao repositório do aplicativo de Lista de Presentes de Casamento de **Clara & Luiz**. Este é um projeto desenvolvido sob medida para proporcionar uma experiência minimalista, elegante e extremamente fluida para os convidados escolherem e reservarem presentes de casamento.

A aplicação é integrada diretamente com uma planilha do **Google Sheets** via **Google Apps Script**, servindo como banco de dados em tempo real sem a necessidade de complexas infraestruturas de banco de dados relacionais.

---

## Funcionalidades Principais

* **Catálogo Elegante:** Organização automática dos presentes em seções responsivas com base em categorias configuradas diretamente na planilha.
* **Reserva em Tempo Real (GET e POST):** Integração ativa via chamadas assíncronas com tratamento elegante para evitar concorrências (conflitos de reserva simultânea de um mesmo item).
* **Foco em Privacidade:** O nome de quem realizou a reserva permanece oculto para os demais convidados, salvando-se apenas na planilha para consulta particular dos noivos.
* **Experiência de Uso Aprimorada:** Feedback visual com transições suaves, estados de carregamento (spinner), tela de lista vazia e validação ativa no modal de reserva.

---

## Tecnologias Utilizadas

* **Frontend:** [React 19](https://react.dev/) + [Vite](https://vite.dev/) (para carregamento e compilação ultra velozes)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/) (com paleta de cores personalizada nos tons `cream`, `brown` e `ink`)
* **Banco de Dados & API:** Planilha do [Google Sheets](https://www.google.com/sheets/about/) + Código backend personalizado hospedado em [Google Apps Script](https://www.google.com/script/start/)

---

## Como Rodar o Projeto Localmente

Siga os passos abaixo para preparar o ambiente e rodar o projeto em sua máquina:

### 1. Clonar e Instalar Dependências
Navegue até a pasta do projeto e instale todos os pacotes necessários:
```bash
npm install
```

### 2. Configurar as Variáveis de Ambiente
1. Duplique o arquivo `.env.example` e renomeie-o para `.env`:
   ```bash
   cp .env.example .env
   ```
2. Abra o arquivo `.env` e substitua a URL temporária pela URL real do seu Web App no Google Apps Script (`/exec`):
   ```env
   VITE_API_URL=https://script.google.com/macros/s/SUA_API_DO_GOOGLE_APPS_SCRIPT_ID/exec
   ```

### 3. Iniciar o Servidor de Desenvolvimento
Inicie o servidor local executando:
```bash
npm run dev
```
A página estará disponível em `http://localhost:5173`.

---

## Compilação para Produção (Build)

Para gerar os arquivos estáticos compilados, minificados e otimizados para deploy final (pasta `/dist`):
```bash
npm run build
```

---

## Publicação no Vercel

O projeto foi preparado e estruturado para deploy automático na **Vercel**:
* O arquivo `.env` contendo a URL de produção está ignorado no `.gitignore` por segurança.
* Ao configurar o projeto na Vercel, basta adicionar a variável de ambiente `VITE_API_URL` nas configurações do dashboard. O Vercel detectará e compilará o build padrão do Vite sem a necessidade de nenhuma configuração adicional (`vercel.json`).
