/*
SCRIPT AKIRAA BOT BY BANG SYAII 
* ig: Akira_art12
*WhatsApp: wa.me/6283842839555
*,Jangan Perjual belikan script ini jika ada yang menjual tanpa izin mohon laporkan ke saya dan jangan harap ada update Script ini kedepannya !!!
*/

const uploadImage = require('../lib/uploadFile.js');

const handler = async (m, { conn, text, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `Mana potonya?\n*Example:* ${usedPrefix + command} style`
let media = await q.download()
let url = await uploadImage(media)
   m.reply(wait) 
  const payload = {
  "server_name": "frieren",
  "prompt": "ungly, dark face, { dark skin }",
  "width": 512,
  "height": 512,
  "steps": 25,
  "model_id": "dream_shaper",
  "sampler": "Euler",
  "init_image": url,
  "control_image": "",
  "mask_image": "",
  "controlnet_model": "canny",
  "controlnet_type": "canny",
  "controlnet_conditioning_scale": 1,
  "guess_mode": "no",
  "auto_hint": "no",
  "safety_checker": "no",
  "safety_checker_type": "blur",
  "cfg": 7.5,
  "seed": {},
  "enhance_prompt": "no",
  "image_num": 1,
  "lora_model": "",
  "lora_strength": 1,
  "negative_prompt": "ugly, disfigured, low quality, blurry, nsfw",
  "webhook": ""
}
  
  const { data } = await axios.post("https://api.itsrose.life/image/diffusion/controlNet", payload, {
    headers: {
      Authorization: global.rose,
    },
  }).catch((e) => e?.response);

  const { status, message, result } = data;

  if (!status) {
    m.reply(message);
  } else {
    for (let image of result.images) {
    conn.sendFile(m.chat, image, '', wm, m)
    }
  }
};

handler.help = ['hitamkan *<Reply/send media>*'];
handler.tags = ['ai'];
handler.premium = true;
handler.command = /^(hitamkan)$/i;
handler.limit = true;

module.exports = handler;