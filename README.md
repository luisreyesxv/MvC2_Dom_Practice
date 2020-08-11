# MvC2_Dom_Practice
We're loading up the game and it's now time to choose a difficulty. Pick your difty [Easy.html, Medium.html, Hard.html], and complete the tasks written within.

# APIs & Creating Your Server
For `Easy` and `Medium` I have attached a db.json in the root file. You can access this data using a JSON server. To do so, run the following commands

`npm install -g json-server
json-server --watch db.json`

You can also access the actual external api found at ` https://secure-hamlet-19722.herokuapp.com/api/v1/characters `

For `Hard` you must use the following api links
`https://secure-hamlet-19722.herokuapp.com/api/v1/characters
https://secure-hamlet-19722.herokuapp.com/api/v1/characters/{:name}/moves `
> Please note that in the api links above, the original creator [Dalvin Josias Sejour( https://codeburst.io/i-built-an-api-for-my-favorite-fighting-game-mvc2-df23d9f09024 )has included himself as a character. You may want to figure out how to remove him from the list.

## Easy
On the `Easy` page, there is a `<ul>` in the body.  You need to fetch the characters and add each character's name as a `<li>` inside the `<ul>`

the end result should look like this
![Easy Result](/results/easy-end-result.png)

## Medium
On the `Medium` page, there is a `<div>` with the class name "container".then inside you need to make a `<a>` with the class "character". nested inside `<a>` should be a 
`<span`> with the class name "character-inside". and inside that should be an `<img>` with the character's avatar inside. 
Everything should be loaded right when the page finishes loading.
At the beginning of the body there is a default `<h1>` tag (with the style "text-align:center"). By default the `<h1>` will default to say "You have not selected any characters." 
You need to make it so when a person clicks on an avatar, the `<h1>` changes to "You have selected (the characters name)".
 
 
 Each avatar/image should be able to affect the `<h1>` above according to the notes above.
 >as a reminder, please note that if you use the original api link, the original creator [Dalvin Josias Sejour( https://codeburst.io/i-built-an-api-for-my-favorite-fighting-game-mvc2-df23d9f09024 )has included himself as a character. You may want to figure out how to remove him from the list.

when done it should look like this

![Medium Results](/results/mvc2-medium-result.gif)
## Hard
