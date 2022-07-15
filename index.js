//Promises
console.log('Before');
//-----------------------------------------------
//callback hell problem approach
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     })
//   })
// });
console.log('After');

//-----------------------------------------------
//PROMISE APPROACH
//getuser function now returns a promise
//this mirrors the behavior of the original implementation, line 3, and 
//refactors it to use promises. After each function call we need toresolve the promise with then
// getUser(1).then(user => getRepositories(user.gitHubUsername))
//   .then(repos => getCommits(repos[0]))
//   .then(commits => console.log('Comits', commits))
//   .catch(err => console.log('Error', err.message));
//then gets our resolve, catch gets our error


//-----------------------------------------------
//ASYNC AND AWAIT APPROACH
//basically async code that looks like synchronous code

async function displayCommits() { //try catch emulates then/catch
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log('Error', err.message);
  }

}

displayCommits();


function getUser(id) {
  return new Promise((resolve, reject) => {
    // Async work
    setTimeout(() => {
      console.log('Reading a user from a database...');
      resolve({ id: id, gitHubUsername: 'mosh' });
    }, 2000);
  });

}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);

  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['commit']);
    }, 2000);
  });

}