    let nometxt = document.getElementById('txtNome');
    let data_nascimentotxt = document.getElementById('txtDataNascimento');
    let emailtxt = document.getElementById('txtEmail');
    let telefonetxt = document.getElementById('txtTelefone');
    let cpftxt = document.getElementById('txtCPF');
    let rgtxt = document.getElementById('txtRg');
    let cidadetxt = document.getElementById('txtCidade');
    let bairrotxt = document.getElementById('txtBairro');
    let ruatxt = document.getElementById('txtRua');
    let casatxt = document.getElementById('txtCasa');
    let referenciatxt = document.getElementById('txtReferencia');
    let observacaotxt = document.getElementById('txtObservacao');
    let datacriacaotxt = document.getElementById('txtDataCriacao');
    let Retornarbutton = document.getElementById('Retornar');

    Retornarbutton.addEventListener("click", function() {
        // Código a ser executado quando o botão for clicado
        location.href = './consultar.html';
      });


const loadBook = () => {
    window.ipcRender.invoke('getBook').then((result) => {
        let { isbn, nombre, carrera, ubicacion, editorial, rg, cidade, bairro, rua, casa, referencia, observacao, datacriacao } = result;

        cpftxt.value = isbn;
        nometxt.value = nombre;
        data_nascimentotxt.value = carrera;
        emailtxt.value = ubicacion;
        telefonetxt.value = editorial;
        rgtxt.value = rg;
        cidadetxt.value = cidade
        bairrotxt.value = bairro;
        ruatxt.value = rua;
        casatxt.value = casa;
        referenciatxt.value = referencia;
        observacaotxt.value = observacao;
        datacriacaotxt.value = datacriacao;

        window.ipcRender.invoke('getCarreras').then((result) => {
            let { idCarrera, nombreCarrera } = result;

            idCarrera = idCarrera.replace(/(^_)|(_$)/g, '');
            idCarrera = idCarrera.split('_');
            nombreCarrera = nombreCarrera.replace(/(^_)|(_$)/g, '');
            nombreCarrera = nombreCarrera.split('_');

            let carreras = [];

            for (let i = 0; i < idCarrera.length; i++) {
                carreras.push({
                    'idCarrera': idCarrera[i],
                    'nombreCarrera': nombreCarrera[i]
                });
            }

            let texto = '';

            for (let i = 0; i < carreras.length; i++) {
                if (localStorage.getItem('selectCarrera')) {
                    if (carreras[i].idCarrera == localStorage.getItem('selectCarrera')) {
                        texto +=
                            `
                            <option value="${carreras[i].idCarrera}" selected>${carreras[i].nombreCarrera}</option>
                            `;
                    }

                    if (carreras[i].idCarrera != localStorage.getItem('selectCarrera')) {
                        texto +=
                            `
                            <option value="${carreras[i].idCarrera}">${carreras[i].nombreCarrera}</option>
                            `;
                    }
                } else {
                    if (carreras[i].idCarrera == carrera) {
                        texto +=
                            `
                            <option value="${carreras[i].idCarrera}" selected>${carreras[i].nombreCarrera}</option>
                            `;
                    }

                    if (carreras[i].idCarrera != carrera) {
                        texto +=
                            `
                            <option value="${carreras[i].idCarrera}">${carreras[i].nombreCarrera}</option>
                            `;
                    }
                }
            }

            selectCarrera.innerHTML += texto;
        });

        txtNombre.focus();
    });
}

loadBook();

let btnCancelar = document.querySelector('#btnCancelar');
let btnActualizar = document.querySelector('#btnActualizar');

btnCancelar.addEventListener('click', () => {
    location.href = './modificar.html';
});

btnActualizar.addEventListener('click', () => {
    if (!(txtISBN.value == '' || txtNombre.value == '' || selectCarrera.value == '' || txtUbicacion.value == '' || txtEditorial.value == '')) {
        let data = { isbn: txtISBN.value, nombre: txtNombre.value, carrera: selectCarrera.value, ubicacion: txtUbicacion.value, editorial: txtEditorial.value };
        updateBook(data);
    }
});

const updateBook = (data) => {
    window.ipcRender.send('updateBook', data);

    localStorage.setItem('reload', '1');
    localStorage.setItem('txtISBN', txtISBN.value);
    localStorage.setItem('txtNombre', txtNombre.value);
    localStorage.setItem('selectCarrera', selectCarrera.value);
    localStorage.setItem('txtUbicacion', txtUbicacion.value);
    localStorage.setItem('txtEditorial', txtEditorial.value);

    location.reload();
}

if (localStorage.getItem('reload') == '1') {
    localStorage.removeItem('reload');

    window.ipcRender.invoke('confirmUpdateBook').then((confirm) => {
        txtISBN.value = localStorage.getItem('txtISBN');
        txtNombre.value = localStorage.getItem('txtNombre');
        txtUbicacion.value = localStorage.getItem('txtUbicacion');
        txtEditorial.value = localStorage.getItem('txtEditorial');

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger mr-2'
            },
            buttonsStyling: false,
            allowEscapeKey: false,
            allowOutsideClick: false
        });

        if (confirm == 1) {
            swalWithBootstrapButtons.fire({
                title: '¡Actualizado!',
                text: "Registro actualizado.",
                icon: 'success',
                confirmButtonClass: 'mr-2'
            }).then((result) => {
                if (result.value) {
                    localStorage.removeItem('txtISBN');
                    localStorage.removeItem('txtNombre');
                    localStorage.removeItem('txtUbicacion');
                    localStorage.removeItem('selectCarrera');
                    localStorage.removeItem('txtEditorial');
                    consultBooks();
                    location.href = './modificar.html';
                }
            });
        } else if (confirm == 0) {
            swalWithBootstrapButtons.fire({
                title: '¡Error!',
                text: "La información permanece segura :)",
                icon: 'error',
                confirmButtonClass: 'mr-2'
            }).then((result) => {
                if (result.value) {
                    localStorage.removeItem('txtISBN');
                    localStorage.removeItem('txtNombre');
                    localStorage.removeItem('txtUbicacion');
                    localStorage.removeItem('selectCarrera');
                    localStorage.removeItem('txtEditorial');
                    consultBooks();
                    location.href = './modificar.html';
                }
            });
        }
    });
}

const mostrarLibros = (libros) => {
    let TablaLibros = document.querySelector('#tabla-libros');
    let texto = '';

    TablaLibros.innerHTML = '';

    for (let i = 0; i < libros.length; i++) {
        texto +=
            `
            <tr>
                <td>${libros[i].isbn}</td>
                <td>${libros[i].nombre}</td>                
                <td>${libros[i].editorial}</td>
                <td>${libros[i].carrera}</td>
                <td>${libros[i].ubicacion}</td>
                <td class="text-center"><button type="button" class="btn btn-danger" onclick="showSwal('passing-parameter-execute-cancel', '${libros[i].isbn}')">Eliminar</button></td>
            </tr>
        `;
    }

    TablaLibros.innerHTML = texto;
}

const consultBooks = () => {
    window.ipcRender.invoke('getBooks').then((result) => {
        let { isbn, nombre, carrera, ubicacion, editorial } = result;

        isbn = isbn.replace(/(^_)|(_$)/g, '');
        nombre = nombre.replace(/(^_)|(_$)/g, '');
        carrera = carrera.replace(/(^_)|(_$)/g, '');
        ubicacion = ubicacion.replace(/(^_)|(_$)/g, '');
        editorial = editorial.replace(/(^_)|(_$)/g, '');

        isbn = isbn.split('_');
        nombre = nombre.split('_');
        carrera = carrera.split('_');
        ubicacion = ubicacion.split('_');
        editorial = editorial.split('_');

        let libros = [];

        for (let i = 0; i < isbn.length; i++) {
            libros.push({
                'isbn': isbn[i],
                'nombre': nombre[i],
                'carrera': carrera[i],
                'ubicacion': ubicacion[i],
                'editorial': editorial[i]
            });
        }

        mostrarLibros(libros);
    });
}

const formSubmit = (event) => {
    event.preventDefault();
    return false;
}