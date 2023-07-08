const contextBridge = require('electron').contextBridge;
const ipcRender = require('electron').ipcRenderer;

const ipc = {
    'render': {
        'send': [
            'login',
            'logout',
            'invitado',
            'addBook',
            'updateBook',
            'deleteBook',
            'consultBook',
            'consultCarreras',
            'addService'
        ],
        'sendReceive': [
            'getCarreras',
            'getUserData',
            'getBooks',
            'getBook',
            'confirmAddBook',
            'confirmUpdateBook',
            'confirmDeleteBook',
            'getServicos'
        ]
    }
};

contextBridge.exposeInMainWorld(
    'ipcRender', {
    send: (channel, args) => {
        let validChannels = ipc.render.send;

        if (validChannels.includes(channel)) {
            ipcRender.send(channel, args);
        }
    },
    invoke: (channel, args) => {
        let validChannels = ipc.render.sendReceive;

        if (validChannels.includes(channel)) {
            return ipcRender.invoke(channel, args);
        }
    }
});