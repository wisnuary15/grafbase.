const fetch = require('node-fetch');

const handler = async function (m, { conn }) {
    const args = m.text.split(' ');
    try {
        if (args.length > 0) {
            m.reply('*[ AUTO DOWNLOAD LINK DETECTED ]*');
            const url = args[0];
            let res = await (await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=GataDios&url=${url}`)).json(); 
  
            if (!res.result || res.result.length === 0) throw "Tidak dapat menemukan media di link tersebut";
            conn.sendFile(m.chat, res.result[0], '', '*I N S T A G R A M   D O W N L O A D E R*', m);

            for (let imgs of res.result) {   
                let ban = m.mentionedJid[0] || m.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
    
                if (ban) {
                    conn.sendFile(m.chat, imgs, '', null);
                }
            }
        }
    } catch (error) {
        console.log(error);
        m.reply('Terjadi kesalahan saat memproses permintaan Anda.');
    }
};

handler.customPrefix =  /^(?:https?:\/\/)?(?:www\.)?(?:instagram\.com\/)(?:tv\/|p\/|reel\/)(?:\S+)?$/ig;
handler.command = new RegExp();

module.exports = handler;