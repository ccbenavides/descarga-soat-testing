export const obtenerLogs = async () => {
    const respuesta = await fetch('https://apimgmt-pacificodesa.azure-api.net/boes/ux-gestion-proceso-interno-soat/v1/gestion-proceso/log/consultar-logs', {
        headers: {
            'Aplicacion-Id': 'ECommerceSOAT',
            'Nombre-Aplicacion': 'aplicacion',
            'Nombre-Servicio-Consumidor': 'servicio',
            'Token-Seguridad': 'token',
            'Transaccion-Id': '123e4567-e89b-12d3-a456-426614174000',
            'Usuario-Consumidor-Id': 'anonimus',
            'Ocp-Apim-Subscription-Key': '926ec90111ea4d3bb44699fa01f01c1b',
            'Content-Type': 'application/json',
        },
    });
    if (!respuesta.ok) {
        throw new Error('Error al obtener los datos');
    }
    return respuesta.json();
};