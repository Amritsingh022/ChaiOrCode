/*
const name="amrit"
const repocount=50
//console.log(name+repocount+"value")
console.log(`Hello my name is ${name} and my repo count is ${repocount}`)  //called string interpolation
*/

const stringname=new String('hites-hc-com')
console.log(stringname)

console.log(stringname[0])
console.log(stringname.__proto__);

console.log(stringname.toUpperCase())
console.log(stringname.charAt(5))
console.log(stringname.indexOf('i'))

const newstring=stringname.substring(-1,5)
console.log(newstring);

const anotherstring=stringname.slice(2,-2)
console.log(anotherstring)


const differentstring="       Amrit      "
console.log(differentstring)
console.log(differentstring.trim())


const url="https:/hitesh.com/hitesh%20chaudhry"

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))


console.log(stringname.split('-'))