#!/usr/bin/env node

const { execSync } = require('child_process');

function getGitCommitRef() {
  return process.env.VERCEL_GIT_COMMIT_REF;
}

function getCommitAuthor() {
  return execSync('git show -s --format="%an <%ae>"', { encoding: 'utf8' }).trim();
}

function checkForChanges() {
  try {
    execSync('git diff HEAD^ HEAD --quiet');
    return false;
  } catch {
    return true;
  }
}

function main() {
  const vercelGitCommitRef = getGitCommitRef();
  console.log(`VERCEL_GIT_COMMIT_REF: ${vercelGitCommitRef}`);

  const author = getCommitAuthor();
  console.log(`Commit author: ${author}`);

  if (vercelGitCommitRef === "main") {
    console.log("Branch is main. Building site.");
    process.exit(1);
  }

  console.log("Checking for changes");
  if (!checkForChanges()) {
    console.log("No changes found. Skipping build.");
    process.exit(0);
  }

  if (author === "adjust-pc-team <153073226+adjust-pc-team@users.noreply.github.com>") {
    console.log("Skipping build from Smartling pending fixes");
    process.exit(0);
  } else {
    console.log("Building site");
    process.exit(1);
  }
}

main();
