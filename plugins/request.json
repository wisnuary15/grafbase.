const cooldown = 12 * 60 * 60 * 1000; 

const handler = async (m, { conn, text }) => {
  const user = global.db.data.users[m.sender];
  const currentTime = Date.now();

  if (user && currentTime - user.lastRequestTime < cooldown) {
    const remainingTime = cooldown - (currentTime - user.lastRequestTime);
    const remainingHours = Math.floor(remainingTime / (60 * 60 * 1000));
    const remainingMinutes = Math.ceil((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
    throw `You can only request 1 time in 1 day, please wait for *${remainingHours} hour ${remainingMinutes} minute*  to make another request.`;
  }
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  if (!text) throw '*Example:* .request games feature';

  const targetNumber = '6289652537228@s.whatsapp.net';
  const message = text.trim();
  const requestID = generateRandomID(message); 
  const currentDate = getCurrentDate(); 
  const senderTag = `@${m.sender.split`@`[0]}`;

  const formattedMessage = `
◦ *Request:* ${message}
◦ *From:* ${senderTag}
◦ *Date:* ${currentDate}
◦ *ID Request:* ${requestID}
`;

  conn.sendMessage(targetNumber, {
    text: formattedMessage
  });

  m.reply('🐱 Your request has been successfully sent\n' + formattedMessage);

  if (user) {
    user.lastRequestTime = currentTime;
  } else {
    global.db.data.users[m.sender] = {
      lastRequestTime: currentTime
    };
  }
};

function generateRandomID(message) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomID = '';
  for (let i = 0; i < message.length; i++) {
    randomID += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomID;
}

function getCurrentDate() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

handler.help = ['request'];
handler.tags = ['owner'];
handler.register = true;
handler.command = /^request$/i;

module.exports = handler;