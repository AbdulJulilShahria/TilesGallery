export async function getTilesInfo() {
    const res = await fetch("https://category-a8-apple-server.onrender.com/tiles");
    const data = await res.json();
    return data;
}