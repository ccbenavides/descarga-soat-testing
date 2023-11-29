import Header from "../components/Header";

import { GrDownload } from "react-icons/gr";
import { useCertificateData } from "../context/CertificateContext";
import { usePostCertificate } from "../hooks/usePostCertificate";
import { parsearFecha } from "../utils/dates";
import Loading from "../components/Loading";

export default function Resume() {
    const { certificateData } = useCertificateData();
    const mutation = usePostCertificate();

    const handleCerficate = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        mutation.mutate(certificateData, {
            onSuccess: (blob) => {
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = new Date().getTime() + '-soat.pdf';
                link.click();
            }
        })
    }

    return <section className="flex flex-col h-screen" role="section">
        <Header />
        {mutation.isPending && <Loading />}
        <main className="bg-pacifico flex items-center h-full" >
            <div className="text-white text-center w-full">
                <h1 className="text-2xl lg:text-4xl font-bold">Tienes un SOAT vigente hasta</h1>
                <h2 className="text-4xl lg:text-[50px] font-semibold mt-3 lg:mt-7">{parsearFecha(certificateData.fechaFinCovertura)}</h2>
                <div className="mb-5 mt-8  rounded-xl  shadow py-3 px-2 max-w-[300px] bg-white shadow mx-auto text-gray-700 text-sm flex items-center justify-around">
                    <img src="/car.svg" alt="car-icono" className="w-[60px]" />
                    <div className="flex">
                        <div className="flex flex-col">
                            <span className="font-semibold">{certificateData.vehiculoPlaca}</span>
                            <span className="">{certificateData.vehiculoUsoDescripcion}</span>
                        </div>
                        <div className="w-[1px] h-[50px] bg-gray-300 mx-5"></div>
                        <div className="flex flex-col">
                            <span>{certificateData.vehiculoMarcaNombre}</span>
                            <span>{certificateData.vehiculoModeloNombre}</span>
                        </div>
                    </div>
                </div>
                <h2 className="text-lg font-semibold">Descarga la Constancia de Vigencia de tu SOAT</h2>
                <div className="mt-5 max-w-[260px] mx-auto">
                    <button onClick={handleCerficate} className="bg-active py-4 px-5 w-full rounded-xl shadow-xl flex items-center justify-center gap-x-3">
                        <GrDownload className="text-3xl" />
                        <span className="text-lg font-bold">SOAT Electrónico</span>
                    </button>
                </div>

            </div>
        </main>
    </section>
}