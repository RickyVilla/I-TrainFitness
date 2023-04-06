# project name

about, info, or details here...

## goals for project/problem this project solves

reason for this project or scope here...

## development/how to use this repository

Repo is using npm workspaces.  
With workspaces feature, you can use `npm` from root directory and maintain your whole project  
as a mono-repo instead of needing to `cd <dir>` into another folder to preform actions in a ploy-repo.

---
Root package json contains dependencies for backend.

Frontend client is bootstrapped with `npx create-react-app` all dependencies are in `Client` folder.  

After cloning the repository running `npm install` once from root directory will install all dependencies.

## adding additional dependencies

when adding to dependencies to frontend use command `npm i <package-name> -w Client`  
note: `-w Client` flag will tell `npm` that the dependency belongs to the frontend.

when adding to dependencies to backend use command `npm i <package-name>`

## node scripts available

available commands to execute from root directory of project

### `npm start`

starts the full application in development mode with `concurrently` package

### `npm run start:server`

starts express api server app only in development mode with `nodemon` package

### `npm run start:client`

starts react app only in development mode with `react-scripts` package
