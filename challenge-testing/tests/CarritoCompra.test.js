const CarritoCompra = require("../index");

describe("CarritoCompra", () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  test("Debe inicializarse con un carrito vacío", () => {
    expect(carrito.productos).toEqual([]);
  });

  test("Debe agregar productos correctamente", () => {
    const producto = { nombre: "Laptop", precio: 1000 };
    carrito.agregarProducto(producto);
    expect(carrito.productos).toContain(producto);
  });

  test("Debe calcular el total correctamente", () => {
    carrito.agregarProducto({ nombre: "Mouse", precio: 50 });
    carrito.agregarProducto({ nombre: "Teclado", precio: 100 });
    expect(carrito.calcularTotal()).toBe(150);
  });

  test("Debe aplicar un descuento correctamente", () => {
    carrito.agregarProducto({ nombre: "Monitor", precio: 200 });
    carrito.agregarProducto({ nombre: "Impresora", precio: 300 });
    carrito.aplicarDescuento(10); // 10% de descuento
    expect(carrito.calcularTotal()).toBe(450); // 500 - 10% = 450
  });
});
