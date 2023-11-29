import { ResponseRequest } from "../types/solicitud";

export const postSolicitud = async (plate: string) => {
    console.info(plate)
    const response = await fetch('https://apimgmt-pacificodesa.azure-api.net/ne-solicitudes-soat-gen/venta/v1/solicitudes/5ce9af30-1271-441a-9fb1-a393b257d630', {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': process.env.VITE_OCP_APIM_SUBSCRIPTION_KEY!,
            'Transaccion-Id': process.env.VITE_TRANSACCION_ID!,
            'Aplicacion-Id': process.env.VITE_APLICACION_ID!,
            'Nombre-Aplicacion': process.env.VITE_NOMBRE_APLICACION!,
            'Usuario-Consumidor-Id': process.env.VITE_USUARIO_CONSUMIDOR_ID!,
            'Nombre-Servicio-Consumidor': process.env.VITE_NOMBRE_SERVICIO_CONSUMIDOR!,
            'Token-Seguridad': process.env.VITE_TOKEN_SEGURIDAD!,
        },
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json() as Promise<ResponseRequest>;
};
