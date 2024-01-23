# Example MongoDB Todo App

### Client

1) Create React Typescript cliennt
npx create-react-app client --template typescript


### Server

1) Create folder
mkdir server

2) Add .gitignore file

3) Install dependencies
cd server
npm init -y
npm i --save-dev typescript @types/node @types/express
npm i cors dotenv mongoose

4) Create TSConfig file
create tsconfig.json

5) Create directories and add code
create src/ directory with app.ts, models/Todo.ts, routes/Todo.ts
