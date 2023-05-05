"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
const threeOrMore = users.filter(user => user.languages.length>=3);
console.log(threeOrMore);

const names = users.map(user => user.email);
console.log(names);

const totalYears = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
console.log(totalYears);

const longestEmail = users.reduce((longEmail, user) =>{
    if(longEmail.length < user.email.length) {
        longEmail = user.email;
    }
    return longEmail;
}, '');
console.log(longestEmail);


const listOfNames = users.reduce((names, user) => {
    if (names === ''){
        return names + user.name;
    }
    return names + ", " + user.name;
}, '');
console.log('Your instructors are: '+listOfNames);
