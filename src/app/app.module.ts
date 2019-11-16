import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HammerGestureConfig, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VideoComponent } from '../app/Principal/video/video.component';
import { TittleComponent } from '../app/Principal/tittle/tittle.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { PlaneaComponent } from '../app/Principal/planea/planea.component';
import { LogComponent } from './log/log.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { EstadosComponent } from './estados/estados.component';
import { EstadoDetailsComponent } from './estado-details/estado-details.component';
import { HomeComponent } from '../app/Principal/home/home.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import {NgxGalleryModule} from 'ngx-gallery';
import { HotelSliderComponent } from './hotel-slider/hotel-slider.component';
import { ListaEstadosComponent } from './lista-estados/lista-estados.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HabitacionComponent } from './habitacion/habitacion.component';
import { ReservarComponent } from './reservar/reservar.component';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarAdminComponent } from './toolbar-admin/toolbar-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { CrudEstadosComponent } from './crud-estados/crud-estados.component';
import { AgregarEstadoComponent } from './agregar-estado/agregar-estado.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.prod';
import { AgregarHotelComponent } from './agregar-hotel/agregar-hotel.component';
import { AgregarDestinoComponent } from './agregar-destino/agregar-destino.component';
import { CrudDestinosComponent } from './crud-destinos/crud-destinos.component';
import { CrudHotelesComponent } from './crud-hoteles/crud-hoteles.component';
import { AgregarTipoDestinoComponent } from './agregar-tipo-destino/agregar-tipo-destino.component';
import { CrudTipoDestinoComponent } from './crud-tipo-destino/crud-tipo-destino.component';
import { CrudCiudadesComponent } from './crud-ciudades/crud-ciudades.component';
import { AgregarCiudadComponent } from './agregar-ciudad/agregar-ciudad.component';
import { TipoDestinoComponent } from './tipo-destino/tipo-destino.component';



import { FilterPipe } from './pipes/filter.pipe';
import { Filter2Pipe } from './pipes/filter2.pipe';
import { DestinoDetailComponent } from './destino-detail/destino-detail.component';






export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    // tslint:disable-next-line: object-literal-key-quotes
    'pan': {
      direction: Hammer.DIRECTION_ALL,

    }
  };
}


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
   SidebarComponent,
   VideoComponent,
   TittleComponent,
   MenuComponent,
   HeaderComponent,
   PlaneaComponent,
   LogComponent,
   FooterComponent,
   EstadosComponent,
   EstadoDetailsComponent,
   HomeComponent,
   HotelComponent,
   AdminHomeComponent,
   BienvenidoComponent,
   HotelSliderComponent,
   ListaEstadosComponent,
   HotelDetailsComponent,
   HabitacionComponent,
   ReservarComponent,
   ToolbarAdminComponent,
   SidebarAdminComponent,
   CrudEstadosComponent,
   AgregarEstadoComponent,
   AgregarHotelComponent,
   AgregarDestinoComponent,
   CrudDestinosComponent,
   CrudHotelesComponent,
   AgregarTipoDestinoComponent,
   CrudTipoDestinoComponent,
   CrudCiudadesComponent,
   AgregarCiudadComponent,
   TipoDestinoComponent,
  
  
   FilterPipe,
   Filter2Pipe,
   DestinoDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule


  ],
  providers: [
    {provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
