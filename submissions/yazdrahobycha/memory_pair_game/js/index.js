import machine from './machine.js';
import '../styles/main.scss';
import { interpret, assign } from 'xstate';
import anime from 'animejs';
import chroma from 'chroma-js';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

const spinner = document.querySelector('.spinner');
const startBtn = document.querySelector('.start_btn_outer');
const innerStartBtn = startBtn.querySelector('.start_btn_inner');
const startBtnText = innerStartBtn.querySelector('.start_btn_text');
const textWrapper = document.querySelector('.game_title');
const startBtnContainer = document.querySelector('.start_btn');
const gridContainer = document.querySelector('.grid_container');
const resultContainer = document.querySelector('.result_container_outer');
const currentScoreContainer = resultContainer.querySelector('.currrent_score');
const highScoreContainer = resultContainer.querySelector('.high_score');
const tryAgainBtn = document.querySelector('.fa-solid');

const gameStagesMachine = machine.withConfig({
    actions: {
        hideLoadingScreen: (ctx) => {
            spinner.classList.add('hidden');
        },
        showWaitingScreen: (ctx) => {
            startBtn.classList.remove('clicked');
            textWrapper.classList.remove('hidden');
            startBtnContainer.classList.remove('hidden');
            textWrapper.innerHTML = textWrapper.textContent.replace(
                /\S/g,
                "<span class='letter'>$&</span>"
            );
            const timeline = anime.timeline({ loop: false }).add({
                targets: '.game_title .letter',
                translateX: [40, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: 'easeInCirc',
                duration: 1200,
                delay: (el, i) => 500 + 30 * i,
            });
            animateBtn(timeline, '.start_btn', '-=800', 1100);
        },
        hideWaitingScreen: ({ gridElements }) => {
            startBtn.classList.add('clicked');
            anime
                .timeline({ loop: false })
                .add({
                    targets: startBtnText,
                    opacity: [1, 0],
                    easing: 'linear',
                    duration: 100,
                })
                .add({
                    targets: '.game_title .letter',
                    translateX: [0, -30],
                    opacity: [1, 0],
                    easing: 'easeInQuart',
                    duration: 300,
                    delay: (el, i) => 100 + 30 * i,
                    complete: function (anim) {
                        startBtnContainer.classList.add('hidden');
                        textWrapper.classList.add('hidden');
                        animateBtn(
                            anime.timeline({ loop: false }),
                            '.grid_element',
                            '-=1500',
                            1000
                        );
                        gridElements.forEach((el) => {
                            hoverBtnEventListeners(el, 'playing');
                        });
                        gridContainer.classList.remove('hidden');
                    },
                });
        },
        showResultsScreen: ({
            elapsedGameTime,
            totalMoves,
            gridElements,
            secondCard,
        }) => {
            const previousHighScoreTime = localStorage.getItem('time');
            const previousHighScoreMoves = localStorage.getItem('moves');
            let highScorePhrase = `High Score: ${previousHighScoreMoves} moves and ${previousHighScoreTime} seconds`;
            if (
                !previousHighScoreTime ||
                (elapsedGameTime < previousHighScoreTime &&
                    totalMoves < previousHighScoreMoves)
            ) {
                highScorePhrase = `New High Score!`;
                localStorage.setItem('time', elapsedGameTime);
                localStorage.setItem('moves', totalMoves);
            }
            currentScoreContainer.textContent = `Impressive! You completed the game in ${totalMoves} turns in just ${elapsedGameTime} seconds!`;
            highScoreContainer.textContent = highScorePhrase;
            hoverAnimation(secondCard, 1.0, 600, 300)
                .add(
                    {
                        targets: gridElements,
                        scale: 0,
                        opacity: [1, 0],
                        duration: 700,
                        delay: anime.stagger(50),
                        easing: 'easeInBack',
                        complete: (anim) => {
                            gridContainer.classList.add('hidden');
                            resultContainer.classList.remove('hidden');
                        },
                    },
                    '+=300'
                )
                .add({
                    targets: resultContainer,
                    opacity: [0, 1],
                    scale: [0, 1],
                    duration: 1000,
                });
        },
        hideResultsScreen: () => {
            anime({
                targets: resultContainer,
                scale: {
                    value: [1, 0],
                    duration: 700,
                },
                opacity: {
                    value: [1, 0],
                    duration: 650,
                },
                easing: 'easeInBack',
                complete: (anim) => {
                    resultContainer.classList.add('hidden');
                    gameStagesService.send({ type: 'ANIMATION_ENDED' });
                },
            });
            gridContainer.innerHTML = '';
            innerStartBtn.firstElementChild.style.opacity = 1;
        },
        resetChosenCards: (
            { firstCard, secondCard, twoCardOpenedVar, gridElements },
            event
        ) => {
            firstCard.classList.remove('opened');
            let elementsToReset = [firstCard, secondCard];
            let timeout = 1000;
            if (!twoCardOpenedVar) {
                elementsToReset = [firstCard];
                timeout = 0;
            } else {
                const timelineforShake = hoverAnimation(
                    secondCard,
                    1.0,
                    600,
                    300
                );
                shakeAnimateBtn(timelineforShake, elementsToReset);
                gridElements.forEach((gridItem) => {
                    gridItem.classList.add('disabled');
                });
                setTimeout(() => {
                    gridElements.forEach((gridItem) => {
                        gridItem.classList.remove('disabled');
                    });
                }, timeout);
            }
            elementsToReset.forEach((element) => {
                setTimeout(() => {
                    element.classList.remove('clicked');
                    element.firstElementChild.style.backgroundColor = 'black';
                    anime({
                        targets: element.querySelector('.grid_element_text'),
                        opacity: [1, 0],
                        easing: 'linear',
                        duration: 100,
                    });
                    hoverAnimation(element.firstElementChild, 1.0, 800, 0);
                }, timeout);
            });
        },
        freezeChosenCards: ({ firstCard, secondCard, pairsFound }) => {
            const elements = [firstCard, secondCard];
            const elementsInner = [
                firstCard.firstElementChild,
                secondCard.firstElementChild,
            ];
            const elementsText = [
                firstCard.querySelector('.grid_element_text'),
                secondCard.querySelector('.grid_element_text'),
            ];
            elements.forEach((element) => {
                element.classList.add('clicked');
            });
            let tml = anime.timeline({loop: false})
            if (pairsFound !== 8) {
                tml = hoverAnimation(secondCard, 1.0, 600, 300)
            }
            tml.add(
                {
                    targets: elementsInner,
                    backgroundColor: '#FFF',
                    duration: 1000,
                },
            ).add(
                {
                    targets: elementsText,
                    color: '#000',
                    duration: 1000,
                    begin: function () {
                        elementsText.forEach((element) => {
                            element.textContent = 'Paired!';
                        });
                    },
                },
                '-=700'
            );
        },
        changeCardColor: ({ firstCard, twoCardOpenedVar }, { element }) => {
            if (!twoCardOpenedVar) {
                firstCard.classList.add('opened');
            }
            element.firstElementChild.style.backgroundColor =
                element.dataset.color;
        },
        updateFirstCard: assign({
            firstCard: (context, event) => event.element,
        }),
        updateSecondCard: assign({
            secondCard: (context, event) => event.element,
        }),
        increasePairsFound: assign({
            pairsFound: (context, event) => context.pairsFound + 1,
        }),
        changeTwoCardOpenedVarToTrue: assign({
            twoCardOpenedVar: (context, event) => true,
        }),
        changeTwoCardOpenedVarToFalse: assign({
            twoCardOpenedVar: (context, event) => false,
        }),
        assignGridElements: assign({
            gridElements: () => {
                createGridElements(gridContainer);
                return document.querySelectorAll('.grid_element_outer');
            },
        }),
        increaseTotalMoves: assign({
            totalMoves: (context) => context.totalMoves + 1,
        }),
        resetContext: assign({
            elapsedGameTime: 0,
            totalMoves: 0,
            twoCardOpenedVar: false,
            gridElements: undefined,
            highScore: 0,
            firstCard: undefined,
            secondCard: undefined,
            pairsFound: 0,
        }),
    },
    guards: {
        pairIsCorrect: (context, event) =>
            context.firstCard.dataset.color ===
            context.secondCard.dataset.color,
        pairIsNotCorrect: (context, event) =>
            context.firstCard.dataset.color !==
            context.secondCard.dataset.color,
        allPairsFoundCond: (context, event) => context.pairsFound === 8,
        clikedTheSameCard: (context, event) =>
            context.firstCard === event.element,
    },
});

// Start a service
const gameStagesService = interpret(gameStagesMachine);
gameStagesService.start();
window.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        gameStagesService.send({ type: 'CONTENT_LOADED' });
    }, 3000);
});

// Button entry animation logic
function animateBtn(tml, target, delay, duration) {
    tml.add(
        {
            targets: `${target}_outer`,
            scale: [0, 1],
            duration: duration,
            easing: 'easeInOutExpo',
            delay: anime.stagger(50),
        },
        '-=500'
    ).add(
        {
            targets: `${target}_inner`,
            scale: [0, 1],
            duration: duration,
            easing: 'easeInOutExpo',
            delay: anime.stagger(50),
        },
        delay
    );
}

function shakeAnimateBtn(tml, elements) {
    const xMax = 5;
    tml.add({
        targets: elements,
        easing: 'easeInOutSine',
        duration: 250,
        translateX: [
            {
                value: xMax * -1,
            },
            {
                value: xMax,
            },
            {
                value: xMax / -2,
            },
            {
                value: xMax / 2,
            },
            {
                value: 0,
            },
        ],
    });
}

// Button hover/click animation logic
let mouseDown = false;
const hoverAnimation = (el, scale, duration, elasticity) => {
    anime.remove(el);
    return anime.timeline({ loop: false }).add({
        targets: el,
        scale: scale,
        duration: duration,
        elasticity: elasticity,
    });
};
function hoverBtnEventListeners(elementBtn, elementStateType) {
    const innerElementBtn = elementBtn.firstElementChild;

    elementBtn.addEventListener(
        'mouseenter',
        () => {
            if (
                elementBtn.classList.contains('clicked') ||
                elementBtn.classList.contains('disabled')
            ) {
                return;
            }
            hoverAnimation(elementBtn, 1.2, 800, 400);
        },
        false
    );
    elementBtn.addEventListener(
        'mouseleave',
        () => {
            if (
                elementBtn.classList.contains('clicked') ||
                elementBtn.classList.contains('disabled')
            ) {
                return;
            }
            let innerBtnSize = 1.0;
            if (elementBtn.classList.contains('opened')) {
                innerBtnSize = 1.3;
            }
            if (mouseDown) {
                hoverAnimation(innerElementBtn, innerBtnSize, 800, 0);
            }
            hoverAnimation(elementBtn, 1.0, 600, 300);
        },
        false
    );
    elementBtn.addEventListener(
        'mousedown',
        () => {
            if (
                elementBtn.classList.contains('clicked') ||
                elementBtn.classList.contains('disabled')
            ) {
                return;
            }
            mouseDown = true;
            hoverAnimation(innerElementBtn, 0.7, 800, 400);
        },
        false
    );
    elementBtn.addEventListener(
        'mouseup',
        () => {
            if (
                elementBtn.classList.contains('clicked') ||
                elementBtn.classList.contains('disabled') ||
                !mouseDown
            ) {
                return;
            }
            mouseDown = false;
            let btnSizeIncrease = 1.4;
            let nextEventType = 'COLOR_SUBMITED';
            if (elementStateType === 'playing') {
                btnSizeIncrease = 1.3;
                nextEventType = 'COLOR_CLICKED';
                if (!elementBtn.classList.contains('opened')) {
                    anime.timeline({ loop: false }).add({
                        targets: elementBtn.querySelector('.grid_element_text'),
                        opacity: [0, 1],
                        easing: 'linear',
                        duration: 200,
                    });
                }
            }
            hoverAnimation(innerElementBtn, btnSizeIncrease, 800, 0);
            gameStagesService.send({
                type: nextEventType,
                element: elementBtn,
            });
        },
        false
    );
}
hoverBtnEventListeners(startBtn, 'waiting');

tryAgainBtn.addEventListener('click', () => {
    gameStagesService.send({ type: 'PLAY_AGAIN' });
});

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
    return array;
}

// fetch color scheme based on a two random genereted colors and create grid elements using the colors
function deltaE(labA, labB) {
    let deltaL = labA[0] - labB[0];
    let deltaA = labA[1] - labB[1];
    let deltaB = labA[2] - labB[2];
    let c1 = Math.sqrt(labA[1] * labA[1] + labA[2] * labA[2]);
    let c2 = Math.sqrt(labB[1] * labB[1] + labB[2] * labB[2]);
    let deltaC = c1 - c2;
    let deltaH = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC;
    deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH);
    let sc = 1.0 + 0.045 * c1;
    let sh = 1.0 + 0.015 * c1;
    let deltaLKlsl = deltaL / 1.0;
    let deltaCkcsc = deltaC / sc;
    let deltaHkhsh = deltaH / sh;
    let i =
        deltaLKlsl * deltaLKlsl +
        deltaCkcsc * deltaCkcsc +
        deltaHkhsh * deltaHkhsh;
    return i < 0 ? 0 : Math.sqrt(i);
}

function generateTwoDistinctColors() {
    let color1, color2, colorDiff;
    do {
        color1 = chroma.random();
        color2 = chroma.random();
        colorDiff = deltaE(color1.lab(), color2.lab());
    } while (colorDiff < 95);

    return [color1, color2];
}

function createGridElements(container) {
    let colorsArray = chroma
        .scale(generateTwoDistinctColors())
        .mode('lch')
        .colors(8);
    colorsArray = shuffle(colorsArray.flatMap((i) => [i, i]));
    colorsArray.forEach((color) => {
        const element = `<div data-color=${color} class="btn_outer grid_element_outer">
                    <div class="btn_inner grid_element_inner"><span class="grid_element_text btn_text">${color}</span></div>
                </div>`;
        container.innerHTML = container.innerHTML + element;
    });
}
