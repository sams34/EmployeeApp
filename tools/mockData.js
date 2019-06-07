const courses = [
  {
    id: 1,
    title: "1234",
    EmployeeName:"sagar",
    slug: "HR",
    authorId: 1,
    category: "Rishi",
    nationality: "Indian",
    phno: 87603288732,
    salary: 25000.00,
    doj:"01/05/2015",
    dob:"28/05/2018"  
  },
  
];

const authors = [
  { id: 1, name: "APPS" },
  { id: 2, name: "BPO" },
  { id: 3, name: "HR" },
  {id: 4, name :"Finance"},
  {id: 5, name :"IT"}
];

const newCourse = {
  id: null,
  title: "",
  EmployeeName:"",
  authorId: null,
  category: "" ,
  nationality: "",
  phno: null,
  salary:null,
  doj:"",
  dob:""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors
};
