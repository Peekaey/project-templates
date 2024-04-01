Basic Typescript setup from https://www.digitalocean.com/community/tutorials/typescript-new-project

1. Install typescript in project directory  `npm i typescript --save-dev` - ensures that Typescript is a development dependency

2. Initialse Typescript Project with `npx tsc --init --rootDir ./src --outDir ./build` 

3. Create file in src folder called index.ts

4. Compile index.ts and convert to javascript via `npx tsc`


<u> Notes </u>
Can set watch mode of index.ts file to auto recompile .js file with `npx tsc -w`

Change outDir in tsconfig.json to ./build to build javascript file in another folder called build.

Can also change rootDir  to ./src/ to only look for changes in src folder