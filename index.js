// 00 - Create a forked repo from this repository and clone it in your local machine.

// 01 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)



function getTotal(inventory){
    let total = 0
    inventory.forEach(element => {
        total += (element.price * element.quantity)
        
    });
    return total
}
const inventory = [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}]
console.log(getTotal(inventory))


// 02 - Function
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})
function countBanana(array){
    let cont = 0
    array.forEach(element => {
        if (element == '🍌'){
            cont ++
        }
    });
    return cont
}
const banana = ['🥑','🍌','🥭', '🍌']
console.log(countBanana(banana))


// 03- Function
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6, 8, 10]
function evenNumbers(array){
    let even = []
    array.forEach(element => {
        if(element%2 == 0){
            even.push(element)
        }
    });
    return even
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// 04 - function
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(squareNumbers(numbers)); // Output: [1, 4, 9, 16, 25]
function squareNumbers(numbers){
    return numbers.map(function (num) {
        return num * num
        
    })
}
console.log(squareNumbers([1, 2, 3, 4, 5]))


// 05 - function
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(findMax(numbers)); // Output: 5

function findMax(num){
    let min = -Infinity
    num.forEach(element => {
        if (min < element) {
            min = element
        }
    });
    return min

}
console.log(findMax([1, 2, 3, 4, 5]))

// 06 - function
//   const people = [
//     { name: "Juan", age: 25 },
//     { name: "Carla", age: 30 },
//     { name: "Lucia", age: 35 },
//     { name: "El Chengue", age: 49 }
//   ];
//   console.log(calculateAverageAge(people)); // Output: 34.75
function calculateAverageAge(people){
    let totalAge = 0
    let totalPeople = 0
    people.forEach(element => {
        totalAge += element.age
        totalPeople++
        
    });
    return totalAge / totalPeople

}
const people = [
         { name: "Juan", age: 25 },
         { name: "Carla", age: 30 },
         { name: "Lucia", age: 35 },
         { name: "El Chengue", age: 49 }
       ];
console.log(calculateAverageAge(people))

// 07 - function  combinedHobbies(persons)
// Function to combine hobbies from all persons

// const persons = [
//     {
//       name: 'Paula',
//       hobbies: ['reading 📚', 'gardening 🌱', 'painting 🎨']
//     },
//     {
//       name: 'Martin',
//       hobbies: ['cycling 🚴', 'cooking 🍳', 'hiking 🥾']
//     },
//     {
//       name: 'Juan',
//       hobbies: ['photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️']
//     },
//     {
//       name: 'Veronica',
//       hobbies: ['dancing 💃', 'singing 🎤', 'running 🏃‍♀️']
//     }
//   ];

// combinedHobbies(persons)
// Expected output:
// [
//   'reading 📚', 'gardening 🌱', 'painting 🎨',
//   'cycling 🚴', 'cooking 🍳', 'hiking 🥾',
//   'photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️',
//   'dancing 💃', 'singing 🎤', 'running 🏃‍♀️'
// ]

function combinedHobbies(persons){
    let hobbies = []
    persons.forEach(element => {
        hobbies.push(element.hobbies)

        
    });
    return hobbies
}
const persons = [
    {
      name: 'Paula',
      hobbies: ['reading 📚', 'gardening 🌱', 'painting 🎨']
    },
    {
      name: 'Martin',
      hobbies: ['cycling 🚴', 'cooking 🍳', 'hiking 🥾']
    },
    {
      name: 'Juan',
      hobbies: ['photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️']
    },
    {
      name: 'Veronica',
      hobbies: ['dancing 💃', 'singing 🎤', 'running 🏃‍♀️']
    }
  ];
console.log(combinedHobbies(persons))

// 08 - function printChemicalInfo(chemicals)
// const chemicals = [
//     {
//       compoundId: 'CHEM001',
//       name: 'Aspirin',
//       formula: 'C9H8O4',
//       description: 'Aspirin is a common medication used to reduce pain and inflammation.',
//       molecularWeight: '180.16 g/mol',
//       meltingPoint: '135°C',
//       boilingPoint: '140°C',
//       solubility: 'Slightly soluble in water'
//     },
//     {
//       compoundId: 'CHEM002',
//       name: 'Caffeine',
//       formula: 'C8H10N4O2',
//       description: 'Caffeine is a stimulant found in coffee, tea, and various energy drinks.',
//       molecularWeight: '194.19 g/mol',
//       meltingPoint: '238°C',
//       boilingPoint: '178°C',
//       solubility: 'Freely soluble in water'
//     },
//     {
//       compoundId: 'CHEM003',
//       name: 'Ethanol',
//       formula: 'C2H6O',
//       description: 'Ethanol, also known as alcohol, is commonly used as a solvent and in alcoholic beverages.',
//       molecularWeight: '46.07 g/mol',
//       meltingPoint: '-114.1°C',
//       boilingPoint: '78.37°C',
//       solubility: 'Miscible with water'
//     }
//   ];

//printChemicalInfo(chemicals)
//Expected output

// +-------------------------------------------------------+
// | Compound ID: CHEM001                                 |
// | Name: Aspirin                                        |
// | Formula: C9H8O4                                      |
// | Description: Aspirin is a common medication used to  |
// | reduce pain and inflammation.                        |
// | Molecular Weight: 180.16 g/mol                       |
// | Melting Point: 135°C                                 |
// | Boiling Point: 140°C                                 |
// | Solubility: Slightly soluble in water                |
// +-------------------------------------------------------+
// +-------------------------------------------------------+
// | Compound ID: CHEM002                                 |
// | Name: Caffeine                                       |
// | Formula: C8H10N4O2                                   |
// | Description: Caffeine is a stimulant found in coffee,|
// | tea, and various energy drinks.                      |
// | Molecular Weight: 194.19 g/mol                       |
// | Melting Point: 238°C                                 |
// | Boiling Point: 178°C                                 |
// | Solubility: Freely soluble in water                  |
// +-------------------------------------------------------+
// +-------------------------------------------------------+
// | Compound ID: CHEM003                                 |
// | Name: Ethanol                                        |
// | Formula: C2H6O                                       |
// | Description: Ethanol, also known as alcohol, is      |
// | commonly used as a solvent and in alcoholic beverages|
// | Molecular Weight: 46.07 g/mol                        |
// | Melting Point: -114.1°C                              |
// | Boiling Point: 78.37°C                               |
// | Solubility: Miscible with water                      |
// +-------------------------------------------------------+

function printChemicalInfo(chemicals){
    chemicals.forEach(element => {
        console.log('+-------------------------------------------------------+');
        console.log(`| Compound ID: ${element.compoundId}                    |`);
        console.log(`| Name: ${element.name}                                 |`);
        console.log(`| Formula: ${element.formula}                           |`);
        console.log(`| Description: ${element.description}                   |`);
        console.log(`| Molecular Weight: ${element.molecularWeight}          |`);
        console.log(`| Melting Point: ${element.meltingPoint}                |`);
        console.log(`| Boiling Point: ${element.boilingPoint}                |`);
        console.log(`| Solubility: ${element.solubility}                     |`);
        console.log('+-------------------------------------------------------+');

        
    });

}
 const chemicals = [
     {
       compoundId: 'CHEM001',
       name: 'Aspirin',
       formula: 'C9H8O4',
       description: 'Aspirin is a common medication used to reduce pain and inflammation.',
       molecularWeight: '180.16 g/mol',
       meltingPoint: '135°C',
       boilingPoint: '140°C',
       solubility: 'Slightly soluble in water'
     },
     {
       compoundId: 'CHEM002',
       name: 'Caffeine',
       formula: 'C8H10N4O2',
       description: 'Caffeine is a stimulant found in coffee, tea, and various energy drinks.',
       molecularWeight: '194.19 g/mol',
       meltingPoint: '238°C',
       boilingPoint: '178°C',
       solubility: 'Freely soluble in water'
     },
     {
       compoundId: 'CHEM003',
       name: 'Ethanol',
       formula: 'C2H6O',
       description: 'Ethanol, also known as alcohol, is commonly used as a solvent and in alcoholic beverages.',
       molecularWeight: '46.07 g/mol',
       meltingPoint: '-114.1°C',
       boilingPoint: '78.37°C',
       solubility: 'Miscible with water'
     }
   ];
console.log(printChemicalInfo(chemicals))

// 09 - function getGetUniqueGuestList(guestList)
// const guestList = ['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'Alice 🙆🏻‍♀️', 'David 🤵🏿‍♂️'];

// Remove duplicated elements from the  guests list
// Expected getGetUniqueGuestList(guestList)) ['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'David 🤵🏿‍♂️']

function getGetUniqueGuestList(guestList){
    let newList = []
    guestList.forEach(element => {
        if (!newList.includes(element)){
            newList.push(element)
        }
    });
    return newList

}
const guestList = ['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'Alice 🙆🏻‍♀️', 'David 🤵🏿‍♂️']
console.log(getGetUniqueGuestList(guestList))


// 10 - function showUserProfiles(user)
// User data

// const user1 = {
//     id: 1,
//     name: 'Carol Smith',
//     profile: {
//       social: {
//          twitter: 'carol.smith',
//          facebook: 'carol.smith77'
//      }
//    }
//};

// const user2 = {
//     id: 2,
//     name: 'Jane Smith',
//     profile: {
//       email: 'jane.smith@example.com'
//     }
//};

//   showUserProfile(user1); // Expected output: 'carol.smith, carol.smith77'
//   showUserProfile(user2); // Expected output: 'jane.smith@example.com'

function showUserProfiles(user){

    let output = [];
    
    
    Object.values(user.profile).forEach(value => {
        
        if (typeof value === 'object') {
            for (let subKey in value) {
                output.push(value[subKey]);
            }
        } else {
            output.push(value);
        }
    })
    
    return output.join(', ');
}

const user1 = {
    id: 1,
    name: 'Carol Smith',
    profile: {
      social: {
         twitter: 'carol.smith',
         facebook: 'carol.smith77'
     }
   }
};

const user2 = {
    id: 2,
    name: 'Jane Smith',
    profile: {
      email: 'jane.smith@example.com'
    }
};

console.log(showUserProfiles(user1)) // Expected output: 'carol.smith, carol.smith77'
console.log(showUserProfiles(user2)) // Expected output: 'jane.smith@example.com'

// 11 - function sortLeaderBoardByScoreDesc(leaderBoard)
// The function should sort the players by score as it's displayed on the expected output

// const leaderBoard = [
//   { player: "John", score: 80 },
//   { player: "Charlie", score: 20 },
//   { player: "Julio", score: 50 },
//   { player: "Bob", score: 80 },
//   { player: "Bobby", score: 11 },
//   { player: "Tommy", score: 43 },
//   { player: "Eric", score: 99 },
//   { player: "Alice", score: 100 },
//   { player: "Alfred", score: 30 },
// ];

// Expected output:
// [
//   { player: 'Alice', score: 100 },
//   { player: 'Eric', score: 99 },
//   { player: 'John', score: 80 },
//   { player: 'Bob', score: 80 },
//   { player: 'Julio', score: 50 },
//   { player: 'Tommy', score: 43 },
//   { player: 'Alfred', score: 30 },
//   { player: 'Charlie', score: 20 },
//   { player: 'Bobby', score: 11 }
// ]


function sortLeaderBoardByScoreDesc(leaderBoard){
    return leaderBoard.sort((a,b) => b.score - a.score)

}

const leaderBoard = [
  { player: "John", score: 80 },
  { player: "Charlie", score: 20 },
  { player: "Julio", score: 50 },
  { player: "Bob", score: 80 },
  { player: "Bobby", score: 11 },
  { player: "Tommy", score: 43 },
  { player: "Eric", score: 99 },
  { player: "Alice", score: 100 },
  { player: "Alfred", score: 30 },
];

console.log(sortLeaderBoardByScoreDesc(leaderBoard))

// 12 - function

// function getTopFiveWorstPlayers(leaderBoard)

// Expected output:
// [
//   { player: 'Bobby', score: 11 },
//   { player: 'Charlie', score: 20 },
//   { player: 'Alfred', score: 30 },
//   { player: 'Tommy', score: 43 },
//   { player: 'Julio', score: 50 }
// ]

// NOTE: ⚠️ original array shouldn't be modified. or we are missing players.

function getTopFiveWorstPlayers(leaderBoard){
    let worstFive = []
    leaderBoard.sort((a,b) => a.score - b.score)
    for (let i = 0; i < 5; i++) {
        worstFive.push(leaderBoard[i])
        
    }
    return worstFive
}
console.log(getTopFiveWorstPlayers(leaderBoard))

// 13 - function safeCopy()
// const companyHierarchy = {
//     name: 'Company',
//     departments: [
//       {
//         name: 'Engineering',
//         head: 'Alice',
//         subDepartments: [
//           {
//             name: 'Backend',
//             head: 'Bob',
//             employees: ['Charlie', 'David']
//           },
//           {
//             name: 'Frontend',
//             head: 'Eve',
//             employees: ['Frank', 'Grace']
//           }
//         ]
//       },
//       {
//         name: 'Sales',
//         head: 'Henry',
//         employees: ['Isaac', 'Jane']
//       }
//     ]
//   };

// Deep copy function
// function safeCopy(obj) {
//      ToDo (complete the function here...)
//  }

//   // Example usage
//   const copiedHierarchy = safeCopy(companyHierarchy);

//   // Modify the copied hierarchy
//   copiedHierarchy.departments.push({
//     name: 'Marketing',
//     head: 'Karen',
//     employees: ['Liam', 'Mia']
//   });

//   // Verify independence
//   console.log('Original Company Hierarchy:');
//   console.log(companyHierarchy);

//   console.log('Copied Company Hierarchy with Modifications:');
//   console.log(copiedHierarchy);


function safeCopy(companyHierarchy){
    let clone = JSON.parse(JSON.stringify(companyHierarchy))
    return clone


}

const companyHierarchy = {
    name: 'Company',
    departments: [
      {
        name: 'Engineering',
        head: 'Alice',
        subDepartments: [
          {
            name: 'Backend',
            head: 'Bob',
            employees: ['Charlie', 'David']
          },
          {
            name: 'Frontend',
            head: 'Eve',
            employees: ['Frank', 'Grace']
          }
        ]
      },
      {
        name: 'Sales',
        head: 'Henry',
        employees: ['Isaac', 'Jane']
      }
    ]
  };



console.log('Original Company Hierarchy:');
console.log(companyHierarchy);

console.log('Copied Company Hierarchy with Modifications:');
console.log(safeCopy(companyHierarchy))