// Descrizione
//  Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// id del post, numero progressivo da 1 a n
// nome autore,
// foto autore,
// data in formato americano (mm-gg-yyyy),
// testo del post,
// immagine (non tutti i post devono avere una immagine),
// numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// Milestone 3 - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// BONUS possibili
// Formattare le date in formato italiano (gg/mm/aaaa)
// Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente (es. Luca Formicola > LF).
// Al click su un pulsante “Mi Piace” di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let elSelector = document.getElementById("container");

posts.forEach((element, index) => {
    elSelector.innerHTML += `
                            <div class="post">
                                <div class="post__header">
                                    <div class="post-meta">                    
                                        <div class="post-meta__icon">
                                            <img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">                    
                                        </div>
                                        <div class="post-meta__data">
                                            <div class="post-meta__author">
                                                ${element.author.name}
                                            </div>
                                            <div class="post-meta__time">
                                                ${element.created}
                                            </div>
                                        </div>                    
                                    </div>
                                </div>
                                <div class="post__text">
                                    ${element.content}
                                </div>
                                <div class="post__image">
                                    <img src="${element.media}" alt="">
                                </div>
                                <div class="post__footer">
                                    <div class="likes js-likes">
                                        <div class="likes__cta">
                                            <a class="ciao like-button  js-like-button" href="#" data-postid="${index}">
                                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                                <span class="like-button__label">Mi Piace</span>
                                            </a>
                                        </div>
                                        <div class="likes__counter">
                                            Piace a <b id="like-counter-${index}" class="js-likes-counter">${element.likes}</b> persone
                                        </div>
                                    </div> 
                                </div>            
                            </div>
    `
});




const likedPosts = [];
console.log(posts[0].id);
function addLikeCounter(e){
  
    e.preventDefault(); //previene refresh della pagina
    if(e.target !== e.currentTarget){ // fa si che quando si clicka qualcosa diverso da l'anchor in questo caso non succeda nulla 
        return}
    
        let id = e.target.getAttribute("data-postid"); // cerco nell'anchor(e.target) l'attributo "data-postid" e lo metto nella variabile id


        // let post = posts.filter(i => {return i === id});
        // post.likes++;
        // console.log("post",post);
        let counterId = document.getElementById(`like-counter-${id}`) //cerco nel documento l'elemento con id `like-counter-${id}` e lo metto nella variabile counterId
        let likeDiv = document.getElementsByClassName("likes__cta");
        console.log("guardaquaaa",likeDiv);
        // likeDiv.document.classList.add("like-button--liked");
        counterId.innerHTML = `${posts[id].likes++}`; //modifico il contenuto del html con ${posts[id].likes++}`
        
        console.log(posts[id]); 
        console.log(id);
        console.log(e.target);
        


    // if (counter == 0){
    //     posts.forEach((post, index) => {
    //         if (post.id == 1) {
    //             idNumber.likes += 1;
    //             console.log(idNumber.likes);
    //             buttonInteractionLike.classList.add("like-button--liked")
    //             buttonInteractionLike = document.querySelector(`[id="like-counter-${posts[0].id}"]`)
    //             likedPosts.push(posts[0].id);
    //             console.log(likedPosts);
    //             console.log(buttonInteractionLike);
    //             buttonInteractionLike.innerHTML = `${idNumber.likes}`;
    //             counter++;
    //         }
            
    //         return idNumber;
    //        })
    // }  
};


//addLikeCounter(); // se non runno questa funzione qua il numero non aumento anche se clicko il bottone




// console.log(buttonInteractionLike);
let buttonInteractionLike = [];

buttonInteractionLike = document.getElementsByClassName("ciao");

let buttons = [...buttonInteractionLike];
console.log("all button", buttonInteractionLike);

buttons.forEach(button => {
        button.addEventListener('click', (e) => addLikeCounter(e));
        console.log(button.getAttribute("data-postid"));
});

// buttonInteractionLike.addEventListener('click', addLikeCounter(e));



// console.log(buttonInteractionLike);

// buttonInteractionLike.addEventListener('click', addLikeCounter );

// let elSelectedLikes;
// console.log(posts[0].id);

// function addLikeCounter(){
//     const upd_id = posts.map((idNumber, index) => {
//         console.log(index);
//         if (posts[0].id == 0) {
//           posts[0].likes += 1;
//         }
//        })
       
// };

// // console.log(addLikeCounter());

// console.log(posts[0].id);





// buttonInteractionLike.addEventListener('click', 
// function addLikeCounter(){
//     console.log(posts[0].likes);
// });
