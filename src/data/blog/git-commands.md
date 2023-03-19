---
title: "🔱 Git Commands You Didn't Know"
date: '2020-09-23'
tags: ['git', 'github']
draft: false
summary: 'A fun guide to creating Git aliases and some special aliases'
---

## Table of Contents

<TOCInline toc={props.toc} exclude={['Table of Contents']} />

One of my favorite things about Git is being as simple as it is and also being customisable and one of those features is aliases. Git supports aliases which means you can give your commands any name you want. I prefer to set aliases for really long commands to avoid searching for them everytime I need it.

The `alias` config in Git works like this.

```bash
git config --global alias.[new_alias] "[previous_git_command]"

# Example
git config --global alias.save commit
```

From the example above, I won't need `git commit` again. `git save` will work good enough.

> Add quotes around commands with multiple options.

## `git recommit`

```bash
git config --global alias.recommit 'commit --amend -m'
```

`git commit --amend` allows you to change the last commit message. `recommit` is simpler and much easier to remmember.

```bash
# Change the last commit message with recommit
git recommit "New commit message"

# [master 64175390] New commit message
#  Date: Tue Sep 22 15:09:11 2020 +0000
#  1 file changed, 2 insertions(+)
#  create mode 100644 vue.js
```

## `git commend`

```bash
git config --global alias.commend 'commit --amend --no-edit'
```

Commit amend with `--no-edit` flag allows you to commit the new changes in repo with the last commit made, so you don't have to repeat the commit messages again.

## `git search`

```bash
git config --global alias.search 'grep'

# Example
git search [search_term]
```

`git grep` allows you to search in the repository for a keyword and it returns the various matches. It is cool, but I don't know what `grep` means, please tell me if you do. I prefer `search` instead, easy to remmember and easy to use.

## `git here`

```bash
git config --global alias.here '!git init && git add . && git commit -m "init 🦄"'
```

Usually when I initialize a new repo, I'll stage all the files and I'll commit with an initial commit message. `git here` does it all in one step. Just run it in the folder you want to make a new repo and you are good to go.

## `git who`

```bash
git config --global alias.who 'blame'

# Example
git who index.ts
# 641753902 (Ephraim Atta-Duncan 2020-09-22 15:09:11 +0000 1)
# 641753902 (Ephraim Atta-Duncan 2020-09-22 15:09:11 +0000 2) console.log("who?")

```

`git blame` is used to examine the contents of a file line by line and see when each line was last modified and who the author of the modifications was. If there was a bug, in a line, you find who `who` did it and blame them.

## `git zip`

```bash
git config --global alias.zip 'archive --format=tar.gz -o ../repo.tar.gz'

# Example
git zip [branch_name]
```

The `archive` commands allows you to create tarballs and zips of your whole repo or some. `git zip` will make it easy to remmember. Just add the branch name.

## `git newbie`

```bash
git config --global alias.newbie 'checkout --orphan'

# Example
git newbie [new_branch_name]
```

`git checkout` with the `--orphan` flag allows you to create a branch without any history from the parent branch. No commit, fresh out of the box branch.

## `git clonely`

```bash
git config --global alias.clonely 'clone --single-branch --branch'

# Example
git clonely [branch_name] [remote_url]

git clonely v3 https://github.com/vuejs/vue-apollo
# Cloning into 'vue-apollo'...
# remote: Enumerating objects: 2841, done.
# remote: Total 2841 (delta 0), reused 0 (delta 0), pack-reused 2841
# Receiving objects: 100% (2841/2841), 1.92 MiB | 330.00 KiB/s, done.
# Resolving deltas: 100% (1743/1743), done.
```

`git clone` with `--single-branch --branch` flags allows you to clone a specific branch from a repo and I can say, I've googled it more than 10 times. Aliasing it is better.

## `git plg`

```bash
git config --global alias.plg "log --graph --pretty=format:'%C(yellow)%h%Creset -%Cred%d%Creset %s %Cgreen| %cr %C(bold blue)| %an%Creset' --abbrev-commit --date=relative"

# Example
git plg # plg - Pretty Log
```

There is nothing wrong with `git log` except that it is a little ugly, no color differences and if you want to customize it, you'll have to do some amount of googling. Fortunately, we have aliasing. Alias the command and you'll get a very pretty log of everything.

## `git fresh`

```bash
git config --global alias.fresh "filter-branch --prune-empty --subdirectory-filter"

# Example
git fresh [subfolder] [branch_name]
git fresh src main # Don't do this unless you know what you are doing
```

The series of commands that `fresh` replace is used to create a new repository out of the contents of a subfolder. `filter-branch` with it many flags take a the contents of a specified subfolder and replaces the content in the while repo with the content of the subfolder.

## TL;DR

Add this to your `.gitconfig` file.

```bash:.gitconfig
[alias]
	recommit = commit --amend -m
	commend = commit --amend --no-edit
	here = !git init && git add . && git commit -m \"Initialized a new repository\"
	search = grep
	who = blame
	zip = archive --format=tar.gz -o ../repo.tar.gz
	lonely = clone --single-branch --branch
	plg = log --graph --pretty=format:'%C(yellow)%h%Creset -%Cred%d%Creset %s %Cgreen| %cr %C(bold blue)| %an%Creset' --abbrev-commit --date=relative
    fresh = filter-branch --prune-empty --subdirectory-filter
```
