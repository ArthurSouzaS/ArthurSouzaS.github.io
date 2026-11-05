# 👋 Portfólio · Arthur Souza Soares

Meu site pessoal: quem sou, tecnologias que já usei e meus projetos.

🔗 **Acesse:** https://arthursouzas.github.io

## Sobre

Estudante de **Desenvolvimento de Sistemas no SENAI**. Meu principal projeto é o **Protutal** (TCC), uma plataforma web e mobile de tutoria entre alunos da rede SESI, onde trabalhei principalmente no back-end.

## Projetos em destaque

- **Protutal** (TCC): plataforma de tutoria entre alunos com API em Node.js, Prisma e PostgreSQL, front em Next.js e app em React Native.
- **Foco Estudos**: app de organização de estudos com tarefas por matéria, timer Pomodoro e dashboard de tempo estudado. Feito com Next.js, React, TypeScript, SCSS Modules e Vitest. [Código](https://github.com/ArthurSouzaS/ArthurSouzaS-foco-estudos) · [Site](https://arthursouzas.github.io/ArthurSouzaS-foco-estudos/)
- **Carrossel 3D**: carrossel de imagens feito em aula sobre colaboração com Git e GitHub.

## Funcionalidades

- 🌗 **Tema claro e escuro**: o site abre sempre no tema escuro; o botão no menu troca para o claro e a escolha fica salva (`localStorage`).
- 🌎 **Português e inglês**: o botão PT/EN troca todos os textos da página, inclusive `title`, meta description e o efeito de digitação. A escolha também fica salva.
- 📱 Layout responsivo, do celular ao desktop.
- ♿ Acessível: link "pular para o conteúdo", `aria-label` nos botões, foco visível pelo teclado e respeito a `prefers-reduced-motion`.

## Feito com

- HTML, CSS e JavaScript puros (sem framework nem biblioteca)
- Traduções em um objeto no `script.js`, aplicadas por atributos `data-i18n`
- Temas com variáveis CSS (`:root` e `[data-theme="light"]`)
- Publicado no **GitHub Pages**

## Rodando localmente

Não precisa instalar nada. Abra o `index.html` no navegador ou use a extensão Live Server do VS Code.

## Estrutura

```
├── index.html   # conteúdo do site (textos em PT com chaves data-i18n)
├── style.css    # estilos e variáveis dos temas escuro e claro
└── script.js    # traduções PT/EN, tema, menu mobile, animações e copiar e-mail
```

### Como adicionar ou editar um texto

1. No `index.html`, marque o elemento com `data-i18n="chave"` (texto simples), `data-i18n-html="chave"` (texto com `<strong>`) ou `data-i18n-attr="aria-label:chave"` (atributos).
2. No `script.js`, adicione a mesma `chave` em `translations.pt` e `translations.en`.

## Contato

- 📧 arthur.soares0209@outlook.com
- 📸 [Instagram](https://www.instagram.com/arthursoares_092/)
- 💻 [GitHub](https://github.com/ArthurSouzaS)
