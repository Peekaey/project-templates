## Electron/Express Repo
Electron,Tyescript and Express - other misc dependencies

### Initialisation
1. `npm init`
2. `npm install --save-dev typescript`
3. `npx tsc --init --rootDir ./src --outDir ./build`

### Dependencies
4. `npm install --save-dev electron`
5. `npm install --save-dev express`
6. `npm install --save-dev body-parser`
7. `npm install --save-dev @types/node`
8. `npm install --save-dev @electron-forge/cli`

### Directories
- /src - typescript 
- /build - js files
- /out - package

### Instructions
`npx tsc` - recompile  
`npm start` - start project  
`npm run make` - package project  

### Additional Configs that may be required
- `npm i --save-dev @types/body-parser`
- `npm i --save-dev @types/express`
- Add dependencies under devDepencies in package.json to dependencies if experiencing issue of missing modules in final package  
- Check that start is listed under scripts in package.json if having issues with running project
