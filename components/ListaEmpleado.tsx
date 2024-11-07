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
        <table className="tabla">
          <thead >
            <tr>
              <th >Nombre completo</th>
              <th >Fecha de contrato</th>
              <th>Departamento</th>
              <th>Sueldo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              empleados.map((item) => (
                <tr key={item.idEmpleado} className="">
                  <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>{item.nombreCompleto}</td>
                  <td className='px-6 py-4">'>{item.fechaContrato}</td>
                  <td className='px-6 py-4">'>{item.departamento.nombre}</td>
                  <td className='px-6 py-4">'>{item.sueldo}</td>
                  <td className='px-6 py-4">'>
                    
                  </td>
                </tr>

              ))
            }


          </tbody>
        </table>

      </div>
    </div>
  )
}
