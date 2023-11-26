export function formatearFecha(fecha: string) {
    const fechaObj = new Date(fecha);
    const dia = fechaObj.getDate().toString().padStart(2, '0');
    const mes = (fechaObj.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JavaScript comienzan desde 0
    const ano = fechaObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
}