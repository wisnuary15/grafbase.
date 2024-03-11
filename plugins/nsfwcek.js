const axios = require('axios');
const uploadImage = require('../lib/uploadImage');
const uploadFile = require('node-fetch');

let handler = async (m, conn) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';

  if (!mime) throw '🚩 Tolong balas pesan dengan gambar!';

  m.reply('🕒 Memproses gambar...');

  let media = await q.download();
  let isTele = /image\/(png|jpe?g)/.test(mime);
  let link = await (isTele ? uploadImage : uploadFile)(media);

  try {
    const api = await axios.get(`https://raiden-api.up.railway.app/api/ai/nsfw-Detector?url=${link}&sexyThreshold=40&pornThreshold=20&hentaiThreshold=20`);
    console.log(api.data); // Tampilkan seluruh respons API untuk diinspeksi
    const { is_nsfw, data } = api.data; // Ambil hanya properti yang diperlukan dari respons
    if (is_nsfw) {
      await m.reply('🔞 Konten NSFW terdeteksi! 😳');
    } else {
      await m.reply(`✅ Tidak ada konten NSFW yang terdeteksi\nData: ${JSON.stringify(data)}`);
    }
  } catch (error) {
    console.error('Error fetching');
    m.reply('❌ Terjadi kesalahan dalam memproses permintaan. Silakan coba lagi.');
  }
};

handler.help = ['nsfwcek <reply image>'];
handler.tags = ['tools'];
handler.command = /^(nsfwcek)$/i;

module.exports = handler;