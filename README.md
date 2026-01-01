# 🚀 Poderoso.io

## 📋 Sobre o Projeto

**Poderoso.io** é um site pessoal construído com as tecnologias mais modernas do ecossistema web. Aqui você encontra:

- 📖 **Artigos**: Conteúdo aprofundado sobre desenvolvimento e arquitetura de software
- 💡 **Dicas**: Snippets, queries SQL e técnicas práticas do dia-a-dia
- 📚 **Recursos**: Downloads de materiais úteis
- ℹ️ **Sobre**: Minha trajetória, formação e experiência profissional

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com)
- **MDX**: Suporte para conteúdo dinâmico em Markdown
- **Icons**: [Lucide React](https://lucide.dev) + [React Icons](https://react-icons.github.io/react-icons/)
- **Type Safety**: TypeScript
- **Fonts**: Geist (Vercel)

## 🚀 Como Começar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/tpoderoso/poderoso.io.git
cd poderoso.io

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

O site auto-atualiza conforme você edita os arquivos.

### Build e Produção

```bash
# Build para produção
npm run build

# Inicie o servidor em produção
npm run start
```

## 📁 Estrutura do Projeto

```
├── app/                    # Rotas e layouts Next.js
│   ├── page.tsx           # Página home
│   ├── articles/          # Seção de artigos
│   ├── tips/              # Seção de dicas
│   ├── downloads/         # Downloads
│   └── layout.tsx         # Layout root
├── components/            # Componentes React
│   ├── layout/           # Navbar, Footer
│   ├── mdx/              # Componentes para MDX
│   └── ui/               # Componentes shadcn/ui
├── content/              # Conteúdo MDX
│   ├── articles/         # Artigos em .mdx
│   └── tips/             # Dicas em .mdx
├── lib/                  # Utilitários e funções
│   ├── api.ts           # Funções server-side
│   ├── enums.ts         # Enums compartilhados
│   └── utils.ts         # Helpers e utilidades
└── public/              # Arquivos estáticos
```

## 📦 Dependências Principais

- `next`: Framework web moderno
- `tailwindcss`: Utility-first CSS
- `shadcn-ui`: Componentes UI de alta qualidade
- `next-mdx-remote`: MDX parsing para Next.js
- `gray-matter`: Parsing de frontmatter YAML
- `lucide-react`: Ícones SVG
- `react-icons`: Mais ícones

## 🔗 Links Úteis

- 💼 [LinkedIn](https://linkedin.com/in/tpoderoso/)
- 🐙 [GitHub](https://github.com/tpoderoso/)

## 📄 License

Este projeto é de uso pessoal. Sinta-se à vontade para usar como referência ou inspiração para seu próprio site.

## 🤝 Sugestões

Se tiver sugestões, feedback ou encontrar algum issue, entre em contato comigo!

---
