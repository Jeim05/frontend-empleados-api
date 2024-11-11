import ListaDepartamento from '@/components/ListaDepartamento'
import React from 'react'

export default function Departamento() {
  return (
    <div className="container max-w-screen-xl mx-auto py-10 px-2">
      <div className="py-10 lg:pt-16 my-5">
        <h1 className="py-2 font-bold text-xl lg:text-5xl">Administración de Departamentos</h1>
        <p className="py-1 text-lg">
          En esta sección administramos la información de los departamentos 
        </p>
      </div>
      <ListaDepartamento />
    </div>
  )
}
