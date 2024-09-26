/** @type { import('./$types').PageLoad} */
export async function load({ fetch }) {
  const request = await fetch("/api/random");
  const data = await request.json();

  return data[0];
}
