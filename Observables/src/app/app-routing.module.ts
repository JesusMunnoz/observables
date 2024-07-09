import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertarUsuarioComponent } from './pages/insertar-usuario/insertar-usuario.component';
import { MostrarUsuarioComponent } from './pages/mostrar-usuario/mostrar-usuario.component';


const routes: Routes = [ {path: "", redirectTo: "/mostrar", pathMatch:"full"},
{path: "insertar", component:InsertarUsuarioComponent},
{path: "mostrar" , component:MostrarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
