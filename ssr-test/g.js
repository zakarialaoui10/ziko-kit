import { Octokit } from "@octokit/rest";

async function isUserXFollowsUserY(userX, userY) {
  const octokit = new Octokit();

  try {
    await octokit.request('GET /users/{username}/following/{target_user}', {
      username: userX,
      target_user: userY
    });
    return true; // userX follows userY
  } catch (error) {
    if (error.status === 404) {
      return false; // userX does not follow userY
    } else {
      throw error; // handle other potential errors
    }
  }
}

// Example usage:
isUserXFollowsUserY('stacykutyepov', 'zakarialaoui10')
  .then(isFollowing => {
    if (isFollowing) {
      console.log('userX follows userY');
    } else {
      console.log('userX does not follow userY');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

  const { Octokit } = require("@octokit/rest");

async function isUserXStarsRepoX(userX, owner, repo, token) {
  const octokit = new Octokit({ auth: token });

  try {
    await octokit.request('GET /user/starred/{owner}/{repo}', {
      owner,
      repo
    });
    return true; // The repository is starred
  } catch (error) {
    if (error.status === 404) {
      return false; // The repository is not starred
    } else {
      throw error; // Handle other potential errors
    }
  }
}

// Example usage:
const GITHUB_TOKEN = "your_github_personal_access_token"; // Replace with a valid token

isUserXStarsRepoX('userX', 'owner', 'repo', GITHUB_TOKEN)
  .then(isStarred => {
    if (isStarred) {
      console.log('User has starred the repository');
    } else {
      console.log('User has not starred the repository');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
