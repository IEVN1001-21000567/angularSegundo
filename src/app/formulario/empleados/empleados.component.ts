import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface Usuario {
  matricula: number;
  nombre: string;
  edad: number;
  email: string;
  horas: number;
}

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './empleados.component.html',
  styleUrls: []
})
export default class EmpleadosComponent {
  formGroup!: FormGroup;
  personas: any[] = [];
  totalGeneral: number = 0;
  totalPagarh: number = 0;
  totalHorasExtra: number = 0;

 

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      matricula: ['', Validators.required],
      nombre: ['', Validators.required],
      edad: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      horas: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.formGroup.reset(); 
    } 
  }

  guardarPersonas(): void {
    const { matricula, nombre, edad, email, horas } = this.formGroup.value;
  
    const nuevaPersona: Usuario = {
      matricula,
      nombre,
      edad,
      email,
      horas
    };
  
   
    const resultadosGuardados = localStorage.getItem('personas');
    const resultados = resultadosGuardados ? JSON.parse(resultadosGuardados) : [];
  
    
    const index = resultados.findIndex((persona: Usuario) => persona.matricula === matricula);
  
    if (index !== -1) {
      resultados[index] = nuevaPersona;
    } else {
      resultados.push(nuevaPersona);
    }
  
   
    localStorage.setItem('personas', JSON.stringify(resultados));
  }
  

  cargarPersonas(): void {
    const personasGuardadas = localStorage.getItem('personas');
    if (personasGuardadas) {
      this.personas = JSON.parse(personasGuardadas);
      this.Horasxpagar();
    }
  }

  
  subImprime(): void {
    const personasGuardadas = localStorage.getItem('personas');
    if (personasGuardadas) {
      this.personas = JSON.parse(personasGuardadas);
    }
  }

  buscarPorMatricula(): void {
    const matriculaBuscada = this.formGroup.value.matricula;
    

    const personasGuardadas = localStorage.getItem('personas');
    const personas = personasGuardadas ? JSON.parse(personasGuardadas) : [];
  
 
    const personaEncontrada = personas.find((persona: Usuario) => persona.matricula === matriculaBuscada);
  
    if (personaEncontrada) {
      
      this.formGroup.patchValue({
        nombre: personaEncontrada.nombre,
        edad: personaEncontrada.edad,
        email: personaEncontrada.email,
        horas: personaEncontrada.horas
      });
    } 
  }
  
  eliminarPorMatricula(): void {
  const matriculaBuscada = this.formGroup.value.matricula;

  const personasGuardadas = localStorage.getItem('personas');
  let personas = personasGuardadas ? JSON.parse(personasGuardadas) : [];
  personas = personas.filter((persona: Usuario) => persona.matricula !== matriculaBuscada);
  localStorage.setItem('personas', JSON.stringify(personas));
  this.formGroup.reset();

  alert('Persona eliminada con éxito.');
}

Horasxpagar(): void {
  const personasGuardadas = localStorage.getItem('personas');

  if (personasGuardadas) {
      const personas = JSON.parse(personasGuardadas);
      const costoPorHora = 70; 
      const costoHoraExtra = 140; 

      this.personas = personas.map((persona: any) => {
          const horasTrabajadas = persona.horas || 0;
          let horasNormales = Math.min(horasTrabajadas, 40);
          let horasExtras = horasTrabajadas > 40 ? horasTrabajadas - 40 : 0;

          const totalPagarh = horasNormales * costoPorHora;
          const totalHorasExtra = horasExtras * costoHoraExtra;
          const subTotal = totalPagarh + totalHorasExtra;

          return {
              ...persona,
              horasNormales,
              horasExtras,
              totalPagarh,
              totalHorasExtra,
              subTotal
          };
      });
      this.totalGeneral = this.personas.reduce((acc, persona) => acc + persona.subTotal, 0);
  }
}
    
}