import { Component, signal } from '@angular/core';

interface Empleado {
  idEmpleado: number;
  nombre: string;
  edad: number;
  alta: string;
  correoElectronico: string;
  idArea: number;
  area: string;
}

export interface Response<T = any> {
  status: number;
  message: string;
  data?: T;
}

@Component({
  selector: 'app-empleado-page',
  templateUrl: './empleado-page.component.html',
  styleUrls: ['./empleado-page.component.css']
})
export class EmpleadoPageComponent {
  empleados = signal<Empleado[]>([]);
  currentPage = signal<number>(1); // Página actual
  pageSize = 5; // Tamaño de página

  constructor() {
    this.fetchEmpleados();
  }

  async fetchEmpleados() {
    const url = `https://api.rosticeriaelrey.com/api/Empleado/EmpleadosPage?pageNumber=${this.currentPage()}&pageSize=${this.pageSize}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Response<Empleado[]> = await response.json();
      this.empleados.set(data?.data || []);
    } catch (err) {
      console.error('Error fetching empleados:', err);
    }
  }

  nextPage() {
    if(this.empleados().length < 5 ) return
    this.currentPage.set(this.currentPage() + 1);
    this.fetchEmpleados();
  }

  previousPage() {
    if (this.currentPage() > 1 ) {
      this.currentPage.set(this.currentPage() - 1);
      this.fetchEmpleados();
    }
  }
}