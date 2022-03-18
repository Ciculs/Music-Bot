module.exports = {
    app: {
        px: '!',
        token: 'OTUwNzgwODYwOTQzMTk2MTky.Yid5rQ.mx-2RPlDl0payw7wiMFVrSf7kmA',
        playing: 'by Ciculs ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
