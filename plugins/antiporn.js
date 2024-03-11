const axios = require('axios');
const uploadImage = require('../lib/uploadImage');
const fetch = require('node-fetch');

let handler = m => m;

handler.before = async function (m, { isAdmin, isBotAdmin, chat }) {
    if (m.isBaileys && m.fromMe) return true;

    // Cek apakah pesan merupakan gambar
    let isFoto = m.mtype === "imageMessage";

    try {
        let link = await (isFoto ? uploadImage(m) : uploadFile(m));

        if (chat.antiFoto && isFoto) {
            if (isFoto === "imageMessage") {
                // Lakukan deteksi NSFW
                let link = m.message.imageMessage.url;
                const api = await axios.get(`https://raiden-api.up.railway.app/api/ai/nsfw-Detector?url=${link}&sexyThreshold=40&pornThreshold=20&hentaiThreshold=20`);
                const { is_nsfw } = api.data;

                if (is_nsfw) {
                    // Jika terdeteksi foto NSFW dan pengguna bukan admin, hapus pesan dan beri notifikasi
                    if (!isAdmin && isBotAdmin) {
                        let hapus = m.key.participant;
                        let bang = m.key.id;
                        m.reply(`*Foto NSFW*\n\nMaaf, tapi saya harus menghapusnya karena admin/grup mengaktifkan Anti-NSFW.`);
                        return this.sendMessage(m.chat, {
                            delete: {
                                remoteJid: m.chat,
                                fromMe: false,
                                id: bang,
                                participant: hapus
                            }
                        });
                    }
                }
            }
        }
    } catch (error) {
        console.error("Error:", error);
        // Handle errors here
    }

    return true; // Lanjutkan eksekusi pesan
};

// Ekspor handler agar dapat digunakan di file lain
module.exports = handler;