# Full-Stack Online Recipe Book Application

## Description:

After too many food splattered receipe cards, this project aims to develop a full-stack web application for storing, editing, and adding recipes online.

The application will provide a user-friendly interface for managing my recipes. I also want to intergrate a blog/comment section on each page, so that I can leave notes for myself for the future.

## Features:

1. **User Authentication:** For adding, commenting and deleting
2. **Recipe Management:** View, add, edit, and delete recipes.
3. **Comments and Reviews:** Ability to comment on recipes.
4. **Search and Filter:** Search for recipes by name, category
5. **Responsive Design:** The application will be responsive and accessible across different devices and screen sizes.

## Technologies Used:

- **Frontend:** HTML, CSS, JavaScript, React.js
- **Backend:** Node.js, Java, Springboot

# Update Logs

## Wednesday 20th March

Continued to work on backend. As I was building out the controller and testing in postman my POST and GET requests, I decided to change some of the data types to
`List<String> ` as I think that will better suit my needs moving forward. However, in getting the POST functionality to work, I have broken the GET request functions, so will need to investigate tomorrow.

I started to look at designs I liked, thinking very minimal, as nobody likes to read about the farm that your great uncles wife grew up on when looking at a recipe

![Design One](https://i.pinimg.com/564x/29/c3/a6/29c3a6f8dd1b7e2fa2c06221a8ba8222.jpg)

![Design Two](https://i.pinimg.com/564x/6b/7a/e9/6b7ae90b0d0570d019b64100b50f4e26.jpg)

or a little more fancy once time permits for me to sketch up some images

![Design Three](https://i.pinimg.com/564x/01/4c/da/014cdaa01183d1447a8f58942ccae04f.jpg)

## Tuesday 19th March

Continued to work on backend

Thoughts for improvements once MVP completed:

- Having the comments in their own table, so that I can track the date they were created

## Monday 18th March

Scoped projected and started to build backend using Springboot and Java

Database will include the following fields:

- Name
- Image
- Creator
- Category/Tags/Keywords
- Source (url)
- Date Added
- Date Updated
- Ingredients
- Servings
- Method
- Comments
