const frontendFrameworks = [
    {
        id: 0,
        name: 'React',
    },
    {
        id: 1,
        name: 'Vue',
    },
    {
        id: 2,
        name: 'Angular',
    },
    {
        id: 3,
        name: 'Django',

    },
    {
        id: 4,
        name: 'Ruby',

    },
    {
        id: 5,
        name: 'Flask',

    },
    {
        id: 6,
        name: 'Express',

    },
    {
        id: 7,
        name: 'JQuery',

    },
];

const imageURLs = [
    {
        id: 0,
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    {
        id: 1,
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
    },
    {
        id: 2,
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
    },
    {
        id: 3,
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg',
    },
    {
        id: 4,
        url: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Ruby_logo.png',
    },
    {
        id: 5,
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg',
    },
    {
        id: 6,
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
    },
    {
        id: 7,
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/81/JQuery_logo_text.svg',
    },
];

const getItemByID = (items, id) => items.find(item => item.id === id);
const clearHTML = node => node.innerHTML = '';

const renderListItem = ({ name, id }, activeID) => {
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.innerText = name;
    button.type = 'button';
    button.id = id;
    button.className = activeID === id ? 'active button' : 'button';
    item.append(button);

    return item;
};

const renderListItems = (items, activeID) => {
    const frameworksListElement = document.querySelector('.frameworks-list');
    clearHTML(frameworksListElement);
    const fragment = document.createDocumentFragment();
    items.forEach((item) => fragment.append(renderListItem(item, activeID)));

    frameworksListElement.append(fragment);
};

const renderContent = (activePageID) => {
    const { url } = getItemByID(imageURLs, activePageID);
    const contentElement = document.querySelector('.content');
    const image = document.createElement('img');
    image.src = url;

    clearHTML(contentElement);
    contentElement.append(image);
};

const render = (state) => {
    renderListItems(state.frameworks, state.activePageID);
    renderContent(state.activePageID);
};

const init = () => {
    const frameworksListElement = document.querySelector('.frameworks-list');
    const state = {
        frameworks: frontendFrameworks,
        activePageID: 0,
    }

    const handleListItemClick = (evt) => {
        const { target } = evt;
        if (target.tagName !== 'BUTTON') {
            return;
        }

        state.activePageID = parseInt(target.id, 10);
        render(state);
    }
    frameworksListElement.addEventListener('click', handleListItemClick);

    render(state);
};

init();


