const faker = require('faker');


function generateUsers() {

    let users = [];

    let numberOfUsers = faker.random.number({
        min: 1,
        max: 99,
    });

    for (let i = 0; i < numberOfUsers; i++) {

        users.push(generateUser());
    }

    return {"users": users};

}

function generateUser() {

    return {
        id       : faker.random.uuid(),
        firstName: faker.name.firstName(),
        lastName : faker.name.lastName(),
        email    : faker.internet.email(),
        password : faker.internet.password(),
        about    : faker.lorem.sentences()
    }
}


module.exports = generateUsers;

