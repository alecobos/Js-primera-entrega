// Simular el portal de un portal de ventas

const productos = [
    {id: 1, nombre: 'Camiseta Argentina Adidas 2022', precio: 95000},
    {id: 2, nombre: 'Camiseta Boca Adidas 1982', precio: 70000},
    {id: 3, nombre: 'Camiseta River Adidas 2024', precio: 85000},
    {id: 4, nombre: 'Camiseta Real Madrid Adidas 2024', precio: 100000},
    {id: 5, nombre: 'Camiseta Argentina Lecoq Sportif 1986', precio: 75500},
]

let carrito = [];
let mensaje = '';   
let mensajeCarrito = '';

//Función de bienvenida
function bienvenida(){
    let nombre = prompt('Ingrese su nombre');
    let apellido = prompt('Ingrese su apellido');
    console.log(nombre);
    console.log(apellido);
    let genero = prompt('ingrese una "M" si es masculino, "F" si es femenino o "X" si prefriere no decirlo').toLowerCase();
    console.log(genero);
    let bienvenida;
    let nombreCompleto= nombre + ' ' + apellido;
    switch (genero){
        case 'm':
            bienvenida = 'Tienda de Camisetas online \n' + '¡Bienvenido ' + nombreCompleto + '!';
            break;
        case 'f':
            bienvenida = 'Tienda de Camisetas online \n' + '¡Bienvenida ' + nombreCompleto + '!';
            break;
        case 'x':
            bienvenida = 'Tienda de Camisetas online \n' + '¡Bienvenid@ ' + nombreCompleto + '!';
        break;
        default:
            alert('No ha introducido ningun genero válido, por favor vuelva a intentarlo');
            break;
    }
    alert (bienvenida);
}


//Agrega los productos al carrito que es un array 
const agregarCarrito = (cantidad, eleccion) =>{
    for (let i=0; i<cantidad; i++){
        carrito.push(productos[eleccion - 1])
        console.table(carrito)
        console.log(i)
    }
    alert(`${cantidad} productos agregados al carrito.`)
    introducirDatosProductos()
}

// function agregarProductos() {
//     let agregar = confirm('¿Desea agregar productos a su carrito?');
//     while (agregar) {
//         introducirDatosProductos();
//     }
// }

//Menu Principal de carga de productos
function introducirDatosProductos() {
    let nombreProducto, precioProducto, cantidad, total, eleccion;
    eleccion = prompt('Ingrese el producto que desea comprar: \n 1: Camiseta Argentina Adidas 2022 $95.000 \n 2: Camiseta Boca Adidas 1982 $70.000 \n 3: Camiseta River Adidas 2024 $85.000 \n 4: Camiseta Real Madrid Adidas 2024 $ 100.000 \n 5: Camiseta Argentina Lecoq Sportif 1986 $ 75.500 \n 6: Mostrar carrito y pagar \n S: Salir');
    console.log(eleccion);
    // let compra;
    switch (eleccion) {
        case '1':
            nombreProducto = 'Camiseta Argentina Adidas 2022';
            console.log(nombreProducto);
            cantidad = parseInt(prompt('Ingrese la cantidad a comprar'));
            console.log(cantidad);
            // total = cantidad * 95000;
            console.log(total);
            // compra = 'Agregó a su carrito: ' + cantidad + ' unidades de ' + nombreProducto + ' con un precio total de $' + total;
            agregarCarrito(cantidad, eleccion)
            break;
        case '2':
            nombreProducto = 'Camiseta Boca Adidas 1982';
            cantidad = parseInt(prompt('Ingrese la cantidad a comprar'));
            // total = cantidad * 70000;
            // compra = 'Agregó a su carrito: ' + cantidad + ' unidades de ' + nombreProducto + ' con un precio total de $' + total;
            agregarCarrito(cantidad, eleccion)
            break;
        case '3':
            nombreProducto = 'Camiseta River Adidas 2024';
            cantidad = parseInt(prompt('Ingrese la cantidad a comprar'));
            // total = cantidad * 85000;
            // compra = 'Agregó a su carrito: ' + cantidad + ' unidades de ' + nombreProducto + ' con un precio total de $' + total;
            agregarCarrito(cantidad, eleccion)
        break;
        case '4':
            nombreProducto = 'Camiseta Real Madrid Adidas 2024';
            cantidad = parseInt(prompt('Ingrese la cantidad a comprar'));
            // total = cantidad * 100000;
            // compra = 'Agregó a su carrito: ' + cantidad + ' unidades de ' + nombreProducto + ' con un precio total de $' + total;
            agregarCarrito(cantidad, eleccion)
        break;
        case '5':
            nombreProducto = 'Camiseta Argentina Lecoq Sportif 1986';
            cantidad = parseInt(prompt('Ingrese la cantidad a comprar'));
            // total = cantidad * 75500;
            // compra = 'Agregó a su carrito: ' + cantidad + ' unidades de ' + nombreProducto + ' con un precio total de $' + total;
            agregarCarrito(cantidad, eleccion)
        break;
        case '6':
            mostrarCarrito()
        break;
        case 's':
            alert('Gracias. Vuelva pronto.')
        break;
        case 'S':
            alert('Gracias. Vuelva pronto.')
        break;
        default:
            alert('No ha introducido ningun producto válido, por favor vuelva a intentarlo');
            break;
    }

}
//imprime el carrito
const imprimirCarrito = () =>{
    mensajeCarrito = ''
    i = 0
    console.log('paso por aqui')
    for (producto of carrito){
        mensajeCarrito += `${i+1}) ${producto.nombre} - $${producto.precio}\n`
        i++
    }
}

// funcion ver el Carrito
const mostrarCarrito = () =>{
    imprimirCarrito()
    sumaSubtotal()
    console.table(carrito)
    const opcionesCarrito = prompt(`Su carrito \n${mensajeCarrito}\n subtotal :$${subtotal}\n \nSELECCIONE UNA OPCION:\n 1) pagar\n 2) Volver`)
    // const opcionesCarrito = prompt(`Carrito de ${nombre}\n${mensaje}\nsubtotal :$${subtotal}\n \nSELECCIONE UNA OPCION:\n1) Iniciar compra\n2) Modificar carrito\n3) Volver`)
    if (opcionesCarrito == 1){
       alert('Pago realizado, muchas gracias por su compra')
    } else if (opcionesCarrito == 2){
        introducirDatosProductos()
    } else {
        alert('ERROR.\n Por favor seleccione una opción válida.')
        verCarrito()
    }
}

const sumaSubtotal = () =>{
    subtotal = 0
    for (const producto of carrito){
        subtotal = subtotal + producto.precio
    }
}


bienvenida();

introducirDatosProductos();