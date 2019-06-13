const habbits = [
  {
    name: "Proactivity",
    img: "./img/proactivity.jpg",
    description:
      "Talks about the concept of Circle of Influence and Circle of Concern. Work from the center of your influence and constantly work to expand it. Don't sit and wait in a reactive mode, waiting for problems to happen (Circle of Concern) before taking action."
  },
  {
    name: "Goal",
    img: "./img/goal.jpg",
    description:
      "Envision what you want in the future so you can work and plan towards it. Understand how people make decisions in their life. To be effective you need to act based on principles and constantly review your mission statement. Are you - right now - who you want to be? What do I have to say about myself? How do you want to be remembered? If habit 1 advises to change your life to act and be proactive, habit 2 advises that you are the programmer! Grow and stay humble."
  },
  {
    name: "Priority",
    img: "./img/priority.jpg",
    description:
      "Talks about difference between leadership and management. Leadership in the outside world begins with personal vision and personal leadership. Talks about what is important and what is urgent. Priority should be given in the following order (in brackets are the corresponding actions from the Eisenhower Matrix)"
  },
  {
    name: "Win-Win",
    img: "./img/winwin.jpg",
    description:
      'Genuine feelings for mutually beneficial solutions or agreements in your relationships. Value and respect people by understanding a "win" for all is ultimately a better long-term resolution than if only one person in the situation had gotten their way. Think Win-Win isn\'t about being nice, nor is it a quick-fix technique. It is a character-based code for human interaction and collaboration.'
  },
  {
    name: "First - hear, then be heared",
    img: "./img/hear.jpg",
    description:
      "Use empathetic listening to genuinely understand a person, which compels them to reciprocate the listening and take an open mind to being influenced by you. This creates an atmosphere of caring, and positive problem solving."
  },
  {
    name: "Synergy",
    img: "./img/synergy.jpg",
    description:
      "Combine the strengths of people through positive teamwork, so as to achieve goals that no one could have done alone."
  },
  {
    name: "Sharpen saw",
    img: "./img/saw.jpg",
    description:
      "Balance and renew your resources, energy, and health to create a sustainable, long-term, effective lifestyle. It primarily emphasizes exercise for physical renewal, good prayer (meditation, yoga, etc.) and good reading for mental renewal. It also mentions service to society for spiritual renewal."
  }
];

const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const content = document.createElement("div");
content.classList.add("content");
container.appendChild(content);

const contentTitle = document.createElement("h2");
contentTitle.classList.add("content_title");
contentTitle.textContent = habbits[0].name;
content.appendChild(contentTitle);

const descriptionPar = document.createElement("p");
descriptionPar.classList.add("description_text");
descriptionPar.textContent = habbits[0].description;
content.appendChild(descriptionPar);

const menu = document.createElement("div");
container.appendChild(menu);

const navigation = document.createElement("ul");
navigation.classList.add("navigation");
menu.appendChild(navigation);

habbits.forEach((val, key) => {
  const createListName = document.createElement("li");
  createListName.classList.add("listel");
  createListName.textContent = habbits[key].name;
  navigation.appendChild(createListName);
});

const containerImg = document.createElement("div");
containerImg.classList.add("content_img");
container.appendChild(containerImg);

const contentImg = document.createElement("img");
contentImg.classList.add("image");
contentImg.setAttribute("src", habbits[0].img);
containerImg.appendChild(contentImg);

const changeMenu = document.querySelector("ul");

changeMenu.addEventListener("click", evt => {
  const getList = document.querySelectorAll("li");
  getList.forEach(element => {
    element.classList.remove("clicked");
  });

  habbits.forEach((val, key) => {
    if (evt.target.textContent === habbits[key].name) {
      contentImg.src = habbits[key].img;
      evt.target.classList.add("clicked");
      contentTitle.textContent = habbits[key].name;
      descriptionPar.textContent = habbits[key].description;
    }
  });
});
