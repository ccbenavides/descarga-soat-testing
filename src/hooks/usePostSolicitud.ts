import { useMutation } from "@tanstack/react-query";
import { postSolicitud } from "../services/solicitud";
import { ResponseRequest } from "../types/solicitud";
import { extraerFecha, extraerHora } from "../utils/dates";
import { useCertificateData } from "../context/CertificateContext";

export const usePostSolicitud = () => {
    const { setCertificateData } = useCertificateData();
    const options = {
        mutationFn: postSolicitud,
        onSuccess: ({ datos }: ResponseRequest) => {
            setCertificateData({
                numeroPoliza: datos.numeroPoliza,
                fechaEmision: extraerFecha(datos.fechaEmision ?? ""),
                horaEmision: extraerHora(datos.fechaEmision ?? ""),
                fechaInicioCovertura: extraerFecha(datos.fechaInicioCovertura ?? ""),
                fechaFinCovertura: extraerFecha(datos.fechaFinCovertura ?? ""),
                vehiculoPlaca: datos.vehiculoPlaca,
                vehiculoMarcaNombre: datos.vehiculoMarcaNombre,
                vehiculoModeloNombre: datos.vehiculoModeloNombre,
                nombres: `${datos.clienteNombre} ${datos.clientePrimerApellido} ${datos.clienteSegundoApellido}`.trim(),
                vehiculoClaseDescripcion: datos.vehiculoClaseDescripcion,
                precio: datos.precio.toString(),
                vehiculoUsoDescripcion: datos.vehiculoUsoDescripcion,
                vehiculoVin: datos.vehiculoVin
            })
        },
        onError: () => {
            console.log('Error!');
        },
    };
    return useMutation(options);
};