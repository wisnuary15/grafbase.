const axios = require ("axios")
const fetch = require("node-fetch")
const { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn, text, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* .${command} Takashi-kemii`, m)
    conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    let anu = await fetch(`https://api.github.com/users/${text}`).then(a => a.json())
    let thumb = await getBuffer(anu.avatar_url)
    let hasil = `*── 「 Github Stalk 」 ──*
*Bio*: ${anu.bio}
*Perusahaan*: ${anu.company}
*Repo Publik:* ${anu.public_repos}
*Gists Publik:* ${anu.public_gists}
*Follower:* ${anu.followers}
*Following:* ${anu.following}
*Lokasi:* ${anu.location}
*Link:* ${anu.html_url}
`
    await conn.sendMessage(m.chat, { image: thumb, caption: hasil, quoted: m })
}
handler.help = ['githubstalk *<text>*']
handler.tags = ['stalking']
handler.command = /^(ghstalk|githubstalk)$/i
handler.limit = true

module.exports = handler

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})


const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}