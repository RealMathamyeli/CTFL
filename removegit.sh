#!/bin/bash
find . -mindepth 2 -name ".git" -type d -prune -exec rm -rf {} +
git rm -r -f  --cached .
git add .
git commit -m "Update"
