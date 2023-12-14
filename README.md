# Bus Application
The application arises from the need to have a platform where users can access information about bus lines, their schedules, and stops.

This application is being developed for the company Desic.

The idea of the application is as follows: through a login or registration system, users can access the application. Depending on the permissions associated with their login, they will have two ways to view the application:

### User:

The user will have the functions to view the currently established bus lines. From those lines, they can also check their schedules and stops.

### Administrator:

It has the same functions as the user, but with the additional capability to add, update, and delete any bus line, schedule, or stop.

# Data Model
In the following section, we will discuss the aspects of the entity-relationship and class diagram.

### Entity-relationship
![Entidad relacion](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/53c42eb9-d4bf-418d-b028-d10c292cd152)
The "Users" table contains the fields ID, username, password, name, and discriminator(this controls the roles of the users)

The "Lines" table contains the ID, number, firstBusStop, LastBusStop

The "Users_Lines" table is created based on the many-to-many relationship between the "Users" and "Lines" tables. This table contains "UsersID," which is the primary key of the "Users" table, and "LinesID," which is the primary key of the "Lines" table.

The "Schedule" table contains the fields ID, HourAndMinutes, and LinesID, which is the primary key of the "Lines" table.

The "BusStops" table contains the fields ID, Location, and LinesID, which is the primary key of the "Lines" table.

### Class diagram
![Diagrama de clases2 Desic](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/68aa25d2-4986-41cc-8687-fc7c62cd539f)

### Use cases
![Diagrama de casos](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/20ddb853-f22f-4040-b69c-d6bc75a1658d)

# Endpoints

### Lines endpoint
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/7412c19b-985a-4fab-b032-81f5f0676647)
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/5660793e-ee62-4a3a-88b3-4eb1b1bb24cb)
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/2b38332a-4d69-4431-89bc-e8994458d443)
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/ae7e57c2-64a3-4814-9467-15a623d2c588)

### Users endpoint
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/273c7ac3-ef4e-4fda-b4bd-cc1c4d287ecc)
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/0ec5134e-6156-4108-95ec-1d8687d21648)
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/b19d2905-cd7f-451a-aad7-63a34b7b8688)
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/f43b1bbe-701a-4517-a489-73d935d4f0d7)
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/b3a2703f-b1b6-415b-a137-7f3c22ded135)

### Schedules endpoint
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/d86717be-1f68-48df-9d02-e85298fccdf4)
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/438a2e92-798f-49e0-9961-ea4a5db9a038)
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/140a9186-554a-4c61-a913-74728f8bc3cb)
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/30063d09-e943-4bfe-84c9-8112dc4ff9eb)

### Bus Stop endpoints
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/dde03e16-f931-4d33-b696-33d0fcbed340)
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/dc3e9975-49eb-4063-b31e-430aa841d4ea)
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/026dec33-0bf5-4b93-ad4e-7e0c82f4a708)
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/8644329e-3a62-41eb-9e67-459ee8efc2e3)


# User requirement
The aplication works in web in particular on mobile.
> [!IMPORTANT]
> It is possible to use the application on desktop but it is not intended for desktop use.

### 1.User:
1.1 Any user need register into the aplication.

1.2 If you want to see the stops or the schedule, first select the line.

### 2.Administrator:
2.1 All the registers need the elements that are requested. that includes images.

2.2 The user with the role administrator has to be assigned in the database.

2.3 When deleting a line, stops and times are deleted in cascade.

# Technical specifications for the server application and the APP
The application uses a mysql server to store the logs of all tables and a backend folder in public/images to store the images themselves.

In the application, if a record containing a photo is deleted, it is already programmed to delete the photo in the backend as well.
> [!WARNING]
>In case the backend closes normally or unexpectedly, there is no way to navigate through the frontend.

# Figma
[Enlace Figma](https://www.figma.com/file/Qs5ePGQ6fIWDLK2SWQhob9/Proyecto-Desic?type=design&node-id=0%3A1&mode=design&t=rI9LVburwdWDxmGZ-1)

# Usability and Accessibility

### Prevision of adding elements with empty fields
The administrators at the time of adding the data, not to make mistakes of leaving some missing field, thanks to the warning that is coded that detects if there is some empty field and blocks the function of creation.
Example:\
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/d750c08c-eadc-46e0-9667-84e5508ee43f)
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/92d5ea68-ee62-43d8-aeff-4da1c7ba0cf3)

The same will happen with the update of any element, if it detects an empty field it will not update the element.

### Warning to delete item
When attempting to delete an item, the administrator will be asked if they are sure they want to delete the item.\
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/eaecd54e-b123-4e98-bcad-8f29599e58ac)
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/aaefcf95-cc2c-4a76-a6e7-60a37f86f534)
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/790eb410-b494-409b-9e0e-2ad01ba034c7)

### Warning when logging out
When attempting to logout, the user will be asked if they are sure they want to logout.\
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/100b7ed0-9925-434b-9abe-a548f69e7756)
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/0c4e6562-756c-42f4-898c-b420a9620adb)
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/4d27ac94-3c97-4c35-8992-4f46dd907ab5)

### Large icons
The application uses big icons for ease of use on mobile devices, as well as buttons that are not glued together so as not to produce a click failure.\
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/b7e9d287-4463-4468-97ce-69c823a13b0b)

### Easy access to help documentation
When logging in there is a link that will open the user help documents.\
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/029c3002-6859-4d66-95c6-758aae334a26)
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/0541ed9f-ca4f-43fb-bfa8-0d665608eaaa)

But if an administrator wants to access the administrator's help, they must first log in as an administrator and at the top right of the page, they will find an information icon which, if clicked, will direct them to the administrator's help page.\
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/daa0832a-0343-4804-abde-96b40de5ab4b)
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/650ecd24-eeb3-4be1-b59b-a2ace1d55913)

Colores llamativos para resaltar lo interactuable de la aplicacion

# Manuals

## Developer installation
Before executing the file it is necessary to have mysql installed and for help installing the Backend and Frontend I recommend the use of Visual Studio Code.

Once the above is done, it is time to install the backend. Located in the root folder of the project, we go to the Backend folder from the terminal and type "npm install" to install all the necessary packages to run the Backend.

The next step is to create an .env file where you fill in the corresponding mysql information. You have anyway an example file.

Now to install the Frontend, follow the same steps as above, but instead of going to the Backend folder, this time we go to the frontend folder and follow the same "npm install" step.

If you now want to start everything you need to have 2 terminals, one located in the Backend and the other in the Frontend. Once located in both folders, run the command "npm start".\
running npm start on the backend will create the respective tables.

> [!WARNING]
> Be careful with the following code, if you don't want to delete all the records make sure you have this code without commenting it out.
![image](https://github.com/JoelMartinHernandez/Proyecto-Desic/assets/131310480/2fb26faf-f25b-48c5-8b7c-dd85ff016272)

When you run npm start on the frontend, the application will be opened.
> [!NOTE]
> When you open only the application without the backend, as it is a web application, it is normal that it does not work because you can not log in.


## User/Technician installation
To install the application, it is necessary to access the Frontend folder of the project folder.\
Once accessed the folder, enter the command in the terminal "npm install" to install the necessary files, and after installing everything run the command "npm start" to open the application.

# User manual
To begin using the application, it is necessary to have a registered account. If you don't have one, you can click on 'Register' to sign up for our application. If you already have an account, you can use 'Log In' with your existing credentials.

The application is divided into 3 main sections:

1. Lines
   - In the main view, you will see all the lines that are currently in operation.
2. Schedule
   - By selecting a line, you can view the departure times associated with the selected line in this view.
3. Stops
   - By selecting a line, you can view the stops along with their images associated with the selected line in this view.

# Technological Stack

### Backend:
  * [![Express][Express.js]][Express-url]
  * [![Node][Node.js]][Node-url]
  * [![MySQL][Mysql]][Mysql-url]
  
### Frontend:
  * [![React][React.js]][React-url]
  * [![JavaScript][Javascript]][Javascript-url]
  * [![HTML5][Html5]][Html5-url]
  * [![CSS3][Css3]][Css3-url]

# Repository
 ![GitHub]
 [Enlace del GitHub](https://github.com/JoelMartinHernandez/Proyecto-Desic)

# Planning

To plan my project, I have used the Scrum methodology.

# Conclusions

The application, although it may seem basic, provides users with the essential information they need when looking for basic bus information. It is quite intuitive for administrators as well.

The project has contributed to my growth as a programmer, allowing me to develop new knowledge about backends and React. I gained insights into topics such as tokens and private addresses.


[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Node.js]: https://img.shields.io/badge/Node.js-<18.17>-green?style=for-the-badge&logo=node.js&logoColor=white
[javascript]:https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=
[Mysql]:https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white
[Javascript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[Html5]:https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[Css3]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[Github]:https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white
[React-url]: https://reactjs.org/
[Node-url]: https://nodejs.org/
[javascript-url]: https://developer.mozilla.org/es/docs/Web/JavaScript
[Express-url]: https://expressjs.com
[Mysql-url]: https://www.mysql.com
[Scrum-url]: https://www.scrum.org/
[Github-url]: https://github.com/your-username/your-repository
[Javascript-url]:https://developer.mozilla.org/es/docs/Web/JavaScript
[Html5-url]:https://developer.mozilla.org/en-US/docs/Glossary/HTML5
[Css3-url]:https://developer.mozilla.org/en-US/docs/Web/CSS
[Github-url]: https://github.com/JoelMartinHernandez/Proyecto-Desic
