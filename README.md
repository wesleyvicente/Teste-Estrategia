
# Challenge Qualyteam QA 2023 💻

👋 Olá, seja bem-vindo(a) ao meu teste técnico de QA para a Qualyteam!

## O que foi testado ✏️

O desafio foi criar testes automatizados para as seguintes aplicações:

http://training-wheels-qaninja.herokuapp.com/login

- Mensagem de erro ao não informar nickname

- Mensagem de erro ao não informar senha

- Login com sucesso

- Mensagem de erro ao informar nickname ou senha incorretos

- Mensagem de erro ao tentar acessar URL de área logada diretamente


http://training-wheels-qaninja.herokuapp.com/datepicker

- Verificar se ele está vindo com a data atual

- Limpar datepicker e trazer data atual através de atalho

- Colocar a data do seu aniversário

- Colocar o dia atual no mês anterior

## Ferramentas Utilizadas 🛠️
- Cypress 12.3.0
- Faker-JS 7.6.0 para criação de dados falsos no formulário de testes
- CI/CD Pipeline por meio do GitHub Actions utilizando Environment Secrets em dados sensíveis

## Como reproduzir 🧪
1. Clonar o repositório em uma pasta de sua preferência

2. Criar um arquivo com o nome **cypress.env.json** na raiz do projeto

3. Preencher o arquivo com os seguintes dados:

     {
          "user_name": "papitorocks",
         "user_password": "pwd123"
     }

4. Abrir o Terminal do VS Code (https://code.visualstudio.com/Download)

5. Instalar o Cypress e outras libs por meio do comando:

      ***npm install, ou também npm i @faker-js/faker@7.6.0 cypress@12.3.0 -D***

6. Executar o comando no terminal do VS Code:

      ***npx cypress open***, ou ***npm run cy:open***

7. Após aplicação abrir, selecionar a opção 'E2E Testing' e selecionar o navegador de sua preferência

8. Clicar na aba 'Specs' e selecionar o teste que deseja executar

## Performance 📈

Também podemos executar os testes em modo Headless para ganharmos ainda mais performance em nossa execução, basta executar:

***npm test***, ou ***npx cypress run***


**Nota:** Caso escolha o **npm test**, irá aparecer uma surpresa no Terminal durante a execução dos testes!

<a href="https://www.youtube.com/watch?v=zqLEO5tIuYs&ab_channel=brmbrmcar">
 <img src=https://m.media-amazon.com/images/I/61QeX8HghML.png style=width:12% />

---
