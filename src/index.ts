//declare the first array
let v1: number[] = new Array(6);
let numberv1: number;
let indicev1: number;
//declare the second array
let v2: number[] = new Array(6);
let numberv2: number;
let indicev2: number;
//declare the third array

//declaro los prompt de ingreso de valores
for (indicev1 = 0; indicev1 < 6; indicev1++) {
  numberv1 = Number(
    prompt(
      `Indique el número que desea incorporar en la posición ${indicev1}: `
    )
  );
  v1[indicev1] = numberv1;
}
for (indicev2 = 0; indicev2 < 6; indicev2++) {
  numberv2 = Number(
    prompt(
      `Indique el número que desea incorporar en la posición ${indicev2}: `
    )
  );
  v2[indicev2] = numberv2;
}

console.log(
  "la suma de los numeros igresados es :",
  v1[0] + v2[0],
  v1[1] + v2[1],
  v1[2] + v2[2],
  v1[3] + v2[3],
  v1[4] + v2[4],
  v1[5] + v2[5]
);
//Esta muy bien Emi, pregunta: podrias haber llenado los 2 arreglos con un solo for?
