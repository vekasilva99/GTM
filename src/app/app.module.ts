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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { EstadosComponent } from './estados/estados.component';
import { EstadoDetailsComponent } from './estado-details/estado-details.component';
import { HomeComponent } from '../app/Principal/home/home.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { NgxGalleryModule } from 'ngx-gallery';
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
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
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
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { DestinosDetailsComponent } from './destinos-details/destinos-details.component';
import { FilterPipe } from './pipes/filter.pipe';
import { Filter2Pipe } from './pipes/filter2.pipe';
import { DestinoDetailComponent } from './destino-detail/destino-detail.component';
import { ModificarEstadoComponent } from './modificar-estado/modificar-estado.component';
import { ModificarCiudadComponent } from './modificar-ciudad/modificar-ciudad.component';
import { ModificarDestinoComponent } from './modificar-destino/modificar-destino.component';
import { ModificarTipoDestinoComponent } from './modificar-tipo-destino/modificar-tipo-destino.component';
import { ModificarHotelComponent } from './modificar-hotel/modificar-hotel.component';
import { AuthGuard } from './Guardian/auth.guard';
import { CrudHabitacionComponent } from './crud-habitacion/crud-habitacion.component';
import { AgregarHabitacionComponent } from './agregar-habitacion/agregar-habitacion.component';
import { ModificarHabitacionComponent } from './modificar-habitacion/modificar-habitacion.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './admin/login/login.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './spinner/spinner.component';

const config = {
    apiKey: 'AIzaSyCHMYQWGNdRLv6-HDvEri7wI1WkA_KPR3o',
    authDomain: 'guacamayatours-f9882.firebaseapp.com',
    databaseURL: 'https://guacamayatours-f9882.firebaseio.com',
    projectId: 'guacamayatours-f9882',
    storageBucket: 'guacamayatours-f9882.appspot.com',
    messagingSenderId: '825835417522',
    appId: '1:825835417522:web:847e6a22732d2cc0e43eab'
};

export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    pan: {
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
   ModificarEstadoComponent,
   ModificarCiudadComponent,
   ModificarDestinoComponent,
   ModificarTipoDestinoComponent,
   ModificarHotelComponent,
   DestinosDetailsComponent,
   CrudHabitacionComponent,
   AgregarHabitacionComponent,
   ModificarHabitacionComponent,
   

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
  ModificarEstadoComponent,
  ModificarCiudadComponent,
  ModificarDestinoComponent,
  ModificarTipoDestinoComponent,
  ModificarHotelComponent,
  DestinosDetailsComponent,
  LoginComponent,
  SpinnerComponent
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
    AngularFirestoreModule,
    MatSelectModule,
    MatDatepickerModule, MatNativeDateModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    NgxSpinnerModule
  ],

  providers: [AuthGuard,
    {provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
