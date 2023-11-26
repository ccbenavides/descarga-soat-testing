/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useState } from "react";
import { useMutation } from "react-query";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

export default function Landing() {
  const [plateSelected, setPlateSelected] = useState("");
  const navigate = useNavigate();
  const refs = Array(6).fill(0).map(() => useRef<HTMLInputElement>(null));

  const mutation = useMutation(postSolicitud, {
    onSuccess: () => {
      // Handle success state
      console.log('Success!');
    },
    onError: () => {
      // Handle error state
      console.log('Error!');
    },
  });

  const handleChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length === 1 && index < refs.length - 1) {
      refs[index + 1].current?.focus();
    }
    const foundEmpty = refs.some(ref => ref.current?.value === '');
    if (foundEmpty) {
      setPlateSelected("");
    } else {
      setPlateSelected(refs.map(ref => ref.current?.value).join(''));
    }
  };

  const handleKeyDown = (index: number) => (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && event.currentTarget.value === '' && index > 0) {
      refs[index - 1].current?.focus();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate(plateSelected, {
      onSuccess: () => {
        navigate("/resumen")
      }
    })

  }



  return <section className="mb-10">
    <Header />
    <Banner />
    {mutation.isLoading && <Loading />}
    <div className="mt-7">
      <h2 className="text-center text-cyan-600 text-3xl font-semibold">Ingresa tu placa</h2>
      <form action="#" onSubmit={handleSubmit}>
        <div className="flex gap-x-3 lg:gap-x-5 max-w-[400px] lg:max-w-[500px] mx-auto mt-7">
          {refs.map((ref, index) => (
            <input
              key={index}
              type="text"
              className="border-2 border-gray-400/70 rounded text-3xl lg:text-[45px] w-[19%] text-center p-3 lg:p-2 uppercase"
              ref={ref}
              maxLength={1}
              onChange={handleChange(index)}
              onKeyDown={handleKeyDown(index)}
              autoComplete="off"
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="mb-1">¿Te ayudemos a recordar cuando tu SOAT esté por vencer?</p>
          <label className="text-cyan-600" htmlFor="email-input">Déjanos tu correo electrónico:</label>
          <div className="mt-2 mx-auto max-w-[300px]">
            <input type="email" id='email-input' className="border border-gray-400/80 w-full py-1.5 px-4 rounded text-center" placeholder="Ingresa correo(opcional)" />

          </div>

        </div>

        <div className="flex justify-center mt-6">
          <input type="checkbox" id='terminos' className="mr-2" required />
          <label htmlFor="terminos" className="text-gray-500/90 text-base" >Acepto <b>los términos y condiciones</b>, Conoce más <a href="#" className="text-sky-600 font-semibold">aquí.</a></label>
        </div>

        {plateSelected && <div className="w-[300px] mx-auto">
          <button type="submit" className="bg-red-600 text-white w-full text-md font-bold py-2 px-8 rounded-full mt-8">Consultar SOAT</button>
        </div>}
      </form>
    </div>
  </section>

}


const postSolicitud = async (plate: string) => {
  console.log(plate)
  const response = await fetch('https://apimgmt-pacificodesa.azure-api.net/ne-solicitudes-soat-gen/venta/v1/solicitudes/5ce9af30-1271-441a-9fb1-a393b257d630', {
    method: 'GET',
    headers: {
      'Ocp-Apim-Subscription-Key': '926ec90111ea4d3bb44699fa01f01c1b',
      'Transaccion-Id': '21e22474-d31f-4119-8472-d9d448727cfe',
      'Aplicacion-Id': 'ECommerceSOAT',
      'Nombre-Aplicacion': 'app1234',
      'Usuario-Consumidor-Id': 'user1234',
      'Nombre-Servicio-Consumidor': 'user1234',
      'Token-Seguridad': '21e22474-d31f-4119-8472-d9d448727cfe',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
