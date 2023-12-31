E-Commerce Application

Created by Elian Zamora & Christopher McCorkle

This Current Project is a E-Commerce App that will allow a user to log in and create a post for an item that's going to be for sale (listing). The listing should also be able to be deleted or updated if needed. The App will allow listing searches depending on what listings are available. If a listing that is searched is not available then a message will be displayed stating that there are no mactches for the search. Functionality of this app will allow users to create, edit, and remove listing as well as search for other listings that are available. Listings will placed into categories that the user can select and will be able to be searched through their specific categories. Users will be able to see their current listings through their account page and other user's accounts will display their listings if a user wishes to see their listings only.

The frontend and backend folders contain all of the source code for this app to work. The frontend folder contains all of the pages made in order to get the user interface to work in a smooth manner. The backend folder contains the code associated with linking all of the pages together and making them work as one. This folder also contains the code for the set up of the database and the code for linking the API's as well. 

For phase one’s deliverable, we decided to implement the website’s design and UI elements to grasp a better understanding on how to implement the backend portion of the website (Phase 2) by completing the front end portion of the website. This allows for us to grasp the UI workflow and user experience before the backend is actually implemented, thereby avoiding common mistakes where the UI elements and website look are designed in an unintuitive fashion as a result of designing the backend first. In this report, we’ll be going over our implementation of the frontend design as outlined in the Phase one deliverables report. Our team overcame these challenges by using effective communication and making sure that our goal was as simple as possible, whilst trying to effectively achieve our frontend design in a manner that makes sense to both us as developers and users who will interact with the site.

Preview of main page
![Alt text](https://github.com/eez9/Project-Proposal/blob/main/Github%20Photos/mainpage.png "Main Page Preview")

Preview of about page
![Alt text](https://github.com/eez9/Project-Proposal/blob/main/Github%20Photos/aboutpage.png "About Page Preview")

Preview of Login page
![Alt text](https://github.com/eez9/Project-Proposal/blob/main/Github%20Photos/Login.png "Login Page Preview")

Preview of Register Page
![Alt text](https://github.com/eez9/Project-Proposal/blob/main/Github%20Photos/Register.png "Register Page Preview")

For phase two’s deliverable, we decided to implement the back end portion of the application. By doing this, It allows for us to connect all of the different pieces created, to make the application work as a whole and have a better user experience. for pahse we go over our implementation of the backend design as outlined in the Phase two section of the deliverables report. Our team overcame these challenges by using effective communication and making sure that our goal was met and understood to the best of our ability, while trying to effectively achieve our backend design in a manner that makes sense to both us as developers and users who will interact with the site.

Preview of API setup
![Alt text](https://github.com/eez9/Project-Proposal/blob/main/Github%20Photos/ApiSetup.png)

Preview of Data Base
![Alt text](https://github.com/eez9/Project-Proposal/blob/main/Github%20Photos/Database_Demo.png)
![Alt text](https://github.com/eez9/Project-Proposal/blob/main/Github%20Photos/DataBaseDemo2.png)

Preview of Listings
![Alt text](https://github.com/eez9/Project-Proposal/blob/main/Github%20Photos/listing_demo.png)

Preview of redesigned Main Page
![Alt text](https://github.com/eez9/Project-Proposal/blob/main/Github%20Photos/HomeDemo.png)

Preview of Dependencies

For the dependencies, make sure you download all of the ones listed here using npm i, failure to download these will result in the project not functioning correctly!

![Alt text](https://github.com/eez9/Project-Proposal/blob/main/Github%20Photos/Dependencies.png)

Preview of Folders

Follow the folder structure outlined here to make sure that the files are all in their correct spots in regards to the project

![Alt text](https://github.com/eez9/Project-Proposal/blob/main/Github%20Photos/Folders.png)

Once you've downloaded and placed all the files correctly, and downloaded all the necessary dependencies, open up a split terminal, and an extra terminal. in the extra terminal, run the command 'mongosh' to set up your mongodDB database connection. (If this is not working, go into task manager -> services -> and find mongoDB, make sure that mongoDB is "running" and not "stopped"). Next, in the split terminal, run "npm start" on one, and 
"npm run start-app" on the other. Now, you're ready to explore johnslist!
