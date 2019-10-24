import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PlaneaComponent } from './Principal/planea/planea.component';
import { HomeComponent } from './Principal/home/home.component';
import { LogComponent } from './log/log.component';
import { EstadosComponent } from './estados/estados.component';
import { EstadoDetailsComponent } from './estado-details/estado-details.component';
import { HotelComponent } from './components/hotel/hotel.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LogComponent},
  {path: 'estado', component: EstadosComponent},
  {path: 'detail/:id', component: EstadoDetailsComponent},
  {path: 'hotels', component: HotelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
