const electronApp = require('electron').app;
const electronBrowserWindow = require('electron').BrowserWindow;
const electronIpcMain = require('electron').ipcMain;
const Store = require('electron-store');
const store = new Store();
const path = require('path');
const db = require('./connection.js');
const { get } = require('http');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  electronApp.quit();
}

let window;
let loginWindow;

const createWindowDashboard = () => {
  // Create the browser window.
  window = new electronBrowserWindow({
    icon: __dirname + '/assets/images/faviconOficina.ico',
    width: 900,
    height: 600,
    autoHideMenuBar: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      devTools: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // and load the index.html of the app.
  window.loadFile(path.join(__dirname, 'views/index.html'));

  window.webContents.openDevTools();
};

const createWindow = () => {
  // Create the browser window.
  loginWindow = new electronBrowserWindow({
    icon: __dirname + '/assets/images/faviconOficina.ico',
    width:1000,
    height:800,
    resizable: false,
    maximizable: false,
    autoHideMenuBar: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      devTools: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // and load the index.html of the app.
  loginWindow.loadFile(path.join(__dirname, 'views/login.html'));
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

electronApp.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electronApp.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    electronApp.quit();
  }
});

electronApp.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (electronBrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

electronIpcMain.on('login', (event, data) => {
  console.log(data)
  validateLogin(data);
});

function validateLogin(data) {
  const { email, senha } = data;
  const sql = 'SELECT * FROM usuarios WHERE email=? AND senha=?';
  console.log("PASSOU")
  db.query(sql, [email, senha], (error, results, fields) => {
    if (error) {
      console.log(error);
    }
    console.log(JSON.stringify(results))
    if (results.length > 0) {
      console.log("results: " + results);
      console.log(results[0].usuario, results[0].email, results[0].permissao, results[0].nome, results[0].imagem)
      store.set('user', results[0].usuario);
      store.set('email', results[0].email);
      store.set('permissions', results[0].permissao);
      store.set('name', results[0].nome);
      store.set('image', results[0].imagen);

      createWindowDashboard();
      window.loadFile(path.join(__dirname, 'views/consultar.html'));
      window.maximize();
      window.show();
      loginWindow.close();
    }
  });
}

electronIpcMain.on('logout', (event, confirm) => {
  validateLogout(confirm);
});

function validateLogout(confirm) {
  if (confirm == 'confirm-logout') {
    store.delete('user');
    store.delete('email');
    store.delete('permissions');
    store.delete('name');
    store.delete('image');

    store.delete('idCarrera');
    store.delete('nombreCarrera');

    /*store.delete('isbn');
    store.delete('nombre');
    store.delete('carrera');
    store.delete('ubicacion');
    store.delete('editorial');*/

    store.delete('isbnL');
    store.delete('nombreL');
    store.delete('carreraL');
    store.delete('ubicacionL');
    store.delete('editorialL');

    store.delete('confirmAdd');
    store.delete('confirmUpdate');
    store.delete('confirmDelete');

    createWindow();
    loginWindow.show();
    window.close();
  }
}

electronIpcMain.on('invitado', (event, permissions) => {
  store.set('permissions', permissions);

  createWindowDashboard();
  window.show();
  loginWindow.close();
  window.maximize();
});

electronIpcMain.handle('getUserData', (event) => {
  const data = { user: store.get('user'), email: store.get('email'), permissions: store.get('permissions'), image: store.get('image'), name: store.get('name') };

  return data;
});

electronIpcMain.on('consultBook', (event, ISBN) => {
  const sql = 'SELECT * FROM clientes WHERE cpf=?';
  console.log("LENDO CPF: " + ISBN)
  let novoCpfNumero = parseInt(ISBN)
  db.query(sql, novoCpfNumero, (error, results) => {
    if (error) {
      console.log(error);
    }
    store.set('isbnL', results[0].cpf);
    store.set('nombreL', results[0].nome);
    store.set('carreraL', results[0].data_nascimento);
    store.set('ubicacionL', results[0].email);
    store.set('editorialL', results[0].numero_telefone);
    store.set('rg', results[0].rg);
    store.set('cidade', results[0].cidade);
    store.set('bairro', results[0].bairro);
    store.set('rua', results[0].rua);
    store.set('casa', results[0].casa);
    store.set('referencia', results[0].referencia);
    store.set('observacao', results[0].observacao);
    store.set('datacricao', results[0].datacricao);
  });
});

electronIpcMain.handle('getBook', (event) => {
  const data = { isbn: store.get('isbnL'), nombre: store.get('nombreL'), carrera: store.get('carreraL'), ubicacion: store.get('ubicacionL'), editorial: store.get('editorialL'), rg: store.get('rg'),
cidade: store.get('cidade'), bairro: store.get('bairro'), rua: store.get('rua'), casa: store.get('casa'), referencia: store.get('referencia'), observacao: store.get('observacao'), datacriacao: store.get('datacricao') };
console.log("DataAQUI: " + data)
  return data;
});

electronIpcMain.handle('getBooks', (event) => {
  let cpf = '', nome = '', email = '', numero = '', cricaoconta = '';

  db.query('SELECT * FROM clientes', (error, results, fields) => {
    if (error) {
      console.log(error);
    }

    if (results.length > 0) {
      for (let i = 0; i < results.length; i++) {
        cpf += results[i].cpf + '_';
        nome += results[i].nome + '_';
        email += results[i].email + '_';
        numero += results[i].numero_telefone + '_';
        cricaoconta += results[i].datacricao + '_';
      }

      store.set('isbn', cpf);
      store.set('nombre', nome);
      store.set('carrera', numero);
      store.set('ubicacion', cricaoconta);
      store.set('editorial', email);
    }
  });

  const data = { isbn: store.get('isbn'), nombre: store.get('nombre'), carrera: store.get('carrera'), ubicacion: store.get('ubicacion'), editorial: store.get('editorial') };
  //console.log(data)
  return data;
});



electronIpcMain.handle('getServicos', (event) => {
  let cpf = '', placa = '', modelo = '', saida = '',  valor_total= '';

  db.query('SELECT * FROM servicos', (error, results, fields) => {
    if (error) {
      console.log(error);
    }

    if (results.length > 0) {
      for (let i = 0; i < results.length; i++) {
        cpf += results[i].cpf + '_';
        placa += results[i].placa + '_';
        modelo += results[i].modelo + '_';
        saida += results[i].saida + '_';
        valor_total += results[i].valor_total + '_';
      }
      console.log(cpf)
      console.log(placa)
      console.log(modelo)
      console.log(saida)
      console.log(valor_total)
      store.set('cpf', cpf);
      store.set('placa', placa);
      store.set('modelo', modelo);
      store.set('saida', saida);
      store.set('valor_total', valor_total);
    }
  });

  const data = { isbn: store.get('cpf'), nombre: store.get('placa'), carrera: store.get('saida'), ubicacion: store.get('valor_total'), editorial: store.get('modelo')};
  //console.log(data)
  return data;
});










electronIpcMain.handle('confirmAddBook', (event) => {
  return store.get('confirmAdd');
});

electronIpcMain.on('addBook', (event, data) => {
  addDB(data);
});

function addDB(data) {
  const { nome, dataNascimento, email, telefone, cpf, rg, cidade, bairro, rua, casa, referencia, observacao, dataCriacaoConta } = data;
  const sql = 'INSERT INTO clientes (nome, data_nascimento, email, numero_telefone, cpf, rg, cidade, bairro, rua, casa, referencia, observacao, datacricao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(sql, [nome, dataNascimento, email, telefone, cpf, rg, cidade, bairro, rua, casa, referencia, observacao, dataCriacaoConta], (error) => {
    if (error) {
      console.log(error);
      store.set('confirmAdd', 0);
    } else {
      store.set('confirmAdd', 1);
    }
  });
}

electronIpcMain.on('addService', (event, data) => {
  console.log("PASSOUuuuuuuuu")
  addService(data);
});

function addService(data){
  const {cpf, entrada, saida, placa, KM, modelo, quantidade1, quantidade2, quantidade3, quantidade4, quantidade5, quantidade6
    , quantidade7, quantidade8, quantidade9, quantidade10, quantidade11, quantidade12, quantidade13, quantidade14, quantidade15
    , quantidade16, quantidade17, quantidade18, quantidade19, quantidade20, discriminacao1, discriminacao2
    , discriminacao3, discriminacao4, discriminacao5, discriminacao6, discriminacao7, discriminacao8, discriminacao9, discriminacao10
    , discriminacao11, discriminacao12, discriminacao13, discriminacao14, discriminacao15, discriminacao16, discriminacao17
    , discriminacao18, discriminacao19, discriminacao20, punit1, punit2, punit3, punit4, punit5, punit6, punit7, punit8, punit9, punit10
    , punit11, punit12, punit13, punit14, punit15, punit16, punit17, punit18, punit19, punit20, total1, total2, total3, total4, total5, total6
    , total7, total8, total9, total10, total11, total12, total13, total14, total15, total16, total17, total18, total19, total20, taxa_deslocamento, valor_total, valor_com_desconto, forma_pagamento} = data;
    const sql = `INSERT INTO servicos (cpf, entrada, saida, placa, KM, modelo, quantidade1, quantidade2, quantidade3, quantidade4, quantidade5,
      quantidade6, quantidade7, quantidade8, quantidade9, quantidade10, quantidade11, quantidade12, quantidade13, quantidade14, quantidade15,
      quantidade16, quantidade17, quantidade18, quantidade19, quantidade20, discriminacao1, discriminacao2, discriminacao3, discriminacao4,
      discriminacao5, discriminacao6, discriminacao7, discriminacao8, discriminacao9, discriminacao10, discriminacao11, discriminacao12,
      discriminacao13, discriminacao14, discriminacao15, discriminacao16, discriminacao17, discriminacao18, discriminacao19, discriminacao20,
      punit1, punit2, punit3, punit4, punit5, punit6, punit7, punit8, punit9, punit10, punit11, punit12, punit13, punit14, punit15, punit16,
      punit17, punit18, punit19, punit20, total1, total2, total3, total4, total5, total6, total7, total8, total9, total10, total11, total12,
      total13, total14, total15, total16, total17, total18, total19, total20, taxa_deslocamento, valor_total, valor_com_desconto, forma_pagamento)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
      ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
      db.query(sql, [cpf, entrada, saida, placa, KM, modelo, quantidade1, quantidade2, quantidade3, quantidade4, quantidade5, quantidade6
        , quantidade7, quantidade8, quantidade9, quantidade10, quantidade11, quantidade12, quantidade13, quantidade14, quantidade15
        , quantidade16, quantidade17, quantidade18, quantidade19, quantidade20, discriminacao1, discriminacao2
        , discriminacao3, discriminacao4, discriminacao5, discriminacao6, discriminacao7, discriminacao8, discriminacao9, discriminacao10
        , discriminacao11, discriminacao12, discriminacao13, discriminacao14, discriminacao15, discriminacao16, discriminacao17
        , discriminacao18, discriminacao19, discriminacao20, punit1, punit2, punit3, punit4, punit5, punit6, punit7, punit8, punit9, punit10
        , punit11, punit12, punit13, punit14, punit15, punit16, punit17, punit18, punit19, punit20, total1, total2, total3, total4, total5, total6
        , total7, total8, total9, total10, total11, total12, total13, total14, total15, total16, total17, total18, total19, total20, taxa_deslocamento, valor_total, valor_com_desconto, forma_pagamento], (error) => {
          if(error){
            console.log(error)
          }else{
            console.log("PASSOU PORRA")
          }
        })
}







electronIpcMain.handle('confirmUpdateBook', (event) => {
  return store.get('confirmUpdate');
});

electronIpcMain.on('updateBook', (event, data) => {
  updateDB(data);
});

function updateDB(data) {
  const { isbn, nombre, carrera, ubicacion, editorial } = data;
  const sql = 'UPDATE libros SET nombre=?, editorial=?, carrera=?, ubicacion=? WHERE ISBN=?';

  db.query(sql, [nombre, editorial, carrera, ubicacion, isbn], (error) => {
    if (error) {
      console.log(error);
      store.set('confirmUpdate', 0);
    } else {
      store.set('confirmUpdate', 1);
    }
  });
}

electronIpcMain.handle('confirmDeleteBook', (event) => {
  return store.get('confirmDelete');
});

electronIpcMain.on('deleteBook', (event, ISBN) => {
  deleteDB(ISBN);
});

function deleteDB(ISBN) {
  const sql = 'DELETE FROM libros WHERE ISBN = ?';

  db.query(sql, [ISBN], (error) => {
    if (error) {
      console.log(error);
      store.set('confirmDelete', 0);
    } else {
      store.set('confirmDelete', 1);
    }
  });
}

electronIpcMain.on('consultCarreras', (event) => {
  let idCarrera = '', nombreCarrera = '';

  db.query('SELECT * FROM carreras', (error, results, fields) => {
    if (error) {
      console.log(error);
    }

    if (results.length > 0) {
      for (let i = 0; i < results.length; i++) {
        idCarrera += results[i].id_carrera + '_';
        nombreCarrera += results[i].nombre_carrera + '_';
      }

      store.set('idCarrera', idCarrera);
      store.set('nombreCarrera', nombreCarrera);
    }
  });
});

electronIpcMain.handle('getCarreras', (event) => {
  const data = { idCarrera: store.get('idCarrera'), nombreCarrera: store.get('nombreCarrera') };

  return data;
});