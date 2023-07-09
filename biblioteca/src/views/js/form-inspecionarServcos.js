
    let cpftxt = document.getElementById('txtcpf');
    let txtEntrada = document.getElementById('txtEntrada');
    let txtSaida = document.getElementById('txtSaida')
    let txtModelo = document.getElementById('txtModelo')
    let txtPlaca = document.getElementById('txtPlaca')
    let txtKm = document.getElementById('txtKm')
    let formaPagamentotxt = document.getElementById('formaPagamento')
    let txtDeslocamentotxt = document.getElementById('txtDeslocamento')
    let descontotxt = document.getElementById('descontotxt');
    let totaltxt = document.getElementById('valorTotal');

    


    let quantidadetxt1 = document.getElementById('quatidade1');
    let discriminacao1txt = document.getElementById('discriminacao1')
    let PUNITtxt1 = document.getElementById('P.UNIT1')
    let totaltxt1 = document.getElementById('total1')

    

    let quantidadetxt2 = document.getElementById('quatidade2');
    let discriminacao2txt = document.getElementById('discriminacao2')
    let PUNITtxt2 = document.getElementById('P.UNIT2')
    let totaltxt2 = document.getElementById('total2')

    

    let quantidadetxt3 = document.getElementById('quatidade3');
    let discriminacao3txt = document.getElementById('discriminacao3')
    let PUNITtxt3 = document.getElementById('P.UNIT3')
    let totaltxt3 = document.getElementById('total3')

    

    let quantidadetxt4 = document.getElementById('quatidade4');
    let discriminacao4txt = document.getElementById('discriminacao4')
    let PUNITtxt4 = document.getElementById('P.UNIT4')
    let totaltxt4 = document.getElementById('total4')

    

    let quantidadetxt5 = document.getElementById('quatidade5');
    let discriminacao5txt = document.getElementById('discriminacao5')
    let PUNITtxt5 = document.getElementById('P.UNIT5')
    let totaltxt5 = document.getElementById('total5')

    

    let quantidadetxt6 = document.getElementById('quatidade6');
    let discriminacao6txt = document.getElementById('discriminacao6')
    let PUNITtxt6 = document.getElementById('P.UNIT6')
    let totaltxt6 = document.getElementById('total6')

    

    let quantidadetxt7 = document.getElementById('quatidade7');
    let discriminacao7txt = document.getElementById('discriminacao7')
    let PUNITtxt7 = document.getElementById('P.UNIT7')
    let totaltxt7 = document.getElementById('total7')

    

    let quantidadetxt8 = document.getElementById('quatidade8');
    let discriminacao8txt = document.getElementById('discriminacao8')
    let PUNITtxt8 = document.getElementById('P.UNIT8')
    let totaltxt8 = document.getElementById('total8')

    

    let quantidadetxt9 = document.getElementById('quatidade9');
    let discriminacao9txt = document.getElementById('discriminacao9')
    let PUNITtxt9 = document.getElementById('P.UNIT9')
    let totaltxt9 = document.getElementById('total9')

    

    let quantidadetxt10 = document.getElementById('quatidade10');
    let discriminacao10txt = document.getElementById('discriminacao10')
    let PUNITtxt10 = document.getElementById('P.UNIT10')
    let totaltxt10 = document.getElementById('total10')

    

    let quantidadetxt11 = document.getElementById('quatidade11');
    let discriminacao11txt = document.getElementById('discriminacao11')
    let PUNITtxt11 = document.getElementById('P.UNIT11')
    let totaltxt11 = document.getElementById('total11')

    

    let quantidadetxt12 = document.getElementById('quatidade12');
    let discriminacao12txt = document.getElementById('discriminacao12')
    let PUNITtxt12 = document.getElementById('P.UNIT12')
    let totaltxt12 = document.getElementById('total12')

    

    let quantidadetxt13 = document.getElementById('quatidade13');
    let discriminacao13txt = document.getElementById('discriminacao13')
    let PUNITtxt13 = document.getElementById('P.UNIT13')
    let totaltxt13 = document.getElementById('total13')
    

    

    let quantidadetxt14 = document.getElementById('quatidade14');
    let discriminacao14txt = document.getElementById('discriminacao14')
    let PUNITtxt14 = document.getElementById('P.UNIT14')
    let totaltxt14 = document.getElementById('total14')

    

    let quantidadetxt15 = document.getElementById('quatidade15');
    let discriminacao15txt = document.getElementById('discriminacao15')
    let PUNITtxt15 = document.getElementById('P.UNIT15')
    let totaltxt15 = document.getElementById('total15')

    

    let quantidadetxt16 = document.getElementById('quatidade16');
    let discriminacao16txt = document.getElementById('discriminacao16')
    let PUNITtxt16 = document.getElementById('P.UNIT16')
    let totaltxt16 = document.getElementById('total16')

    

    let quantidadetxt17 = document.getElementById('quatidade17');
    let discriminacao17txt = document.getElementById('discriminacao17')
    let PUNITtxt17 = document.getElementById('P.UNIT17')
    let totaltxt17 = document.getElementById('total17')

    

    let quantidadetxt18 = document.getElementById('quatidade18');
    let discriminacao18txt = document.getElementById('discriminacao18')
    let PUNITtxt18 = document.getElementById('P.UNIT18')
    let totaltxt18 = document.getElementById('total18')

    
    

    let quantidadetxt19 = document.getElementById('quatidade19');
    let discriminacao19txt = document.getElementById('discriminacao19')
    let PUNITtxt19 = document.getElementById('P.UNIT19')
    let totaltxt19 = document.getElementById('total19')



    let quantidadetxt20 = document.getElementById('quatidade20');
    let discriminacao20txt = document.getElementById('discriminacao20')
    let PUNITtxt20 = document.getElementById('P.UNIT20')
    let totaltxt20 = document.getElementById('total20')


/* Retornarbutton.addEventListener("click", function() {
    // Código a ser executado quando o botão for clicado
    location.href = './consultar.html';
  });
 */

const loadBook = () => {
window.ipcRender.invoke('getServico').then((result) => {
    let { cpf, entrada, saida, placa, KM, modelo, quantidade1, quantidade2, quantidade3, quantidade4, quantidade5, quantidade6
        , quantidade7, quantidade8, quantidade9, quantidade10, quantidade11, quantidade12, quantidade13, quantidade14, quantidade15
        , quantidade16, quantidade17, quantidade18, quantidade19, quantidade20, discriminacao1, discriminacao2
        , discriminacao3, discriminacao4, discriminacao5, discriminacao6, discriminacao7, discriminacao8, discriminacao9, discriminacao10
        , discriminacao11, discriminacao12, discriminacao13, discriminacao14, discriminacao15, discriminacao16, discriminacao17
        , discriminacao18, discriminacao19, discriminacao20, punit1, punit2, punit3, punit4, punit5, punit6, punit7, punit8, punit9, punit10
        , punit11, punit12, punit13, punit14, punit15, punit16, punit17, punit18, punit19, punit20, total1, total2, total3, total4, total5, total6
        , total7, total8, total9, total10, total11, total12, total13, total14, total15, total16, total17, total18, total19, total20, taxa_deslocamento, valor_total, valor_com_desconto, forma_pagamento } = result;
        console.log(result)
        cpftxt.value = cpf;
        txtEntrada.value = entrada
        txtSaida.value = saida;
        txtPlaca.value = placa
        txtKm.value = KM;
        txtModelo.value = modelo,
        quantidadetxt1.value = quantidade1;
        quantidadetxt2.value = quantidade2;
        quantidadetxt3.value = quantidade3;
        quantidadetxt4.value = quantidade4;
        quantidadetxt5.value = quantidade5;
        quantidadetxt6.value = quantidade6;
        quantidadetxt7.value = quantidade7;
        quantidadetxt8.value = quantidade8;
        quantidadetxt9.value = quantidade9;
        quantidadetxt10.value = quantidade10;
        quantidadetxt11.value = quantidade11;
        quantidadetxt12.value = quantidade12;
        quantidadetxt13.value = quantidade13;
        quantidadetxt14.value = quantidade14;
        quantidadetxt15.value = quantidade15;
        quantidadetxt16.value = quantidade16;
        quantidadetxt17.value = quantidade17;
        quantidadetxt18.value = quantidade18;
        quantidadetxt19.value = quantidade19;
        quantidadetxt20.value = quantidade20;





});
}

loadBook();

let btnCancelar = document.querySelector('#btnCancelar');
let btnActualizar = document.querySelector('#btnActualizar');





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

document.addEventListener('DOMContentLoaded', function() {
    window.ipcRender.invoke('getServicos')
  });

  let Retornarbutton = document.getElementById('Retornar');

    Retornarbutton.addEventListener("click", function() {
        // Código a ser executado quando o botão for clicado
        location.href = './consultarServicos.html';
      });