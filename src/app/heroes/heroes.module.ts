import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { AppModule } from '../app.module';
import { CommonModule } from "@angular/common";



@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],

    exports: [
        ListadoComponent
    ],

    imports: [
        CommonModule
    ]
})


export class HeroeModule {}