//declare the first array
let v1: number[] = new Array(5);
let numberv1: number;
let indicev1: number;
//declare the second array
let v2: number[] = new Array(5);
let numberv2: number;
let indicev2: number;
//declare the third array

//declaro los prompt de ingreso de valores
for (indicev1 = 0; indicev1 < 5; indicev1++) {
  numberv1 = Number(
    prompt("Indique el número que desea incorporar el primer array", indicev1)
  );
  v1[indicev1] = numberv1;
}
for (indicev2 = 0; indicev2 < 5; indicev2++) {
  numberv2 = Number(
    prompt(
      "Indique el número que desea incorporar en el segundo array",
      indicev2
    )
  );
  v2[indicev2] = numberv2;
}

for (indicev2 = 0; indicev2 < 5; indicev2++) {
  console.log(
    "El número del segundo array en la posición",
    indicev2,
    "es",
    v2[indicev2]
  );
}
for (indicev1 = 0; indicev1 < 5; indicev1++) {
  console.log(
    "El número del primer array en la posición",
    indicev1,
    "es",
    v1[indicev1]
  );
}

/*
let vSuma : number [] = new Array (5);
let numbervSuma: number;
let indicevSuma : number;
vSuma[v1(0) + v2 (0)] = 0;
vSuma[v1(1) + v2 (1)] = 1;
vSuma[v1(2) + v2 (2)] = 2;
vSuma[v1(3) + v2 (3)] = 3;
vSuma[v1(4) + v2 (4)] = 4;
vSuma[v1(5) + v2 (5)] = 5;
*/
