'use client'
import { Empleado } from '@/Interfaces/Empleado'
import { appsettings } from '@/settings/appsettings';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';


export const ListaEmpleado = () => {
  const [empleados, setEmpleados] = useState<Empleado[]>([]);
  //const [showModal, setShowModal] = useState(false)

  const obtenerEmpleados = async () => {
    const response = await fetch(`${appsettings.apiUrl}Empleado`);
    if (response.ok) {
      const data = await response.json();
      setEmpleados(data)
    }
  }

  const eliminarEmpleado = async (idEmpleado:number) =>{
    const confirmResult = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás deshacer esta acción.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if(confirmResult.isConfirmed){
      const response = await fetch(`${appsettings.apiUrl}Empleado/${idEmpleado}`,{
        method: 'DELETE',
      });

      if (response.ok) {
        Swal.fire('Eliminado', 'El empleado ha sido eliminado.', 'success');
        obtenerEmpleados(); 
      } else {
        Swal.fire('Error', 'Hubo un problema al eliminar el empleado.', 'error');
      }

    }
  }

  useEffect(() => {
    obtenerEmpleados()
  }, [])

/*   const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  } */

  return (
    <div className='container mx-auto'>
      <div className='card'>
        <div className='card-header'>
          <div className='grid grid-cols-2'>
            <h1 className='text-4xl font-bold'>Lista de empleados</h1>
            <div className='my-5 text-end'>
              <Link href="/nuevoempleado" className='py-3 px-2 bg-blue-700 text-white text-base font-semibold rounded-md'>
                Crear nuevo
              </Link>
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
                      <Link href={`/editarempleado/${item.idEmpleado}`} className='bg-yellow-500 p-1.5 rounded-sm'>
                        <Image src="/images/pen-to-square-solid.svg" width={22} height={22} alt='edit' title='close' className='filter invert hover:filter-none' />
                      </Link>
                      <button onClick={() => eliminarEmpleado(item.idEmpleado)} className='bg-red-500 p-1.5 rounded-sm '>
                        <Image src="/images/trash-can-solid.svg" width={22} height={22} alt='edit' title='close' className='filter invert hover:filter-none' />
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

{/*  {
        showModal && (
          <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              <div className="relative bg-white rounded-lg shadow ">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Registro de Empleados
                  </h3>
                  <button type="button" onClick={handleCloseModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                    <Image src="/images/xmark-solid.svg" width={20} height={20} alt='close' title='close' />
                    <span className="sr-only">Cerrar modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                  <div className="w-full  mx-auto">
                    <form className="w-full max-w-lg mx-auto">
                      <div className="flex flex-wrap mb-6 justify-center items-center">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label htmlFor="nombrecompleto" className='block tracking-wide text-gray-700 font-bold mb-2'>
                            Nombre completo
                          </label>
                          <input type="text" name="nombrecompleto" id="nombrecompleto" className='appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight' />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label htmlFor="fechacontrato" className='block tracking-wide text-gray-700 font-bold mb-2'>
                            Fecha contrato
                          </label>
                          <input type="text" name="fechacontrato" id="fechacontrato" className='appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight' />
                        </div>
                      </div>
                      <div className="flex flex-wrap mb-6 justify-center items-center">
                        <div className="w-full md:w-1/2 px-3">
                          <label htmlFor="sueldo" className='block tracking-wide text-gray-700 font-bold mb-2'>
                            Sueldo
                          </label>
                          <input type="number" name="sueldo" id="sueldo" className='appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight' />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label htmlFor="nombrecompleto" className='block tracking-wide text-gray-700 font-bold mb-2'>
                            Departamento
                          </label>
                          <div className="relative">
                            <select className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight">
                              <option value={1}>Administración</option>
                              <option value={2}>Marketing</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Guardar</button>
                  <button onClick={handleCloseModal} type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 ">Cancelar</button>
                </div>
              </div>
            </div>
          </div>

        )
      } */}