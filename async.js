  async function showAvatar(name) {
  // read github user
    try {
      let githubUser = await axios.get(`https://api.github.com/users/${name}`);
       console.log(githubUser)
         // show the avatar
      document.getElementById('useravatar').src = githubUser.data.avatar_url;
      document.getElementById('username').innerHTML = githubUser.data.name;
       
    return githubUser;
       
     } catch (error) {
       console.log(`Error: ${error}`)
     } finally {
       console.log("This has been resolved")
  }
}



// showAvatar('contheflan');

async function showStargazers() {

  try {
      // read github user
    let githubUsers = await axios.get(`
    https://api.github.com/repos/axios/axios/stargazers`);
    // console.log(githubUsers.data)
    githubUsers.data.forEach((user) => {
      let img = document.createElement('img')
      img.src = user.avatar_url
      document.body.append(img)
      let username = document.createElement('p')
      username.textContent = user.login
      document.body.append(username)
    })
    return githubUsers;
  } catch (error) {
    console.log(`Error: ${error}`)
  }
  // show the avatars
  // iterate over the response data
  // insert each avatar's image and username into the DOM.
  // choose whichever type of iterator for each git user..

  
}

showStargazers();
