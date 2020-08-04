# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: Model, view, controller. It is a structure or way of building web applications that categorizes the functions into three major categories. 

  Researched answer: MVC was originally used to design GUIs of all types, it just happens to be popular for web design as well. 



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: CRUD stands for create, read, update and delete. These are the four basic tasks of a database. 

  Researched answer: There is also CRUDL, an extension that includes listing. 



3. What is a migration? Why would you use one?

  Your answer: A migration is like opening up your Rails database to be changed in a major way, ie add a column, rename a column, etc. 

  Researched answer: Migrations are opened specifically to change the shape of a relational database. 



4. Describe as many possible relationships between a model called Person and a model called Computer as you can think of. Based on each description, which model would hold the foreign key?

  Your answer: Has many, belongs to. I think the computer would hold the foreign key. 

  Researched answer:



5. What is object-relational mapping?

  Your answer: Oject relational mapping is a technique to use one language or framework to operate in another. ActiveRecord is an example, allowing us to write commands in Ruby that are then 'translated' into SQL for us using key value pairs in an object. 

  Researched answer:



6. What is a gem?

  Your answer: A gem is a snippet of code written by other programmers that performs a specific function. 

  Researched answer: RubyGem is also its own package manager like Yarn. 



7. Why is it important to have validations in your application?

  Your answer: Nil, undefined, or using the wrong datatype can actually harm the integrity of a database. Its important to ensure the data being entered into a database is complete and accurate or certain functions, averages, data analysis, or even the basic functionality of the web application can be impeded. 

  Researched answer: Especially with larger projects and apps, it would be very difficult to try and go back through hundreds of thousands or millions of entries to "clean" up the data. Setting up proper validation to begin with is super important if you want things to work down the line. 



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes - These are the things that receive an HTTP verb like 'get' and tell it where to go. 
- JSON - JavaScript Object Notation. The way data is structured in JavaScript using nested arrays and objects. 
- API - The intermediary between two databases or web applications that facilitate the flow of information. 
- Endpoints - The point at which the API spits out useable data. 
- Strong params - I didn't totally understand, but basically it's like a protected object attribute. 
