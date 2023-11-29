# Resume.tsx

Este archivo es un componente de React que se utiliza para manejar la funcionalidad de la generación de certificados.

## Importaciones

- `Header`: Un componente de React que representa el encabezado de la página.
- `GrDownload`: Un icono de descarga de la biblioteca `react-icons/gr`.
- `useCertificateData`: Un hook personalizado que proporciona los datos del certificado.
- `usePostCertificate`: Un hook personalizado que maneja la lógica de la petición POST para generar el certificado.
- `parsearFecha`: Una función de utilidad para parsear fechas.
- `Loading`: Un componente de React que muestra una animación de carga.

## Funcionalidad

El componente `Resume` utiliza los datos del certificado proporcionados por el hook `useCertificateData`. Cuando el usuario hace clic en el botón de generación de certificados, se llama a la función `handleCertificate`. Esta función previene el comportamiento predeterminado del formulario, y luego llama a la mutación `usePostCertificate` con los datos del certificado.

Si la mutación es exitosa, se crea un nuevo enlace con la URL del blob devuelto por la mutación. El nombre de descarga del enlace se establece en la hora actual más '-soat.pdf', y luego se hace clic en el enlace para iniciar la descarga.

## Uso

Este componente se utiliza en la aplicación para permitir a los usuarios generar y descargar certificados.

## Código

```typescriptreact
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
}
```
