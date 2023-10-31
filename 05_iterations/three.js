//for of loop
const arr = [1, 2, 3, 4, 5];
for(const num of arr){
    console.log(num);
}

//maps
const map = new Map();
map.set('IN',"India");
map.set('US', "Unioted Stes");
console.log(map);
for(const [key,value] of map)
{
    console.log(key,'.', value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
for(const key in myObject)
{
    console.log(key,'.',myObject[key]);
}

const prog = ["js", "c++", "cpp"]
for(const key in prog)
{
    console.log(prog[key]);
}

// for(const it in map)
// {

// } // not possible


