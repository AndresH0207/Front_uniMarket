export class ProductoGetDTO {
  idProducto: number = 0;
  estadoProducto: string = '';
  fechaLimite!: Date;
  nombreProducto: string = '';
  descripcionProducto: string = '';
  unidadesDisponibles: number = 0;
  precioActual: number = 0;
  idUsuario: number = 0;
  imagenes: string[] = [];
  categorias: string = '';
}
