// Creating object with cities

var cities = {
    barcelona: {
        name: "Barcelona",
        color: "#F75C03",
        image: "barcelona.jpeg",
        description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
            Nisl pretium fusce id velit. Tellus mauris a diam maecenas sed enim ut sem.
            Auctor urna nunc id cursus metus aliquam eleifend. Habitasse platea dictumst quisque sagittis purus.
            Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit.
            Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris.
            Ipsum nunc aliquet bibendum enim. Id neque aliquam vestibulum morbi.
            Vitae purus faucibus ornare suspendisse sed nisi lacus sed.
            Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus.
        `
    },
    paris: {
        name: "Paris",
        color: "#649677",
        image: "paris.jpeg",
        description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quam pellentesque nec nam aliquam. Sagittis vitae et leo duis ut diam quam nulla.
            Commodo elit at imperdiet dui accumsan sit.
            Ac ut consequat semper viverra. At erat pellentesque adipiscing commodo elit at imperdiet dui.
            Faucibus nisl tincidunt eget nullam non nisi est. Condimentum lacinia quis vel eros.
            Nullam eget felis eget nunc. Dictum at tempor commodo ullamcorper a lacus vestibulum.
            Ornare suspendisse sed nisi lacus. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit.
            Id diam vel quam elementum pulvinar etiam non quam. Sed libero enim sed faucibus turpis in eu.
            Tempor commodo ullamcorper a lacus vestibulum sed arcu non.
        `
    },
    rome: {
        name: "Rome",
        color: "#C17383",
        image: "rome.jpeg",
        description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Orci porta non pulvinar neque laoreet suspendisse interdum consectetur.
            Enim nec dui nunc mattis.
            Dictumst quisque sagittis purus sit amet volutpat consequat.
            Tortor vitae purus faucibus ornare suspendisse sed nisi lacus.
            Turpis cursus in hac habitasse platea dictumst quisque sagittis.
            Et ligula ullamcorper malesuada proin. Donec massa sapien faucibus et.
            Sapien pellentesque habitant morbi tristique. A diam sollicitudin tempor id eu nisl.
            Proin sagittis nisl rhoncus mattis rhoncus. Mauris a diam maecenas sed enim ut.
            Sed elementum tempus egestas sed sed risus.
            Auctor augue mauris augue neque gravida in fermentum et sollicitudin.
        `
    },
    london: {
        name: "London",
        color: "#5C79A1",
        image: "london.jpeg",
        description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Id porta nibh venenatis cras sed felis eget velit aliquet.
            Aliquam ultrices sagittis orci a scelerisque purus.
            Mauris pharetra et ultrices neque ornare aenean euismod elementum.
            Commodo nulla facilisi nullam vehicula ipsum a arcu.
            Volutpat ac tincidunt vitae semper quis lectus nulla. Purus in massa tempor nec feugiat.
            Ac ut consequat semper viverra nam libero. At urna condimentum mattis pellentesque id nibh.
            Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum.
            Lectus nulla at volutpat diam ut venenatis tellus in. Integer feugiat scelerisque varius morbi.
            A lacus vestibulum sed arcu.
        `
    },
}

function displayNavigation() {
    nav.style.width = "200px";
}

function closeNavigation() {
    nav.style.width = "0";
}

// Function that replaces current city's info to the clicked one

function placeData( city ) {
    h1.textContent = cities[city].name;
    main.style.backgroundColor = cities[city].color;
    img.src = `img/${cities[city].image}`;
    txt.textContent = cities[city].description;
}

// Function that takes element from DOM

function takeEl( selector ) {
    return document.querySelector(selector);
}

// Creating needed elements

var h1 = takeEl("h1");
var main = takeEl(".main");
var img = takeEl("img");
var txt = takeEl("p");
var nav = takeEl("nav");
var openMenu = takeEl(".menu");
var closeMenu = takeEl(".cross");
var ul = takeEl("ul");

// Adding default informatio on the page

placeData("barcelona");

openMenu.addEventListener("click", () => {
    displayNavigation();
});

closeMenu.addEventListener("click", () => {
    closeNavigation();
});

// Changing information on the page

ul.addEventListener("click", (e) => {
    if ( e.target.tagName === "A" ) {
        var city = e.target.textContent;
        city = city.toLowerCase();
        placeData(city);
        closeNavigation();
    }
});
