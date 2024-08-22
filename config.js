//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "princehen623@gmail.com";
global.location = "Wolverhampton United Kingdom ";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Europe/London";
global.github = process.env.GITHUB || "https://github.com/Frecyber/Frecyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1d4a42b28790d0f7a7195.jpg";
global.devs = "447721696132";
global.sudo = process.env.SUDO || "447721696132";
global.owner = process.env.OWNER_NUMBER || "447721696132";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaURUNXlhcVdURE9FV3hiQWRlb014Z2xzeW1SZG5iYlJWd2h3dXhkcTRXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzFZZGE2TDZnWTg4RVkwVTVTZC9Tc1piTC9iTm1SdnVxc2lOMkxpdG9Hcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFR2Rac09QVWxIMmRHTktlbHdOYmFINUoxRmh6ZjR2cTVjOVd1dTdJTFVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQT0xoOGdhTzd5RTFWblJ0ckNaR0l1V2Z5bGpQVjRna29EM2ZLQlllWGtrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9PbjZ4MitWN1EzY3dBNW5NVUI1SzVWVzZWckZlQTdQcmltYTE0dTZoVkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkgwQnRLRHgyZzJlZWF0ZWZGRUp3VkU3OXRwcXczaENxYXNNbDZJM0VvR2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0NKVGE4Wk5vTWs4dDNNbThxeHhadGpTaGd0V25PazdwZjMyQzVzSmNXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWG50VkJLL3dGQ1FqUWhzcDIxZWNiWHJYRzBPdzBidWZsQllTc0MwRXUyVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IituMkVZaSs0eXkrMldxZ0NDekVEblhBalJZdHlqdHB2aGc1N1ZvRkl3YmtCTDk3WStXR0dZcFR2eHdDRzE4ZGxKR2FLMjJIY3JNMFFCNDFjQ3B4U0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjAsImFkdlNlY3JldEtleSI6IjNWa0JHQ2E1TElHTXRKek5kUnIxdXhOSXh3Y2Jiam5ZeFMyTllxMExaekk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNDQ3NzIxNjk2MTMyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjE1QTMxMTM2NUJBMjcyRTExMjBBQzg4QUZFRUY2RENCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjQzNjg0Njd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImxNNEJETzRxVDVldjh1eW1UeXBMQnciLCJwaG9uZUlkIjoiYmNkZDkyMzgtOGFiNy00OWFmLWFjODAtOTc0MmNlNmUyNzY0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRRdWZqZnJxTHVXWFF1ZlBWbEtFQkxwbVl5Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2NmNBZ3ZtS1BhSi9Wd0dkMkNyQVhoZjJGZjg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNllNQ0RINDQiLCJtZSI6eyJpZCI6IjQ0NzcyMTY5NjEzMjo1OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJGSURFIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOeS9tdThDRU1PTW43WUdHQXNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIxc1I1dHFTWVJ2MUpqUGNqVXlTMVJUVVRWWFV6cDVDSkZsRFM1dUNPakc0PSIsImFjY291bnRTaWduYXR1cmUiOiI1cUVnZ1BFeEYzQmUzcFdvemtRL0VpcnhlYkQ0TmVTWTRRUTJxU0s0bkVtTUwxSERiWi9FdU14bDBRczA4YU5uK0Nmd3B0MlNNdWtPV1V5OXlMbnlCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidWxjR2N1SEhzcU1CV2hpdFRhblhSVzJnM3ZLa1M4T1g4eDZQRC8yK2Fnb1hGYzcyOC9BK0JOUXYxRloyYy8rUjFHQVdHTndia21JZndQWFRzUVdtQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI0NDc3MjE2OTYxMzI6NThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZGJFZWJha21FYjlTWXozSTFNa3RVVTFFMVYxTTZlUWlSWlEwdWJnam94dSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDM2ODQ2NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJNEcifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐅𝚪𝚵𝐂𝐘𝚩𝚵𝚪 𝚳𝐃",
  author: process.env.PACK_AUTHER || "FRECYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FRECYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Prince",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "FRECYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
