# Documentação do App.

Olá avaliadores, irei guia-los a como instalar e executar o projeto.
Tambem irei apresentar detalhadamente as tecnologias que utilizei e o porque.

## Instalação, execução, testes via scripts

Dentro do diretório AskApp execute os seguintes comandos:

### `yarn install`

Esse comando irá instalar todas as dependencias do projeto em sua maquina.

### `yarn start`

Após a instalação das dependecias da aplição, rode mais esse comando, para a executar a aplicação

# Tecnologias utilizadas.

## 1. Framework React JS

Falando em arquitetura de pastas, segui o que considero o mais ideal, todos os projetos que desenvolvo, separo bem as coisas, porque acho que fica melhor organizado, e acredito que seja mais rapida a minha fixação, caso precise criar um novo aquivo, ou buscar um que ja exista.

Utiizei como Gerenciamento de estado a Context API do próprio React, por ser nativa a implementação ser menos verbosa que um redux por exemplo.

## 2. Material UI
Como um requisito obrigatório foi utilizado o Material UI, e gosto da ideia que ele traz para acelerar o desenvolvimento, utilizo muito o Material no dia a dia então não houve complicações com a implementação orientada a ele.

## 3. Figma
Estou disponibilizando essa url https://www.figma.com/file/L937Fkn4n03GQWpJclxqch/AskApp?node-id=0%3A1 , para complementar a avaliação, antes de sair codando, prototipei de uma forma simples a experiencia de usuario.

## 4. Deploy Vercel
Estou disponibilizando essa url https://ask-app.vercel.app/ , do Deploy da aplicação.
## 5. Axios

Para realizar as requisições escolhi o axios, separei em uma pasta hooks a configuração e criação do useAxios em uma pasta services onde contem a configuração com a declaração da chamada ao end-point, acredito que assim é mais organizado de se fazer.

## 6. Formik

Não era um requisito obirgatório, e para uma aplicação do do nivel de complexidade dessa eu não usaria, mas como seria um diferencial na avaliação, optei por usa-lo para me apriximar mais da realidade do time de desenvolvimento
## 7. Notistack

Para apresentar feedbacks para usuario, para a deleção de um relatório, ou mensagens de erro na aplição como um todo, optei por usar essa biblioteca, por ser extremamente simples de usar e da um visual bem agradavel na interface.

## 8. ESLINT

Configurei o eslint para ter uma style code e garantir padrões para o dev team, garantir uma estrutura de e estilo de escrita de padronizada e organizada.
## 9. Git Hooks

Para melhorar o workflow e garantir uma qualidade de codigo maior, utilizei o husky para garantir que não suba nada que esta sendo declarado e não usado, verificar se as alterações estão respeitando o eslint, testes que por algum motivo quebraram e passou despercebido no desenvolvimento, nada mais são que rotinas que são executadas como um comando git como "commit" ou "push" é invocado no terminal.
## 10. Unit test
Tambem não era um requisito obrigatório, mas achei interessante escrever pelo menos alguns, para complementar a avaliação e mostrar conhecimento no jest, devido ao tempo curto não foi possivel cobrir a aplicação com um percentual maior.
