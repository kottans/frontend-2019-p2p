const gameInit = ()=>{
    const scene = document.querySelector('.scene');
    const pokemons = [
        {
            id: 0,
            src: 'img/bulbasaur.png'
        },
        {
            id: 1,
            src: 'img/charmander.png'
        },
        {
            id: 2,
            src: 'img/eevee.png'
        },
        {
            id: 3,
            src: 'img/lapras.png'
        },
        {
            id: 4,
            src: 'img/pikachu.png'
        },
        {
            id: 5,
            src: 'img/squirtle.png'
        }
    ];
    
    let contentArray = [...pokemons,...pokemons];
    contentArray.sort(function() { return 0.5 - Math.random() });

    let pokeHTML = '';
    contentArray.forEach(({id, src}, index)=>{
        pokeHTML+=`
            <div class="card is-flipped " data-id="${id}" data-index='${index}'>
                <div class="card__face card__face--front">
                    <img src='${src}'>
                </div>
                <div class="card__face card__face--back ">
                    <img src='img/back.jpg'>
                </div>
            </div>
        `
    });
    
    scene.insertAdjacentHTML('afterbegin', pokeHTML);
    let firstCard = -1;
    let secondCard = -1;
    let disabed = 0;
    const cards = [...document.querySelectorAll('.card')];
    const backSide = document.querySelectorAll('.card__face--back')
    const flipCard = (index)=>{
        let activeCard = cards.find(card => index===card.dataset.index);
        if (activeCard) activeCard.classList.toggle('is-flipped')
    };
    
    const changeStorage = (index)=>{
        if (firstCard < 0)  firstCard = index;
        else if (secondCard < 0) secondCard = index;
        // if (firstCard >=0 && firstCard == secondCard){
        //     firstCard = -1;
        //     secondCard = -1;
        //     return;
        // } 
        if (firstCard>=0 && secondCard >=0) {
            backSide.forEach(card => card.classList.add('block'));
            checkEq(firstCard, secondCard);
        };  
    };
    
    const checkEq = (first, second) => { 
        let cardOne = cards.find(card => first===card.dataset.index).dataset.id;
        let cardTwo = cards.find(card => second===card.dataset.index).dataset.id;
        let bool = cardOne === cardTwo ? true : false;
        if (bool){
            disabed++;
            setTimeout(()=>{
                disableCard(first);
                disableCard(second);
                if (disabed>=pokemons.length) alert('well done!');
                backSide.forEach(card => card.classList.remove('block'));
            }, 1000);
        } else {
            setTimeout(()=>{
                flipCard(first);
                flipCard(second);
                backSide.forEach(card => card.classList.remove('block'));
            }, 1000)
        }
        firstCard = -1;
        secondCard = -1;
    };
    
    scene.addEventListener('click', (event)=>{
        let {target} = event;
        target = target.parentNode.parentNode;
        if(target.tagName != 'DIV') return;
        if (!target.classList.contains('is-flipped')) return;
        let targetIndex = target.dataset.index;
        flipCard(targetIndex);
        changeStorage(targetIndex);
    })
    
    const disableCard = (index)=>{
        let disabledCard = cards.find(card => index===card.dataset.index);
        if (disabledCard) disabledCard.classList.toggle('disabled');
    }    
};

document.addEventListener('DOMContentLoaded', gameInit);
