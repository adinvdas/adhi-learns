let people = [
  { name: "Adin", Age: 18, Place: "EKM" },
  { name: "Sai", Age: 23, Place: "vypin" },
  { name: "Abhi", Age: 17, Place: "mala" },
  { name: "manu", Age: 16, Place: "tvm" },
];

let greetings =people.map(people=> `hello you stupid ${people.name}`);
console.log(greetings);