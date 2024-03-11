const fetch = require('node-fetch');

const apiUrl = "https://raiden-api.up.railway.app/api/ai/Multi-Gpt?model=text-davinci-003&q=";

const handler = async (m, { conn, text }) => {
    if (!text) throw "Please provide a question.";

    try {
        const response = await fetch(`${apiUrl}${encodeURIComponent(text)}`);
        const data = await response.json();
        const gpt = data.data.gpt;

        // Check if the response contains an image link
        if (gpt.includes("[tautan gambar]")) {
            const match = gpt.match(/\[tautan gambar\]\(([^)]+)\)/);

            if (match) {
                const imageLink = match[1];

                // Send the image if a link is found
                await conn.sendFile(
                    m.chat,
                    imageLink,
                    "bard.jpg",
                    "*judul nya*",
                    m
                );
            } else {
                // Handle the case where the link extraction fails
                m.reply("Error extracting image link.");
            }
        }

        // Always send the text response
        await m.reply(gpt);
    } catch (e) {
        console.error("Error:", e);
        throw "Error response Bard Ai";
    }
};

handler.help = ["ngen *question*"];
handler.tags = ["ai"];
handler.command = /^(ngen)$/i;

handler.limit = true;

module.exports = handler;