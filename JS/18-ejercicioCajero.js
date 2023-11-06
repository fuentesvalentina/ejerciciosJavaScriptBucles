const opcion = prompt('Seleccione una opcion: 1- consulte el saldo, 2- Ingrese dinero, 3- Extraiga dinero');

let saldo = 0 

/*if( opcion === '1'){
    document.write(`<p>Su saldo actual es ${saldo}</p>`);
}else if(opcion === '2'){
    document.write(`<p>quiere ingresar dinero</p>`);
}else if(opcion === '3'){
    document.write(`<p>quiere extraer dinero</p>`);
}else{
    alert('Selecciono una opcion erronea')
}
*/

switch(opcion){
    case 'saldo':
    case 'consultar saldo':
    case '1':
    document.write(`<p>Su saldo actual es ${saldo}</p>`);
    break;
    case '2':
    case 'Ingresar dinero':
    let montoIngreso = parseFloat(prompt('Ingrese la cantidad de dinero a depositar:'));
    if (!isNaN(montoIngreso) && montoIngreso > 0) {
      saldo = saldo + montoIngreso;
      document.write(`<p>Ha ingresado ${montoIngreso} unidades de dinero. Su saldo actual es ${saldo}</p>`);
    } else {
      alert('Ingrese una cantidad válida de dinero.');
    }
    break;
    case '3':
    let montoExtraer = parseFloat(prompt('Ingrese la cantidad de dinero a extraer:'));
    if(!isNaN(montoExtraer) && montoExtraer > 0 && montoExtraer < saldo){
        saldo = saldo - montoExtraer;
        document.write(`<p>Ha extraído ${montoExtraer} unidades de dinero. Su saldo actual es ${saldo}</p>`)
    } else {
        document.write('Saldo insuficiente')
    }
    break;
    default:
        alert('Selecciono una opcion erronea')
}