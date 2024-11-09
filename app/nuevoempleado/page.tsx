"use client"
import { useState, ChangeEvent, FormEvent } from 'react'
import { Empleado } from '@/Interfaces/Empleado'
import Swal from 'sweetalert2'
import { appsettings } from '@/settings/appsettings'

const initialEmpleado: Empleado = {
  nombreCompleto: "",
  departamento: {
    idDepartamento: 0,
    nombre: ""
  },
  sueldo: 0,
  fechaContrato: ""
}

export default function NuevoEmpleado() {
  const [empleado, setEmpleado] = useState<Empleado>(initialEmpleado)

  const inputChangeValue = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setEmpleado(prevEmpleado => ({
      ...prevEmpleado,
      [name]: name === "sueldo" ? parseFloat(value) : value,
      departamento: name === "departamento" ? { ...prevEmpleado.departamento, idDepartamento: parseInt(value) } : prevEmpleado.departamento,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(`${appsettings.apiUrl}Empleado`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(empleado),
      })

      if (response.ok) {
        Swal.fire('Éxito', 'Empleado guardado exitosamente', 'success')
        setEmpleado(initialEmpleado)
      } else {
        Swal.fire('Error', 'Hubo un problema al guardar el empleado', 'error')
      }
    } catch (error) {
      Swal.fire('Error', 'No se pudo conectar con el servidor', 'error')
    }
  }

  return (
    <div className='container max-w-screen-xl mx-auto pt-28 px-2'>
      <div className='mx-auto'>
        <div className='mx-auto'>
          <h4 className='text-xl font-bold py-4 text-center'>
            Registro de Empleado
          </h4>
          <hr />
          <div className='py-4'>
            <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
              <div className="flex flex-wrap mb-6 justify-center items-center">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label htmlFor="nombreCompleto" className='block tracking-wide text-gray-700 font-bold mb-2'>
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="nombreCompleto"
                    id="nombreCompleto"
                    value={empleado.nombreCompleto}
                    onChange={inputChangeValue}
                    className='appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3'
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label htmlFor="fechaContrato" className='block tracking-wide text-gray-700 font-bold mb-2'>
                    Fecha contrato
                  </label>
                  <input
                    type="date"
                    name="fechaContrato"
                    id="fechaContrato"
                    value={empleado.fechaContrato}
                    onChange={inputChangeValue}
                    className='appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3'
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-6 justify-center items-center">
                <div className="w-full md:w-1/2 px-3">
                  <label htmlFor="sueldo" className='block tracking-wide text-gray-700 font-bold mb-2'>
                    Sueldo
                  </label>
                  <input
                    type="number"
                    name="sueldo"
                    id="sueldo"
                    value={empleado.sueldo}
                    onChange={inputChangeValue}
                    className='appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3'
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label htmlFor="departamento" className='block tracking-wide text-gray-700 font-bold mb-2'>
                    Departamento
                  </label>
                  <div className="relative">
                    <select
                      name="departamento"
                      value={empleado.departamento.idDepartamento}
                      onChange={inputChangeValue}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3"
                    >
                      <option value={1}>Administración</option>
                      <option value={2}>Marketing</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded'>
                  Guardar Empleado
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}