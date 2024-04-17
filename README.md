# Looney Tunes

## Introduction

This was my first full-stack project building the back-end using Flask SQLAlchemy and the front-end using React. My goal for this project was to incorporate the knowledge aquired while attending Flatiron School. It taught me how to successfully create a back-end that could store and share data with the front-end. 
It deepened my knowlegde of the following:

-RESTful philosophy
-Validaions
-Constraints
-Migrations
-Serialization
-Views
-Routes
-Models
-Database instances
-Proxy
-Association proxy
-1-to-many relationships
-Many-to-many relationships
-Upgrading to migrations
-Downgrading to migrations
-Initializing databases
-Seeding databases
-Communication between the client and server


## Where Do I Start?

To navigate the website you have the option of using the NavLinks on the top left corner of the webpage. You also have the option to use the search bar on the top right to filter through the artists. The title of the webpage is a NavLink that will bring you to the homepage no matter where you are in the page.

To add an artist:
-Go to the top left dropdown menu and click on the add artist option
-Enter a name and image for that artist. These fields are required to you will get an error message if you do not fill them.
-You will be navigated to the main page.

To view all artists:
-Simply navigate to the main page.

To view a single artist:
-Click the artist info button on the artists card.
-You will be navigated to another page where you will see the artist name, image and ID.
-You will have the options to add an album from that artist or a review.

To add an album:
-Click on the corresponding artists info button.
-Click on the add album button.
-Fill out the form.
-When you submit the form you will be redirected to the albums page where you can see the information for all albums.

To view all albums:
-Click on the drop down menu on the top left and select the View albums option.
-Here you will have the option of updating or deleting the albums.

To add a review:
-Click on the artist info button.
-Click the add review button, you will need the artist and album id.
-Fill out the form, all fields are required.
-You will be redirected to the reviews page.

To view all reviews:
-Click on the drop down menu on the top left and select the View reviews option.
-Here you can update or delete the reviews.

To delete an artist, album or review:
-Click on any delete button to the corresponding information that you want to delete and you will be able to delete it.


---

## Setup

### `server/`

To download the dependencies for the backend server, run:

```console
pipenv install
pipenv shell
cd server
python seed.py
```

You can run your Flask API on [`localhost:5555`](http://localhost:5555) by
running:

``` console
python app.py
```


Check that your server serves the default route `http://localhost:5555`.

### `client/`

In a new terminal:

To download the dependencies for the frontend client, run:

```console
cd client
npm install 
npm install react-awesome-reveal @emotion/react --save
npm install -D tailwindcss
npx tailwindcss init
npm i -D daisyui@latest
```

You can run your React app on [`localhost:3000`](http://localhost:3000) by
running:

```sh
npm start
```

Check that your the React client displays a default page
`http://localhost:3000`. 

---

## Conclusion

Hopefully you enjoy navigating this website as much as I did building it!

Happy coding!

resources:

Daisy UI: https://daisyui.com/docs/install/
Tailwinds: https://tailwindcss.com/docs/guides/create-react-app
React-Awesome-Reveal: https://www.npmjs.com/package/react-awesome-reveal?activeTab=readme



