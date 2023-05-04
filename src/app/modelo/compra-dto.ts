import { DetalleCompraDTO } from './detalle-compra-dto';

export class CompraDTO {
  metodoPago: string = '';
  idPersona: number = 0;
  detalleCompraDTO: DetalleCompraDTO[] = [];
  idEnvio: number = 0;
}
