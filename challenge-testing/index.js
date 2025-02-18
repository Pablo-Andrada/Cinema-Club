class CarritoCompra {
    constructor() {
      this.productos = [];
      this.total = 0;
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    calcularTotal() {
      return this.total || this.productos.reduce((acc, producto) => acc + producto.precio, 0);
    }
  
    aplicarDescuento(porcentaje) {
      const totalSinDescuento = this.calcularTotal();
      const descuento = totalSinDescuento * (porcentaje / 100);
      this.total = totalSinDescuento - descuento;
    }
  }
  
  module.exports = CarritoCompra;
  