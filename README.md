# TOHacks2021

## IDEA
Theme: Spring into action

Idea: Mapic A crowd sourced photography location finder based on Google Cloud image recognition keywords.

///
Basic functions:

    1. Upload location / photos... Optional to enter keywords (optional because keywords will be extracted from photos)
    
    2. All this information needs to be stored in a database to be easily searchable 
///

///
Data transfer back end to front end

1. Login (Firebase OAuth)


Front end -> Back end
    
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


## TODO

[ ] Setup authentication
[ ] Connect database