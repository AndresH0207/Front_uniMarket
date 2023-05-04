import { DetalleCompraDTO } from './detalle-compra-dto';

export class CompraGetDTO {
  idCompra: number = 0;
  fechaCompra!: Date;
  totalCompra: number = 0;
  idUsuario: number = 0;
  metodoPago: string = '';
  detalleCompraDTO: DetalleCompraDTO[] = [];
  idEnvio: number = 0;
}
