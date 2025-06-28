✅ INSTRUÇÕES PARA CONFIGURAR O DEPLOY COM GITHUB PAGES

1. Copia a pasta `github_config` para dentro do teu projeto `sistema-colera-angola`.

2. Renomeia a pasta `github_config` para `.github` (podes fazer isso com botão direito ou usando terminal).

3. Confirma que a estrutura final fica assim:
   sistema-colera-angola/
   └── .github/
       └── workflows/
           └── deploy.yml

4. Vai ao terminal e executa:
   cd caminho/para/sistema-colera-angola
   git add .
   git commit -m "Adicionar workflow corrigido para deploy"
   git push

5. Vai à aba "Actions" no GitHub e verifica se o deploy foi feito com sucesso.

🔗 O site será publicado automaticamente em:
   https://vagnogomes.github.io/sistema-colera-angola/
