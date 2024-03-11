import uploadFile from '../../lib/uploadFile.js';
import uploadImage from '../../lib/uploadImage.js';
import axios from 'axios';

export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return true;
if (!m.isGroup || !global.db.data.chats[m.chat]?.antiNsfw) return false;

    const q = m || m.quoted;
    const mime = q.msg?.mimetype || '';
    if (!mime) return

    const media = await q.download();
    if (!media) return
    const isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    const link = await (isTele ? uploadImage : uploadFile)(media);

    if (link) {
        const detect = await cekGambar(link);
        if (detect.nsfw) {
            await this.reply(m.chat, detect.msg, m);
            await this.sendMessage(m.chat, { delete: m.key });
            return;
        }
    }
}

async function cekGambar(img) {
    try {
        const response = await axios.get('https://api.sightengine.com/1.0/check.json', {
            params: {
                'url': img,
                'models': 'nudity,wad,gore',
                'api_user': '671718818',
                'api_secret': 'zs9QqkjFYZWq5N3nozXT',
            }
        });

        return {
            nsfw: response.data.nudity.safe < 0.80,
            msg: 'Anti-NSFW: NSFW terdeteksi, akan segera melakukan penghapusan'
        };
    } catch (error) {
        console.error('Kesalahan dalam pemeriksaan gambar:', error);
    }
}