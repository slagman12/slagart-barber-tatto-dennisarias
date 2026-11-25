
const edadUsuario = document.getElementById("edadUsuario");
const btnVerificar = document.getElementById("btnVerificar");
const resultadoEdad = document.getElementById("resultadoEdad");

if (edadUsuario && btnVerificar && resultadoEdad) {

    btnVerificar.addEventListener("click", function() {

        const edad = Number(edadUsuario.value);

        if (edadUsuario.value === "") {
            resultadoEdad.textContent = "INGRESA TU EDAD";
            resultadoEdad.style.color = "orange";

        } else if (edad < 0) {
            resultadoEdad.textContent = "EDAD NO VÁLIDA";
            resultadoEdad.style.color = "red";

        } else if (edad < 13) {
            resultadoEdad.textContent = "ACCESO DENEGADO";
            resultadoEdad.style.color = "red";

        } else if (edad < 18) {
            resultadoEdad.textContent = "NECESITAS AUTORIZACIÓN DE UN ADULTO";
            resultadoEdad.style.color = "orange";

        } else {
            resultadoEdad.textContent = "ACCESO PERMITIDO";
            resultadoEdad.style.color = "green";
        }

    });

}
const estiloTatuaje = document.getElementById("estiloTatuaje");
const btnEstilo = document.getElementById("btnEstilo");
const resultadoEstilo = document.getElementById("resultadoEstilo");

if (estiloTatuaje && btnEstilo && resultadoEstilo) {

    btnEstilo.addEventListener("click", function() {

        const estilo = estiloTatuaje.value;

        if (estilo === "") {
            resultadoEstilo.textContent = "Selecciona un estilo de tatuaje.";
            resultadoEstilo.style.color = "red";

        } else if (estilo === "blackwork") {
            resultadoEstilo.textContent = "BLACKWORK: Tatuajes realizados principalmente con tinta negra y diseños intensos.";

        } else if (estilo === "lettering") {
            resultadoEstilo.textContent = "LETTERING: Tatuajes de letras, nombres, frases y palabras personalizadas.";

        } else if (estilo === "realismo") {
            resultadoEstilo.textContent = "REALISMO: Tatuajes con detalles que parecen fotografías.";

        } else if (estilo === "tribal") {
            resultadoEstilo.textContent = "TRIBAL: Diseños con líneas, figuras y patrones geométricos.";

        } else if (estilo === "oldschool") {
            resultadoEstilo.textContent = "OLD SCHOOL: Tatuajes clásicos con colores fuertes y contornos definidos.";

        } else if (estilo === "fineline") {
            resultadoEstilo.textContent = "FINE LINE: Tatuajes delicados realizados con líneas finas.";
        }

        resultadoEstilo.style.color = "black";

    });

}


// ==========================================
// 3. SERVICIOS DE BARBERÍA
// ==========================================

const servicioBarberia = document.getElementById("servicioBarberia");
const btnBarberia = document.getElementById("btnBarberia");
const resultadoBarberia = document.getElementById("resultadoBarberia");

if (servicioBarberia && btnBarberia && resultadoBarberia) {

    btnBarberia.addEventListener("click", function() {

        const precio = servicioBarberia.value;

        if (precio === "") {
            resultadoBarberia.textContent = "Selecciona un servicio.";
            resultadoBarberia.style.color = "red";

        } else {
            resultadoBarberia.textContent = "El precio de tu servicio es: $" + precio;
            resultadoBarberia.style.color = "green";
        }

    });

}


// ==========================================
// 4. CONTADOR DE CLICS
// ==========================================

const botonContar = document.getElementById("btnContar");
const textoContador = document.getElementById("textoContador");

let contador = 0;

if (botonContar && textoContador) {

    botonContar.addEventListener("click", function() {

        contador = contador + 1;

        textoContador.textContent = "Clics: " + contador;

    });

}


// ==========================================
// 5. CATÁLOGO
// ==========================================

const catalogo = ["Producto 1", "Producto 2", "Producto 3"];

const botonCatalogo = document.getElementById("btnCatalogo");
const listaCatalogo = document.getElementById("listaCatalogo");

if (botonCatalogo && listaCatalogo) {

    botonCatalogo.addEventListener("click", function() {

        let html = "";

        for (let i = 0; i < catalogo.length; i++) {
            html += "<li>" + catalogo[i] + "</li>";
        }

        listaCatalogo.innerHTML = html;

    });

}

const productos = [

    { id: 1, nombre: "Camiseta", precio: 20.50, categoria: "Ropa", foto: "imagenes/camiseta.png" },

    { id: 2, nombre: "Gorra", precio: 15, categoria: "Ropa", foto: "imagenes/gorras.png" },

    { id: 3, nombre: "Cadenas", precio: 25, categoria: "Accesorios", foto: "imagenes/cadena.png" },

    { id: 4, nombre: "Zapatos", precio: 50, categoria: "Calzado", foto: "imagenes/nike.png" },

    { id: 5, nombre: "Joyería", precio: 10, categoria: "Accesorios", foto: "imagenes/aretes.png" },

    { id: 6, nombre: "Vapes", precio: 15, categoria: "Vapeo", foto: "imagenes/vape.png" }

];

const listaProductos = document.getElementById("listaProductos");

function mostrarProductos(lista) {

    if (!listaProductos) return;

    let html = "";

    for (let i = 0; i < lista.length; i++) {

        const p = lista[i];

        html += "<li>" +
            "<img src='" + p.foto + "' alt='" + p.nombre + "' class='foto-producto'>" +
            "<h3>" + p.nombre + "</h3>" +
            "<p>$" + p.precio.toFixed(2) + "</p>" +
            "<button onclick='agregarAlCarrito(" + p.id + ")'>Agregar</button>" +
            "</li>";

    }

    if (lista.length === 0) {
        html = "<li>No se encontraron productos.</li>";
    }

    listaProductos.innerHTML = html;

}

if (listaProductos) {
    mostrarProductos(productos);
}


// ==========================================
// 7. BUSCAR Y FILTRAR PRODUCTOS
// ==========================================

const campoBuscar = document.getElementById("campoBuscar");
const selCategoria = document.getElementById("selCategoria");
const botonFiltrar = document.getElementById("btnFiltrar");

function filtrarProductos() {

    const texto = campoBuscar.value.trim().toLowerCase();
    const categoria = selCategoria.value;

    const resultado = [];

    for (let i = 0; i < productos.length; i++) {

        const p = productos[i];

        const coincideNombre = p.nombre.toLowerCase().includes(texto);

        const coincideCategoria =
            categoria === "todas" || p.categoria === categoria;

        if (coincideNombre && coincideCategoria) {
            resultado.push(p);
        }

    }

    mostrarProductos(resultado);

}

if (campoBuscar && selCategoria && botonFiltrar) {

    botonFiltrar.addEventListener("click", filtrarProductos);

}



// ==========================================
// 8. CARRITO DE COMPRAS SLAG
// ==========================================

let carrito = [];

const textoCarrito = document.getElementById("textoCarrito");
const listaCarrito = document.getElementById("listaCarrito");
const totalCarrito = document.getElementById("totalCarrito");

const botonVaciar = document.getElementById("btnVaciar");

function agregarAlCarrito(id) {

    const producto = productos.find(p => p.id === id);

    if (producto) {
        carrito.push(producto);
    }

    mostrarCarrito();
}

function calcularTotalCarrito() {

    let total = 0;

    carrito.forEach(producto => {
        total += producto.precio;
    });

    return total;
}

function mostrarCarrito() {

    if (!listaCarrito) return;

    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {

        textoCarrito.textContent = "El carrito está vacío.";

    } else {

        textoCarrito.textContent = "Tienes " + carrito.length + " producto(s).";

        carrito.forEach((producto, indice) => {

            let elemento = document.createElement("li");

            elemento.innerHTML =
                producto.nombre + " - $" +
                producto.precio.toFixed(2) +
                " <button onclick='eliminarDelCarrito(" + indice + ")'>Eliminar</button>";

            listaCarrito.appendChild(elemento);

        });

    }

    totalCarrito.textContent = calcularTotalCarrito().toFixed(2);
}

function eliminarDelCarrito(indice) {

    carrito.splice(indice, 1);

    mostrarCarrito();
}

function vaciarCarrito() {

    carrito = [];

    mostrarCarrito();
}

if (botonVaciar) {
    botonVaciar.addEventListener("click", vaciarCarrito);
}

const mensajeCompra = document.getElementById("mensajeCompra");

function finalizarCompra() {

    if (carrito.length === 0) {
        mensajeCompra.textContent = "Tu carrito está vacío.";
        mensajeCompra.style.color = "red";
        return;
    }

    if (usuarioActivo === null) {
        mensajeCompra.textContent = "Debes iniciar sesión para comprar.";
        mensajeCompra.style.color = "red";
        return;
    }

    const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    const pedido = {
        usuario: usuarioActivo,
        cantidad: carrito.length,
        total: calcularTotalCarrito(),
        fecha: new Date().toLocaleDateString()
    };

    pedidos.push(pedido);

    localStorage.setItem("pedidos", JSON.stringify(pedidos));

    mensajeCompra.textContent =
        "¡Gracias por comprar en SLAG, " +
        usuarioActivo +
        "! Tu pedido fue registrado correctamente.";

    mensajeCompra.style.color = "green";

    vaciarCarrito();

    mostrarPedidos();
}

mostrarCarrito();

// ==========================================
// 9. REGISTRO E INICIO DE SESIÓN
// ==========================================

const cuUsuario = document.getElementById("cuUsuario");
const cuClave = document.getElementById("cuClave");

const mensajeCuenta = document.getElementById("mensajeCuenta");
const estadoSesion = document.getElementById("estadoSesion");
const listaPedidos = document.getElementById("listaPedidos");

const botonRegistro = document.getElementById("btnRegistro");
const botonEntrar = document.getElementById("btnEntrar");
const botonSalir = document.getElementById("btnSalir");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let usuarioActivo = localStorage.getItem("usuarioActivo");

function avisar(texto, color) {

    if (mensajeCuenta) {
        mensajeCuenta.textContent = texto;
        mensajeCuenta.style.color = color;
    }

}

function buscarUsuario(nombre) {

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i].usuario === nombre) {
            return usuarios[i];
        }

    }

    return null;

}

function registrar() {

    const nombre = cuUsuario.value.trim();
    const clave = cuClave.value;

    if (nombre === "" || clave.length < 6) {
        avisar("Escribe un usuario y una contraseña de al menos 6 caracteres.", "red");
        return;
    }

    if (buscarUsuario(nombre) !== null) {
        avisar("Ese usuario ya existe.", "red");
        return;
    }

    usuarios.push({
        usuario: nombre,
        clave: clave
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    avisar("Cuenta creada. Ahora inicia sesión.", "green");

}

function iniciarSesion() {

    const u = buscarUsuario(cuUsuario.value.trim());

    if (u === null || u.clave !== cuClave.value) {
        avisar("Usuario o contraseña incorrectos.", "red");
        return;
    }

    usuarioActivo = u.usuario;

    localStorage.setItem("usuarioActivo", usuarioActivo);

    avisar("Bienvenido, " + usuarioActivo + ".", "green");

    actualizarSesion();

}

function cerrarSesion() {

    usuarioActivo = null;

    localStorage.removeItem("usuarioActivo");

    avisar("Sesión cerrada.", "green");

    actualizarSesion();

}


// ==========================================
// 10. MOSTRAR PEDIDOS
// ==========================================

function mostrarPedidos() {

    if (!listaPedidos) return;

    const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    let html = "";

    for (let i = 0; i < pedidos.length; i++) {

        if (pedidos[i].usuario === usuarioActivo) {

            html += "<li>" +
                pedidos[i].fecha +
                " - " +
                pedidos[i].cantidad +
                " producto(s) - $" +
                pedidos[i].total.toFixed(2) +
                "</li>";

        }

    }

    if (html === "") {
        html = "<li>Aún no tienes pedidos.</li>";
    }

    listaPedidos.innerHTML = html;

}

function actualizarSesion() {

    if (estadoSesion) {

        if (usuarioActivo === null) {
            estadoSesion.textContent = "Sin sesión.";

        } else {
            estadoSesion.textContent = "Sesión activa: " + usuarioActivo;
        }

    }

    mostrarPedidos();

}

if (botonRegistro) {
    botonRegistro.addEventListener("click", registrar);
}

if (botonEntrar) {
    botonEntrar.addEventListener("click", iniciarSesion);
}

if (botonSalir) {
    botonSalir.addEventListener("click", cerrarSesion);
}

actualizarSesion();


// ==========================================
// 11. FINALIZAR COMPRA
// ==========================================

const mensajeCompra = document.getElementById("mensajeCompra");

function finalizarCompra() {

    if (!mensajeCompra) return;

    if (usuarioActivo === null) {

        mensajeCompra.textContent = "Inicia sesión para comprar.";
        mensajeCompra.style.color = "red";

        return;

    }

    if (carrito.length === 0) {

        mensajeCompra.textContent = "Tu carrito está vacío.";
        mensajeCompra.style.color = "red";

        return;

    }

    const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    const pedido = {

        usuario: usuarioActivo,

        cantidad: carrito.length,

        total: calcularTotalCarrito(),

        fecha: new Date().toLocaleDateString()

    };

    pedidos.push(pedido);

    localStorage.setItem("pedidos", JSON.stringify(pedidos));

    mensajeCompra.textContent =
        "Muchas gracias por confiar en Slag. Te esperamos pronto, " +
        usuarioActivo +
        ". Pedido registrado por $" +
        pedido.total.toFixed(2) + ".";

    mensajeCompra.style.color = "green";

    vaciarCarrito();

    mostrarPedidos();

}
// BOTÓN ME GUSTA

function darMeGusta(boton) {

    let contador = boton.querySelector("span");

    let likes = Number(contador.textContent);

    likes++;

    contador.textContent = likes;

    boton.style.backgroundColor = "#ff1744";
    boton.style.color = "white";

}