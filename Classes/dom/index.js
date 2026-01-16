const header1 = document.querySelector('h1')

console.log(header1)

header1.textContent = 'cambio';

const header2 = document.createElement('h2');
header2.textContent = 'pepe';

document.body.appendChild(header2);

const id = document.getElementById('unique')

console.log(id);

const cards = document.querySelectorAll('.card');
console.log(cards);

cards.forEach(card =>{
    card.querySelector('.card-title').textContent='new title'
}
)

// cards.forEach(card => {
//     card.children()[1]
// })


//LocalStorage y SessionStorage
//Sweetalert2
//material ui vulma shadcn foundation

const films = [
    {
        name:'Friends',
        description:'Amiwis',
        image:'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/52dae4c7-2ab1-4bb9-ab1c-8100fd54e2f9/968f7831-2802-4d91-91ba-cd06b9640379?host=wbd-images.prod-vod.h264.io&partner=beamcom',
    },
    {
        name:'DARK',
        description:'Viajes en el tiempo',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6QdQfCnB9b09Gfo2BpOOjZk7UlvtYrGnkUQ&s",
    },
    {
        name:'DARK',
        description:'Viajes en el tiempo',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6QdQfCnB9b09Gfo2BpOOjZk7UlvtYrGnkUQ&s",
    }
]

const cardSection = document.querySelector('section');

for (let index = 0; index < films.length; index++) {
    //fimls[index]

    // document.createElement()
    cardSection.innerHTML += 'hola' + index; //diferente a textContent, lo toma como texto plano

    
}
