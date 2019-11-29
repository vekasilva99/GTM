import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDestinoTipoDestino'
})
export class Filter4Pipe implements PipeTransform {

  transform(value: any, arg: any): any {    // Función que realizará el Pipe.
    if ( arg.length < 2 ) { return value; } // Para que empiece a filtrar luego de escribir 2 letras.

    const resultPosts = [];

    for (const post of value) {
      if (post.tipoDestinoId.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
        resultPosts.push(post);
      }
    }
    return resultPosts;
  }
}
