let botaoServico = document.getElementById('cadastrar');


console.log("teste")
botaoServico.addEventListener('submit', (e) => {
    e.preventDefault();
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

    let cpf = cpftxt.value;
    let entrada = txtEntrada.value;
    let saida = txtSaida.value;
    let modelo = txtModelo.value;
    let placa = txtPlaca.value;
    let km = txtKm.value;
    let formaPagamento = formaPagamentotxt.value;
    let deslocamento = txtDeslocamentotxt.value;
    let desconto = descontotxt.value;
    let total = totaltxt.value;


    let quatidadetxt1 = document.getElementById('quatidade1');
    let discriminacao1txt = document.getElementById('discriminacao1')
    let PUNITtxt1 = document.getElementById('P.UNIT1')
    let totaltxt1 = document.getElementById('total1')

    let quantidade1 = quatidadetxt1.value || "null";
    let discriminacao1 = discriminacao1txt.value || "null";
    let PIUNIT1 = PUNITtxt1.value || "null";
    let total1 = totaltxt1.value || "null";

    let quatidadetxt2 = document.getElementById('quatidade2');
    let discriminacao2txt = document.getElementById('discriminacao2')
    let PUNITtxt2 = document.getElementById('P.UNIT2')
    let totaltxt2 = document.getElementById('total2')

    let quantidade2 = quatidadetxt2.value || "null";
    let discriminacao2 = discriminacao2txt.value || "null";
    let PIUNIT2 = PUNITtxt2.value || "null";
    let total2 = totaltxt2.value || "null";

    let quatidadetxt3 = document.getElementById('quatidade3');
    let discriminacao3txt = document.getElementById('discriminacao3')
    let PUNITtxt3 = document.getElementById('P.UNIT3')
    let totaltxt3 = document.getElementById('total3')

    let quantidade3 = quatidadetxt3.value || "null";
    let discriminacao3 = discriminacao3txt.value || "null";
    let PIUNIT3 = PUNITtxt3.value || "null";
    let total3 = totaltxt3.value || "null";

    let quatidadetxt4 = document.getElementById('quatidade4');
    let discriminacao4txt = document.getElementById('discriminacao4')
    let PUNITtxt4 = document.getElementById('P.UNIT4')
    let totaltxt4 = document.getElementById('total4')

    let quantidade4 = quatidadetxt4.value || "null";
    let discriminacao4 = discriminacao4txt.value || "null";
    let PIUNIT4 = PUNITtxt4.value || "null";
    let total4 = totaltxt4.value || "null";

    let quatidadetxt5 = document.getElementById('quatidade5');
    let discriminacao5txt = document.getElementById('discriminacao5')
    let PUNITtxt5 = document.getElementById('P.UNIT5')
    let totaltxt5 = document.getElementById('total5')

    let quantidade5 = quatidadetxt5.value || "null";
    let discriminacao5 = discriminacao5txt.value || "null";
    let PIUNIT5 = PUNITtxt5.value || "null";
    let total5 = totaltxt5.value || "null";

    let quatidadetxt6 = document.getElementById('quatidade6');
    let discriminacao6txt = document.getElementById('discriminacao6')
    let PUNITtxt6 = document.getElementById('P.UNIT6')
    let totaltxt6 = document.getElementById('total6')

    let quantidade6 = quatidadetxt6.value || "null";
    let discriminacao6 = discriminacao6txt.value || "null";
    let PIUNIT6 = PUNITtxt6.value || "null";
    let total6 = totaltxt6.value || "null";

    let quatidadetxt7 = document.getElementById('quatidade7');
    let discriminacao7txt = document.getElementById('discriminacao7')
    let PUNITtxt7 = document.getElementById('P.UNIT7')
    let totaltxt7 = document.getElementById('total7')

    let quantidade7 = quatidadetxt7.value || "null";
    let discriminacao7 = discriminacao7txt.value || "null";
    let PIUNIT7 = PUNITtxt7.value || "null";
    let total7 = totaltxt7.value || "null";

    let quatidadetxt8 = document.getElementById('quatidade8');
    let discriminacao8txt = document.getElementById('discriminacao8')
    let PUNITtxt8 = document.getElementById('P.UNIT8')
    let totaltxt8 = document.getElementById('total8')

    let quantidade8 = quatidadetxt8.value || "null";
    let discriminacao8 = discriminacao8txt.value || "null";
    let PIUNIT8 = PUNITtxt8.value || "null";
    let total8 = totaltxt8.value || "null";

    let quatidadetxt9 = document.getElementById('quatidade9');
    let discriminacao9txt = document.getElementById('discriminacao9')
    let PUNITtxt9 = document.getElementById('P.UNIT9')
    let totaltxt9 = document.getElementById('total9')

    let quantidade9 = quatidadetxt9.value || "null";
    let discriminacao9 = discriminacao9txt.value || "null";
    let PIUNIT9 = PUNITtxt9.value || "null";
    let total9 = totaltxt9.value || "null";

    let quatidadetxt10 = document.getElementById('quatidade10');
    let discriminacao10txt = document.getElementById('discriminacao10')
    let PUNITtxt10 = document.getElementById('P.UNIT10')
    let totaltxt10 = document.getElementById('total10')

    let quantidade10 = quatidadetxt10.value || "null";
    let discriminacao10 = discriminacao10txt.value || "null";
    let PIUNIT10 = PUNITtxt10.value || "null";
    let total10 = totaltxt10.value || "null";

    let quatidadetxt11 = document.getElementById('quatidade11');
    let discriminacao11txt = document.getElementById('discriminacao11')
    let PUNITtxt11 = document.getElementById('P.UNIT11')
    let totaltxt11 = document.getElementById('total11')

    let quantidade11 = quatidadetxt11.value || "null";
    let discriminacao11 = discriminacao11txt.value || "null";
    let PIUNIT11 = PUNITtxt11.value || "null";
    let total11 = totaltxt11.value || "null";

    let quatidadetxt12 = document.getElementById('quatidade12');
    let discriminacao12txt = document.getElementById('discriminacao12')
    let PUNITtxt12 = document.getElementById('P.UNIT12')
    let totaltxt12 = document.getElementById('total12')

    let quantidade12 = quatidadetxt12.value || "null";
    let discriminacao12 = discriminacao12txt.value || "null";
    let PIUNIT12 = PUNITtxt12.value || "null";
    let total12 = totaltxt12.value || "null";

    let quatidadetxt13 = document.getElementById('quatidade13');
    let discriminacao13txt = document.getElementById('discriminacao13')
    let PUNITtxt13 = document.getElementById('P.UNIT13')
    let totaltxt13 = document.getElementById('total13')
    

    let quantidade13 = quatidadetxt13.value || "null";
    let discriminacao13 = discriminacao13txt.value || "null";
    let PIUNIT13 = PUNITtxt13.value || "null";
    let total13 = totaltxt13.value || "null";

    let quatidadetxt14 = document.getElementById('quatidade14');
    let discriminacao14txt = document.getElementById('discriminacao14')
    let PUNITtxt14 = document.getElementById('P.UNIT14')
    let totaltxt14 = document.getElementById('total14')

    let quantidade14 = quatidadetxt14.value || "null";
    let discriminacao14 = discriminacao14txt.value || "null";
    let PIUNIT14 = PUNITtxt14.value || "null";
    let total14 = totaltxt14.value || "null";

    let quatidadetxt15 = document.getElementById('quatidade15');
    let discriminacao15txt = document.getElementById('discriminacao15')
    let PUNITtxt15 = document.getElementById('P.UNIT15')
    let totaltxt15 = document.getElementById('total15')

    let quantidade15 = quatidadetxt15.value || "null";
    let discriminacao15 = discriminacao15txt.value || "null";
    let PIUNIT15 = PUNITtxt15.value || "null";
    let total15 = totaltxt15.value || "null";

    let quatidadetxt16 = document.getElementById('quatidade16');
    let discriminacao16txt = document.getElementById('discriminacao16')
    let PUNITtxt16 = document.getElementById('P.UNIT16')
    let totaltxt16 = document.getElementById('total16')

    let quantidade16 = quatidadetxt16.value || "null";
    let discriminacao16 = discriminacao16txt.value || "null";
    let PIUNIT16 = PUNITtxt16.value || "null";
    let total16 = totaltxt16.value || "null";

    let quatidadetxt17 = document.getElementById('quatidade17');
    let discriminacao17txt = document.getElementById('discriminacao17')
    let PUNITtxt17 = document.getElementById('P.UNIT17')
    let totaltxt17 = document.getElementById('total17')

    let quantidade17 = quatidadetxt17.value || "null";
    let discriminacao17 = discriminacao17txt.value || "null";
    let PIUNIT17 = PUNITtxt17.value || "null";
    let total17 = totaltxt17.value || "null";

    let quatidadetxt18 = document.getElementById('quatidade18');
    let discriminacao18txt = document.getElementById('discriminacao18')
    let PUNITtxt18 = document.getElementById('P.UNIT18')
    let totaltxt18 = document.getElementById('total18')

    let quantidade18 = quatidadetxt18.value || "null";
    let discriminacao18 = discriminacao18txt.value || "null";
    let PIUNIT18 = PUNITtxt18.value || "null";
    let total18 = totaltxt18.value || "null";
    

    let quatidadetxt19 = document.getElementById('quatidade19');
    let discriminacao19txt = document.getElementById('discriminacao19')
    let PUNITtxt19 = document.getElementById('P.UNIT19')
    let totaltxt19 = document.getElementById('total19')

    let quantidade19 = quatidadetxt19.value || "null";
    let discriminacao19 = discriminacao19txt.value || "null";
    let PIUNIT19 = PUNITtxt19.value || "null";
    let total19 = totaltxt19.value || "null";

    let quatidadetxt20 = document.getElementById('quatidade20');
    let discriminacao20txt = document.getElementById('discriminacao20')
    let PUNITtxt20 = document.getElementById('P.UNIT20')
    let totaltxt20 = document.getElementById('total20')

    let quantidade20 = quatidadetxt20.value || "null";
    let discriminacao20 = discriminacao20txt.value || "null";
    let PIUNIT20 = PUNITtxt20.value || "null";
    let total20 = totaltxt20.value || "null";


    data = {cpf: cpf, entrada: entrada, saida: saida, placa: placa, KM: km, modelo: modelo, quantidade1: quantidade1, quantidade2: quantidade2, quantidade3: quantidade3, quantidade4: quantidade4, quantidade5: quantidade5, quantidade6: quantidade6
        , quantidade7: quantidade7, quantidade8: quantidade8, quantidade9: quantidade9, quantidade10: quantidade10, quantidade11: quantidade11, quantidade12: quantidade12, quantidade13: quantidade13, quantidade14: quantidade14, quantidade15: quantidade15
        , quantidade16: quantidade16, quantidade17: quantidade17, quantidade18: quantidade18, quantidade19: quantidade19, quantidade20: quantidade20, discriminacao1: discriminacao1, discriminacao2: discriminacao2
        , discriminacao3: discriminacao3, discriminacao4: discriminacao4, discriminacao5: discriminacao5, discriminacao6: discriminacao6, discriminacao7: discriminacao7, discriminacao8: discriminacao8, discriminacao9: discriminacao9, discriminacao10: discriminacao10
        , discriminacao11: discriminacao11, discriminacao12: discriminacao12, discriminacao13: discriminacao13, discriminacao14: discriminacao14, discriminacao15: discriminacao15, discriminacao16: discriminacao16, discriminacao17: discriminacao17
        , discriminacao18: discriminacao18, discriminacao19: discriminacao19, discriminacao20: discriminacao20}


   /*  } */
});