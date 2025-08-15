# Website Ensaio IA

> **Landing Page prática e rápica com foco em conversão**

[![Astro](https://img.shields.io/badge/Astro-5.12.3-000000?style=flat&logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org)

## 🌟 Sobre o Projeto

A **Ensaio IA** é uma plataforma inovadora que utiliza inteligência artificial para criar ensaios fotográficos profissionais a partir de fotos comuns. Nossa tecnologia de ponta transforma selfies e fotos casuais em retratos de estúdio de alta qualidade.

Apesar da plataforma ser privada, o código fonte da lading page está aberto para todos ficarem á vontade de usar.

## 🛠️ Tecnologias Utilizadas

Este site foi feito com:

- **[Astro 5.12.3](https://astro.build)** - Framework web moderno e performático
- **[Tailwind CSS 4.1.11](https://tailwindcss.com)** - Framework CSS utilitário
- **[TypeScript](https://www.typescriptlang.org)** - Tipagem estática para JavaScript
- **[React 19.1.0](https://react.dev)** - Biblioteca para interfaces de usuário
- **[Vite](https://vitejs.dev)** - Build tool ultra-rápido

## 🎯 Otimizações de Performance

### PageSpeed Insights
- ✅ **Main-thread work**: Otimizado de 3.4s para ~1.5s
- ✅ **LCP**: Melhorado de 3,870ms para ~1,500ms
- ✅ **Tamanho**: Economia de 43 KiB
- ✅ **Lazy loading**: Implementado inteligentemente

### Técnicas Aplicadas
- **CSS otimizado** com animações essenciais
- **Imagens LCP** com `loading="eager"` e `fetchpriority="high"`
- **Fontes preloadadas** para renderização rápida
- **Chunks separados** para React
- **Build otimizado** com Vite

## 🏗️ Estrutura do Projeto

```
studio-ai/
├── public/                # Assets estáticos
│   ├── fonts/             # Fontes Poppins
│   └── favicon.svg        # Ícone do site
├── src/
│   ├── assets/            # Imagens e recursos
│   │   ├── images/        # Galeria e hero
│   │   └── styles/        # CSS global
│   ├── components/        # Componentes Astro
│   │   ├── ...
│   ├── layouts/           # Layouts de página
│   │   └── layout.astro   # Layout principal
│   ├── locales/           # Internacionalização
│   │   └── pt_BR.json     # Português brasileiro
│   └── pages/             # Páginas do site
│       └── index.astro    # Página inicial
├── astro.config.mjs       # Configuração Astro
├── tailwind.config.js     # Configuração Tailwind
└── package.json           # Dependências
```

## 🚀 Instalação e Desenvolvimento

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### 1. Clone o repositório
```bash
git clone https://github.com/rmarsigli/estudio-ai.git
cd estudio-ai
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente
```bash
# Crie um arquivo .env
PUBLIC_NAME="Nome do Site"
PUBLIC_DESCRIPTION="Descrição do Site"
PUBLIC_FACEBOOK_PIXEL="Seu Facebook Pixel"
PUBLIC_GOOGLE_TAGMANAGER_TAG="Sua Tag do Google Tag Manager"
PUBLIC_WHATSAPP_LINK="https://wa.me/telefone?text='Texto da Mensagem'".
```

### 4. Execute em desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

### 5. Build para produção
```bash
npm run build
# ou
yarn build
```

## 📱 Comandos Disponíveis

| Comando | Ação |
|---------|------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Build para produção |
| `npm run preview` | Preview do build local |
| `npm run astro` | Comandos CLI do Astro |

### Fontes
- **Poppins** - Fonte principal (Regular, SemiBold, Bold)
- **Fallback**: sans-serif

## 🌐 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
```bash
npm run build
# Faça deploy da pasta dist/
```

## 📊 Métricas de Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Todos verdes ✅
- **Mobile Performance**: Otimizado para dispositivos móveis
- **SEO**: Meta tags completas e estrutura semântica
