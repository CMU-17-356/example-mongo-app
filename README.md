# Example MongoDB Todo App

### Client

1) Create React Typescript client
```
npx create-react-app client --template typescript
```


### Server

1) Create folder
```
mkdir server
```

2) Install dependencies
```
cd server
npm init -y
npm i typescript @types/node @types/express cors dotenv mongoose
```

3) Add server start script to package.json file
```
"scripts": {
    "start": "tsc && node dist/app.js"
},
```


4) Create TSConfig file (tsconfig.json)
```
{
    "compilerOptions": {
      "target": "es6",
      "module": "commonjs",
      "outDir": "./dist",
      "rootDir": "./src",
      "strict": true,
      "esModuleInterop": true
    }
}
```

5) Add .env file within server directory
```
MONGO_URI={secret given in Slack}
```

6) Create directories and add code
create src/ directory with app.ts, models/Todo.ts, routes/Todo.ts
