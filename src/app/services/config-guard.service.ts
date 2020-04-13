import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ConfiguracionService } from './configuracion.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigGuardService implements CanActivate {

  constructor(private router: Router, private configuracionService: ConfiguracionService) { }

  canActivate(): Observable<boolean> {
    return this.configuracionService.getConfiguracion().pipe(
      map(configuracion => {
        if (configuracion.permitirRegistro) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );

  }
}
