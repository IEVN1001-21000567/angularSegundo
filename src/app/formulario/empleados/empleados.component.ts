/*import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface Empleado {
  matricula: string;
  nombre: string;
  correo: string;
  edad: number;
  horasTrabajadas: number;
}

interface EmpleadoR {
  matricula: string;
  nombre: string;
  correo: string;
  edad: number;
  horasTrabajadas: number;
  horasX: number;
  horasExtras: number;
  subtotal: number;
  total: number;
}

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './empleados.component.html',
  styleUrls:[]
})

export default class EmpleadosComponent {
  formGroup!: FormGroup;
  empleados: Empleado[] = [];

  valores:Empleado={
    matricula: '',
  nombre: '',
  correo: '',
  edad: 0,
  horasTrabajadas: 0
  };
   
  empleadoR:EmpleadoR[]=[];
  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup= this.initForm();
  }

  initForm(): FormGroup{
    return this.fb.group({
      matricula: [''],
  nombre: [''],
  correo: [''],
  edad: [0],
  horasTrabajadas: [0],
    })
  }

  onSubmit(): void {
    const {matricula, nombre, correo, edad, horasTrabajadas} = this.formGroup.value;
    this.valores.matricula=matricula;
    this.valores.nombre=nombre;
    this.valores.correo=correo;
    this.valores.edad=edad;
    this.valores.horasTrabajadas=horasTrabajadas;
  }


  subImprimir(): void {
  const empleadosGuardados = localStorage.getItem('empleados');
  if (empleadosGuardados) {
    const empleadosRecuperados:Empleado=JSON.parse(empleadosGuardados);

    const matricula= empleadosRecuperados.matricula;
    const nombre= empleadosRecuperados.nombre;
    const correo= empleadosRecuperados.correo;
    const edad= empleadosRecuperados.edad;
    const horasTrabajadas=empleadosRecuperados.horasTrabajadas;

    let horasX = horasTrabajadas * 70; 
    let horasExtras = Math.max(0, horasTrabajadas - 40); 
    let subtotal = horasX + (horasExtras * 140); 
    let total = subtotal; 

  this.empleadoR.push({
    matricula,
    nombre,
    correo,
    edad,
    horasTrabajadas,
    horasX,
    horasExtras,
    subtotal,
    total,
  });
  }
}

  modificarEmpleado(): void {
    const matricula = prompt('Ingrese la matrícula del empleado que desea modificar');
    const empleado = this.empleados.find(e => e.matricula === matricula);
    if (empleado) {
      const nuevasHoras = parseInt(prompt('Ingrese las nuevas horas trabajadas') || '0');
      empleado.horasTrabajadas = nuevasHoras;
      const actualizado = this.calcularSalario(empleado);
      Object.assign(empleado, actualizado);
      localStorage.setItem('empleados', JSON.stringify(this.empleados));
    }
  }

  eliminarEmpleado(): void {
    const matricula = prompt('Ingrese la matrícula del empleado que desea eliminar');
    this.empleados = this.empleados.filter(e => e.matricula !== matricula);
    localStorage.setItem('empleados', JSON.stringify(this.empleados));
  }
}*/
