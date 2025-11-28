// /MrTomiCZ/mrtomicz.eu/api/ip.js
export default async function handler(req, res) {
    const params = new URLSearchParams(req.query);
    const site = params.get('site');
    const html = await fetch(site);
    const parsed = await html.text();

    res.status(200).setHeader("Content-Type", "text/html").send(parsed || "No content");
}