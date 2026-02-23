# 🧹 Instruções de Limpeza de Cache - Ambiente Espiritual v4

## ⚠️ Problema
Você pode ter cached antigos da aplicação interferindo com o novo design (versão v4).

## ✅ Soluções Automáticas

### 1. **Limpeza Automática ao Carregar** ✨
A aplicação agora limpa automaticamente:
- ✅ Cache v1, v2, v3 antigos no carregamento
- ✅ localStorage desatualizado
- ✅ IndexedDB obsoleto
- ✅ Service Workers antigos

**Nenhuma ação necessária!** Simplesmente acesse: https://clarisai-prog.github.io/ambiente-espiritual/

---

## 🔧 Limpeza Manual (Se Necessário)

### No Chrome/Edge:
1. Abrir DevTools: `F12`
2. Ir para **Application** tab
3. Limpar:
   - **Cache Storage**: Deletar `ambiente-espiritual-v1`, `v2`, `v3`
   - **Local Storage**: Deletar todas as chaves com `ambiente` ou `checklist`
   - **Cookies**: Limpar todos
4. Fechar DevTools
5. Hard Refresh: `Ctrl + Shift + R`

### No Firefox:
1. Abrir DevTools: `F12`
2. Ir para **Storage** tab
3. Limpar:
   - **Cache Storage**: Deletar versões antigas
   - **Local Storage**: Deletar chaves de `ambiente`
4. Hard Refresh: `Ctrl + Shift + R`

### No Safari (iOS/macOS):
1. Ir para **Preferências** → **Avançado**
2. Marcar "Mostrar menu de desenvolvimento"
3. No menu de desenvolvimento: **Esvaziar Caches**
4. Ir para: **Desenvolver** → **Esvaziar Caches Locais**
5. Reconfigurar SPA:
   - Configurações → Privacidade e Segurança → Limpar Histórico
6. Visitar a URL novamente

---

## 🆔 Identificar Versão Instalada

No console do navegador (F12 → Console), execute:

```javascript
// Ver versão de cache atual
caches.keys().then(names => {
  console.log('📦 Caches:', names);
  console.log('✓ Versão Ativa:', names.find(n => n.includes('ambiente')));
});

// Ver localStorage
console.log('💾 localStorage:', Object.keys(localStorage));

// Ver service workers
navigator.serviceWorker.getRegistrations().then(regs => {
  console.log('🔧 Service Workers:', regs);
  regs.forEach(reg => console.log('  Scope:', reg.scope));
});
```

**Esperado (v4):**
```
📦 Caches: ["ambiente-espiritual-v4"]
✓ Versão Ativa: ambiente-espiritual-v4
💾 localStorage: ["ambiente-espiritual-checklist"]
🔧 Service Workers: [1 registration]
```

---

## 📝 Notas Técnicas

**Versão Atual:** v4
**Cache Strategy:** Cache-First com Network Fallback
**Service Worker:** Ativa automaticamente
**localStorage:** Apenas `ambiente-espiritual-checklist` (seu progresso no checklist)

**Mudanças v4:**
- ✅ Cache versionado: v1/v2/v3 são deletados automaticamente
- ✅ localStorage mantém apenas o necessário (checklist)
- ✅ IndexedDB limpo se houver da versão antiga
- ✅ Verificação de atualização a cada 1 minuto (em vez de 5)
- ✅ Limpeza executada em CADA página ao carregar

---

## 🚀 Testar Persistência

1. Abrir [App](https://clarisai-prog.github.io/ambiente-espiritual/)
2. Ir para **Checklist**
3. Marcar alguns itens ✓
4. Recarregar a página: `F5`
5. ✅ Checkmarks devem persistir

Se não persistirem, execute novamente a limpeza.

---

## 💬 Se o Problema Persistir

1. Tentar modo incógnito/privado
2. Desativar extensões do navegador
3. Expirar site: `Ctrl + Shift + Delete` → Escolher site e período
4. Reinstalar aplicação (Se instalada como PWA):
   - Desktop: Remover atalho e reinstalar
   - iOS: Excluir app → Home → '+' → Adicionar novamente
   - Android: Unistall → Instalar novamente

---

**Versão Documento:** 1.0  
**Data:** 23 fevereiro 2026  
**Status:** ✅ Limpeza Automática v4 Ativa
