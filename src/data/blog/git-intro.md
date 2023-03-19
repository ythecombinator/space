---
title: 'Git Commands Introduction '
date: '2020-09-21'
tags: ['git', 'github']
draft: false
summary: 'A git commands cheatsheet'
---

## Table of Contents

<TOCInline toc={props.toc} exclude="Table of Contents" />

## Introduction

Git is a very powerful, free, open-source and popular version control used worldwide by millions of developers
and large companies. It has been and is used to version millions of software to avoid conflicts and make
the work of developers really easy.

This is a Git Commands Handbook, more like a cheatsheet to the various commands for easy reference.

## Create a Repo

```bash
# Creates a local repo
git init [name]

# Clones a remote repo
git clone [remote_project_url]
```

## Add a file or directory to the staging area

```bash
# Stage a changed file
git add [file_or_directory]

# Stage all changed files
git add .

# Stage some changes but not all changes
git add --patch [file_name]
```

## Commit to a local repo

```bash
git commit
git commit -m "[commit_message]"
```

## Status of Working Directory

```bash
# Status of the local repository
git status

# Changes to the file name
git diff [file_name]
```

## Branches

```bash
# Create a new branch
git branch [new_branch_name]

# List all branches
git branch
git branch -a
git branch --list

# Switch to branch
git checkout [branch_name]
git switch [branch_name]

# Creates a new branch and switch to the branch
git switch -c [new_branch_name]
git checkout -b [new_branch_name]

# Merges a branch with another
git merge [branch_name]

# Delete a branch
git branch -d [branch_name]

# Branch newFeature has all the commits of branch main
git rebase main newFeature
```

## Working with Remotes Repositories

```bash
# Clones a remote repo
git clone [remote_project_url]

# List all remotes repositories to the local repo
git remote -v

# Add a remote repository with local repository
git remote add [remote_project_url]

# Fetches changes from the remote repository
git fetch [remote_project_url]

# Fetches changes from the remote repository and merge it to local
git pull
git pull origin [main_branch_name]

# Publish local changes to remote repository
git push
```

## Configuration

```bash
# List configuration options
git config --list

# Set your username
git config --global user.name "Ephraim Atta-Duncan"

# Set your email
git config --global user.email 0x10@gmail.com

# Set your global branch names
git config --global init.defaultBranch [new_default_branch_name]
```

## Resetting

```bash
# Revert the changes to exactly what you had
# Go back to HEAD
git reset --hard HEAD

# Go back the commit before head
git reset --head HEAD^

# Go back to two commits before head
git reset --head HEAD~2

# Revert changes to commits only
# Go back to HEAD
git reset --soft HEAD

# Go back the commit before head
git reset --soft HEAD^

# Go back to two commits before head
git reset --soft HEAD~2
```
