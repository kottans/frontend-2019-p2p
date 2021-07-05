const container = document.querySelector(".container");
const nav = document.querySelector(".menu");
const content = document.createElement("div");

function createMainDescription(elem) {
  nav.after(elem);
  elem.classList.add("description");

  const descriptionHeader = document.createElement("h2");
  descriptionHeader.classList.add("description__header");
  descriptionHeader.textContent = "Star Wars";
  elem.appendChild(descriptionHeader);

  const divForImg = document.createElement("div");
  divForImg.classList.add("description__img-container");
  elem.appendChild(divForImg);

  const img = document.createElement("img");
  img.setAttribute("src", "images/starWarsSaga.jpg");
  img.setAttribute("alt", "star wars");
  divForImg.appendChild(img);

  const divForText = document.createElement("div");
  divForText.classList.add("description__text-container");
  elem.appendChild(divForText);

  const paragForText = document.createElement("p");
  paragForText.textContent =
    "Star Wars is an American epic space-opera media franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe.";
  divForText.append(paragForText);
}
createMainDescription(content);

function filmPatter(filmList, item) {
  const filmHeader = item.querySelector("h2");
  filmHeader.textContent = filmList.header;

  const filmImage = item.querySelector("img");
  filmImage.setAttribute("src", filmList.image);
  filmImage.setAttribute("alt", filmList.alt);

  const filmText = item.querySelector("p");
  filmText.textContent = filmList.text;
}

nav.addEventListener("click", filmGenerator);

function filmGenerator({ target }) {
  let filmNameBtn = target.textContent;
  listOfFilms.forEach(film => {
    if (film.header === filmNameBtn) {
      filmPatter(film, content);
    }
  });
}

class film {
  constructor(header, alt, text, image) {
    this.header = header;
    this.alt = alt;
    this.text = text;
    this.image = image;
  }
}

const listOfFilms = [
  new film(
    "Episode I – The Phantom Menace (1999)",
    "Episode I – The Phantom Menace (1999)",
    "Star Wars: Episode I – The Phantom Menace is a 1999 American epic space-opera film written and directed by George Lucas, produced by Lucasfilm, distributed by 20th Century Fox and stars Liam Neeson, Ewan McGregor, Natalie Portman, Jake Lloyd, Ian McDiarmid, Anthony Daniels, Kenny Baker, Pernilla August, and Frank Oz. It is the first installment in the Star Wars prequel trilogy and begins the Skywalker saga, though it was the fourth film to be produced chronologically.",
    "images/The Phantom Menace (1999).jpg"
  ),
  new film(
    "Episode II – Attack of the Clones (2002)",
    "Episode II – Attack of the Clones (2002)",
    "Star Wars: Episode II – Attack of the Clones is a 2002 American epic space-opera film directed by George Lucas and written by Lucas and Jonathan Hales. It is the second installment of the Star Wars prequel trilogy, the fifth film to be produced, and the second film in the Skywalker saga. It stars Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid, Samuel L. Jackson, Christopher Lee, Anthony Daniels, Kenny Baker, and Frank Oz.",
    "images/Attack of the Clones (2002).jpg"
  ),
  new film(
    "Episode III – Revenge of the Sith (2005)",
    "Episode III – Revenge of the Sith (2005)",
    "Star Wars: Episode III – Revenge of the Sith is a 2005 American epic space-opera film written and directed by George Lucas. It stars Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid, Samuel L. Jackson, Christopher Lee, Anthony Daniels, Kenny Baker and Frank Oz. It is the final installment in the Star Wars prequel trilogy, the third chapter in the Skywalker saga and the sixth Star Wars film to be released overall.",
    "images/Revenge of the Sith (2005).jpg"
  ),
  new film(
    "Episode IV – A New Hope (1977)",
    "Episode IV – A New Hope (1977)",
    "Star Wars (retroactively titled Star Wars: Episode IV – A New Hope) is a 1977 American epic space opera film written and directed by George Lucas, produced by Lucasfilm and distributed by 20th Century Fox. It stars Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing, Alec Guinness, David Prowse, James Earl Jones, Anthony Daniels, Kenny Baker and Peter Mayhew. It is the first installment of the original Star Wars trilogy, the first of the franchise to be produced, and the fourth episode of the Skywalker Saga.",
    "images/A New Hope (1977).jpg"
  ),
  new film(
    "Episode V – The Empire Strikes Back (1980)",
    "Episode V – The Empire Strikes Back (1980)",
    "The Empire Strikes Back, also known as Star Wars: Episode V – The Empire Strikes Back, is a 1980 American epic space opera film directed by Irvin Kershner and written by Leigh Brackett and Lawrence Kasdan, based on a story by George Lucas. Produced by Lucasfilm, it is the second film in the Star Wars film series (albeit the fifth chronologically) and the sequel to Star Wars (1977).[a] Set three years after the events of the first film, the Galactic Empire, under the leadership of Darth Vader and the Emperor, pursues Luke Skywalker and the rest of the Rebel Alliance. While Vader relentlessly pursues Luke's friends—Han Solo, Princess Leia, Chewbacca, and C-3PO—Luke studies the Force under Jedi Master Yoda. The ensemble cast includes Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels, David Prowse, Kenny Baker, Peter Mayhew, and Frank Oz.",
    "images/The Empire Strikes Back (1980).jpg"
  ),
  new film(
    "Episode VI – Return of the Jedi (1983)",
    "Episode VI – Return of the Jedi (1983)",
    "Return of the Jedi (also known as Star Wars: Episode VI – Return of the Jedi) is a 1983 American epic space opera film directed by Richard Marquand. The screenplay is by Lawrence Kasdan and George Lucas from a story by Lucas, who was also the executive producer. It is the third installment in the original Star Wars trilogy, the third film to be produced, and sixth film in the Skywalker saga. It takes place one year after The Empire Strikes Back.[6] The film stars Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels, David Prowse, Kenny Baker, Peter Mayhew and Frank Oz.",
    "images/Return of the Jedi (1983).jpg"
  ),
  new film(
    "Episode VII – The Force Awakens (2015)",
    "Episode VII – The Force Awakens (2015)",
    "Star Wars: The Force Awakens (also known as Star Wars: Episode VII – The Force Awakens) is a 2015 American space opera film produced, co-written and directed by J. J. Abrams. It is the first installment in the Star Wars sequel trilogy, following the story of Return of the Jedi (1983), and is the seventh episode of the nine-part Skywalker saga. It was produced by Lucasfilm and Abrams's production company Bad Robot Productions, and was distributed by Walt Disney Studios Motion Pictures.",
    "images/The Force Awakens (2015).jpg"
  ),
  new film(
    "Episode VIII – The Last Jedi (2017)",
    "Episode VIII – The Last Jedi (2017)",
    "Star Wars: The Last Jedi (also known as Star Wars: Episode VIII – The Last Jedi) is a 2017 American epic space-opera film written and directed by Rian Johnson. It is the second installment of the Star Wars sequel trilogy, following The Force Awakens (2015), and it is the eighth episode of the nine-part Skywalker saga. It was produced by Lucasfilm and distributed by Walt Disney Studios Motion Pictures. The film's ensemble cast includes Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Andy Serkis, Lupita Nyong'o, Domhnall Gleeson, Anthony Daniels, and Gwendoline Christie in returning roles, with Kelly Marie Tran, Laura Dern, and Benicio del Toro joining the cast. It features the first posthumous film performance by Fisher, who died in December 2016, and the film is dedicated to her memory.",
    "images/The Last Jedi (2017).jpg"
  ),
  new film(
    "Episode IX – The Rise of Skywalker (2019)",
    "Episode IX – The Rise of Skywalker (2019)",
    "Star Wars: The Rise of Skywalker (also known as Star Wars: Episode IX – The Rise of Skywalker) is a 2019 American epic space opera film produced, co-written, and directed by J. J. Abrams. It is the third installment of the Star Wars sequel trilogy, following The Force Awakens (2015) and The Last Jedi (2017), and the final episode of the nine-part Skywalker saga. It was produced by Lucasfilm and Abramss production company Bad Robot Productions and was distributed by Walt Disney Studios Motion Pictures. The films ensemble cast includes Carrie Fisher, Mark Hamill, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Anthony Daniels, Kelly Marie Tran, Naomi Ackie, Domhnall Gleeson, Richard E. Grant, Lupita Nyongo, Keri Russell, Joonas Suotamo, Ian McDiarmid, and Billy Dee Williams. It features the second posthumous film performance by Fisher, who died in 2016 and appears through the use of unused footage from The Force Awakens.",
    "images/The Rise of Skywalker (2019).jpg"
  )
];

/* Mobile menu open/close button*/
const btn = document.getElementById("btn");
btn.addEventListener("click", function(e) {
  e.preventDefault();
  this.classList.toggle("btn-on");
  nav.classList.toggle("menu-open");
});
