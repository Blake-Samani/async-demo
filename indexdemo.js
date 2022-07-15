console.log('Before');
getUser(1, getRepositories);



console.log('After');

function getRepositories(user) {
    getRepositories(user.gitHubUser, getCommits);
}

function getCommits(repos) {
    getCommits(repo, displayCommits); //this is not calling the function since theres no (), we are just passing a reference
}

function displayCommits(commits) {
    console.log(commits);
}

function displayRepositories(repos) {
    console.log('repos: ', repos);
}

function getUser(id, callback) {
    //we use a callback function when the result of an asynchronous operation is ready
    setTimeout(() => {
        console.log('Reading a user from DB');
        callback({ id: id, gitHubUser: 'Blake' });
    }, 2000);

    //set timeout takes two arguments, a function and a time, in our case 2 seconds
    //After two seconds, code in function will be executed
}

function getRepositories(userName, callback) {
    setTimeout(() => {
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000);

}