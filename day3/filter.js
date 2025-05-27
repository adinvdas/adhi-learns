//Filter a list of users to return only adults (age >= 18)
let people =[
    {name: "Adin", Age: 18, Place:"EKM"},
    {name: "Sai", Age: 23, Place:"vypin"},
    {name: "Abhi", Age: 17, Place:"mala"},
    {name: "manu", Age: 16, Place:"tvm"}
]
let teenage = people.filter(people=>
    people.Age<=18
);

console.log(teenage)
