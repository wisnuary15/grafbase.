const axios = require('axios');
const uploadImage = require('../lib/uploadImage');
const uploadFile = require('node-fetch');

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';

  if (!mime) throw '🚩 reply image!';

  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

  let media = await q.download();
  let isTele = /image\/(png|jpe?g)/.test(mime);
  let link = await (isTele ? uploadImage : uploadFile)(media);

  try {
    const api = await axios.get(`https://raiden-api.up.railway.app/api/ai/image2prompt?imageUrl=${link}`);
    console.log(api.data); // Tampilkan seluruh respons API untuk diinspeksi
    const promptText = api.data.data.trim();
    await m.reply(promptText);
  } catch (error) {
    console.error('Error fetching prompt:', error);
    m.reply('Error fetching prompt. Please try again.');
  }
};

handler.help = ['toprompt <reply image>'];
handler.tags = ['tools'];
handler.command = /^(toprompt)$/i;

module.exports = handler;