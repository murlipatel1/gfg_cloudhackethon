## Project Structure: `ml_model`

The `ml_model` directory is organized into several subdirectories and files that serve specific purposes within the project. Here's a breakdown of each component:

- **controllers**:  
  Handles the business logic of the application, orchestrating data flow between models and views.

- **data**:  
  Contains datasets, data preprocessing scripts, and other files related to data handling.

- **db**:  
  Manages database connections and configurations, including schema definitions and database queries.

- **helpers**:  
  Contains utility functions and helper scripts to assist with common tasks across the application.

- **routes**:  
  Defines API endpoints and routes for handling incoming HTTP requests and mapping them to appropriate controllers.

- **app**:  
  The main application file responsible for initializing and running the project. It usually configures middleware, routes, and connects to the database.

- **.env**:  
  Environment configuration file that stores sensitive information like API keys, database credentials etc.
  
- **Dockerfile**:  
  Used to make the Docker Image , which included all neccesary directory to run app.
  

Each of these components works together to create a robust, organized structure for developing and deploying the ML model.

## Stock_Market_Prediction.ipynb Original file is located at:
    https://colab.research.google.com/drive/1vhel8fEllXREZFWNN7LWM8rjQxe0XhWh
