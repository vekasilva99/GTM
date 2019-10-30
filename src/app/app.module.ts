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



export class CustomHammerConfig extends HammerGestureConfig{
  overrides={
    'pan':{
      direction: Hammer.DIRECTION_ALL,

    }
  }
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
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGalleryModule


  ],
  providers: [
    {provide:HAMMER_GESTURE_CONFIG, useClass:CustomHammerConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
