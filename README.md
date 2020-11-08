## News Central App

This App was build to allow the users to do searches about any subject (specific topic or keyword) he/she wants to read, and 
the app will bring news articles that mentions the user's search, limited to the last 24 months. 
The API used on this app tracks headlines in 7 categories across over 50 countries, and at over a hundred top publications
and blogs, in near real time.
The News Central App will list all articles related to the search showing the article headline/title, the source and a link
to the full article.

## Motivation

The motivation for this project was to move further on my work with React Hooks, and consume a great API and have some extra functionalities.

## Tech/framework used

This App was built with:
- React.js
- React Hooks
- Axios
- Semantic UI
- Jest
- News API

## The Code

The Code is divided in the following schema:

**Index.js** component
component that renders App.js inside the div with id=root on index.html

**App.js**
functional component with react hooks useState.This Component import and run Search.js and  Articles.js components.
Search.js component will have three props: query, to make sure the search function will receive the
query value added by the user; setQuery to add the query value and the search function.
Articles.js sends 'results' and 'invalidSearch' props, that will send an array
with all the info returned on the search, and the total amount or articles found with the query used.

**Search.js**(insid components folder)
It has a h1 tag with the Apps title, and has an input element that will receive the topic or keyword the user wants 
to find articles about. The Component has a search arrow funch using async/await syntax on the search, together with axios. 
This function receives an event from the input element, the function will be called only when the user clicks on Enter key.
The if statement here will have 2 conditions, first query cannot be empty, second the e.key should be equals to 'Enter'.
Confirming the Enter was clicked the input's value will be set to the query via setQuery. The data related to that query 
from the API will be returned as 'data' via the axios.get, using the URL with the api key and the params needed to make it work.
Now the search function will set 'results' through setResults, and the invalid const will be set by setInvalid confirming 
the totalAmount of articles returned by the query.
				
**Articles.js**(inside components folder)
functional component that receives the props from Search component. First we have a variable renderedResults declared, 
and we have an 'if' and an 'else if' statements. The first if will check if the query is valid by checking if its returning 
a total amount of articles greater than 0.If the total amount returned is equal to zero then a negative error message shows on the page.
On the 'else if' statement we are checking if the results are not underfined, then if not undefined the renderedResults variable 
will run the map() function and run through all the resulting items from the user's search and will return the title, source name, 
and a link with the original's article url link. This component returns this variable renderedResults. 

## Installation

Download the zip folder or git clone the https://github.com/JansenMendonca/NewsCentralApp.git, 
then navigate to the directory and just click `npm start`

## API Reference

News API provides breaking news headlines, and search for articles from news sources and blogs all over the web. Please visit it here: *https://newsapi.org/* 

## Tests

### Unit Tests - Jest
Unit tests were written with *jest* for each of the components. The details about it can be found below:
- App.test.js: makes sure the App component renders without crashing;
- Search.test.js: makes sure Search component renders without crashing;
- Articles.test.js: has two tests, the first one makes sure the Articles component renders without crashing with valid Search, 
and the second makes sure the Articles will render properly the error message if an invalid search is sent;

To run the unit tests just open the terminal under the project dir, and type `npm test` 

### Manual Tests
Here I would like to suggest some scenarios for manual tests:

**1st scenario**:
***Given***  a user adds any topic or keyword on the Search element
***and*** the user clicks Enter button
***then*** the app should return a list of articles with headline, source and a link to see full original article

**2nd scenario**:
***Given*** the Search element is empty, only showing Search as placeholder
***and*** the user clicks the Enter button
***then*** no result should be shown ***and*** the App does not break ***and*** the Devtools console should not show any error.

**3rd scenario**:
***Given*** the user types an invalid keyword with random characters(e.g. '@#bshv 000')
***and*** the user clicks the Enter button
***then*** an error message should show on the screen with the following words:
*Search couldn't find a valid result
Please try again*
