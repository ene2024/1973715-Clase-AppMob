import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ListaComponent } from '../lista/lista.component';
import { TareasComponent } from '../tareas/tareas.component';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { TareaDetalleComponent } from "../tarea-detalle/tarea-detalle.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    ListaComponent,
    TareasComponent,
    AgregarTareaComponent,
    TareaDetalleComponent
  ]
})
export class HomePageModule {}
