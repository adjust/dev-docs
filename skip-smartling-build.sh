#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

AUTHOR=$(git show $(git log --format="%H" -n 1) | grep Author)

echo "$AUTHOR"

if [[ "$AUTHOR" != "Author: adjust-pc-team <153073226+adjust-pc-team@users.noreply.github.com>" ]]
then
   echo "Building site"
   exit 1;
else
   # Don't build
   echo "Skipping build from Smartling pending fixes"
   exit 0;
fi
