import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  cliente: Cliente = new Cliente;
  titulo: string = 'Crear Cliente';

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.clienteService.crear(this.cliente).subscribe(resp => {
      this.router.navigate(['/clientes']);
      swal.fire('Nuevo cliente',  `Cliente ${this.cliente.nombre} creado con exito!`,  'success');
  });
  }

}
