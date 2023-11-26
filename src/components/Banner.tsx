export default function Banner() {  
    return <div className="bg-pacifico flex flex-col justify-center items-center py-[25px]">
    <div className="text-center px-5">
      <img src="/soat.svg" alt="soat-icono" className="mx-auto w-[100px] mb-2" />
      <p className="text-xl font-semibold text-white mb-4">Consulta y descarga tu SOAT Electrónico</p>
      <p className="text-sm text-gray-200 max-w-[500px] lg:max-w-[550px] mx-auto">Recuerda que aquí podrás consultar tu SOAT Virtual de cualquier empresa de seguro como Interseguro, Rimac, La Positiva, Pacífico, Mapfre, Protecta y Crecer</p>
    </div>
  </div>
}