In the backend, I have used Node js and Express Js in order to generate the REST APIs. To maintain a proper code structure, I have followed a folder structure like “Controllers, Services and Routes” inside the api folder. 


In the Routes folder, I have included all the routes. There the authentication for the endpoint is also included.
The services folder is kept as an intermediary between controller and routes, which gets all the request and response from the route and separates it, then sends it to the controller.
In the controller files, all the logic happens. It interacts with the database and does the Create,update, delete and fetching data accordingly.

As for the database, I have used MySql.


And I have used Sequelize as the Object Relational Mapper that makes it easy to work with MySQL database. It helped perform functions like handling database records by representing the data as objects.