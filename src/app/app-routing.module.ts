import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PlaneaComponent } from './Principal/planea/planea.component';
import { HomeComponent } from './Principal/home/home.component';
import { LogComponent } from './log/log.component';
import { EstadosComponent } from './estados/estados.component';
import { EstadoDetailsComponent } from './estado-details/estado-details.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component: HomeComponent},
  {path:'login', component: LogComponent},
  {path:'estado', component: EstadosComponent},
  {path:'detail/:id', component: EstadoDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
