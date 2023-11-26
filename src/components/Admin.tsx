import { useQuery } from "react-query";
import { obtenerLogs } from "../services/logs";
import { Log } from "../types/log";
import Loading from "./Loading";
import { formatearFecha } from "../utils/dates";
import Modal from "./Modal";

export default function App() {
    const { data, status } = useQuery('datos', obtenerLogs, {
        retry: 0
    });

    if (status === 'loading') {
        return <Loading />;
    }

    if (status === 'error') {
        return <Modal mensaje="lo sentimos, ha ocurrido un error al mostrar la información, intentelo más tarde" />;
    }

    return <section>

        <table className="table-auto w-full">
            <thead>
                <tr>
                    <th className="px-4 py-2">Fecha de Creación</th>
                    <th className="px-4 py-2">ID del Cliente</th>
                    <th className="px-4 py-2">Nombre del Cliente</th>
                    <th className="px-4 py-2">Correo del Cliente</th>
                    <th className="px-4 py-2">Celular del Cliente</th>
                    <th className="px-4 py-2">Placa del Vehículo</th>
                    <th className="px-4 py-2">Error Precotizado</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.datos?.map((item: Log) => {
                        return <tr key={item.id} className="odd:bg-gray-100">
                            <td className="border px-4 py-2 text-center">{formatearFecha(item.fechaCreacion)}</td>
                            <td className="border px-4 py-2">{item.clienteId}</td>
                            <td className="border px-4 py-2">{item.clienteNombre}</td>
                            <td className="border px-4 py-2">{item.clienteCorreo}</td>
                            <td className="border px-4 py-2">{item.clienteCelular}</td>
                            <td className="border px-4 py-2">{item.vehiculoPlaca}</td>
                            <td className="border px-4 py-2">{item.precotizadoError}</td>
                        </tr>
                    })
                }

            </tbody>
        </table>
    </section>
}