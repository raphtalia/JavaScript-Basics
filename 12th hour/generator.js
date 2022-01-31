const { faker } = require("@faker-js/faker");

const people = [];

for (let i = 0; i < 100; i++) {
  people.push({
    fName: faker.name.firstName(),
    lName: faker.name.lastName(),
    // phoneNum: faker.phone.phoneNumber(),
    // address: faker.address.streetAddress(),
  });
}

console.log(people);
