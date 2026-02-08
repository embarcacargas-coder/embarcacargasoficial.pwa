const FEED_URL = "https://www.embarcacargas.com.br/feeds/posts/default?alt=json";

export async function verificarNovasCargas() {
  const res = await fetch(FEED_URL);
  const data = await res.json();

  const totalAtual = Number(data.feed.openSearch$totalResults.$t);
  const totalSalvo = localStorage.getItem("TOTAL_CARGAS_VISTAS");

  if (totalSalvo === null) {
    localStorage.setItem("TOTAL_CARGAS_VISTAS", totalAtual);
    return 0;
  }

  return totalAtual - Number(totalSalvo);
}

export async function marcarCargasComoVistas() {
  const res = await fetch(FEED_URL);
  const data = await res.json();

  const totalAtual = Number(data.feed.openSearch$totalResults.$t);
  localStorage.setItem("TOTAL_CARGAS_VISTAS", totalAtual);
}
