import { ListaEmpleado } from "@/components/ListaEmpleado";

export default function Home() {
  return (
    <div className="container max-w-screen-xl mx-auto py-10 px-2">
      <div className="py-10 lg:pt-16 my-5">
        <h1 className="py-2 font-bold text-xl lg:text-5xl">Frontend Api Empleados</h1>
        <p className="py-1 text-lg">
          Aplicación donde se obtienen los datos de una api que contiene datos de empleados y
          los departamentos para el cual trabajan
        </p>
      </div>
      <ListaEmpleado />
    </div>
  );
}
