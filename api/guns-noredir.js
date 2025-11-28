export default async function handler(req, res) {
    const site = req.query.site;

    if (!site || !/^https?:\/\//i.test(site)) {
        res.status(200).send("Invalid site");
        return;
    }

    try {
        const response = await fetch(site, {
            method: "GET",
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36 Edg/142.0.0.0",
                "Sec-CH-Prefers-Color-Scheme": "dark"
            }
        });

        const text = await response.text();

        res
            .status(200)
            .setHeader("Content-Type", "text/html; charset=utf-8")
            .send(text);
    } catch (err) {
        res.status(200).send("Fetch failed: " + err.message);
    }
}
