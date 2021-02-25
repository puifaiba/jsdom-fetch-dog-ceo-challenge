console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    console.log("content loaded");  

    // test()
    // sayHi()
    
});



const imgUrl = fetch("https://dog.ceo/api/breeds/image/random/4")
.then( res => res.json())
.then( json => GetImage(json))

function GetImage(images){
    
    images.message.forEach( e => {
        let image = document.createElement('img')
        image.src = e
        document.getElementById("dog-image-container").appendChild(image)
    });

}

const breedUrl = fetch('https://dog.ceo/api/breeds/list/all')
.then( res => res.json())
.then( json => GetBreed(json))
//.then(() => {let li = document.querySelectorAll(".list-items"); console.log(li)})


function GetBreed(breeds){

    Object.keys(breeds.message).forEach( e => {
        let li = document.createElement('li')
        li.innerText = e
        li.className = "list-items"
        document.getElementById("dog-breeds").appendChild(li)
    });

    let li = document.querySelectorAll(".list-items")
    li.forEach( e => {
        e.addEventListener('click', (f) => {
        f.target.style.color = '#' + Math.floor(Math.random() * 12341234).toString(16)
        });
    });

    let letter_choice = document.getElementById("breed-dropdown")
    letter_choice.value.addEventListener('select', (e) => {
        li.forEach( f => {
            if f.charAt[0] !== e {
                f.removeChild()
            }
        });
    });
}
