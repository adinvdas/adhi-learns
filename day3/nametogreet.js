
function greet(name){
    let name=people.map(people=>people.name);
    return `NAMASKAR ${people.name}`;
}
let people =[
    {name: "Adin", Age: 18, Place:"EKM"},
    {name: "Sai", Age: 23, Place:"vypin"},
    {name: "Abhi", Age: 17, Place:"mala"},
    {name: "manu", Age: 16, Place:"tvm"}
]

console.log(greet(people));