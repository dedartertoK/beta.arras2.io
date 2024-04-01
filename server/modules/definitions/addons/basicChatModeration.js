bannedPhrases = [
	"fag",
	"nigg",
	"sex",
    "dumbass",
    "gay",
	"trann",
	"troon",
	"﷽",
    "fuc",
    "fuk",
    "shit",
    "mf",
    "motherfuc",
    "motherfuk",
    "bitch",
]

let recent = {},
    ratelimit = 3,
    decay = 10_000;

module.exports = ({ Events }) => {
    Events.on('chatMessage', ({ message, socket, preventDefault }) => {
        let perms = socket.permissions,
            id = socket.player.body.id;

        // They are allowed to spam ANYTHING they want INFINITELY.
        if (perms && perms.allowSpam) return;

        // Check if message length exceeds 54 characters
        if (message.length > 54) {
            preventDefault(); // Prevent the message from being sent
            socket.talk('m', 'Your message is too long. Please keep it under 54 characters.');
            return;
        }

// Check if the message contains any of the banned phrases (case-insensitive)
for (let phrase of bannedPhrases) {
    if (message.toLowerCase().includes(phrase.toLowerCase())) {
        preventDefault(); // Prevent the message from being sent
        socket.talk('kickthisnub');
		socket.kick("Using a bad word.");
        socket.player.body.kill();
        return;
    }
}



        // If they're talking too much, they can take a break.
        // Fortunately, this returns false if 'recent[id] is 'undefined'.
        if (recent[id] >= ratelimit) {
            preventDefault(); // 'preventDefault()' prevents the message from being sent.
            socket.talk('m', 'Please slow down!');
            return;
        }

        // The more messages they send, the higher this counts up.
        if (!recent[id]) {
            recent[id] = 0;
        }
        recent[id]++;

        // Let it decay so they can talk later.
        setTimeout(() => {
            recent[id]--;

            // memory leak NOes!
            if (!recent[id]) {
                delete recent[id];
            }
        }, decay);
    });

    console.log('[basicChatModeration] Loaded spam prevention!');
};
