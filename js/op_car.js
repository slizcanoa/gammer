
        window.onload = function () {
            // Variables
            let baseDeDatos = [

                {
                    id: 1,
                    nombre: 'Leche Deslactosada',
                    descripcion:'Ideal para personas que no toleran la lactosa. Alimento rico en nutrientes y minerales.',
                    precio: 8000,
                    imagen: './img/leche.jpg'
                },
                {
                    id: 2,
                    nombre: 'Queso Crema',
                    descripcion:'Acompaña tus recetas y comidas favoritas con un exquisito queso.',
                    precio: 5000,
                    imagen: './img/queso.1.jpg'
                },
                {
                    id: 3,
                    nombre: 'Yogurt Alpina',
                    precio: 2500,
                    descripcion: 'Yogur óptimo de aroma, cuerpo, textura y sabor ideal para cuidar tu cuerpo.',
                    imagen: './img/yogurt.1.jpg'
                },
                  
                {
                    id: 4,
                    nombre: 'Detodito',
                    precio: 2000,
                    descripcion:'Contiene papas,chicharrón y plátano. Delicioso sabor',
                    imagen: './img/detodito.jpg'
                },
                 {
                    id: 5,
                    nombre: 'Doritos',
                    precio: 1800,
                    descripcion:'Pasaboca hecha de maíz mega queso doritos.',
                    imagen: './img/doritos.jpg'
                },
                 {
                    id: 6,
                    nombre: 'Chicharron Americano',
                    precio: 2800,
                    descripcion:'Chicharron americano 18 % mas contenido.',
                    imagen: './img/chicharron.jpg'
                },
                 {
                    id: 7,
                    nombre: 'Zucaritas',
                    precio: 19500,
                    descripcion:'Hojuelas de maíz con azúcar adicionadas con complejo B, hierro y zinc.',
                    imagen: './img/zucaritas.jpg'
                },
                 {
                    id: 8,
                    nombre: 'Chocapic ',
                    precio: 9900,
                    descripcion:'Estos crujientes pétalos están elaborados con cereales integrales y tienen el sabor a chocolate único.',
                    imagen: './img/chocapic.jpg'
                },
                 {
                    id: 9,
                    nombre: 'Froot Loops',
                    precio: 10000,
                    descripcion:'Bocados de gran tamaño con sabores de frutas naturales deliciosamente intensos  ¡Sabor a explosión! Froot Loops.',
                    imagen: './img/froot.jpg'
                },
                {
                    id: 10,
                    nombre: 'Arroz Premium',
                    precio: 8500,
                    descripcion:'El nuevo Arroz Diana Premium es un arroz altamente seleccionado. Escogemos los mejores, más blancos y más grandes granos para que lleguen a tu mesa. ',
                    imagen: './img/arroz.jpg'
                },
                {
                    id: 11,
                    nombre: 'Garbanzo',
                    precio: 6000,
                    descripcion:'El garbanzo tiene muchos minerales, sobre todo fósforo, hierro y magnesio y es especialmente rico en vitaminas B1, B6 y ácido fólico.',
                    imagen: './img/garbanzo.jpg'
                },
                {
                    id: 12,
                    nombre: 'Frijoles Lata',
                    precio: 2800,
                    descripcion:'constituye una rica fuente de proteínas e hidratos de carbono, además es abundante en vitaminas del complejo B .Para una buena bandeja paisa.',
                    imagen: './img/frijol.1.jpg'
                }




            ]
            let $items = document.querySelector('#items');
            let carrito = [];
            let total = 0;
            let $carrito = document.querySelector('#carrito');
            let $total = document.querySelector('#total');
            // Funciones
            function renderItems () {
                for (let info of baseDeDatos) {
                    // Estructura
                    let miNodo = document.createElement('div');
                    miNodo.classList.add('card', 'col-sm-4');
                    // Body
                    let miNodoCardBody = document.createElement('div');
                    miNodoCardBody.classList.add('card-body');
                    // Titulo
                    let miNodoTitle = document.createElement('h5');
                    miNodoTitle.classList.add('card-title');
                    miNodoTitle.textContent = info['nombre'];
                    // Imagen
                    let miNodoImagen = document.createElement('img');
                    miNodoImagen.classList.add('img-fluid');
                    miNodoImagen.setAttribute('src', info['imagen']);
                    // descripcion
                     let miNodoDescripcion = document.createElement('div');
                    miNodoDescripcion.classList.add('card-text');
                    miNodoDescripcion.textContent= info['descripcion'];
                    //Precio
                    let miNodoPrecio = document.createElement('h5');
                    miNodoPrecio.classList.add('card-text');
                    miNodoPrecio.textContent = '$'+info['precio'] ;
                    // Boton 
                    let miNodoBoton = document.createElement('button');
                    miNodoBoton.classList.add('btn', 'btn-primary');
                    miNodoBoton.textContent = 'Agregar a carrito';
                    miNodoBoton.setAttribute('marcador', info['id']);
                    miNodoBoton.addEventListener('click', anyadirCarrito);
                    // Insertamos
                    miNodoCardBody.appendChild(miNodoImagen);
                    miNodoCardBody.appendChild(miNodoTitle);
                    miNodoCardBody.appendChild(miNodoDescripcion);
                    miNodoCardBody.appendChild(miNodoPrecio);
                    miNodoCardBody.appendChild(miNodoBoton);
                    miNodo.appendChild(miNodoCardBody);
                    $items.appendChild(miNodo);
                }
            }

            function anyadirCarrito () {
                // Anyadimos el Nodo a nuestro carrito
                carrito.push(this.getAttribute('marcador'))
                // Calculo el total
                calcularTotal();
                // Renderizamos el carrito 
                renderizarCarrito();
            }

            function renderizarCarrito () {
                
                $carrito.textContent = '';
                
                let carritoSinDuplicados = [...new Set(carrito)];
                
                carritoSinDuplicados.forEach(function (item, indice) {
                    
                    let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                        return itemBaseDatos['id'] == item;
                    });
                    
                    let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
                        return itemId === item ? total += 1 : total;
                    }, 0);
                    
                    let miNodo = document.createElement('li');
                    miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
                    miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]['nombre']} = ${miItem[0]['precio']}`;
                    
                    let miBoton = document.createElement('button');
                    miBoton.classList.add('btn', 'btn-danger', 'mx-5');
                    miBoton.textContent = 'X';
                    miBoton.style.marginLeft = '1rem';
                    miBoton.setAttribute('item', item);
                    miBoton.addEventListener('click', borrarItemCarrito);
                    
                    miNodo.appendChild(miBoton);
                    $carrito.appendChild(miNodo);
                })
            }

            function borrarItemCarrito () {
                console.log()
                
                let id = this.getAttribute('item');
                
                carrito = carrito.filter(function (carritoId) {
                    return carritoId !== id;
                });
                
                renderizarCarrito();
                
                calcularTotal();
            }

            function calcularTotal () {
                
                total = 0;
                
                for (let item of carrito) {
                    
                    let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                        return itemBaseDatos['id'] == item;
                    });
                    total = total + miItem[0]['precio'];
                }
                
                let totalDosDecimales = total.toFixed(2);
                
                $total.textContent = totalDosDecimales;
            }
            

        
            renderItems();
        } 
   