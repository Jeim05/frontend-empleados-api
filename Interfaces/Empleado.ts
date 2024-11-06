import { Departamento } from "./Departamento";

export interface Empleado {
    idEmpleado?: number,
    nombreCompleto: string,
    departamento: Departamento,
    sueldo: number,
    fechaContrato: string;
}