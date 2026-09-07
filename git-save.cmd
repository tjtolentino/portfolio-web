@echo off
cls

rem Add all files to local repo then commits and push to remote repo
rem Script by TJ Tolentino

git add .
git commit -m %1
git push