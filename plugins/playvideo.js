// ky created

const search = require('yt-search');
const ytdl = require('ytdl-core');
const fs = require('fs');

let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, 'Silakan masukkan kata kunci pencarian.', m);

  try {
    let results = await search(text);
    let videos = results.videos.slice(0, 10);
    
    let message = 'Berikut adalah hasil pencarian video YouTube:\n\n';
    videos.forEach((video, index) => {
      message += `${index + 1}. ${video.title}\n`;
    });
    message += '\nBalas pesan ini dengan nomor untuk memutar video.';

    let { key } = await conn.reply(m.chat, message, m);
    conn.playvideo[m.sender] = { videos, key };
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, 'Terjadi kesalahan saat melakukan pencarian video.', m);
  }
};

handler.before = async (m, { conn }) => {
  if (!(m.sender in conn.playvideo)) return;
  let { videos, key } = conn.playvideo[m.sender];

  try {
    let choice = parseInt(m.text.trim()) - 1;
    let video = videos[choice];
    
    let title = video.title.replace(/[^\w\s]/gi, '');

    // Download video menggunakan ytdl-core
    let videoStream = ytdl(video.videoId, { quality: 'highestvideo' });
    let fileSize = 0;
    videoStream.on('data', (chunk) => {
      fileSize += chunk.length;
      if (fileSize > 500 * 1024 * 1024) {
        videoStream.destroy();
        fs.unlinkSync(`${title}.mp4`);
        conn.reply(m.chat, 'Video yang Anda minta melebihi 50MB', m);
      }
    });

    videoStream.pipe(fs.createWriteStream(`${title}.mp4`)).on('finish', () => {
      let buffer = fs.readFileSync(`${title}.mp4`);
      conn.sendFile(m.chat, buffer, `${title}.mp4`, '', m);
      fs.unlinkSync(`${title}.mp4`);
    });

    // Hapus pesan list
    conn.sendMessage(m.chat, { delete: key });

    // Hapus sesi playvideo
    delete conn.playvideo[m.sender];

    // Kirim caption
    let captionvid = `*${video.title}*\n`;
captionvid += `*Duration*: ${video.duration}\n`; // Tambahkan durasi video

    await conn.sendMessage(m.chat, {
      text: captionvid,
      contextInfo: {
        externalAdReply: {
          title: "",
          body: "Powered by iky decoder",
          thumbnailUrl: video.thumbnail,
          sourceUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true
        }
      }
    });
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, 'Nomor yang Anda pilih tidak valid.', m);
  }
};

handler.help = ['playvideo <kata kunci>'];
handler.tags = ['downloader'];
handler.command = /^playvideo$/i;

module.exports = handler;