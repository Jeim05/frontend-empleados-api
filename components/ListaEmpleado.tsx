'use client'
import { Empleado } from '@/Interfaces/Empleado'
import { appsettings } from '@/settings/appsettings';
import { use, useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export const ListaEmpleado = () => {
  const [empleados, setEmpleados] = useState<Empleado[]>([]);

  const obtenerEmpleados = async () =>{
    const response = await fetch(`${appsettings.apiUrl}Empleado`);
    if(response.ok){
      const data = await response.json();
      console.log(data)
      setEmpleados(data)
    }
  }

  useEffect(()=>{
    obtenerEmpleados()
  },[])

  return (
    <div></div>
  )
}
