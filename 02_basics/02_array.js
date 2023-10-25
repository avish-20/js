const marvel_heros = ["thor", "ironman","hulk"]
const dc = ["superman", "flash"]
//marvel_heros.push(dc)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
marvel_heros.concat(dc)
console.log(marvel_heros);
//same
//concat return jnew array
const alt_heros = marvel_heros.concat(dc);
console.log(alt_heros);

const all_new_heros = [...marvel_heros,...dc]
console.log(all_new_heros);

const another_arr = [1,2,3,[4,5,6],7,[6,7,[6,7,[4,5]]]]

const real_another_array = another_arr.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));

console.log(Array.from({name:"hitesh"}));
//intersting yha pr epty print hoga kyuki hme btana hoga ki hm key ya fir value kon array me convert kr rhe h

