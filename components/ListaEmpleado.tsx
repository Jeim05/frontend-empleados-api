'use client'
import { Empleado } from '@/Interfaces/Empleado'
import { appsettings } from '@/settings/appsettings';
import Link from 'next/link';
import { use, useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export const ListaEmpleado = () => {
  const [empleados, setEmpleados] = useState<Empleado[]>([]);

  const obtenerEmpleados = async () => {
    const response = await fetch(`${appsettings.apiUrl}Empleado`);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      setEmpleados(data)
    }
  }

  useEffect(() => {
    obtenerEmpleados()
  }, [])

  return (
    <div className='container mx-auto py-10'>
      <div className='card py-8'>
        <div className='card-header'>
          <h1 className='text-3xl font-bold'>Lista de empleados</h1>
          <div className='my-5'>
            <Link href="/" className='py-4 px-2 bg-blue-700 text-white text-base font-semibold rounded-md'>Crear nuevo</Link>
          </div>
        </div>
      </div>
      <hr />
      <div className='card-body'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Column 2</th>
              <th scope="col">Column 3</th>
            </tr>
          </thead>
          <tbody>
            {
              empleados.map((item, index) => (
                <tr className="">
                  <td>{item.nombreCompleto}</td>
                  <td>{item.fechaContrato}</td>
                  <td>{item.departamento.nombre}</td>
                  <td>{item.sueldo}</td>
                </tr>

              ))
            }


          </tbody>
        </table>

      </div>
    </div>
  )
}
