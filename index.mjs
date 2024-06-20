import express, { application, json } from "express";

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

const books = [
  {
    id: 1,
    name: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    subject: "Computer Science"
  },
  {
    id: 2,
    name: "The Feynman Lectures on Physics",
    author: "Richard P. Feynman",
    subject: "Physics"
  },
  {
    id: 3,
    name: "Molecular Biology of the Cell",
    author: "Bruce Alberts",
    subject: "Biology"
  },
  {
    id: 4,
    name: "Organic Chemistry",
    author: "Jonathan Clayden",
    subject: "Chemistry"
  },
  {
    id: 5,
    name: "Linear Algebra and Its Applications",
    author: "David C. Lay",
    subject: "Mathematics"
  },
  {
    id: 6,
    name: "Introduction to Genetic Analysis",
    author: "Anthony J.F. Griffiths",
    subject: "Biology"
  },
  {
    id: 7,
    name: "Structure and Interpretation of Computer Programs",
    author: "Harold Abelson",
    subject: "Computer Science"
  },
  {
    id: 8,
    name: "Fundamentals of Physics",
    author: "David Halliday",
    subject: "Physics"
  },
  {
    id: 9,
    name: "Physical Chemistry: Thermodynamics, Structure, and Change",
    author: "Peter Atkins",
    subject: "Chemistry"
  },
  {
    id: 10,
    name: "Discrete Mathematics and Its Applications",
    author: "Kenneth H. Rosen",
    subject: "Mathematics"
  }
]; 

app.use(express.static("build"));

// app.get("/",(request,response)=>{

// })

app.get("/api/books",(request,response)=>{
    response.status(200).send(books);
})

app.listen(port,() => console.log(`Listening on http://localhost:${port} !`))