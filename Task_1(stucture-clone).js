const original = {
  name: "Harsh",
  age: "21",
  skills: ["js", "react", "node", ['html', 'css']],
  address: {
    city: "Rajkot",
    Currentlocation: "ahmedabad",
  },
  greet: function(){
    return 'hello'
  }
};

function deepClone(value) {
  if (typeof value !== "object" || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    let cloneArr = [];

    for (let ele of value) {
      cloneArr.push(deepClone(ele));
    }
    return cloneArr;
  }

  let cloneObj = {};

  for (let key in value) {
    cloneObj[key] = deepClone(value[key]);
  }

  return cloneObj;
}

const deep = deepClone(original);
const shallow = { ...original };

console.log("deep !== original", deep !== original);
console.log("deep.address !== original.address", deep.address !== original.address);
console.log("deep.skills !== original.skills", deep.skills !== original.skills); // true

console.log("shallow.address === original.address", shallow.address === original.address); 
console.log("shallow.skills === original.skills",
shallow.skills === original.skills
);