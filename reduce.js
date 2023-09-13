  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => {
  console.log(
    "Accumulator:", acc,
    "Current Value:", curr,
    "Total:", acc + curr
  );
  return acc + curr;
}, 20);

console.log(sum);



const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'Alex', // add a new catergory
    profession: 'Manager',
    yrsExperience: 12
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log("Experience total years:", totalExperience);

// Grouping by a property, and totaling it too
let experienceByProffession = teamMembers.reduce((acc, curr) => {
let key = curr.profession; 
if (!acc[key]) {
  acc[key] = curr.yrsExperience;
} else {
  acc[key] += curr.yrsExperience;
}
return acc;
}, {});

console.log(experienceByProffession);

let namesByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(curr.name);
  return acc;
}, {});

console.log(namesByProfession);

const namesByProfessionArray = Object.entries(namesByProfession).map(([profession, names]) => ({
  profession,
  names
}));

console.log(namesByProfessionArray);