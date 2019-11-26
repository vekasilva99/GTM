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
import { HotelDetailsComponent} from './hotel-details/hotel-details.component';
import { HabitacionComponent} from './habitacion/habitacion.component';
import { CrudEstadosComponent} from '../app/crud-estados/crud-estados.component';
import { CrudDestinosComponent} from '../app/crud-destinos/crud-destinos.component';
import { CrudTipoDestinoComponent} from '../app/crud-tipo-destino/crud-tipo-destino.component';
import { CrudCiudadesComponent} from '../app/crud-ciudades/crud-ciudades.component';
import { CrudHotelesComponent} from '../app/crud-hoteles/crud-hoteles.component';
import { TipoDestinoComponent} from '../app/tipo-destino/tipo-destino.component';
import { ModificarCiudadComponent} from '../app/modificar-ciudad/modificar-ciudad.component';
import { ModificarEstadoComponent} from '../app/modificar-estado/modificar-estado.component';
import { ModificarDestinoComponent } from './modificar-destino/modificar-destino.component';
import { ModificarTipoDestinoComponent } from './modificar-tipo-destino/modificar-tipo-destino.component';
import { ModificarHotelComponent } from './modificar-hotel/modificar-hotel.component';
import { AuthGuard } from './Guardian/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LogComponent},
  {path: 'estado', component: EstadosComponent},
  {path: 'detail/:id', component: EstadoDetailsComponent},
  {path: 'hotels', component: HotelComponent},
  {path: 'adminHome', canActivate: [AuthGuard],
children: [
  {path: '', component: AdminHomeComponent},
  {path: 'crudEstados', component: CrudEstadosComponent},
  {path: 'crudDestinos', component: CrudDestinosComponent},
  {path: 'crudTipoDestino', component: CrudTipoDestinoComponent},
  {path: 'crudCiudades', component: CrudCiudadesComponent},
  {path: 'crudHoteles', component: CrudHotelesComponent},
  {path: 'crudCiudades/edit/:id', component: ModificarCiudadComponent},
  {path: 'crudEstados/edit/:id', component: ModificarEstadoComponent},
  {path: 'crudDestinos/edit/:id', component: ModificarDestinoComponent},
  {path: 'crudTipoDestino/edit/:id', component: ModificarTipoDestinoComponent},
  {path: 'crudHoteles/edit/:id', component: ModificarHotelComponent}
]},
  {path: 'hotels/:id', component: HotelDetailsComponent},
  {path: 'hotels/:id/:i', component: HabitacionComponent},
  {path: 'tipoDestino/:id', component: TipoDestinoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
