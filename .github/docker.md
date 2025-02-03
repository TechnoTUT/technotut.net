# Dockerで環境構築を行い編集
## 1. Dockerのインストール
### Windows
https://docs.docker.com/desktop/install/windows-install/ に従い, Dockerをインストールします.  
#### WSLのインストール
PowerShellを管理者権限で起動し, 以下のコマンドを実行します.  
```powershell
wsl --install
```
#### Docker Desktopのインストール
https://docs.docker.com/desktop/release-notes/ から, `Docker Desktop for Windows` をダウンロードし, インストールします.  
### Mac
https://docs.docker.com/desktop/install/mac-install/ に従い, Dockerをインストールします.  

## 2. Visual Studio Codeのインストール  
https://code.visualstudio.com/ から, インストールします.  
また, wingetもしくはHomebrewを用いてインストールすることもできます.  
### Windows
```powershell
winget install vscode
```
### Mac
```zsh
brew install --cask visual-studio-code
```
インストールが終わったら, Visual Studio Codeを起動し, 拡張機能`Dev Containers`をインストールします.  
左側の`拡張機能`タブを開き, `Dev Containers`を検索し, `Install`をクリックします.  

## 3. リポジトリを開く
F1キーを押し, `Dev Containers: Clone Repository in Container Volume...`を選択します.  
リポジトリを尋ねられるので, `technotut/technotut.net`を入力します.  
クローンが始まり, 自動で環境構築が完了します.  

## 4. ブランチを作成する
左下の `main` をクリックし, `新しいブランチを作成` を選択します.  
ブランチ名を入力し, `Enter` を押します.  

## ~~5. 依存関係をインストールする~~
~~ターミナルで, `npm install` を実行します.~~
コンテナ起動時に自動実行されるようになったため, この手順は不要です.    

## 6. プレビューを開く
ターミナルで, `npm run dev` を実行します.  
`ポート`タブを開き, `転送されたアドレス` を, `Ctrlを押しながらクリック` します.  

## 7. 編集する
`/content`ディレクトリに, ホームページのコンテンツが格納されています.　Markdown形式で記述されており, 簡単に編集できます. `/content/news`ディレクトリを編集すると, https://technotut.net/news に記事を追加したり, 編集したりすることができます.  
また, 画像などは画像URLをMarkdownファイルに記述することで, Web上の画像をそのまま貼り付けることもできますが, 画像をアップロードすることもできます. 画像をアップロードする場合は, `/public`ディレクトリに画像を追加し, 画像のパスをMarkdownファイルに記述します.なお, パスは`/public`ディレクトリからの相対パスで記述します.  

編集して保存すると, プレビューに自動的に反映されます. プレビューを更新すると, 編集した内容が反映されているはずです.  

## 8. コミット
左側の `ソース管理` タブを開き, 変更したファイルの`+ (stage changes)`をクリックします.  
`コミットメッセージを入力` に, コミットメッセージを入力し, `Ctrl + Enter` を押します.

## 9. プッシュ
左側の `ソース管理` タブにて, `Branchの発行` をクリックします.  

## 10. プルリクエストを作成する
左側の `GitHub` タブを開き, `PULL REQUESTS`右横の`プルリクエストの作成`を選択します.
BASEを `main` に, MERGEを `最初に設定したブランチ名` に設定します.  
`Title`と`Description`を入力し, `Create` をクリックします.

## 11. お疲れ様でした
管理者によってレビューが行われます. 問題がなければ, プルリクエストがマージされ, 編集した内容が本番環境に反映されます. 

## 12. その他
コンテナランタイムにDockerではなく, Podmanを使用することができます. 以下にPodmanでの環境構築方法を記載します.  
### Podmanのインストール
#### Windows
```powershell
winget install RedHat.podman
```
#### Mac
```zsh
brew install podman
```

Podmanのインストールが完了したら, `podman machine init` を実行します.  
その後, `podman machine set --rootful` を実行し, `podman machine start` を実行します.  

### VSCodeの設定変更
`2.` の手順でVisual Studio Code本体と拡張機能をインストールした後, 拡張機能設定でdocker pathを`podman`に変更します.

### リポジトリを開く
`3.` の手順でリポジトリを開く際, `Dev Containers: Open Folder in Container...`を選択します.

以降の手順はDocker同様です.