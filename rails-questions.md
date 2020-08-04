# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

    rails new application_name -d postgresql

2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - The HTTP verb being sent to the server via the URL
library - The first part of the URL
:id - The parameter being passed through the URL
book - Name of the controller
show - Name of the method in the controller

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

    Create a migration. In the migration file, add a column to the belongs to table with the modelname_id of the model you want it to be associated to. Complete the migration. 


4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

    rails g model Person shirt:string pants:string shoes:string


5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

    Add a validates line to the class with the names of all of the columns listed seperated by commas followed by "presence: true"

    validates :shirt, :pants, :shoes


6. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

For a model - SingularAndPascalCase. 
Table - plural_and_snake_cases. 