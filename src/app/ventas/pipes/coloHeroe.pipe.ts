import { Pipe, PipeTransform } from "@angular/core";
import { Color } from '../interfaces/heroes.interface';

@Pipe({
    name: 'colorHeroe'
})
export class ColorHeroePipe implements PipeTransform{

    transform(color: number): string{
        if(color === Color.azul){
            return 'Azul';
        }
        if(color === Color.negro){
            return 'Negro';
        }
        if(color === Color.rojo){
            return 'Rojo';
        }
        if(color === Color.verde){
            return 'Verde';
        }else{
            return 'No tiene color'
        }

    }
}

