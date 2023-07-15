import { createMachine, assign } from 'xstate';
const gameStagesMachine = createMachine({
    id: 'gameStages',
    initial: 'idle',
    context: {
        elapsedGameTime: 0,
        totalMoves: 0,
        twoCardOpenedVar: false,
        gridElements: undefined,
        highScore: 0,
        firstCard: undefined,
        secondCard: undefined,
        pairsFound: 0,
    },
    states: {
        idle: {
            on: {
                CONTENT_LOADED: {
                    target: 'waiting',
                    actions: ['hideLoadingScreen'],
                },
            },
        },
        waiting: {
            entry: 'showWaitingScreen',
            on: {
                COLOR_SUBMITED: {
                    target: 'playing',
                    actions: ['hideWaitingScreen', 'assignGridElements'],
                },
            },
        },
        playing: {
            initial: 'zeroCardOpened',
            invoke: {
                src: (context) => (cb) => {
                    const interval = setInterval(() => {
                        cb('TICK');
                    }, 1000 * 0.1);

                    return () => {
                        clearInterval(interval);
                    };
                },
            },
            on: {
                TICK: {
                    actions: assign({
                        elapsedGameTime: (context) =>
                            +(context.elapsedGameTime + 0.1).toFixed(2),
                    }),
                },
            },
            states: {
                zeroCardOpened: {
                    on: {
                        COLOR_CLICKED: {
                            target: 'oneCardOpened',
                            actions: [
                                'updateFirstCard',
                                'changeCardColor',
                                'changeTwoCardOpenedVarToFalse',
                                'increaseTotalMoves',
                            ],
                        },
                    },
                },
                oneCardOpened: {
                    on: {
                        COLOR_CLICKED: [
                            {
                                cond: 'clikedTheSameCard',
                                target: 'zeroCardOpened',
                                actions: ['resetChosenCards'],
                            },
                            {
                                target: 'twoCardOpened',
                                actions: [
                                    'updateSecondCard',
                                    'changeCardColor',
                                ],
                            },
                        ],
                    },
                },
                twoCardOpened: {
                    always: [
                        {
                            cond: 'pairIsCorrect',
                            target: 'allPairsFoundCheck',
                            actions: ['increasePairsFound'],
                        },
                        {
                            cond: 'pairIsNotCorrect',
                            target: 'zeroCardOpened',
                            actions: [
                                'resetChosenCards',
                                'changeTwoCardOpenedVarToTrue',
                            ],
                        },
                    ],
                },
                allPairsFoundCheck: {
                    always: [
                        {
                            cond: 'allPairsFoundCond',
                            target: 'allPairsFound',
                            actions: ['freezeChosenCards'],
                        },
                        {
                            target: 'zeroCardOpened',
                            actions: ['freezeChosenCards'],
                        },
                    ],
                },
                allPairsFound: {
                    type: 'final',
                },
            },
            onDone: {
                target: 'ending',
                actions: ['showResultsScreen'],
            },
        },
        ending: {
            on: {
                PLAY_AGAIN: {
                    target: 'ending',
                    actions: ['hideResultsScreen', 'resetContext'],
                },
                ANIMATION_ENDED: {
                    target: 'waiting',
                },
            },
        },
    },
});

export default gameStagesMachine;
