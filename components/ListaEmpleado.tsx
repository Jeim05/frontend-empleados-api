'use client'
import { Empleado } from '@/Interfaces/Empleado'
import { appsettings } from '@/settings/appsettings';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react'


export const ListaEmpleado = () => {
  const [empleados, setEmpleados] = useState<Empleado[]>([]);

  const obtenerEmpleados = async () => {
    const response = await fetch(`${appsettings.apiUrl}Empleado`);
    if (response.ok) {
      const data = await response.json();
      setEmpleados(data)
    }
  }

  useEffect(() => {
    obtenerEmpleados()
  }, [])

  return (
    <div className='container mx-auto'>
      <div className='card'>
        <div className='card-header'>
          <div className='grid grid-cols-2'>
            <h1 className='text-4xl font-bold'>Lista de empleados</h1>
            <div className='my-5 text-end'>
              <Link href="/" className='py-3 px-2 bg-blue-700 text-white text-base font-semibold rounded-md'>Crear nuevo</Link>
            </div>
          </div>
        </div>
        <div className='card-body'>
          <table className="tabla">
            <thead >
              <tr>
                <th >Nombre completo</th>
                <th >Fecha de contrato</th>
                <th>Departamento</th>
                <th>Sueldo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                empleados.map((item) => (
                  <tr key={item.idEmpleado} className="">
                    <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>{item.nombreCompleto}</td>
                    <td className='px-6 py-4'>{item.fechaContrato}</td>
                    <td className='px-6 py-4'>{item.departamento.nombre}</td>
                    <td className='px-6 py-4'>${item.sueldo}</td>
                    <td className='px-6 py-4 flex gap-2 justify-start'>
                      <Link href="/" className='fill-red-600'>
                        <Image src="/images/pen-to-square-solid.svg" width={25} height={25} alt='edit' title='close' className='fill-yellow-500' />
                      </Link>
                      <button className=''>
                        <Image src="/images/trash-can-solid.svg" width={25} height={25} alt='edit' title='close' className='fill-yellow-500' />
                      </button>
                    </td>
                  </tr>

                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
