"use client"
import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { Empleado } from '@/Interfaces/Empleado'
import Swal from 'sweetalert2'
import { appsettings } from '@/settings/appsettings'
import Link from 'next/link'

const initialEmpleado: Empleado = {
  nombreCompleto: "",
  departamento: {
    idDepartamento: 0,
    nombre: ""
  },
  sueldo: 0,
  fechaContrato: ""
}

export default function EditarEmpleado() {

  return (
    <div>page</div>
  )
}
