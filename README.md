  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Prerequisites

Docker

```
https://www.docker.com/get-started/

```

## Description

Todo sample with clean architecture:

```
Folder structure:
 -- documentation
 -- src
    -- api
    -- domain
    -- infrastructure
    -- usecase

```

## Installation

```bash
$ yarn
```

## Running the app

At the root run the following command.

```bash
# Docker compose
$ yarn run start:docker
# Goto the url below after succesful deployment
http://localhost:8080/api/
```

## Test

```bash
# unit tests
$ npm run test

```

## Documentation

To generate new document, run the script below

```
yarn run compodoc
```
