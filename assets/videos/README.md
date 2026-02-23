# Pasta de Vídeos

## ⚠️ Instrução Importante

**Arquivo esperado:** `guia-canto-sagrado.mp4`

### Passos para adicionar o vídeo:

1. Copie o arquivo: `Guia do Canto Sagrado_1080p_caption.mp4`
2. Renomeie para: `guia-canto-sagrado.mp4` (sem espaços)
3. Coloque nesta pasta: `assets/videos/`

### Estrutura esperada:
```
ambiente-espiritual/
├── assets/
│   └── videos/
│       └── guia-canto-sagrado.mp4  ← AQUI
├── tutorial-abertura.html
└── ...
```

### Git LFS (Grande Files)

Se o arquivo de vídeo forem muito grande (> 100 MB), você pode precisar ativar Git LFS:

```bash
git lfs install
git lfs track "*.mp4"
git add .gitattributes
git add assets/videos/guia-canto-sagrado.mp4
git commit -m "📹 Adicionar vídeo: Guia do Canto Sagrado"
git push
```

---

**Status:** ⏳ Aguardando upload do arquivo `guia-canto-sagrado.mp4`
