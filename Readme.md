# NodeJS Tattoo studio implementation

<details>
  <summary>Content 📝</summary>
  <ol>
    <li><a href="#objetive">Objetive</a></li>
    <li><a href="#about-the-project">About the project</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagrama-bd">Diagram</a></li>
    <li><a href="#instalación-en-local">Instalation</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

## Objetive
This project requires a functional API wich will administrate a tattoo studio datebook. 

## About The Project
I have decided to create this backend project to learn more about the backend developement with technologies i have never tried before

## Stack
Used technologies:
<div align="center">

<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/en">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
    
<a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/typescript-blue?style=for-the-badge&logo=typescript&logoColor=white">
</a>

 </div>


## DB DIAGRAM
![image](https://hackmd.io/_uploads/HyshXfXCT.png)


## Local instalation
1. Clone the repository
 `git clone https://github.com/agustinresecodev/tattostudio`

2. Initialize the project
`npm init -y`

3. Install the necessary modules
 `npm i express`
 `npm i -D typescript`

4. Install node and express types
 `npm i -D @types/node`
 `npm i -D @types/express`

5. Install additional modules
 `npm i cors`
 `npm i -D @types/cors`
 `npm i -D nodemon`
 `npm i -D ts-node`
 `npm i bcrypt`
 `npm i -D @types/bcrypt`
 `npm i @faker-js/faker`
 `npm i jsonwebtoken`
 `npm i -D @types/jsonwebtoken`
 `npm i dotenv`
 `npm i typeorm reflect-metadata mysql2`
 
6. Connect our project with the DataBase
    in the project's root folder search for .env-example to generate a .env file to have the principals variables
    ![image](https://hackmd.io/_uploads/BJXsPfm06.png)
    

7. Execute the Migrations
    `npm run db:migrate`

8. Execute the Seeders
    `npm run db:seed` 

9. Run the server
    `npm run dev`

## Endpoints
<details>
<summary>Endpoints</summary>

- AUTH
    - REGISTER

            POST http://localhost:3000/api/register
        body:
        ``` js
            {
                "firstName": "David",
                "email": "david@david.com",
                "password": "princes"
            }
        ```

    - LOGIN

            POST http://localhost:3000/api/login  
        body:
        ``` js
            {
                
                "email": "david@david.com",
                "password": "princes"
            }
        ```
- ADMIN
    - DELETE USER
    
            DELETE http://localhost:3000/api/user/delete/5
    
    - GET DETAIL JOBDATES
    
            GET http://localhost:3000/api/jobdates/5
    
    - POST CREATE ARTIST
    
            POST http://localhost:3000/api/artists/create
        body:
        ```js
            {
                "firstName":"Artista de Prueba", 
	            "email": "artista@artista", 
	            "password": "12345678", 
	            "phone": 123456789,
	            "style": "asian",
	        }
        ```
    - EDIT USER ROLE
    
            PUT http://localhost:3000/api/
        body:
        ```js
            {
                "roleId":3
                
            }
- CLIENTS
    - GET ALL MY DATES
        
            GET http://localhost:3000/api/jobdates/client/jobdates

- ARTISTS
        
    - GET ALL ARTISTS
    
            GET http://localhost:3000/api/artists
    
    - GET ALL THE DATES WITH ME 
    
            GET http://localhost:3000/api/jobdates/artist/jobdates

- JOBDATES
    
    - CREATE JOBDATE
    
            POST http://localhost:3000/api/jobdates/create
        
        body:
        ```js
            {
                "day_date": "2024-08-03T15:48:02.000Z",
	            "description": "Catena pariatur optio tres tenus tredecim taedium convoco absum canto.",
	            "artist":5,
	            "client":9,
	            "price": 9734
                
            }
    - GET ALL JOBDATES
        
            GET http://localhost:3000/api/jobdates
        
    - EDIT JOBDATE
    
            PUT http://localhost:3000/api/jobdates/7
    
        body:
        ```js
            {
                "day_date": "2024-08-03T15:48:02.000Z",
	            "description": "Jobdate Editado",
	            "price": 9734	
                
            }
    - DELETE JOBDATE
    
            DELETE http://localhost:3000/api/jobdates/7
    
    - GET JOBDATE BY ID
    
            GET http://localhost:3000/api/jobdates/7

- USER
    
    - DELETE USER
        
            DELETE http://localhost:3000/api/users/delete/9
    
    - UPDATE SELF PROFILE
            
            PUT http://localhost:3000/api/users/9
        body:
        ```js
            {
                "firstName": "Daisy",
	            "lastName": "Loweeeee",
	            "email": "Doris.Gerlach-Funk@yahoo.com",
	            "phone": 290867512,
	            "isActive": true
            }
        ```
    - GET SELF PROFILE
            
            GET http://localhost:3000/api/users/profile/
    
    - GET ALL USERS
    
            GET http://localhost:3000/api/users/all
    
    - EDIT USER
    
            PUT http://localhost:3000/api/users/edit/4
    
        body:
        ```js
            {
                    "firstName": "Moises",
	                "lastName": "Glover",
	                "email": "Victoria.Wintheiser@hotmail.coma",
	                "phone": 290867512,
	                "isActive": true
            }
        ```
    - CREATE USER
        
            POST http://localhost:3000/api/users/create
            
        body:
        ```js
            {
                    "firstName": "Moises",
	                "lastName": "Glover",
	                "email": "Victoria.Wintheiser@hotmail.coma",
	                "phone": 290867512,
                    "password": "12345678"
	                "isActive": true
            }
        ```
    - GET USER BY ID
    
            GET http://localhost:3000/api/users/4
    
</details>


## Contacto
<a href = "mailto:agustinresecodev@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/agustin-reseco-982205206/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</p>