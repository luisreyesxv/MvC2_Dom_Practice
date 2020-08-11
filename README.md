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
On the `Medium` page, there is a `<div>` with the class name "container". Your mission is to create the following inside the `<div>` container
 * you need to make a `<a>` with the class "character" that is nested inside the `<div>`. 
 * nested inside `<a>` should be a `<span>` with the class name "character-inside". 
 * inside that should be an `<img>` with the character's avatar inside.
 
Everything should be loaded right when the page finishes loading.
At the beginning of the body there is a default `<h1>` tag (with the style "text-align:center"). By default the `<h1>` will default to say "You have not selected any characters." 
You need to make it so when a person clicks on an avatar, the `<h1>` changes to "You have selected (the characters name)".
 
 
 Each avatar/image should be able to affect the `<h1>` above according to the notes above.
 >as a reminder, please note that if you use the original api link, the original creator [Dalvin Josias Sejour( https://codeburst.io/i-built-an-api-for-my-favorite-fighting-game-mvc2-df23d9f09024 )has included himself as a character. You may want to figure out how to remove him from the list.

when done it should look like this

![Medium Results](/results/mvc2-medium-result.gif)

## Hard
For this challenge, you **MUST** use the original api link
`https://secure-hamlet-19722.herokuapp.com/api/v1/characters
https://secure-hamlet-19722.herokuapp.com/api/v1/characters/{:name}/moves`

Pleaase look inside the `Hard`.html to see more in detail, but inside `Hard`, you will find a `<div> with the class "grid-container". Inside that `<div>` container, you will find 2 `<div> containers. One named **"grid-item Capcom"** and another named **"grid-item Marvel** . Your mission is as follows
 
 * you need to fetch all characters from the api and load up the characters avatars. 
 * The characters need to be separated by their "universe" and placed in their appropriate `<div>` container. (ie. Magneto needs to be in the marvel container with his fellow mutants, while Ryu needs to be in the capcom container with his fellow street fighters)
 * After the avatars are loaded, if you click onto the character's profile, the character should have a card appear inside the `<div>` with the class name **selected-characters**. 
 > The card should be in a div with a class name of "card". Nested inside should be the characters name in a `<h2>` tag. the character's avatar should be placed in an `<img>` with the class="portrait". then a `<ul>` tag should be included. Nested inside the `<ul>` should be a `<li>`. The `<li>` should contain the name of the move and a `<img>` of the characters move/commmand
 * **And the most important mission of it all **, the character selection needs to be limted to 3 characters. If the player has 3 characters "selected", they should not be able to append another player card
 
 >as a reminder, please note that if you use the original api link, the original creator [Dalvin Josias Sejour( https://codeburst.io/i-built-an-api-for-my-favorite-fighting-game-mvc2-df23d9f09024 )has included himself as a character. You may want to figure out how to remove him from the list.
 
 The end result should look like this
 
 ![hard result](/results/mvc2-hard-result.gif)
 
 
 ## Stretch Goal
 For `Hard`, try to add a delete button to each card. When this button is clicked, it removes the card from the "selected-characters" container and allows the user to select another character.
 
For an **SUPER-COMBO FINISH** tough goal, make it so when the user selects 3 characters, the page auto-generates another selected character `<div>` with the class name "CPU-characters" and have it auto populate with 3 random characters for the CPU.
 
