# TOHacks2021

## IDEA
Theme: Spring into action

Idea: MaPic A crowd sourced photography location finder based on Google Cloud image recognition keywords.

///
Basic fu  nctions:

    1. Upload location / photos... Optional to enter keywords (optional because keywords will be extracted from photos)
    
    2. All this information needs to be stored in a database to be easily searchable 
///

///
Data transfer back end to front end

1. Login (Firebase OAuth)


Front end -> Back end
    
    Pages: Signup, Signin, Home, 


    1. Uploading a new location
        a) Needs to send image, *optional* keywords, user that uploaded, location
    2. Send search requests 
        a) By image (send user location too)
        b) By keyword

Back end -> Front end
    1. Needs to send search request results
        a) Form of a location
///


///
Front end features required:
    


    Auth pages (sign in, sign up)

    Create new location page
        Image, Location, *optional keywords*

        *Optional if time permits* Checkbox for anonymmity 

    Search page
        Search by keyword, max distance

        *Optional if time permits* Reverse image search

///


///

Create 2 users (1 to upload, 1 to search)

Upload 1 location (fake location)



///

///
Designation:

Front end: (Vue)
    Emily  
    Aman

Back end: (Node, Express)
    Eduard
    Andrei
///


## Devpost


## Inspiration
A search in hackathon project ideas yielded the idea of creating an app that would allow photographers to find their photoshoot location based on some keyword.

## What it does
MaPic is a mobile-first designed web app app that makes it easier than every to find photoshoot locations. Photographers all around the world can use the app to enter a keyword and get a list of all the known spots near them. The users can also help grow the MaPic database by creating an account and submitting their favourite spots.

## How we built it
We built the frontend using Vuejs. Particularly, we used vue-bootstrap to create a friendly modern-looking ui. We used leaflet to display a map of the locations on the map with markers. The backend was built with an express server using nodejs. The Google api was used.

## Challenges we ran into

-> we had difficulty choosing the idea of the project that we wanted to make.
-> We also had difficulty making the frontend and the backend communicate.
-> The first major challenge in back-end developement was with the use of Google Image Recognition API, and it being the first time any one on our team used it, the back-end team spend quite a while trying to make it work as best as possible. The next hurdle for back-end was the async functions and Promises. With our app being easily scalable, async functions did take a while to work out all bugs to deliver a fast and stable experience. Front-end developement didn't have as many challlenges but we did have slight issues with the back-end connection, which were easy to fix and didn't take up too much time.

## Accomplishments that we're proud of
We're proud of the dark theme ui we came up with. We're
-> Simple UI design/theme
-> Use of image recognition AI
-> 

## What we learned
We learned to how to use async functions, work with data models (treat them), take some rest when we were too overwhelmed.

## What's next for MaPic
-> Profanity filter for pics to ensure safety and PG use
-> Review system for each location as an added layer of information
-> 