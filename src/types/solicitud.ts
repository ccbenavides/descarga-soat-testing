export interface ResponseRequest {
    datos: {
        id: string;
        fechaInicioCovertura: string;
        fechaFinCovertura: string;
        clienteId: string | null;
        clienteNombre: string;
        clientePrimerApellido: string;
        clienteSegundoApellido: string;
        clienteTipoDocumento: string;
        clienteDocumentoId: string;
        clienteFechaNacimiento: string;
        clienteTelefono: string;
        clienteCorreo: string;
        clienteDireccion: string;
        clienteTipo: string;
        clienteGenero: string;
        clienteDireccionDepartamento: string;
        clienteDireccionProvincia: string;
        clienteDireccionDistrito: string;
        origen: string | null;
        canalId: number;
        tarifarioId: number;
        canal: string;
        grupoNombre: string | null;
        grupoId: number;
        departamentoNombre: string;
        departamentoId: string;
        provinciaNombre: string;
        provinciaId: string;
        distritoNombre: string;
        distritoId: string;
        direccionTipo: string;
        calleTipo: string;
        precio: number;
        tarifa: number;
        precioRenovacion: number;
        tarifaRenovacion: number;
        estado: string;
        vehiculoPlaca: string;
        vehiculoAsientos: number;
        vehiculoVin: string;
        vehiculoTipoId: number;
        vehiculoTipoNombre: string;
        vehiculoTipoDescripcion: string;
        vehiculoUsoId: number;
        vehiculoUsoNombre: string;
        vehiculoUsoDescripcion: string;
        vehiculoClaseId: number;
        vehiculoClaseNombre: string;
        vehiculoClaseDescripcion: string;
        vehiculoMarcaId: number;
        vehiculoMarcaNombre: string;
        vehiculoMarcaCodigo: string;
        vehiculoMarcaCodigoApeseg: string;
        vehiculoModeloId: number;
        vehiculoModeloNombre: string;
        vehiculoModeloCodigo: string;
        vehiculoModeloCodigoApeseg: string;
        vehiculoAnio: string;
        vehiculoCategoriaMtc: string | null;
        vehiculoTipoRiesgo: string;
        descuentoId: string | null;
        descuentoNombre: string;
        descuentoPrecio: number | null;
        descuentoTarifa: number | null;
        descuentoPrecioRenovacion: number | null;
        descuentoTarifaRenovacion: number | null;
        descuentoOrganizacionPrimaria: string | null;
        descuentoOrganizacionSecundaria: string | null;
        organizacionPrimaria: string;
        organizacionSecundaria: string;
        numSecuencial: number;
        numTrabajo: number;
        renovacion: boolean;
        terminos: boolean;
        dataPersonal: boolean;
        fechaFinCoverturaApeseg: string;
        clienteNacionalidad: string | null;
        dataPromociones: boolean;
        vehiculoModeloEstandar: string;
        vehiculoModeloAlternativo: string | null;
        numeroPoliza: string;
        departamentoCirculacion: string;
        numeroOportunidad: string;
        flagErrorApeseg: boolean;
        respuestaVehiculo: string;
        fechaVencimiento: string;
        esValido: boolean;
        esValidoGv: boolean;
        flagAutoEfectivo: string | null,
        transaccionId: string | null,
        token: string | null,
        numeroTarjeta: string | null,
        marca: string | null,
        fechaExpiracion: string | null,
        idComercio: string | null,
        fechaTransaccion: string | null,
        tipoProceso: string | null,
        fechaEmision: string | null
    }
}