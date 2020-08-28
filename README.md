# [DATCORD](https://datc0rd.herokuapp.com/#/login)
---
![alt text](https://i.imgur.com/wdlNkTA.png)

Background
---
Datcord is a fullstack Rails/React app inspired by Discord that allows users to create servers, channels, and profiles and interact with each other on live chat. 

Technologies Used
---
+ **PostgreSQL**: PostgreSQL was used as the primary database tool as well as for associations
+ **Ruby on Rails**: Ruby on Rails was used to manage all backend aspects, such as models and controllers
+ **React/Redux**: Conversely, React/Redux was used to manage all things frontend, such as action creators, reducers, and components
+ **ActionCable**: ActionCable was used to create websockets for the live chat feature
+ **Heroku**: Heroku was utilized as an online web application host

Features
---
### User Authentication
![alt text](https://i.imgur.com/mP1Jc6e.png)
Datcord utlizes BCrypt to ensure user data protection so that users can securely create profiles and keep their information safe. Additionally, a demo user account is also pre-created for anyone who wants to quickly preview the site without having to create their own account.

### Server/Channel Creation
![alt text](https://im2.ezgif.com/tmp/ezgif-2-9c9161d0b3a1.gif)
Users can create custom servers/channels for other users to join via invite code. Only users with the invite code can join a specific server.

### Live Chat
![alt text](https://im2.ezgif.com/tmp/ezgif-2-8d7eaf92c920.gif)
Live chat feature is available in every channel of every server. Individual channels have individual chat rooms that allow users to interact with one another in real time
