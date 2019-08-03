import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { PaginaComponent } from './pagina/pagina.component';
import {PerfilComponent} from './perfil/perfil.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'registrar',
    component: RegistrarComponent
  },

  {
    path: 'esqueceu-senha',
    component: EsqueceuSenhaComponent
  },

  {
    path: 'inicial',
    component: PaginaComponent,
    children:[
      {
        path: 'perfil',
        component: PerfilComponent

      }]
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
