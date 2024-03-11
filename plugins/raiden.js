const fetch = require("node-fetch");

const handler = async (m, { args, usedPrefix, text, command }) => {
    if (!text) return m.reply("Uhmm");
    let hmm = {
        mentions: [m.sender],
        contextInfo: { forwardingScore: 256, isForwarded: true },
    };
    let ouh = await fetch(
        `https://raiden-api.up.railway.app/api/ai/Raiden-Chat?q=${text}`
    );
    let gyh = await ouh.json();
    await m.reply(gyh.data);
};

handler.help = ["raiden"];
handler.tags = ["ai"];
handler.command = ["raiden"];
handler.limit = true;
handler.premium = false;

module.exports = handler;