const { sticker } = require('../lib/sticker.js');
const fetch = require('node-fetch');
const baileys = require('@whiskeysockets/baileys');
const { MessageType } = baileys.default;

let handler = async (m, { conn, args }) => {
    let text;
    if (args.length >= 1) {
        text = args.slice(0).join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else throw "*Example*: .qc how to make bots";

    if (!text) return m.reply('enter text');
    if (text.length > 10000) return m.reply('Max 50 Texts!');
    
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.ibb.co/3Fh9V6p/avatar-contact.png');
    let name = await conn.getName(m.sender);
    let bgcolor = "#000000";
    
    let res = await `https://raiden-api.up.railway.app/api/ai/generate-quotely?text=${encodeURIComponent(text)}&name=${encodeURIComponent(name)}&ppUrl=${encodeURIComponent(pp)}&type=quote&format=png&backgroundColor=${encodeURIComponent(bgcolor)}&width=512&height=768&scale=2&avatar=true&id=1`;
    
    let stiker = await sticker(null, res, global.packname, global.author);
    conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true });
};

handler.help = ['qc'];
handler.tags = ['tools'];
handler.command = /^(qc|quotely)$/i;

module.exports = handler;