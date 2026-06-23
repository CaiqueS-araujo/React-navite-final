#  PokéApp — Aplicativo Pokémon

Aplicativo mobile multiplataforma desenvolvido em **React Native + Expo**, criado como
trabalho em equipe. Reúne várias funcionalidades em torno do universo Pokémon: login,
Pokédex, quiz, montagem de time, batalha por turnos, jogos e tema claro/escuro.

O projeto consome a [PokeAPI](https://pokeapi.co/) e uma API de autenticação própria que demora 60 segundo para ser iniciada após a primeira requisição, e caso passem 15 minutos, ela volta a ficar ausente, esperando a próxima requisição para ligar novamente.
seguindo um fluxo de trabalho colaborativo com branches e Pull Requests no GitHub.

---

##  Funcionalidades

-  **Login** com validação de formulário e autenticação via API (token salvo no aparelho)
-  **Pokédex** com busca e listagem de Pokémon
-  **Favoritos** para guardar os Pokémon preferidos
-  **Quiz** com perguntas sobre Pokémon
-  **Games** — minijogos temático
-  **Meu Time** — monte um time de até 6 Pokémon (com busca e filtro por geração)
-  **Batalha** por turnos contra um time inimigo aleatório
-  **Tema claro/escuro** (dark mode) com alternância em tela e preferência salva
-  **Persistência local** com AsyncStorage (sessão, time e tema)

---

##  Tecnologias

| Categoria | Ferramenta |
|---|---|
| Base | [Expo](https://expo.dev/) (SDK 54) · React Native 0.81 · React 19 |
| Linguagem | TypeScript |
| Estilização | [styled-components](https://styled-components.com/) + Design System próprio |
| Navegação | [React Navigation](https://reactnavigation.org/) (Native Stack) |
| Estado global | Context API (Login, Time e Tema) |
| Requisições HTTP | [axios](https://axios-http.com/) |
| Formulários | [React Hook Form](https://react-hook-form.com/) |
| Armazenamento | AsyncStorage |
| Fonte | Jersey 10 (`@expo-google-fonts/jersey-10`) |
| Dados | [PokeAPI](https://pokeapi.co/) |

---

##  Estrutura de pastas

```
src/
├── @types/        # Tipagens (styled-components)
├── Components/    # Componentes reutilizáveis (formulário, batalha, Pokédex, etc.)
├── Context/       # Context API: LoginProvider, TeamContext, ThemeContext
├── Data/          # Chamadas de API (PokeAPI, login, favoritos, perguntas do quiz)
├── Pages/         # Telas: Login, Home, Pokedex, Quiz, Games, Teams, Battles, Favorites
├── Routes/        # Configuração da navegação
├── Themes/        # Design System (Theme.ts) e tema da batalha (gameTheme.ts)
├── Types/         # Tipos do domínio
└── Utils/         # Funções utilitárias (cálculo de dano, sprites, constantes)
```

---

##  Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- Aplicativo **Expo Go** no celular (Android ou iOS), ou um emulador Android

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/CaiqueS-araujo/React-navite-final.git
cd React-navite-final

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento (limpando o cache)
npx expo start -c
```

admin e Senhas
admin: teste@gmail.com
senha: teste4434

Depois é só escanear o QR Code que aparece no terminal usando o **Expo Go** no celular
(o aparelho precisa estar na mesma rede Wi-Fi do computador).

---

##  Build do APK

O projeto está configurado para gerar o instalável com o **EAS Build**:

```bash
npm install -g eas-cli
eas build -p android --profile preview
```

Ao final, o EAS disponibiliza o link para download do arquivo `.apk`.
link:
---

##  Equipe

Projeto desenvolvido de forma colaborativa, com divisão de telas e funcionalidades:

| Integrante | Responsabilidade |
|---|---|
| **Caique** | Times e Batalha |
| **Kaique** | Home e Login |
| **Douglas** | Pokédex e Games |
| **Gabriel** | Quiz |
| **Kaique & Douglas** | Favoritos |

> Cada funcionalidade foi desenvolvida em sua própria branch e integrada à `main`
> por meio de Pull Requests, simulando um ambiente de trabalho real.

---

##  Sobre

Projeto acadêmico desenvolvido durante o curso de Desenvolvimento de Aplicação
Multiplataforma, com foco em React Native, consumo de API, persistência de dados,
roteamento e geração do aplicativo final.
