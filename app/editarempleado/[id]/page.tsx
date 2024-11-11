"use client"
import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { Empleado } from '@/Interfaces/Empleado'
import Swal from 'sweetalert2'
import { appsettings } from '@/settings/appsettings'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Departamento } from '@/Interfaces/Departamento'

const initialEmpleado: Empleado = {
  idEmpleado: 0,
  nombreCompleto: "",
  departamento: {
    idDepartamento: 0,
    nombre: ""
  },
  sueldo: 0,
  fechaContrato: ""
}

export default function EditarEmpleado() {
  const [empleado, setEmpleado] = useState<Empleado>(initialEmpleado);
  const [departamentos, setDepartamentos] = useState<Departamento[]>([]);
  const { id } = useParams();


  return (
    <div>page</div>
  )
}
