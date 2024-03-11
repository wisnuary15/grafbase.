const axios = require("axios");

async function getBingImage(query) {
    try {
        const response = await axios.get(`https://raiden-api.up.railway.app/api/ai/bingimage?q=1girl${query}`);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw 'Failed to get image data from API.';
    }
}

const handler = async (m, { conn, text, usedPrefix, command }) => {
    try {
        if (!text) throw `Usage example: ${usedPrefix}${command} <your_query>`;
        m.reply("Please wait, processing...");
        const startTime = Date.now(); // Record the start time
        const bingImageData = await getBingImage(text);
        for (let i = 0; i < bingImageData.length; i++) {
            const image = bingImageData[i];
            await conn.sendFile(
                m.chat,
                image,
                `kyaaaa_${i}.jpg`,
                `*Result:* ${text}\n*Source:* https://raiden-api.up.railway.app`,
                m,
            );
        }
        const endTime = Date.now(); // Record the end time
        const processingTime = (endTime - startTime) / 1000; // Calculate processing time in seconds
        m.reply(`*Processing complete!*\nEstimated completion time: ${processingTime} seconds`);
    } catch (error) {
        console.error(error);
        m.reply('An error occurred while processing the request.');
    }
};

handler.help = ["bingimage"];
handler.tags = ['ai'];
handler.premium = true;
handler.command = /^(bingimage|bingimg)$/i;

module.exports = handler;