const TelegramBot = require("node-telegram-bot-api");
const http = require("http");

const TOKEN = "7400848965:AAG1t2A4MWUfylBBHgUIaJLIlUeFfdXazWs";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `Салам алейкум 🫂`);
});

bot.on("message", (msg) => {
  console.log("new msg: ", msg);

  bot.sendMessage(msg.chat.id, "⚽️");
});

console.log("Бот запущен ⚙️");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  if (req.method === "POST" && req.url === "/message") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const jsn = JSON.parse(body);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: 200 }));
      bot.sendMessage(
        1775560667,
        `Новое сообщение:\n\nИмя: ${jsn.name}\nEmail: ${jsn.email}\nСообщение: ${jsn.message}`
      );
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end("Aboba");
  }
});

server.listen(8000, () => {
  console.log(`Сервер запущен ⚙️`);
});
