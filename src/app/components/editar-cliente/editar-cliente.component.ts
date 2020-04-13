import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  id: string;
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  };

  constructor(
    private clienteService: ClienteService,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.clienteService.getCliente(this.id).subscribe(cliente => {
      this.cliente = cliente;
    });
  }

  guardarCliente({ value, valid }: { value: Cliente, valid: boolean }) {
    if (!valid) {
      this.flashMessages.show('Por favor llena el formulario corrctamente', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
    } else {
      value.id = this.id;
      this.clienteService.modificarCliente(value);
      this.router.navigate(['/']);
    }
  }

  eliminarCliente() {
    if (confirm('¿Seguro que deseas eliminar el cliente?')) {
      this.clienteService.eliminarCliente(this.cliente);
      this.router.navigate(['/']);
    }
  }

}
