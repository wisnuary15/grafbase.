const axios = require("axios");
const fs = require("fs");

const voiceNames = [
  'adam', 'antoni', 'arnold', 'bella', 'bill', 'brian', 'callum', 'charlie', 'charlotte', 'clyde',
  'daniel', 'dave', 'domi', 'dorothy', 'drew', 'ella', 'elli', 'emily', 'emma', 'ethan',
  'fin', 'freya', 'george', 'gigi', 'giovanni', 'glinda', 'grace', 'harry', 'james', 'jennifer',
  'jeremy', 'jessie', 'johny', 'joseph', 'josh', 'knightley', 'liam', 'lily', 'matilda', 'matthew',
  'michael', 'mimi', 'nicole', 'paddington', 'patrick', 'paul', 'rachel', 'ryan', 'sam', 'serena',
  'thomas', 'valentino', 'victoria'
];

const voiceHandler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!text) {
    await m.reply(`Berikut adalah daftar model suara yang tersedia:\n\n${voiceNames.map((voice, i) => `${i + 1}. ${voice}`).join('\n')}\n\nSilakan pilih model suara dengan mengetikkan nomornya setelah perintah ${usedPrefix}voiceku`);
    return;
  }

  const [modelIndex, ...teksArr] = args;
  const teks = teksArr.join(' ');
  if (!teks) throw `Masukkan teks yang ingin diubah menjadi suara`;
  if (isNaN(modelIndex)) throw `Pilih model suara dengan mengetikkan nomornya saja\n\n${voiceNames.map((voice, i) => `${i + 1}. ${voice}`).join('\n')}`;

  try {
    const selectedVoice = voiceNames[modelIndex - 1];
    if (!selectedVoice) throw 'Model suara tidak ditemukan';
    
    const startTime = Date.now();
    const response = await axios.get(`https://raiden-api.up.railway.app/api/ai/voice-elevenlabs?text=${encodeURIComponent(teks)}&voiceName=${selectedVoice}`, { responseType: 'arraybuffer' });
    const duration = (Date.now() - startTime) / 1000; // Durasi dalam detik
    const fileSize = response.data.byteLength; // Ukuran file dalam byte
    const ping = response.headers['x-response-time']; // Waktu ping API

    // Menyimpan audio ke file
    const audioFileName = "voice.mp3";
    fs.writeFileSync(audioFileName, response.data);
    
    // Mengirimkan audio ke pengguna
    await conn.sendFile(m.chat, audioFileName, 'voice.mp3', 'Berikut adalah suara yang dihasilkan dari teks yang Anda kirim.', m, false, { mimetype: 'audio/mpeg' });

    // Menghapus file setelah dikirim
    fs.unlinkSync(audioFileName);

    // Mengirim detail audio ke pengguna
    await m.reply(`Model: ${selectedVoice}\nDurasi: ${duration.toFixed(2)} detik\nUkuran: ${(fileSize / 1024).toFixed(2)} KB\nPing API: ${ping} ms`);

  } catch (error) {
    console.error(error);  // Log the error for debugging
    // Menangani kesalahan secara sesuai
    await m.reply("Terjadi kesalahan saat memproses permintaan.");
  }
};

voiceHandler.help = ['voiceku <nomor_model> <teks>'];
voiceHandler.tags = ['tools'];
voiceHandler.command = /^(voiceku)$/i;

module.exports = voiceHandler;
// Jangan dihapus anj
// Credits zaky