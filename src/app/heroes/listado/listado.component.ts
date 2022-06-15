import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Ant Man', 'Spiderman', 'Iron man', 'Guardianes de la Galaxia', 'MoonKinght'];

  heroeBorrado: string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
