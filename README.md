# Expo Elysia Pulumi starter repo

A starter repo for Expo + Elysia + Pulumi on Bun

# Description

This repo is to take advantage of Bun for backend for a mobile project made with Expo.

It provides:

- It provides end-to-end type safety from Elysia with their [Eden](https://elysiajs.com/eden/overview.html)
- Clear folder structure in a monorepo
- Ability to run the Bun backend in a container and get 2 digits ms speed unlike AWS lambda.
- Not forcing you to use Lambda and DynamoDB for your project
- All dependencies installed by Bun
- Use Tanstack query to call Elysia with Eden

You can see a sample of the frontend calling the back in [frontend/app/(tabs)/index.tsx](<frontend/app/(tabs)/index.tsx>)
Note: Frontend only import the typing of Elysia (Eden), so it is fine to import from the backend. The typing is stripped when compiled.

# Requirements

You have to have prerequisite installed:

- [Bun](https://bun.sh/)
- [Pulumi](https://www.pulumi.com/)
- [Expo](https://expo.dev/)

Knowledge of AWS is required too. Route 53, IAM for the permissions of parts of the system.

# How to install

- Clone this repo
- `bun i`

That's all. Now you can run the frontend and backend doing:
`bun backend` & `bun frontend`

# How to deploy

- `mkdir infra; cd infra`
- `pulumi new`
- Choose the template `container-aws-typescript`
- In the file `infra/index.ts`, replace the context of the image to make it so: `context: '../backend',`. It will use the Dockerfile of the backend.
- `pulumi up` to deploy.
- You now have a backend running on AWS
- Sadly that's as far this repo can help you.

You can refer to Pulumi for more information.
Use IAM to set the roles for the parts of your app and use Route 53 to set your domain names to assign to the load balancers.

# FAQ

## Why the main package.json is almost empty and dependencies are managed individually?

Expo v50 relies on the node_module to be at the current folder where the app.json is defined.
