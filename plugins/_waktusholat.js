async function before(m) {
    this.autosholat = this.autosholat ? this.autosholat : {};
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender;
    let name = await this.getName(who);
    let id = m.chat;
    if (id in this.autosholat) {
        return false;
    }
    let jadwalSholat = {
        Fajr: "05:46",
        Duha: "06:00",
        Dhuhr: "11:52",
        Asr: "15:07",
        Sunset: "17:00",
        Maghrib: "17:50",
        Isha: "19:00",
        Imsak: "04:30",
        Midnight: "23:55",
        Firstthird: "21:54",
        Lastthird: "01:55"
    };
    const date = new Date(new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu) {
            let caption = `Hai kak @${m.sender.split("@")[0]},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat\n\n*${waktu}*\n_untuk wilayah Jakarta dan sekitarnya._`;
            this.autosholat[id] = [
            this.sendMessage(m.chat, {image: { url: 'https://telegra.ph/file/df7fd61c577d8aad5c668.png' }, caption: `${caption}`, mentions: [m.sender] }, { quoted: m }),
                setTimeout(() => {
                    delete this.autosholat[id];
                }, 57000)
            ];
        }
    }
}

module.exports = {
    before,
};