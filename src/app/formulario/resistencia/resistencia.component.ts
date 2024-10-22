/*import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface Datos{
  color1: string;
  color2: string;
  color3: string;
  tolerancia: string;
}

interface Resultado {
  color1: string;
  color2: string;
  color3: string;
  tolerancia: string;
  valorresistencia: number;
  valormax: number;
  valormin: number;
}

@Component({
  selector: 'app-resistencia',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './resistencia.component.html',
  styleUrl: './resistencia.component.css'
})
export default class ResistenciaComponent {
  formGroup!: FormGroup;

  valores:Datos={
    color1:'',
    color2:'',
    color3:'',
    tolerancia: ''
  }

  resultados: Resultado[] = [];

  constructor(private readonly fb: FormBuilder){}

    ngOnInit(): void {
      this.formGroup= this.initForm();
    }
  
    initForm():FormGroup{
      return this.fb.group({
        color1: [''],
        color2: [''],
        color3: [''],
        tolerancia: ['']
      })
    }

    onSubmit():void{
      const{color1, color2, color3, tolerancia, valor, valorMax, valorMin}= this.formGroup.value;
      this.valores.color1=color1
      this.valores.color2=color2
      this.valores.color3=color3
      this.valores.tolerancia= tolerancia

      let valoresJSON= JSON.stringify(this.valores);
      localStorage.setItem("valores", valoresJSON);
    }

    subImprime():void{
      const valoresGuardados=localStorage.getItem('valores');
      if(valoresGuardados){
        const  valoresRecuperado:Datos[]=JSON.parse(valoresGuardados);

        valoresRecuperado.forEach((registro: Datos) => {
        const color1 = registro.color1;
        const color2 = registro.color2;
        const color3 = registro.color3;
        const tolerancia= registro.tolerancia;
        let valor1=0;
        let valor2=0;
        let multiplicador=0;
        let valortolerancia=0;

        switch (color1) {
          case 'Negro':
            valor1 = 0;
            break;
          case 'Cafe':
            valor1 = 1;
            break;
          case 'Rojo':
            valor1 = 2;
            break;
          case 'Naranja':
            valor1 = 3;
            break;
          case 'Amarillo':
            valor1 = 4;
            break;
          case 'Verde':
            valor1 = 5;
            break;
          case 'Azul':
            valor1 = 6;
            break;
          case 'Violeta':
            valor1 = 7;
            break;
          case 'Gris':
            valor1 = 8;
            break;
          case 'Blanco':
            valor1 = 9;
            break;
          default:
            valor1 = 0;  
        }

        switch (color2) {
          case 'Negro':
            valor2 = 0;
            break;
          case 'Cafe':
            valor2 = 1;
            break;
          case 'Rojo':
            valor2 = 2;
            break;
          case 'Naranja':
            valor2 = 3;
            break;
          case 'Amarillo':
            valor2 = 4;
            break;
          case 'Verde':
            valor2 = 5;
            break;
          case 'Azul':
            valor2 = 6;
            break;
          case 'Violeta':
            valor2 = 7;
            break;
          case 'Gris':
            valor2 = 8;
            break;
          case 'Blanco':
            valor2 = 9;
            break;
          default:
            valor2 = 0; 
        }
      
        switch (color3) {
          case 'Negro':
            multiplicador = 1;
            break;
          case 'Cafe':
            multiplicador = 10;
            break;
          case 'Rojo':
            multiplicador = 100;
            break;
          case 'Naranja':
            multiplicador = 1000;
            break;
          case 'Amarillo':
            multiplicador = 10000;
            break;
          case 'Verde':
            multiplicador = 100000;
            break;
          case 'Azul':
            multiplicador = 1000000;
            break;
          case 'Violeta':
            multiplicador = 10000000;
            break;
          case 'Gris':
            multiplicador = 100000000;
            break;
          case 'Blanco':
            multiplicador = 1000000000;
            break;
          default:
            multiplicador = 1; 
        }
        
        switch(tolerancia){
          case 'Plata':
            valortolerancia=.10;
            break;
          case 'Oro':
            valortolerancia=.05;
            break;
        }
        let valorresistencia = (valor1 * 10 + valor2) * multiplicador;
        let valormax= valorresistencia*(1+valortolerancia);
        let valormin= valorresistencia*(1-valortolerancia);
        //const resistencia = this.calcularResistencia(color1, color2, color3);
        this.resultados.push({
          color1,
          color2,
          color3,
          tolerancia,
          valorresistencia,
          valormax,
          valormin
        });
        });     
    }
  } 

}*/

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Datos {
  color1: string;
  color2: string;
  color3: string;
  tolerancia: string;
}

interface Resultado {
  color1: string;
  color2: string;
  color3: string;
  tolerancia: string;
  valorresistencia: number;
  valormax: number;
  valormin: number;
}

@Component({
  selector: 'app-resistencia',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './resistencia.component.html',
  styleUrls: []
})


export default class ResistenciaComponent {
  formGroup!: FormGroup;

  valores: Datos = {
    color1: '',
    color2: '',
    color3: '',
    tolerancia: ''
  };

  resultados: Resultado[] = [];
  colores = ['Negro', 'Cafe', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Violeta', 'Gris', 'Blanco'];

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      color1: [''],
      color2: [''],
      color3: [''],
      tolerancia: ['']
    });
  }

  onSubmit(): void {
    const { color1, color2, color3, tolerancia } = this.formGroup.value;
    this.valores.color1 = color1;
    this.valores.color2 = color2;
    this.valores.color3 = color3;
    this.valores.tolerancia = tolerancia;

    let valoresJSON = JSON.stringify(this.valores);
    localStorage.setItem('valores', valoresJSON);
  }

  subImprime(): void {
    const valoresGuardados = localStorage.getItem('valores');
    if (valoresGuardados) {
      const valoresRecuperado: Datos = JSON.parse(valoresGuardados);

      const color1 = valoresRecuperado.color1;
      const color2 = valoresRecuperado.color2;
      const color3 = valoresRecuperado.color3;
      const tolerancia = valoresRecuperado.tolerancia;
      let valor1 = 0;
      let valor2 = 0;
      let multiplicador = 0;
      let valortolerancia = 0;

      // Lógica para convertir colores a valores numéricos
      switch (color1) {
        case 'Negro':
          valor1 = 0;
          break;
        case 'Cafe':
          valor1 = 1;
          break;
        case 'Rojo':
          valor1 = 2;
          break;
        case 'Naranja':
          valor1 = 3;
          break;
        case 'Amarillo':
          valor1 = 4;
          break;
        case 'Verde':
          valor1 = 5;
          break;
        case 'Azul':
          valor1 = 6;
          break;
        case 'Violeta':
          valor1 = 7;
          break;
        case 'Gris':
          valor1 = 8;
          break;
        case 'Blanco':
          valor1 = 9;
          break;
      }

      switch (color2) {
        case 'Negro':
          valor2 = 0;
          break;
        case 'Cafe':
          valor2 = 1;
          break;
        case 'Rojo':
          valor2 = 2;
          break;
        case 'Naranja':
          valor2 = 3;
          break;
        case 'Amarillo':
          valor2 = 4;
          break;
        case 'Verde':
          valor2 = 5;
          break;
        case 'Azul':
          valor2 = 6;
          break;
        case 'Violeta':
          valor2 = 7;
          break;
        case 'Gris':
          valor2 = 8;
          break;
        case 'Blanco':
          valor2 = 9;
          break;
      }

      switch (color3) {
        case 'Negro':
          multiplicador = 1;
          break;
        case 'Cafe':
          multiplicador = 10;
          break;
        case 'Rojo':
          multiplicador = 100;
          break;
        case 'Naranja':
          multiplicador = 1000;
          break;
        case 'Amarillo':
          multiplicador = 10000;
          break;
        case 'Verde':
          multiplicador = 100000;
          break;
        case 'Azul':
          multiplicador = 1000000;
          break;
        case 'Violeta':
          multiplicador = 10000000;
          break;
        case 'Gris':
          multiplicador = 100000000;
          break;
        case 'Blanco':
          multiplicador = 1000000000;
          break;
      }

      switch (tolerancia) {
        case 'Plata':
          valortolerancia = 0.1;
          break;
        case 'Oro':
          valortolerancia = 0.05;
          break;
      }

      let valorresistencia = (valor1 * 10 + valor2) * multiplicador;
      let valormax = valorresistencia * (1 + valortolerancia);
      let valormin = valorresistencia * (1 - valortolerancia);

      this.resultados.push({
        color1,
        color2,
        color3,
        tolerancia,
        valorresistencia,
        valormax,
        valormin
      });
    }
  }

  getColorCode(color: string): string {
    const colorCodes: { [key: string]: string } = {
      Negro: '#000000',
      Cafe: '#8B4513',
      Rojo: '#FF0000',
      Naranja: '#FFA500',
      Amarillo: '#FFFF00',
      Verde: '#008000',
      Azul: '#0000FF',
      Violeta: '#8A2BE2',
      Gris: '#808080',
      Blanco: '#FFFFFF'
    };
    return colorCodes[color] || '#FFFFFF';
  }

  getToleranceColor(tolerancia: string): string {
    return tolerancia === 'Oro' ? '#FFD700' : '#C0C0C0';
  }
}

