import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ConfiguracionService } from '../../services/configuracion.service';
import { Configuracion } from 'src/app/models/configuracion.model';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  permitirRegistro: boolean = false;

  constructor(private router: Router, private configuracionService: ConfiguracionService) { }

  ngOnInit(): void {
    this.configuracionService.getConfiguracion().subscribe(
      (configuracion: Configuracion) => {
        this.permitirRegistro = configuracion.permitirRegistro;
      }
    );
  }

  guardar() {
    const configuracion = {
      permitirRegistro: this.permitirRegistro
    };
    this.configuracionService.modificarConfiguracion(configuracion);
    this.router.navigate(['/']);
  }

}
