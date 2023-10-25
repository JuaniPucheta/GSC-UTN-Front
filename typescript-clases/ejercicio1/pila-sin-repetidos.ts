import { Pila } from './pila';

export class PilaSinRepetidos<T> extends Pila<T> {
  push(elemento: T): void {
    if (!this.elementos.includes(elemento)) {
      super.push(elemento);
    }
  }
}
