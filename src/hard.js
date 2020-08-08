let characterCounter = 0;

document.addEventListener("DOMContentLoaded",function(e){
    document.querySelector("div.grid-item.Capcom")

    fetch("https://secure-hamlet-19722.herokuapp.com/api/v1/characters/")
    .then (function(response){ return response.json()})
    .then(function(object){
        for(let i = 0; i < object.length-1;i++){
            if (object[i].universe === "Capcom"){addCapcomCharacter(object[i])};
            if (object[i].universe === "Marvel"){addMarvelCharacter(object[i])};
        }

    })

    document.addEventListener("click",function(e){
       
        if (e.target.className === "avatar" && characterCounter < 3){
            characterCounter ++
            createCard(e.target)            
        }


        //this is the end of the Click Event Listener
    })
    




    function addCapcomCharacter(character){
        let div = document.querySelector("div.grid-item.Capcom")
        let img = document.createElement("img");
        img.src = character.head_shot
        img.id = character.name
        img.className = "avatar"
        div.appendChild(img)
    }


    function addMarvelCharacter(character){
        let div = document.querySelector("body > div.grid-container > div.grid-item.Marvel")
        let img = document.createElement("img");
        img.src = character.head_shot
        img.id = character.name
        img.className = "avatar"
        div.appendChild(img)

    }

    function createCard(character){
        let selectedCharacters = document.querySelector(".selected-characters");
        let card = document.createElement("div");
        card.className = "card"
        card.id = character.id
        let h2 = document.createElement("h2");
        h2.textContent = character.id
        let img = document.createElement("img");
        img.className = "Portrait"
        img.src = character.src
        let ul = document.createElement("ul");
        card.appendChild(h2)
        card.appendChild(img)
        card.appendChild(ul)
        selectedCharacters.appendChild(card)

        getMoves(character.id)




                    function getMoves(id){
                      
                        fetch(`https://secure-hamlet-19722.herokuapp.com/api/v1/characters/${id}/moves`)
                        .then(function(response){ return response.json()})
                        .then(function(moves) {
                            
                            for(let i = 0; i < moves.length;i++){
                                
                                document.querySelector(`body > div.selected-characters > div:nth-child(${characterCounter}) > ul`),
                                 li = document.createElement("li"),
                                img =document.createElement("img");
                                li.textContent = moves[i].move_name
                                img.src = `https://secure-hamlet-19722.herokuapp.com/${moves[i].image}`
                                li.appendChild(img)
                                ul.appendChild(li)
                            }
                                ///end of fetch
                        })
                    }

                }


    //this is the end of the DomCOntentLoaded Listener
})