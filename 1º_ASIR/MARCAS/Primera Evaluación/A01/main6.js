var nNum = 30;
console.log("el valor de nNum es " + nNum)

nNum = nNum +1;
console.log("el valor de nSNum es " + nNum)

nNum = nNum +5;
console.log("el valor de nNum  es "  + nNum)

nNum++; // es lo mismo que nSuma = nNum +1;
console.log("el valor de nNum es " + nNum)

nNum = nNum -1;
console.log("el valor de nNum  es "  + nNum)

nNum--; // es lo mismo que nSuma = nNum -1;
console.log("el valor de nNum es " + nNum)

// objeto o registro

let objetoAlumno ={
    nombre: 'Bego',
    cod_alumno: 3548
};
console.log(objetoAlumno)
console.log("el nombre del alumno es: " + objetoAlumno.nombre);
console.log("el código del alumno es: " + objetoAlumno.cod_alumno);

let objetoAula ={
    num_aula: 54,
    curso: '1ºB',
    profesor: 'Begoña',
    num_perchas: 58,
    num_mesas: 40
}
console.log(objetoAula)
console.log("el nombre del profesor es: " + objetoAula.profesor);
console.log("el nombre del curso es: " + objetoAula.curso);
console.log("el número del aula es: " + objetoAula.num_aula);

var no = objetoAula.num_mesas + objetoAula.num_perchas

console.log("el número de perchas mas mesas es: " + no);
