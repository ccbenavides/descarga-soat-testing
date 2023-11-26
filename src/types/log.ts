
export type Log = {
    id: number;
    fechaCreacion: string;
    fechaModificacion: string;
    clienteId: string;
    clienteNombre: string;
    clienteCorreo: string;
    clienteCelular: string;
    loteId: string;
    vehiculoPlaca: string;
    precio: number;
    apesegSoat: boolean;
    apesegCompania: string;
    precotizado: boolean;
    precotizadoError: string;
    danaEnviado: boolean;
    danaError: string;
};