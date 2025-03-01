# Pokedex Simples com PokeAPI

Este projeto é uma Pokedex simples que utiliza a PokeAPI para buscar e exibir informações de Pokémon. Ele permite pesquisar Pokémon por nome ou número, e navegar entre eles usando botões de "anterior" e "próximo".

## Funcionalidades

* **Pesquisa de Pokémon:** Permite pesquisar Pokémon por nome ou número.
* **Exibição de Informações:** Exibe o nome, número e imagem do Pokémon.
* **Navegação:** Permite navegar entre os Pokémon usando botões de "anterior" e "próximo".
* **Tratamento de Erros:** Exibe uma mensagem de erro caso o Pokémon não seja encontrado.
* **Imagens Animadas:** Exibe imagens animadas dos Pokémon quando disponíveis.
* **Imagens Padrão:** Exibe imagens estáticas dos Pokémon quando as animadas não estão disponíveis.

## Tecnologias Utilizadas

* HTML
* CSS
* JavaScript
* PokeAPI (https://pokeapi.co/)

## Como Usar

1.  Clone este repositório:

    ```bash
    git clone [https://github.com/dolthub/dolt](https://github.com/dolthub/dolt)
    ```

2.  Abra o arquivo `index.html` em seu navegador.

3.  Use o campo de pesquisa para buscar um Pokémon por nome ou número.

4.  Use os botões "anterior" e "próximo" para navegar entre os Pokémon.

## Estrutura do Código

* `index.html`: Estrutura HTML da página.
* `style.css`: Estilos CSS da página.
* `script.js`: Lógica JavaScript da aplicação.

## Explicação do Código JavaScript

O arquivo `script.js` contém a lógica principal da aplicação. Aqui estão os principais pontos:

* **Seleção de Elementos do DOM:** O código seleciona os elementos HTML necessários para exibir as informações do Pokémon e interagir com a página.
* **Função `fetchPokemon`:** Esta função faz uma chamada à PokeAPI para buscar as informações de um Pokémon. Ela utiliza `async/await` para lidar com a chamada assíncrona.
* **Função `renderPokemon`:** Esta função recebe os dados do Pokémon e atualiza os elementos HTML da página para exibir as informações. Ela também lida com o tratamento de erros e exibe uma mensagem caso o Pokémon não seja encontrado.
* **Event Listeners:** O código adiciona event listeners aos botões de pesquisa, "anterior" e "próximo" para lidar com as interações do usuário.
* **Imagens Animadas e Padrão:** O código verifica se a imagem animada do Pokémon está disponível e, caso contrário, exibe a imagem padrão.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorar este projeto.
