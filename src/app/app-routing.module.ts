import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PlaneaComponent } from './Principal/planea/planea.component';
import { HomeComponent } from './Principal/home/home.component';
import { LogComponent } from './log/log.component';
import { EstadosComponent } from './estados/estados.component';
import { EstadoDetailsComponent } from './estado-details/estado-details.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import {HotelDetailsComponent} from './hotel-details/hotel-details.component';
import {HabitacionComponent} from './habitacion/habitacion.component';
import {CrudEstadosComponent} from '../app/crud-estados/crud-estados.component';
import {CrudDestinosComponent} from '../app/crud-destinos/crud-destinos.component';
import {CrudTipoDestinoComponent} from '../app/crud-tipo-destino/crud-tipo-destino.component';
import {CrudCiudadesComponent} from '../app/crud-ciudades/crud-ciudades.component';
import {CrudHotelesComponent} from '../app/crud-hoteles/crud-hoteles.component';
import {TipoDestinoComponent} from '../app/tipo-destino/tipo-destino.component';
import {ModificarCiudadComponent} from '../app/modificar-ciudad/modificar-ciudad.component';
import {ModificarEstadoComponent} from '../app/modificar-estado/modificar-estado.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LogComponent},
  {path: 'estado', component: EstadosComponent},
  {path: 'detail/:id', component: EstadoDetailsComponent},
  {path: 'hotels', component: HotelComponent},
  {path: 'adminHome', component: AdminHomeComponent},
  {path: 'hotels/:id', component: HotelDetailsComponent},
  {path: 'hotels/:id/:i', component: HabitacionComponent},
  {path: 'adminHome/crudEstados', component:CrudEstadosComponent},
  {path: 'adminHome/crudDestinos', component:CrudDestinosComponent},
  {path: 'adminHome/crudTipoDestino', component:CrudTipoDestinoComponent},
  {path: 'adminHome/crudCiudades', component:CrudCiudadesComponent},
  {path: 'adminHome/crudHoteles', component:CrudHotelesComponent},
  {path: 'tipoDestino/:id', component: TipoDestinoComponent},
  {path: 'adminHome/crudCiudades/edit/:id', component: ModificarCiudadComponent},
  {path: 'adminHome/crudEstados/edit/:id', component: ModificarCiudadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
