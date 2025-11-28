// /MrTomiCZ/mrtomicz.eu/api/ip.js
export default function handler(req, res) {
    const raw = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || '';
    let ip = '';

    if (Array.isArray(raw)) ip = raw[0];
    else if (typeof raw === 'string' && raw.length) ip = raw.split(',')[0].trim();

    if (!ip && req.socket && req.socket.remoteAddress) ip = req.socket.remoteAddress;

    // Normalize IPv4-mapped IPv6 addresses
    if (typeof ip === 'string' && ip.startsWith('::ffff:')) ip = ip.replace('::ffff:', '');

    res.status(200).setHeader("Content-Type", "text/plain").send(ip || 'unknown');
}