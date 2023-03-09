#!/bin/bash

echo "Enter the commit message: "

read commitMessage

git pull
git add .
git commit -m "$commitMessage"
git push
