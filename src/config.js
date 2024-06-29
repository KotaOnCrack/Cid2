require("dotenv").config();

module.exports = {
    token:
        process.env.TOKEN ||
        "MTE1MzAzMTM5NzE1ODY4NjgzMQ.G1fGI1.Y8jF-PP10G0i2lQOR5t2vFsu9wuPWP8m4F-s3g",
    clientID: process.env.CLIENT_ID || "1256582795908747365",
    prefix: process.env.PREFIX || "+",
    ownerID: process.env.OWNER_ID || "842480950202073149",
    guildID: process.env.GUILD_ID || "970684977635278878",
    SpotifyID: process.env.SPOTIFY_ID || "6c31645ffb004ab8b44d06f7b96d1b66",
    SpotifySecret:
        process.env.SPOTIFY_SECRET || "3618fdc0b4824cfd91a8d425dac32987",
    mongourl:
        process.env.MONGO_URL ||
        "mongodb+srv://b12nsj:99c61q@cluster0.wequneh.mongodb.net/?retryWrites=true&w=majority",
    embedColor: process.env.EMBED_COLOR || 0xcc0000,
    logs: process.env.LOGS || "1256360248482988123",
    logs1: process.env.LOGS1 || "1256360248482988123",
    errorLogsChannel: process.env.ERROR_LOGS_CHANNEL || "1256360248482988123",
    buglogschannel: process.env.BUG_LOGS_CHANNEL || "1256360248482988123",
    SearchPlatform: "youtube",
    AggregatedSearchOrder:
        process.env.AGGREGATED_SEARCH_ORDER ||
        "youtube ,youtube music,youtube,soundcloud",
    links: {
        img:
            process.env.IMG ||
            "https://discord.com/channels/970684977635278878/1254577643886477322/1254580710212112494",
        support: process.env.SUPPORT || "https://discord.gg/ekdbQvuhza",
        invite:
            process.env.INVITE ||
            "https://discord.com/oauth2/authorize?client_id=1153031397158686831&permissions=8&integration_type=0&scope=bot",
    },
    nodes: [
        {
            host: process.env.NODE_HOST || "ambani.ncop.tech",
            port: parseInt(process.env.NODE_PORT || "2334"),
            password: process.env.NODE_PASSWORD || "ambaniop",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),
        },
    ],
};

function parseBoolean(value) {
    if (typeof value === "string") {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
