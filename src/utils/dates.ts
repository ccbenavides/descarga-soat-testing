

export function formatearFecha(fecha: string) {
    const fechaObj = new Date(fecha);
    const dia = fechaObj.getDate().toString().padStart(2, '0');
    const mes = (fechaObj.getMonth() + 1).toString().padStart(2, '0');
    const ano = fechaObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
}


export function formatearFechaResume(fecha: string): string {
    if (fecha === "") return "";
    const fechaObjeto = new Date(fecha);
    const dia = fechaObjeto.getDate();
    const ano = fechaObjeto.getFullYear();

    const meses = [
        'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO',
        'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'
    ];

    const mes = meses[fechaObjeto.getMonth()];

    return `${mes} ${dia}, ${ano}`;
}


export function extraerHora(fecha: string): string {
    if (fecha === "") return "";
    const fechaObjeto = new Date(fecha);
    const horas = fechaObjeto.getHours().toString().padStart(2, '0');
    const minutos = fechaObjeto.getMinutes().toString().padStart(2, '0');

    return `${horas}:${minutos}:00`;
}

export function extraerFecha(fecha: string): string {
    if (fecha === "") return "";
    const fechaObjeto = new Date(fecha);
    const dia = fechaObjeto.getDate().toString().padStart(2, '0');
    const mes = (fechaObjeto.getMonth() + 1).toString().padStart(2, '0');
    const ano = fechaObjeto.getFullYear();

    return `${dia}/${mes}/${ano}`;
}

export function parsearFecha(fecha: string): string {
    if (fecha === "") return "";
    const [dia, mes, ano] = fecha.split('/');
    const fechaObjeto = new Date(`${ano}/${mes}/${dia}`);
    const diaNumero = fechaObjeto.getDate();
    const mesNombre = fechaObjeto.toLocaleString('es-ES', { month: 'long' });
    const anoNumero = fechaObjeto.getFullYear();
    const mesNombreCapitalize = mesNombre.charAt(0).toUpperCase() + mesNombre.slice(1);

    return `${mesNombreCapitalize} ${diaNumero}, ${anoNumero}`;
}