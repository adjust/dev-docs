#!/bin/sh

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

AUTHOR=$(git show "$(git log --format="%H" -n 1)" | grep Author)

echo "Checking for changes"

GITDIFF=$(git diff HEAD^ HEAD --quiet; echo $?)

if [ "$GITDIFF" = 0 ]
then
   # Don't build
   echo "No changes found. Skipping build."
   exit 0;
fi

if [ "$AUTHOR" = "Author: adjust-pc-team <153073226+adjust-pc-team@users.noreply.github.com>" ]
then
   # Don't build
   echo "Skipping build from Smartling pending fixes"
   exit 0;
else
   echo "Building site"
   exit 1;
fi
