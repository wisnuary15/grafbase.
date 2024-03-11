let { tiktoks } = require('../lib/scrape.js')

let handler = async (m, { conn, text, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* .${command} jedag jedug`, m)
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let kemii = await tiktoks(`${text}`)
  let te = `乂  *TIKTOK - SEARCH*\n\n`
  te +=`	◦	*Title :* ${kemii.title}\n\n`
  te +=`𝚂𝚊𝚗𝚣 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴍᴀᴅᴇ ʙʏ ᴀsᴇᴘ Oғғɪᴄɪᴀʟ`
  conn.sendFile(m.chat, kemii.no_watermark, 'tiktoks.mp4', te, m)
}
handler.help = ['tiktoksearch'].map(v => v + ' *<text>*')
handler.tags = ['downloader']

handler.command = /^tiktoksearch|ttsearch$/i
handler.premium = false

module.exports = handler