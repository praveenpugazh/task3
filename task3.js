//Porb 0 part A
var cat = {
  name: "Fluffy",
  activities: ["play", "eat cat food"],
  catFriends: [
    {
      name: "bar",
      activities: ["be grumpy", "eat bread omblet"],
      weight: 8,
      furcolor: "white",
    },
    {
      name: "foo",
      activities: ["sleep", "pre-sleep naps"],
      weight: 3,
    },
  ],
  height: 2.5,
  weight: 20,
};
//name change
cat.name = "Fluffyy";

//catfriends activities
cat.catFriends.forEach((item) => {
  console.log(item.activities);
});

//catfriends names
cat.catFriends.forEach((item) => {
  console.log(item.name);
});

//catfriends combined weight
let sum = 0;
cat.catFriends.forEach((item) => {
  sum += item.weight;
});
console.log(sum);

//cat total activities

for (key in cat) {
  if (key == "activities") {
    if (cat[key].length > 1) {
      for (i = 0; i < cat[key].length; i++) {
        console.log(cat[key][i]);
      }
    }
  }
  if (key == "catFriends") {
    for (j = 0; j < cat[key].length; j++) {
      for (k = 0; k < cat[key][j].activities.length; k++) {
        console.log(cat[key][j].activities[k]);
      }
    }
  }
}

//add activites to bar and foo
cat.catFriends.forEach((item) => {
  item.activities.push("eat");
  item.activities.push("pray");
  console.log(item.activities);
});

//update fur color
cat.catFriends[0].furcolor = "black";
console.log(cat.catFriends[0].furcolor);

//part B

var myCar = {
  make: "Bugatti",
  model: "Bugatti La Voiture Noire",
  year: 2019,
  accidents: [
    {
      date: "3/15/2019",
      damage_points: "5000",
      atFaultForAccident: true,
    },
    {
      date: "7/4/2022",
      damage_points: "2200",
      atFaultForAccident: true,
    },
    {
      date: "6/22/2021",
      damage_points: "7900",
      atFaultForAccident: true,
    },
  ],
};
//accident update
myCar.accidents.forEach((item) => {
  item.atFaultForAccident = false;
});
//print dates
myCar.accidents.forEach((item) => {
  console.log(item.date);
});

//prob1

var object = { name: "RajiniKanth", age: 33, hasPets: false };

function printAllValues(obj) {
  console.log(Object.values(obj));
}
printAllValues(object);

//prob2

function printAllKeys(obj) {
  console.log(Object.keys(obj));
}

printAllKeys(object);

//prob3

var object = { name: "ISRO", age: 35, role: "Scientist" };

function convertListToObject(obj) {
  var result = Object.keys(obj).map((key) => [key, obj[key]]);
  console.log(result);
}

convertListToObject(object);

//prob5
var array = [
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", 1964],
];

function fromListToObject(arr) {
  var newObject = {};
  for (var i = 0; i < arr.length; i++) {
    let key = arr[i][0];
    let value = arr[i][1];
    newObject[key] = value;
  }
  return newObject;
}

console.log(fromListToObject(array));

//prob 6
var array = [
  [
    ["firstName", "Vasanth"],
    ["lastName", "Raja"],
    ["age", 24],
    ["role", "JSWizard"],
  ],
  [
    ["firstName", "Sri"],
    ["lastName", "Devi"],
    ["age", 28],
    ["role", "Coder"],
  ],
];

function transformEmployeeData(arr) {
  var tranformEmployeeList = [];
  for (var i = 0; i < arr.length; i++) {
    let newObject = {};
    for (var j = 0; j < arr[i].length; j++) {
      let key = arr[i][0];
      let value = arr[i][1];
      newObject[key] = value;
    }
    tranformEmployeeList.push(newObject);
  }
  return tranformEmployeeList;
}

console.log(transformEmployeeData(array));

//prob7
var expected = { foo: 5, bar: 6 };
var expected1 = { foo: 6, bar: 5 };
var actual = { foo: 5, bar: 6 };

function assertObjectsEqual(actual, expected, testName) {
  actualStr = JSON.stringify(actual);
  expectedStr = JSON.stringify(expected);
  if (actualStr == expectedStr) {
    return "Passed";
  } else {
    return (
      "FAILED [" +
      testName +
      "] Expected " +
      actualStr +
      ", but got " +
      expectedStr
    );
  }
}

console.log(assertObjectsEqual(actual, expected, "test1"));
// Output: Passed
console.log(assertObjectsEqual(actual, expected1, "test2"));
// Output : FAILED [test2] Expected {"foo":5,"bar":6}, but got {"foo":6,"bar":5}

//prob 8

function chksecurityQuestions(securityQuestions, question, answer) {
  let flag = 0;
  securityQuestions.forEach((item) => {
    if (item.question == question && item.expectedAnswer == answer) {
      flag = 1;
    }
  });
  if (flag) return true;
  else return false;
  //  return true or false;
}
var question = "What was your first pet’s name?";
var answer = "FlufferNutter";

console.log(chksecurityQuestions(securityQuestions, question, answer));

//prob9

var students = [
  {
    name: "Siddharth Abhimanyu",
    age: 21,
  },
  { name: "Malar", age: 25 },
  { name: "Maari", age: 18 },
  { name: "Bhallala Deva", age: 17 },
  { name: "Baahubali", age: 16 },
  { name: "AAK chandran", age: 23 },
  { name: "Gabbar Singh", age: 33 },
  { name: "Mogambo", age: 53 },
  { name: "Munnabhai", age: 40 },
  { name: "Sher Khan", age: 20 },
  { name: "Chulbul Pandey", age: 19 },
  { name: "Anthony", age: 28 },
  { name: "Devdas", age: 56 },
];
function returnMinors(arr) {
  students.forEach((item) => {
    if (item.age < 20) {
      console.log(item);
    }
  });
}
returnMinors(students);
