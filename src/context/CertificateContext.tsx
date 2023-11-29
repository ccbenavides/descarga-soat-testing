import React, { createContext, useState, useContext } from 'react';
import { certificateData } from '../types/certificateData';


type DataContextType = {
    certificateData: certificateData
    setCertificateData: (temp: certificateData) => void
}

export const ContextCertificate = createContext<DataContextType | undefined>(undefined);


export const ClienteProvider = ({ children }: { children: React.ReactNode }) => {
    const [certificateData, setCertificateData] = useState<certificateData>({
        numeroPoliza: "",
        fechaEmision: "",
        horaEmision: "",
        fechaInicioCovertura: "",
        fechaFinCovertura: "",
        vehiculoPlaca: "",
        nombres: "",
        vehiculoClaseDescripcion: "",
        vehiculoMarcaNombre: "",
        vehiculoModeloNombre: "",
        precio: "",
        vehiculoUsoDescripcion: "",
        vehiculoVin: ""
    });

    return <ContextCertificate.Provider value={{ certificateData, setCertificateData }}> {children} </ContextCertificate.Provider>
};

export const useCertificateData = () => {
    const context = useContext(ContextCertificate);
    if (!context) {
        throw new Error('useCertificateData debe ser usado dentro de un ClienteProvider');
    }
    return context;
};