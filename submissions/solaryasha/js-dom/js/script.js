class game {
    constructor(header,alt,text,image){
        this.header = header;
        this.alt = alt;
        this.text = text;
        this.image = image;
    }

}
const navigation = document.querySelector(".menu-tabs");
const tabs = document.querySelector(".nav");
const info = document.createElement("div");

const database = [
    new game(
        "League of Legends",
        "league of legends",
        "League of Legends is a 3D, third-person multiplayer online battle arena (MOBA) game. Players compete in matches, lasting anywhere from 20 to 60 minutes on average. In each game mode, teams work together to achieve a victory condition, typically destroying the core building (called the Nexus) in the enemy team's base after bypassing a line of defensive structures called turrets, or towers. League of Legends is one of the largest eSports, with various annual tournaments taking place worldwide.",
        "img/LoL.jpg"
    ),
    new game(
        "Dota 2",
        "dota 2",
        "Dota 2 is a multiplayer online battle arena (MOBA) video game in which two teams of five players compete to collectively destroy a large structure defended by the opposing team known as the \"Ancient\", whilst defending their own. Ten players each control one of the game's 117 playable characters, known as \"heroes\", with each having their own design, strengths, and weaknesses.",
        "img/Dota2.jpg"
    ),
    new game(
        "Overwatch",
        "overwatch",
        "Overwatch is an online team-based game generally played as a first-person shooter. The game features several different game modes, principally designed around squad-based combat with two opposing teams of six players each. Players select one of over two dozen pre-made hero characters from one of three class types: Damage heroes that deal most of the damage to attack or defend control points, Tank heroes that can absorb a large amount of damage, and Support heroes that provide healing or other buffs for their teammates",
        "img/overwatch.jpeg"
    ),
    new game(
        "Hearthstone",
        "hearthstone",
        "Hearthstone is a free-to-play online digital collectible card game developed and published by Blizzard Entertainment. Originally subtitled Heroes of Warcraft, Hearthstone builds upon the existing lore of the Warcraft series by using the same elements, characters, and relics.The game is a turn-based card game between two opponents, using constructed decks of 30 cards along with a selected hero with a unique power. Players use their limited mana crystals to play abilities or summon minions to attack the opponent, with the goal of destroying the opponent's hero. Winning matches and completing quests earn in-game gold, rewards in the form of new cards, and other in-game prizes.",
        "img/hearthstone.jpg"
    ),
    new game(
        "Counter-Strike: GO",
        "counter-strike: global offensive",
        "Global Offensive, like prior games in the Counter-Strike series, is an objective-based, multiplayer first-person shooter. Two opposing teams, known as the Terrorists and the Counter-Terrorists, compete in game modes to complete objectives, such as securing a location to plant or defuse a bomb and rescuing or guarding hostages.At the end of each round, players are rewarded based on their individual performance with in-game currency to spend on other weapons or utility in subsequent rounds. Winning rounds rewards more money than losing does, and completing objectives such as killing enemies gives cash bonuses. Uncooperative actions, such as killing teammates, results in a penalty",
        "img/CSGO.jpg"
    ),
    
]
function gameTemplate (database,element)  {
    const templateHeader = element.querySelector("h2");
    templateHeader.textContent = database.header;
    const templateImage = element.querySelector("img");
    templateImage.setAttribute("src", database.image);
    templateImage.setAttribute("alt", database.src);
    
    const templateText = element.querySelector("p");
    templateText.textContent = database.text;
    

}
tabs.addEventListener("click", contentGenerator);

function contentGenerator ({target}) {
    let buttonText = target.textContent;
    database.forEach(gameItem => {
        if (gameItem.header === buttonText) { 
            gameTemplate(gameItem,info);
        }
    }
);
}

function createDescriptionContainer (element){
    tabs.after(element);
    element.classList.add("info-content");

    const templateHeader = document.createElement("h2");
    templateHeader.classList.add("template-header");
    templateHeader.textContent = "The most popular eSports games"
    element.append(templateHeader);
    
    const divForImage = document.createElement("div")
    divForImage.classList.add("template-image");
    element.append(divForImage)
    
    const templateImage = document.createElement("img");
    templateImage.setAttribute("src", "img/hero00.jpg");
    templateImage.setAttribute("alt", "esports games");
    divForImage.append(templateImage);

    const divForParagraph = document.createElement("div")
    divForParagraph.classList.add("template-text");
    element.append(divForParagraph)

    const templateText = document.createElement("p");
    templateText.textContent = "The most common video game genres associated with esports are multiplayer online battle arena (MOBA), first-person shooter (FPS), fighting, digital collectible card games, battle royale games, and real-time strategy (RTS). What game would you like to play? Click on a tab to find out!";
    divForParagraph.append(templateText);

}
createDescriptionContainer(info);
