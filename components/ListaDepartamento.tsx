"use client"
import { Departamento } from '@/Interfaces/Departamento'
import { appsettings } from '@/settings/appsettings';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

export default function ListaDepartamento() {
    const [departamentos, setDepartamentos] = useState<Departamento[]>([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [departamentoActual, setDepartamentoActual] = useState<Departamento | null>(null);

    const obtenerDepartamentos = async () => {
        const response = await fetch(`${appsettings.apiUrl}Departamento`);
        if (response.ok) {
            const data = await response.json();
            setDepartamentos(data)
        }
    }

    const eliminarDepartamento = async (idDepartamento: number) => {
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

        if (confirmResult.isConfirmed) {
            const response = await fetch(`${appsettings.apiUrl}Departamento/${idDepartamento}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                Swal.fire('Eliminado', 'El departamento ha sido eliminado.', 'success');
                obtenerDepartamentos();
            } else {
                Swal.fire('Error', 'Hubo un problema al eliminar el departamento.', 'error');
            }
        }
    }

    const abrirModal = (departamento: Departamento | null) => {
        setDepartamentoActual(departamento);
        setMostrarModal(true);
    }

    const guardarDepartamento = async () => {
        if (departamentoActual) {
            const method = departamentoActual.idDepartamento ? 'PUT' : 'POST';
            const url = departamentoActual ? `${appsettings.apiUrl}Departamento` : `${appsettings.apiUrl}Departamento`;

            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(departamentoActual)
            });

            if (response.ok) {
                Swal.fire('Éxito', `Departamento ${departamentoActual.idDepartamento ? 'actualizado' : 'creado'} correctamente`, 'success');
                setMostrarModal(false);
                obtenerDepartamentos();
            } else {
                Swal.fire('Error', 'Hubo un problema al guardar el departamento.', 'error');
            }
        }
    }


    useEffect(() => {
        obtenerDepartamentos()
    })

    return (
        <div className='container mx-auto'>
            <div className='card'>
                <div className='card-header'>
                    <div className='grid grid-cols-2 items-center'>
                        <h1 className='text-4xl font-bold'>Lista de departamentos</h1>
                        <div className='my-5 text-end'>
                            <button onClick={() => abrirModal(null)} className='py-3 px-2 bg-blue-700 text-white text-base font-semibold rounded-md'>
                                Crear nuevo
                            </button>
                        </div>
                    </div>
                </div>
                <div className='card-body'>
                    <table className="tabla w-auto">
                        <thead >
                            <tr>
                                <th >Id Departamento</th>
                                <th >Nombre departamento</th>
                                <th >Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                departamentos.map((departamento) => (
                                    <tr key={departamento.idDepartamento} className="">
                                        <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>{departamento.idDepartamento}</td>
                                        <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>{departamento.nombre}</td>
                                        <td className='px-6 py-4 flex gap-2 justify-start'>
                                            <button onClick={() => abrirModal(departamento)} className='bg-yellow-500 p-1.5 rounded-sm'>
                                                <Image src="/images/pen-to-square-solid.svg" width={22} height={22} alt='edit' title='close' className='filter invert hover:filter-none' />
                                            </button>
                                            <button onClick={() => departamento.idDepartamento !== undefined && eliminarDepartamento(departamento.idDepartamento)} className='bg-red-500 p-1.5 rounded-sm '>
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

            {/* MODAL */}
            {mostrarModal && (
                <div className='fixed inset-0 flex items-center justify-center z-50 '>
                    <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
                        <h2 className='text-2x font-semibold mb-4'>
                            {departamentoActual?.idDepartamento ? 'Editar Departamento' : 'Crear Departamento'}
                        </h2>
                        <input
                            type="text"
                            placeholder="Nombre del Departamento"
                            value={departamentoActual?.nombre || ''}
                            onChange={(e) => setDepartamentoActual({ ...departamentoActual, nombre: e.target.value } as Departamento)}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        />
                        <div className="flex justify-end">
                            <button onClick={() => setMostrarModal(false)} className="mr-2 bg-gray-500 text-white py-2 px-4 rounded">
                                Cancelar
                            </button>
                            <button onClick={guardarDepartamento} className="bg-blue-500 text-white py-2 px-4 rounded">
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}
