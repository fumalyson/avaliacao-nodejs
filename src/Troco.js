/**
 * Essa classe possui o metodo getQtdeNotas ele não está completo e cabe a você concluí-lo de acordo com os requisitos.
 */
 class Troco {

  static getQtdeNotas(reais) {
    let notasQtd = {
      '0.01': 0,
      '0.05': 0,
      '0.1': 0,
      '0.25': 0,
      '0.5': 0,
      '1': 0,
      '5': 0,
      '2': 0,
      '10': 0,
      '20': 0,
      '50': 0,
      '100': 0,
    }
    let notas = [
      0.01,
      0.05,
      0.1,
      0.25,
      0.5,
      1,
      2,
      5,
      10,
      20,
      50,
      100
    ];

    let index = notas.length - 1;

    while (reais >= notas[0]) {

      if (reais >= notas[index]) {
        reais -= notas[index];
        notasQtd[notas[index]]++
      } else {
        index--;
      }
    }
    return notasQtd;
  }
}

module.exports = Troco