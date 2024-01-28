export function errorHtml(error: Error) {
  return /*html*/ `
<html lang="en">

<head>
  <meta name="viewport" content="width=device-width">
  <title>Concept Error</title>
  <link rel="icon" type="image/png" href="/static/images/favicon.png">
  <link rel="stylesheet" href="/static/styles/index.css" />
</head>

<body class="p-4">
  <main class="max-w-6xl">
    <a class="m-2" href="/">◄ Home</a>
    <h1 class="mb-2 font-bold text-center text-3xl">Error: ${error.message}</h1>
    <pre class="font-mono text-xs p-2 rounded overflow-x-auto whitespace-pre-wrap">${error.stack}</pre>
  </main>
</body>

</html>`;
}
