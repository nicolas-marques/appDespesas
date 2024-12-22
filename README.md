# Gerenciador de Despesas

## Tecnologias Utilizadas

Este projeto utiliza uma combinação de tecnologias modernas para criar um sistema funcional e dinâmico. Abaixo está uma lista técnica detalhada:

### Frontend

- **HTML5**
  - Estrutura básica do projeto.
  - Elementos semânticos para organização do conteúdo.
- **CSS3**
  - Estilização do layout e design responsivo.
  - Classes do Bootstrap para estilização rápida e consistente.
- **Bootstrap**
  - Framework CSS utilizado para criar um layout responsivo e componentes prontos, como modais e botões.
- **Font Awesome**
  - Ícones utilizados nos botões e elementos visuais do projeto.

### Backend (Lado do Cliente)

- **JavaScript (ES6)**
  - Criação de classes e métodos para gerenciar as despesas.
  - Manipulação do DOM para interatividade dinâmica.
  - Utilização de funções modernas, como `filter`, para filtragem de dados.

### Armazenamento

- **LocalStorage**
  - Armazenamento persistente dos dados das despesas no navegador.
  - Métodos como `setItem`, `getItem` e `removeItem` para gerenciar dados no LocalStorage.

### Frameworks e Bibliotecas

- **jQuery**
  - Utilizado para manipulação do DOM de forma simplificada.
  - Ativação de componentes do Bootstrap, como modais.

### Ferramentas e Convenções

- **Bootstrap Modals**
  - Exibição de mensagens de erro e sucesso de forma amigável ao usuário.
- **JavaScript Switch Statements**
  - Conversão de tipos numéricos para texto descritivo (e.g., tipos de despesas).

## Estrutura do Projeto

1. **Classes:**
   - `Despesa`: Representa os dados de uma despesa.
   - `Bd`: Gerencia as operações de armazenamento e recuperação no LocalStorage.
2. **Funções:**
   - `cadastrarDespesa`: Coleta dados do formulário e os armazena.
   - `carregarListaDespesas`: Exibe as despesas na interface do usuário.
   - `pesquisarDespesa`: Filtra despesas com base nos critérios definidos.
   - `configurarModal`: Configura e exibe mensagens de feedback.

## Funcionalidades Principais

- Cadastro de despesas com validação de campos obrigatórios.
- Pesquisa avançada por critérios como data, tipo, descrição e valor.
- Exibição dinâmica das despesas cadastradas em uma tabela.
- Remoção de despesas individuais com atualização imediata da interface.

Este projeto demonstra como combinar tecnologias frontend e backend do lado do cliente para criar uma aplicação completa e funcional.