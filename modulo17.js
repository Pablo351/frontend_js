 /*************************************
*
*             Ejercicio 1
*
**************************************/
// //1
// let checkAge = age => age >= 18 ? console.log(true) : console.log('No eres mayor de edad todavia');
// checkAge(age=17)

// //2
// function min (a,b){
//     if (a<b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(min(56,37))

// //3
// function doble (a , int=2){
//     doble= a*2
//     return doble;
// }
// console.log(doble(8))

// //4
// let min = (a,b) => a < b ? console.log(a) : console.log(b)
// min(2,9)

// let doble = (a, int=2) => a*2
// console.log(doble(5))


 /*************************************
*
*             Ejercicio 3 Objetos
*
**************************************/

// //1
// let object = {}
// object.name = 'John'
// object.surname = 'Smith'
// object.name = 'Pete'

// console.log(object)

// delete object.name

// console.log(object)

// // 2.
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sumaSalarios = (salaries.John + salaries.Ann + salaries.Pete)
// console.log(sumaSalarios)

// //3
// let menu = {
//   width: 200,
//   height: 300,
//   title: "Mi menú"
// };

// console.log(menu)


// function multiplyNumeric(key, menu){
//     for ( key in menu) {
//         if( key == typeOf(number) ) {
//             key *= 2
            
//         }
//     }
//     console.log(menu)
// }

// multiplyNumeric()


 /*************************************
*
*             Ejercicio 4 arrays
*
**************************************/
// //1
// let music = ['Jazz', 'Blues']
// console.log(music)

// music.push('Rock-n-Roll')
// console.log(music)

// music.splice(1,1,'Classics')
// console.log(music)

// music.unshift('Rap','Reggae')
// console.log(music)


// //2
// let num = [12, 45, 32, 56, 190]
// suma=0
// // num.forEach (function(i){
// //     suma += i
// // })
// num.forEach(i => {
//     suma += i 
// });
// console.log(suma)


 /*********************************************
*
*             Ejercicio 5 arrays methods
*
***********************************************/

// let users = [
//   {id: 1, name: "Fran", age: 31},
//   {id: 2, name: "Katy", age: 18},
//   {id: 3, name: "Federico", age: 38},
//   {id: 4, name: "Maria", age: 24},
//   {id: 5, name: "John", age: 45},
//   {id: 6, name: "Fran", age: 7},
// ];

// console.log(users)
// users.splice(1,1)
// users.splice(3 , 2)
// console.log(users)

// users.push({id: 7 , name: 'Pablo', age: 26}, {id: 8 , name: 'Exequiel', age: 27}, {id: 9 , name: 'Fran', age: 28})
// console.log(users)

// users.forEach( function recorrer (users){
//     console.log('Hola mi nombre es ' + users.name  + ' y tengo ' + users.age + ' años')
// }   
// );

// let elDe31 = users.find(function(i){
//     return i.age === 31
// })
// console.log(elDe31)

// let elDelNombre = users.filter(function(i){
//     return i.name =='Fran'
// })
// console.log(elDelNombre)

// users.forEach(function(i){
//     i.age = 17
// })

// console.log(users)