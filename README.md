# Ambiente Espiritual - PWA

Um Progressive Web App (PWA) com 5 páginas de conteúdo espiritual, totalmente funcional offline.

## 📱 Características

- ✅ **PWA Instalável** - Funciona como app no celular e desktop
- ✅ **Offline First** - Funciona completamente sem internet
- ✅ **Design Responsivo** - Otimizado para todos os dispositivos
- ✅ **5 Páginas** - Conteúdo organizado em múltiplas seções
- ✅ **Cache Automático** - Service Worker gerencia cache inteligentemente

## 📂 Estrutura do Projeto

```
ambiente_espiritual/
├── index.html              # Página inicial (Capa)
├── parte-2.html            # Segundo conteúdo
├── parte-3.html            # Terceiro conteúdo
├── parte-4.html            # Quarto conteúdo
├── parte-5.html            # Quinto conteúdo
├── manifest.json           # Metadados da PWA
├── service-worker.js       # Suporte offline e cache
├── assets/
│   ├── screen-1.png        # Imagem da página 1
│   ├── screen-2.png        # Imagem da página 2
│   ├── screen-3.png        # Imagem da página 3
│   ├── screen-4.png        # Imagem da página 4
│   └── screen-5.png        # Imagem da página 5
└── icons/
    ├── icon-192.png        # Ícone para app (192x192)
    └── icon-512.png        # Ícone para app (512x512)
```

## 🚀 Como Usar com GitHub Pages

### 1. Criar Repositório no GitHub
```bash
git init
git add .
git commit -m "Initial commit: Ambiente Espiritual PWA"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/ambiente-espiritual.git
git push -u origin main
```

### 2. Ativar GitHub Pages
1. Vá para **Settings** do repositório
2. Role até **Pages**
3. Em "Source", selecione **main** branch
4. Clique **Save**
5. Seu site estará em: `https://SEU_USUARIO.github.io/ambiente-espiritual`

### 3. Testar Localmente
```bash
# Opção 1: Usar Python (Python 3)
python -m http.server 8000

# Opção 2: Usar Node.js
npx http-server

# Opção 3: Usar Live Server no VS Code
# Extensão: ritwickdey.LiveServer
```

Depois acesse: `http://localhost:8000` (ou a porta indicada)

## 📱 Instalar como App

### No Chrome/Edge (Desktop e Mobile)
1. Abra o site no navegador
2. Clique no ícone `⊕ Instalar` na barra de endereço
3. Clique em **Instalar**
4. O app aparecerá no menu iniciar (Windows) ou na tela inicial (celular)

### No Safari (iOS)
1. Abra o site no Safari
2. Clique no ícone **Compartilhar**
3. Role para cima e clique em **Agregar à Tela Inicial**
4. O app ficará na tela inicial do iPhone/iPad

## 🔒 Service Worker e Offline

- `service-worker.js` faz cache de todos os arquivos na primeira visita
- Próximas carregamentos serão instantâneos, mesmo sem internet
- Se um arquivo for atualizado, a versão em cache será usada por 24 horas

Para forçar atualização:
1. Vá para DevTools (F12)
2. Application → Service Workers
3. Clique em **Unregister**
4. Recarregue a página

## 🎨 Customizar

### Trocar Ícones
1. Crie ícones PNG com dimensões:
   - 192x192px (`icons/icon-192.png`)
   - 512x512px (`icons/icon-512.png`)
2. Converta para PNG e copie para pasta `/icons/`

### Atualizar Cores
Abra `manifest.json` e edite:
```json
{
  "theme_color": "#c9a96e",      ← cor do tema
  "background_color": "#1a1a2e"  ← cor de fundo
}
```

### Trocar Nome do App
Em `manifest.json`, edite:
```json
{
  "name": "Novo Nome",
  "short_name": "Nome Curto"
}
```

## 📋 Checklist Antes de Fazer Deploy

- [ ] Substituir ícones em `/icons/` por imagens reais
- [ ] Testar offline (DevTools → Application → Service Workers)
- [ ] Testar no celular (Chrome/Safari)
- [ ] Verificar se todas as páginas carregam
- [ ] Testar instalação como app
- [ ] Fazer commit final no GitHub

## 🌐 Alternativas de Hospedagem

Se não quiser usar GitHub Pages:

- **Vercel**: [vercel.com](https://vercel.com) - Deploy automático do GitHub
- **Netlify**: [netlify.com](https://netlify.com) - Deploy arrastar-e-soltar
- **Cloudflare Pages**: [pages.cloudflare.com](https://pages.cloudflare.com)
- **AWS Amplify**: [amplify.aws](https://amplify.aws)

## 📝 Licença

Livre para usar e modificar.

## 💬 Suporte

Dúvidas? Verifique:
- [MDN Web Docs - PWA](https://developer.mozilla.org/pt-BR/docs/Web/Progressive_web_apps)
- [Web.dev - PWA](https://web.dev/progressive-web-apps/)
