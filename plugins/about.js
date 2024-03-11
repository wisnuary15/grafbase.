let handler = async (m, { conn }) => {
  let aboutID = `*ID: 🇮🇩*\n\n𝚂𝚊𝚗𝚣 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ adalah bot WhatsApp yang cerdas dan sangat berguna untuk membantu Anda dalam menjawab pertanyaan dan memberikan solusi yang tepat dalam waktu yang singkat. Dikembangkan oleh ᴀsᴇᴘ Oғғɪᴄɪᴀʟ, bot ini menggunakan sumber asli base Games-Wabot yang terus diperbarui oleh ᴀsᴇᴘ Oғғɪᴄɪᴀʟ untuk memberikan pengalaman berinteraksi yang lebih mudah dan menyenangkan.

Dengan kemampuannya yang luas dalam menjawab pertanyaan dan memberikan solusi, Bot 𝚂𝚊𝚗𝚣 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ dapat membantu Anda dalam berbagai hal seperti, mencari informasi tentang produk atau layanan, mengatur jadwal, dan banyak lagi. Bot 𝚂𝚊𝚗𝚣 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ juga dapat memberikan jawaban yang akurat dan cepat sehingga Anda tidak perlu lagi menunggu lama untuk mendapatkan jawaban yang Anda butuhkan.

Sebagai produk yang dikembangkan dan diperbarui oleh ᴀsᴇᴘ Oғғɪᴄɪᴀʟ, Bot 𝚂𝚊𝚗𝚣 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ selalu menerima pembaruan fitur-fitur terbaru untuk memberikan layanan yang semakin baik dan canggih. Dengan Bot 𝚂𝚊𝚗𝚣 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ, Anda tidak perlu khawatir tentang kualitas layanan yang diberikan karena bot ini selalu siap memberikan solusi yang terbaik bagi pengguna WhatsApp. Jadi, tunggu apa lagi? Gunakan Bot 𝚂𝚊𝚗𝚣 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ sekarang dan nikmati kemudahan serta kenyamanan dalam berinteraksi dengan bot cerdas ini di WhatsApp!`

  let aboutEN = `*EN: 🇺🇲*\n\n𝚂𝚊𝚗𝚣 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ is a smart WhatsApp bot that is very useful for helping you answer questions and provide accurate solutions in a short amount of time. Developed by ᴀsᴇᴘ Oғғɪᴄɪᴀʟ, this bot uses the original source of Games-Wabot that is constantly updated by ᴀsᴇᴘ Oғғɪᴄɪᴀʟ to provide an easier and more enjoyable interactive experience.

With its broad ability to answer questions and provide solutions, Bot 𝚂𝚊𝚗𝚣 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ can assist you in various things such as searching for information about products or services, scheduling appointments, and much more. Bot 𝚂𝚊𝚗𝚣 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ can also provide accurate and quick answers so you no longer have to wait long to get the answers you need.

As a product developed and updated by ᴀsᴇᴘ Oғғɪᴄɪᴀʟ, Bot 𝚂𝚊𝚗𝚣 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ always receives the latest feature updates to provide better and more advanced services. With Bot 𝚂𝚊𝚗𝚣 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ, you don't have to worry about the quality of the service provided because this bot is always ready to provide the best solutions for WhatsApp users. So, what are you waiting for? Use Bot 𝚂𝚊𝚗𝚣 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ now and enjoy the ease and convenience of interacting with this smart bot on WhatsApp!`
  
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

  let about = `${aboutID}\n\n${aboutEN}`

  let url = "https://telegra.ph/file/7292ad6ed3d9ac6088337.jpg"

  conn.sendFile(m.chat, url, 'about.jpg', about, m)
}

handler.help = ['about', 'detile', 'aboutbot', 'tentang', 'detail']
handler.tags = ['info','main']
handler.command = /^(about|detile|tentang|detail)$/i
handler.limit = true

module.exports = handler