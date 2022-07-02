import { Users } from "../User-data";

const allUsers = Users.map((User) => {
  return {
    id: User.id,
    firstName: User.first_name,
    lastName: User.last_name,
    mail: User.email,
    age: User.age,
    isActive: User.isActive,
  };
});

// console.log(allUsers);

// Users that are active

const activeUsers = Users.filter((User) => User.isActive);

// console.log(activeUsers);

//  get all Childern in the user

const ChildernUsers = Users.filter((User) => {
  if (User.age < 18) {
    return User;
  }
});

// console.log(ChildernUsers.length);

// get Girl child

const girlChildernUsers = Users.filter((User) => {
  if (User.age < 18 && User.gender === "Female") {
    return User;
  }
});

// console.log(girlChildernUsers.length);

// get Youths
const youthsUsers = Users.filter((User) => {
  if (User.age >= 18 && User.age <= 45) {
    return User;
  }
});
// console.log(youthsUsers);

// changing some letters in the array

const ChangedAlpha = Users.map((user) => {
  return {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    mail: user.email,
    Gender: user.gender.replace(/female/gi, "Girls"),
    age: user.age,
    isActive: user.isActive,
  };
});
// console.log(ChangedAlpha);

const SomeAlph = Users.some((Ages) => Ages.age <= 18);

console.log(SomeAlph);

const NumberofGirls = ChangedAlpha.filter((girls) => girls.Gender === "Girls");

// console.log(NumberofGirls);

const SortArr = NumberofGirls.sort((a, b) => {
  return a.age - b.age, a.id - b.id;
});

// console.log(SortArr);

const Findarr = NumberofGirls.find((girls) => girls.age === 13);

// console.log(Findarr);

const Findind = NumberofGirls.findIndex((Ages) => Ages.age === 13);

// console.log(Findind);

// slite method
const sliptletters = NumberofGirls.map((listOfGirls) => {
  const First = listOfGirls.firstName;
  const Last = listOfGirls.lastName;
  return {
    Name: First.concat(Last),
  };
});

// console.log(sliptletters);

// checking for special charactes in strings

const specialCharacter = (Password: string) => {
  const charactes = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  // console.log(charactes.test(Password));
};

specialCharacter("Hello Dear");

specialCharacter("Hello_world");

function containsSpecialChars(str: string) {
  const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;

  const result = specialChars.split("").some((specialChar) => {
    if (str.includes(specialChar)) {
      return true;
    }

    return false;
  });

  return result;
}

// console.log(containsSpecialChars("hello")); // 👉️ false
// console.log(containsSpecialChars("hello!")); // 👉️ true

let Fruit: string[] = [
  "Apple",
  "Bannana",
  "Power-Horse",
  "Egg",
  "Mazie",
  "Chicken",
];

Fruit.push("beans");
Fruit.pop();
Fruit.shift();
Fruit.unshift("Water");

// console.log(Fruit);

// Sort methods
const numberArray: number[] = [
  4, 7, 8, 9, 5, 10, 45, 36, 79, 20, 21, 6, 12, 36,
];

const sortnumber = numberArray.sort((a, b) => a - b);

// console.log(sortnumber);

const filetredNum = sortnumber.filter((numbers) => numbers <= 20);

const reduceNum = filetredNum.reduceRight((a, b) => a + b);

const findIndexNum = sortnumber.findIndex((num) => num === 20);

// console.log(`the findIndex returns the index ${findIndexNum}`);

const numbers = [
  68, -68, 27, 94, 72, -25, -51, 32, 10, 64, -94, 4, 34, -86, 90, 81, 20, -56,
  -91, -50,
];

const result = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(result);

const number2 = [
  17, 0, 67, 41, 49, 21, 1, 86, 76, 2, 54, 14, 93, 84, 14, 77, 35, 7, 29, 64,
];

const result2 = number2.reduce(
  (acc, curr) => acc + (curr % 2 === 0 ? 1 : 0),
  0
);

// console.log(result2);

const number3 = [
  24, 30, 14, -8, 22, 17, -5, 25, 2, 25, 10, 10, 28, 33, 39, 28, 23, -1, 2, -4,
];

const result3 = number3.map((temp) => Math.trunc((temp * 9) / 5 + 32));

console.log(result3);
