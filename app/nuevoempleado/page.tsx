"use client"
import { useState, ChangeEvent } from 'react'
import { Empleado } from '@/Interfaces/Empleado'
import Swal from 'sweetalert2'
import { appsettings } from '@/settings/appsettings'

const initialEmpleado = {
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

    const inputChangeValue = (event:ChangeEvent<HTMLInputElement>) => {
        const inputName = event.target.name;
    }

  return (
    <div className='container max-w-screen-xl mx-auto pt-28 px-2'>NuevoEmpleado</div>
  )
}
