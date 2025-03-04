const fs = require("fs");

global.dev = process.env.NODE_ENV === "production";

global.botName = "Sibot";
global.botNumber = "6289518522433";

global.owner = {
  name: "Bayu Mahadika",
  number: "6285714797157",
  social: [
    {
      name: "example",
      url: "https://example.com",
    },
  ],
};

global.useStore = true;
global.online = false;
global.prefixCommand = ".";
global.splitArgs = "|";
global.locale = "id_ID";
global.timezone = "Asia/Jakarta";
global.inviteCode = "";

global.image = {
  logo: "https://i.ibb.co.com/TwkffYC/web-app-manifest-512x512.png",
};

global.setting = JSON.parse(fs.readFileSync("./config/setting.json"));
global.save = (name, data) => {
  switch (name.toLowerCase()) {
    case "setting": {
      fs.writeFileSync("./config/setting.json", JSON.stringify(data));
      return data;
    }
  }
};

global.mess = {
  dev: "Masih dalam tahap Ngopi",
};
