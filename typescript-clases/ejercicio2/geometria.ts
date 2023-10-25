class FiguraGeometrica {
    calcularPerimetro(): number {
      return 0;
    }
  
    calcularArea(): number {
      return 0;
    }
  }
  
  class Cuadrado extends FiguraGeometrica {
    lado: number;
  
    constructor(lado: number) {
      super();
      this.lado = lado;
    }
  
    calcularPerimetro(): number {
      return 4 * this.lado;
    }
  
    calcularArea(): number {
      return this.lado * this.lado;
    }
  }
  
  class Circulo extends FiguraGeometrica {
    radio: number;
  
    constructor(radio: number) {
      super();
      this.radio = radio;
    }
  
    calcularPerimetro(): number {
      return 2 * Math.PI * this.radio;
    }
  
    calcularArea(): number {
      return Math.PI * this.radio * this.radio;
    }
  }
  
  const cuadrado = new Cuadrado(5);
  const circulo = new Circulo(3);
  
  const figuras: FiguraGeometrica[] = [cuadrado, circulo];
  
  for (const figura of figuras) {
    console.log("Perimetro:", figura.calcularPerimetro());
    console.log("Area:", figura.calcularArea());
    console.log("------------------------");
}
  