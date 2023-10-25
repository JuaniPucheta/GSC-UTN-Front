export class Pila<T> {
    protected elementos: T[] = [];
  
    push(elemento: T): void {
      this.elementos.push(elemento);
    }
  
    pop(): T | undefined {
      return this.elementos.pop();
    }
  
    size(): number {
      return this.elementos.length;
    }
  }
  