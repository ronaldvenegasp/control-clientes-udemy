// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { TableroComponent } from './components/tablero/tablero.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ConfigGuardService } from './services/config-guard.service';

// Services

const routes: Routes = [
  {path: '', component: TableroComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent, canActivate: [ConfigGuardService]},
  {path: 'configuracion', component: ConfiguracionComponent, canActivate: [AuthGuardService]},
  {path: 'cliente/editar/:id', component: EditarClienteComponent, canActivate: [AuthGuardService]},
  {path: '**', component: NoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
