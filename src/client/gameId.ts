/** The game id is the first path segment of the URL; "" is the default game. */
export const gameId = window.location.pathname.split("/")[1] ?? "";
