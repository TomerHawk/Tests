const domain = 'meet.jit.si';
const options = {
    roomName: 'TilUndTomer',
    width: 700,
    height: 700,
    parentNode: document.querySelector('#meet'),
    lang: 'de'
};
const api = new JitsiMeetExternalAPI(domain, options);
