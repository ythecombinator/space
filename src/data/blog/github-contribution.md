---
title: '🦄 Making Your First Github Contribution'
date: '2020-09-01'
tags: ['opensource', 'github']
draft: false
summary: 'A quick guide to contributing to open source projects on Github'
---

## Table of Contents

<TOCInline toc={props.toc} exclude="Table of Contents" />

## Introduction

Open Source is really great and it has a lot of advantages but many people find it difficult to contribute to open source. I am writing this as a simple guide to make your first contribution on github.

[First Contributions](https://github.com/firstcontributions/first-contributions) is a github repository that is focused helping beginners to make thier first open source contribution. I will guide you through the steps.

> You must have [git](https://git-scm.com/) installed on your computer.

## Fork the Repository

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/o20lxmsjawnv3haeg45g.png)

Navigate to the [firstcontributions/first-contributions](https://github.com/firstcontributions/first-contributions) repository and fork it. Forking a repository is creating an exact copy of the repository in your github account up to the latest git commit message.

## Clone the repository

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/95r8bqqsnt0losag50b1.png)

Click on the green code button and copy the clone link.
On your computer with git installed, navigate to the directory you want to save the files and open your terminal in the directory.

```bash
git clone <the_link_you_copied>

# Example
git clone https://github.com/dephraiim/first-contributions.git
```

## Create a branch

To avoid any conflicts, create a branch to save all your changes then your branch will be merged.
First change into the directory with the command below

```bash
cd first-contributions
```

Then create a branch with the `checkout` command

```bash
git checkout -b <your_new_branch_name>

# Example
git checkout -b add-duncan
```

## Make your Changes

Open the directory in your code editor. _I like vim_. Then make changes to the `Contributors.md` file.

Add your name at the end of the file with your github profile link then save the changes.

```md
<!-- Example -->

- [Ephraim Atta-Duncan](https://github.com/dephraiim)
```

## Commit your changes

After you save the changes, head back to the terminal to commit your changes.
First, add the new changes to your branch with the `add` command

```bash
git add --all
```

Then commit the change with the `commit` command.

```bash
git commit -m "Add <your_name> to Contributors list"

# Example
git commit -m "Add Ephraim Atta-Duncan to Contributors list"
```

## Push your changes to Github.

Push your changes to your remote repository using the `push` command.

```bash
git push origin <your_branch_name>

# Example
git push origin add-duncan
```

## Open Pull Request

After the `git push` has completed, head to your repository and you'll see this.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/rnb1h7nyqsqrtjkhax75.png)

Click on the Compare button to check if your branch can merge without conflicts. If there are no merge conflicts, click on the Create Pull Request button to create a new pull request.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/wk1h1welym2kls94ki25.png)

Now click on the Create Pull Request button to create a new Pull Request.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/u4rnaeqa5bnqyccchhgt.png)

_The repo has been linked to a bot so the pull request will be merged immediately_

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/2mld1g2k6fp2j3lxmyio.png)

Congratulations 🎉, you just made your first contribution. The pull request will be merged very soon and you will get a notification email once the PR is merged.
