document.addEventListener("DOMContentLoaded", function() {
    // Cargar clientes al cargar la página
    if (document.getElementById('tablaClientes')) {
        cargarClientes();
    }

    // Cargar productos al cargar la página
    if (document.getElementById('tablaProductos')) {
        cargarProductos();
    }

    // Cargar empleados al cargar la página
    if (document.getElementById('tablaEmpleados')) {
        cargarEmpleados();
    }

    // Cargar ventas al cargar la página
    if (document.getElementById('tablaVentas')) {
        cargarVentas();
    }

    // Manejar el formulario de clientes
    if (document.getElementById('formCliente')) {
        document.getElementById('formCliente').addEventListener('submit', function(e) {
            e.preventDefault();
            agregarCliente();
        });
    }

    // Manejar el formulario de productos
    if (document.getElementById('formProducto')) {
        document.getElementById('formProducto').addEventListener('submit', function(e) {
            e.preventDefault();
            agregarProducto();
        });
    }

    // Manejar el formulario de empleados
    if (document.getElementById('formEmpleado')) {
        document.getElementById('formEmpleado').addEventListener('submit', function(e) {
            e.preventDefault();
            agregarEmpleado();
        });
    }

    // Manejar el formulario de ventas
    if (document.getElementById('formVenta')) {
        document.getElementById('formVenta').addEventListener('submit', function(e) {
            e.preventDefault();
            procesarVenta();
        });
    }
});

function cargarClientes() {
    fetch('../php/listar_clientes.php')
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector('#tablaClientes tbody');
            tbody.innerHTML = '';
            data.forEach(cliente => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${cliente.id}</td>
                    <td>${cliente.nombre}</td>
                    <td>${cliente.apellidos}</td>
                    <td>${cliente.telefono}</td>
                    <td>${cliente.correo}</td>
                    <td>${cliente.membresia}</td>
                    <td class="actions">
                        <button class="delete" onclick="eliminarCliente(${cliente.id})">Eliminar</button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        });
}

function agregarCliente() {
    const formData = new FormData(document.getElementById('formCliente'));

    fetch('../php/agregar_cliente.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message);
                cargarClientes();
            } else {
                alert(data.message);
            }
        });
}

function eliminarCliente(id) {
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
        fetch('../php/eliminar_cliente.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert(data.message);
                    cargarClientes();
                } else {
                    alert(data.message);
                }
            });
    }
}

function cargarProductos() {
    fetch('../php/listar_productos.php')
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector('#tablaProductos tbody');
            tbody.innerHTML = '';
            data.forEach(producto => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${producto.id}</td>
                    <td>${producto.nombre}</td>
                    <td>${producto.precio}</td>
                    <td>${producto.stock}</td>
                    <td class="actions">
                        <button class="delete" onclick="eliminarProducto(${producto.id})">Eliminar</button>
                    </td>
                `;
                tbody.appendChild(row);
            });

            // Cargar productos en el formulario de ventas
            if (document.getElementById('id_producto')) {
                const select = document.getElementById('id_producto');
                select.innerHTML = '';
                data.forEach(producto => {
                    const option = document.createElement('option');
                    option.value = producto.id;
                    option.textContent = producto.nombre;
                    select.appendChild(option);
                });
            }
        });
}

function agregarProducto() {
    const formData = new FormData(document.getElementById('formProducto'));

    fetch('../php/agregar_producto.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message);
                cargarProductos();
            } else {
                alert(data.message);
            }
        });
}

function eliminarProducto(id) {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
        fetch('../php/eliminar_producto.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert(data.message);
                    cargarProductos();
                } else {
                    alert(data.message);
                }
            });
    }
}

function cargarEmpleados() {
    fetch('../php/listar_empleados.php')
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector('#tablaEmpleados tbody');
            tbody.innerHTML = '';
            data.forEach(empleado => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${empleado.id}</td>
                    <td>${empleado.nombre}</td>
                    <td>${empleado.apellidos}</td>
                    <td>${empleado.puesto}</td>
                    <td>${empleado.salario}</td>
                    <td class="actions">
                        <button class="delete" onclick="eliminarEmpleado(${empleado.id})">Eliminar</button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        });
}

function agregarEmpleado() {
    const formData = new FormData(document.getElementById('formEmpleado'));

    fetch('../php/agregar_empleado.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message);
                cargarEmpleados();
            } else {
                alert(data.message);
            }
        });
}

function eliminarEmpleado(id) {
    if (confirm('¿Estás seguro de que deseas eliminar este empleado?')) {
        fetch('../php/eliminar_empleado.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert(data.message);
                    cargarEmpleados();
                } else {
                    alert(data.message);
                }
            });
    }
}

function cargarVentas() {
    fetch('../php/listar_ventas.php')
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector('#tablaVentas tbody');
            tbody.innerHTML = '';
            data.forEach(venta => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${venta.id}</td>
                    <td>${venta.cliente}</td>
                    <td>${venta.producto}</td>
                    <td>${venta.cantidad}</td>
                    <td>${venta.fecha}</td>
                `;
                tbody.appendChild(row);
            });
        });
}

function procesarVenta() {
    const formData = new FormData(document.getElementById('formVenta'));

    fetch('../php/procesar_venta.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message);
                cargarVentas();
                cargarProductos();// Actualizar la lista
