# technotut.net
このリポジトリはTechnoTUTの公式ホームページ, https://technotut.net のソースコードです.  
Nuxt 3で作成されており, pushすると自動的にGitHub Actionsによってビルドされ, Cloudflare Pagesにデプロイされます.  
編集環境構築用のDockerfileも同梱しており, `.devcontainer/Dockerfile`を編集すれば, push時に自動でGitHub ActionsがDockerイメージをビルドします.  
Docker imageをpullするには, 以下のコマンドを実行します.
```bash
docker pull ghcr.io/technotut/technotut.net:main
```

## 編集方法
このホームページは`pull request`による編集を受け付けています.  
編集方法は以下の通りです.

- [GitHub Codespacesを用いた編集](docs/codespaces.md)
- [Dockerで環境構築を行い編集](docs/docker.md)
- [ローカルでの編集](docs/local.md)