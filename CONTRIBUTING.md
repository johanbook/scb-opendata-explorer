# Contributing

The document outlines the development process of the **scb-opendata-explorer**
project.

## Setting up a local development environment

Start by cloning the Git repository.

### Installing dependencies and starting dev server

In order to run the development server, the Nodejs runtime together with the NPM
package manager are required. For Linux-based systems, these can be conveniently
handled using [NVM](https://github.com/nvm-sh/nvm).

Install all dependencies and Git hooks by running

```sh
npm i -D
```

Then, the development can be started by running

```sh
npm run start
```

## Git methodology

### Conventional commits

This project uses conventional commits for generating a changelog. See
[this guide](https://daily-dev-tips.com/posts/git-basics-conventional-commits/)
for how it should be used.

## Release procedure

This project uses [semver](https://semver.org/), handled by the NPM package
[standard-version](https://www.npmjs.com/package/standard-version). For creating
a new release, run the following commands:

```sh
npm run release
git push --follow-tags origin main
```

## Deployment

The project is deployed using a CD pipeline in
[Github Actions](https://docs.github.com/en/actions) to Github Pages.
