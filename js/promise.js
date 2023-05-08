'use strict';

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json()).then(data => data.forEach(post => console.log(post)))


const user = prompt("What's your username?");

fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': GITHUB_TOKEN}}).then(res =>  res.json()).then(data => console.log('Your last commit was at: '+data[0].created_at));



// const octokit = new Octokit({
//     auth: GITHUB_TOKEN
// })
//
// await octokit.request('GET /users/{username}/events/public', {
//     username: user,
//     headers: {
//         'X-GitHub-Api-Version': '2022-11-28'
//     }
// })