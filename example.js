const domain = 'meet.jit.si';
const options = {
    roomName: 'TilUndTomer',
    width: 700,
    height: 700,
    parentNode: document.querySelector('#meet'),
    lang: 'de',
    moderator: true,
    userInfo: {
        displayName: 'Banana Joe'
    }
};
const api = new JitsiMeetExternalAPI(domain, options);
api.addListener(incomingMessage, receiveMessage);

// print message to console
function receiveMessage(data) {
    console.log("Here is my data: " + data.nick);
}

