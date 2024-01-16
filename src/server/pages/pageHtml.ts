interface Options {
  scripts: string[];
  styles: string[];
  title?: string;
  data?: object;
}
export function basicHtml({ scripts, styles, title, data }: Options) {
  return /*html*/ `
<html lang="en">

<head>
  <meta name="viewport" content="width=device-width">
  <title>${title ?? "Escape Room"}</title>
  <link rel="icon" type="image/png" href="/static/images/favicon.png">
  ${styles.map((href) => /*html*/ `<link rel="stylesheet" href="${href}" />`)}
</head>

<body>
  <div id="react-container"></div>
  <script type="application/json">${JSON.stringify(data)}</script>
  ${scripts.map((src) => /*html*/ `<script src="${src}"></script>`)}
  
</body>

</html>`;
}
