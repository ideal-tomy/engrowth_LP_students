# Engrowth LP

これはEngrowthサービスのランディングページです。
`作成.md` と `参考テキスト.md` の情報に基づいて作成されました。

## 技術スタック

- HTML
- TailwindCSS
- JavaScript (Intersection Observer APIによる基本的なアニメーション)

## セットアップと実行方法

1.  **依存関係のインストール:**
    プロジェクトのルートディレクトリで以下のコマンドを実行して、TailwindCSSをインストールします。
    ```bash
    npm install
    ```

2.  **TailwindCSSのビルド:**
    以下のコマンドを実行して、`assets/css/input.css` から `assets/css/style.css` を生成します。
    `--watch` フラグが付いているため、`input.css` や `tailwind.config.js`、`index.html` 内のクラス名を変更すると自動的に `style.css` が再ビルドされます。
    ```bash
    npm run build:css
    ```
    開発が終了したら、Ctrl+Cでこのコマンドを停止できます。

3.  **LPの表示:**
    `index.html` ファイルを直接ウェブブラウザで開いてください。
    (例: ファイルをブラウザのウィンドウにドラッグ＆ドロップするか、ファイルエクスプローラーから右クリックして「ブラウザで開く」を選択します)

## ファイル構成

- `index.html`: LPのメインファイル
- `tailwind.config.js`: TailwindCSSの設定ファイル
- `package.json`: プロジェクトの依存関係とスクリプト
- `README.md`: このファイル
- `assets/css/input.css`: TailwindCSSのディレクティブとカスタムCSS
- `assets/css/style.css`: `input.css` から生成されるCSSファイル (TailwindCSSによって自動生成)
- `assets/js/script.js`: アニメーションやインタラクション用のJavaScript
- `作成.md`: LPの構成案
- `参考テキスト.md`: LPの各セクションのテキスト案

## 注意点

- コーチや受講生の声の画像は、`https://via.placeholder.com/` を使用したプレースホルダーになっています。実際の画像に差し替えてください。
- LINEのリンク (`https://line.me/R/ti/p/%40yourlineid`) はダミーです。実際のLINE公式アカウントのURLに置き換えてください。
- メールのリンク (`mailto:info@engrowth.example.com`) もダミーです。実際のメールアドレスに置き換えてください。
