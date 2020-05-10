

# Description - 
I worked on a project MIA Blog which is a Blog post for the people who are new in the city of Mannheim or want to join the community to learn more about Indian culture. It is plain blogpost where user can signup and post the content they like. 
I have used React for frontend, Express on NodeJS for backend and MongoDB as the database for this project.

# Installation Steps - 
Installation steps - 

1. Download or clone the repository from - https://github.com/infomediadesign/sad-april-k-2372-1855-shivamsharma2503 
	
2. Two strategies to run and up the project. 

      i. If you have docker installed on your machine then just build the containers using 
      the terminal by going to the project root directory and 
      running this command 
      ` docker-compose build  ` after the build is complete ` docker-compose up. ` 
      in the same terminal to run the project.

      ii. If docker is not available you can just execute the command 
      `   npm install ` in both the folders Client/Blogui and Server.
          npm install will take the dependencies from the package.json file.

            a. Go to server/app/config/db.config.js and change the  HOST from  ‘mongo ’ to ‘localhost’. 
            b. After it is complete then just ` npm start ` in Client/Blogui and Server folder.
            c. Kindly make sure that you have mongodb-community version installed on your local machine and
                is running on port 27017. 
		
3. The project utilizes 3 ports as follows 
    PORT 3000 - Frontend 
    PORT 5000 - Backend
    PORT 27017 - MongoDB

4. Go to the browser and Check out the http://localhost:3000/ for the frontend.
When installed the database will be empty so for testing purposes, there is a dummy data in the JSON format in the Dummy Data folder with the files - users.json and posts.json. Import the data into your local MongoDB collections accordingly.

5. After successfully importing the data, it will be reflected on the frontend and the app then can be used. 
For testing purposes users in the dummy data files are as follows -

      | USERNAME      | PASSWORD      | ROLES      |
      | ------------- | ------------- |------------|
      | admin         | shivam1997    | user,admin |
      | user1         | test123       | user       |
      | user2         | test123       | user       |
 




6. Based upon the roles the frontend behaviour changes as admin gets 
    another functionality which can disable the users logging into the system.

7. One can also make a user role to admin by manually entering the role ID of admin 
  in the array of roles[] of that particular object in the user collection. 

# Project Directory Structure
```bash
├── Client
│   └── blogui
│       ├── README.md
│       ├── dd.json
│       ├── dockerfile
│       ├── package.json
│       ├── public
│       │   ├── index.html
│       │   ├── manifest.json
│       │   └── robots.txt
│       ├── src
│       │   ├── App.css
│       │   ├── App.js
│       │   ├── App.test.js
│       │   ├── components
│       │   │   ├── CreatePost.js
│       │   │   ├── Footer.js
│       │   │   ├── Header.js
│       │   │   ├── Login.js
│       │   │   ├── Signup.js
│       │   │   ├── admincomponent.js
│       │   │   ├── bridge.jpg
│       │   │   ├── card.css
│       │   │   ├── home.css
│       │   │   ├── home.js
│       │   │   ├── mannheim.jpg
│       │   │   ├── postspaginated.js
│       │   │   ├── profile.js
│       │   │   ├── searchpagelanding.js
│       │   │   ├── sidebar.js
│       │   │   ├── specificpost.js
│       │   │   ├── travel.jpg
│       │   │   └── userprofile.js
│       │   ├── footer.css
│       │   ├── index.css
│       │   ├── index.js
│       │   ├── logo.svg
│       │   ├── manifest.jpg
│       │   ├── serviceWorker.js
│       │   ├── services
│       │   │   ├── auth-header.js
│       │   │   ├── auth.service.js
│       │   │   ├── post.service.js
│       │   │   ├── profileupdate.js
│       │   │   └── user.service.js
│       │   └── setupTests.js
│       └── yarn.lock
├── Dummy\ Data
│   ├── posts.json
│   └── users.json
├── README.md
├── docker-compose.yml
└── server
    ├── Dockerfile
    ├── README.md
    ├── add_env_sample
    ├── app
    │   ├── config
    │   │   ├── auth.config.js
    │   │   └── db.config.js 		// DB details
    │   ├── controllers 		// functions for the endpoints
    │   │   ├── auth.controller.js
    │   │   ├── posts.controller.js
    │   │   └── user.controller.js
    │   ├── middlewares
    │   │   ├── authJwt.js
    │   │   ├── index.js
    │   │   └── verifySignUp.js
    │   ├── models			//model for documents in mongodb
    │   │   ├── index.js
    │   │   ├── post.model.js
    │   │   ├── role.model.js
    │   │   └── user.model.js
    │   └── routes			// API Endpoints and routes specified. 
    │       ├── auth.routes.js
    │       ├── post.routes.js
    │       └── user.routes.js
    ├── package.json
    ├── sendgrid.env
    └── server.js			// node server.js (main file to enter into the API)
    ```

youtube - https://www.youtube.com/watch?v=3LNODH_oicE
