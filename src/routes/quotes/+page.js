/** @type { import('./$types').PageLoad} */
export async function load({ fetch }) {
  const request = await fetch("/api/quotes");
  const data = await request.json();

  return { quotes: data };
}
