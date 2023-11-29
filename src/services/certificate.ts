import { certificateData } from "../types/certificateData";

export const postCertificate = async (certicate: certificateData): Promise<Blob> => {

    const response = await fetch('https://apimgmt-pacificodesa.azure-api.net/ne-mensajeria-envia-polizas-pga/emision/v1/certificado/descargar', {
        method: 'POST', // Cambiado de 'GET' a 'POST'
        headers: {
            'Ocp-Apim-Subscription-Key': process.env.VITE_OCP_APIM_SUBSCRIPTION_KEY!,
            'Transaccion-Id': process.env.VITE_TRANSACCION_ID!,
            'Aplicacion-Id': process.env.VITE_APLICACION_ID!,
            'Nombre-Aplicacion': process.env.VITE_NOMBRE_APLICACION!,
            'Usuario-Consumidor-Id': process.env.VITE_USUARIO_CONSUMIDOR_ID!,
            'Nombre-Servicio-Consumidor': process.env.VITE_NOMBRE_SERVICIO_CONSUMIDOR!,
            'Token-Seguridad': process.env.VITE_TOKEN_SEGURIDAD!,
        },
        body: JSON.stringify({
            datos: {
                "numeroPoliza": certicate.numeroPoliza,
                "fechaInicioVigencia": certicate.fechaInicioCovertura,
                "fechaFinVigencia": certicate.fechaFinCovertura,
                "placa": certicate.vehiculoPlaca,
                "nombres": certicate.nombres,
                "clase": certicate.vehiculoClaseDescripcion,
                "importe": certicate.precio,
                "uso": certicate.vehiculoUsoDescripcion,
                "fechaEmision": certicate.fechaEmision,
                "vin": certicate.vehiculoVin,
                "horaEmision": certicate.horaEmision
            }
        }),

    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.blob();
};