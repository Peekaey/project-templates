## Quickstart Typescript/Electron Repo
Repository with Electron and Typescript preconfigured, mosty to serve as a reference.

1. Develop project code in ./src and output build to ./build with `npx tsc`
2. Run project with `yarn start`
3. Package project with `yarn run make`
4. Executable is in ./out

#### Initialisation/Creation of the project
`yarn init`  
`yarn add --dev electron`  
`npm i typescript --save-dev` (adjust to yarn)  
`npx tsc --init --rootDir ./src --outDir ./build`

#### Packaging
`yarn add --dev @electron-forge/cli`  
`npx electron-forge import`  
`yarn run make`  
##### Usage
`npx tsc` to recompile  
`yarn start` to start the application

Electron setup instructions from  
https://www.electronjs.org/docs/latest/tutorial/quick-start  
