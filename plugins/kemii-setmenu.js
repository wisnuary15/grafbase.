let handler = async (m, {
    conn,
    command,
    text
}) => {
    conn.menubot = conn.menubot ? conn.menubot : {
        id: 1
    }
    let mennu = {
        1: 'Normal',
        2: 'Biasa',
        3: 'Normal Mini',
        4: 'Call',
        5: 'Payment',
        6: 'Gif',
        7: 'Document',
    };

    if (text) {
        let mennuIndex = parseInt(text);
        if (isNaN(mennuIndex) || !mennu[mennuIndex]) {
            conn.reply(m.chat, '```Silakan pilih menu dari daftar berikut:\n\n```' + Object.entries(mennu).map(([id, theme]) => `${id}. Menu ${mennu}`).join('\n') + `\n\n𝚂𝚊𝚗𝚣 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴍᴀᴅᴇ ʙʏ ᴀsᴇᴘ Oғғɪᴄɪᴀʟ`, m);
            return;
        }
        conn.menubot = {
            id: mennuIndex
        };
        conn.reply(m.chat, '```Menu berhasil diubah menjadi:```' + ` *${mennu[mennuIndex]}*`, m);
    } else {
        conn.reply(m.chat, '```Silakan pilih menu dari daftar berikut:\n\n```' + Object.entries(mennu).map(([id, mennu]) => `${id}. Menu ${mennu}`).join('\n') + `\n\n𝚂𝚊𝚗𝚣 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴍᴀᴅᴇ ʙʏ ᴀsᴇᴘ Oғғɪᴄɪᴀʟ`, m);
        return;
    }
};
handler.help = ['setmenu *<type>*']
handler.tags = ['owner']
handler.command = /^(setmenu)$/i
handler.owner = true

module.exports = handler