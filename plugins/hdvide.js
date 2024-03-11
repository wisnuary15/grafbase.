const ffmpeg = require('fluent-ffmpeg');

let handler = async (m, { mufar }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? mufar.user.jid : m.sender
  let name = await mufar.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Video tidak ditemukan`

  // Mendapatkan file video
  let videoData = await mufar.downloadAndSaveMediaMessage(q, 'video') // Simpan sebagai file video sementara

  // Menggunakan ffmpeg untuk meningkatkan resolusi video
  let output = './scrape/video.mp4' // Tentukan path dan nama file output yang diinginkan
  ffmpeg(videoData)
    .outputOptions('-s', '1280x720') // Ganti resolusi sesuai kebutuhan, contoh disini menggunakan 1280x720
    .save(output)
    .on('end', () => {
      // Mengirim video yang telah ditingkatkan resolusinya
      mufar.sendFile(m.chat, output, '', `🍟 Nih Kak`, m)
    })
    .on('error', (err) => {
      console.error(err)
      m.reply('Terjadi kesalahan saat meningkatkan resolusi video. ' + err)
    })
}

handler.command = handler.help = ["hdvid"]
handler.tags = ["tools"]
handler.limit = true

module.exports = handler