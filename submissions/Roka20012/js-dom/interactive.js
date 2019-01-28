"use strict";

let stories = {
    2: `<p><span><strong>Storie 2.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit similique molestiae eligendi laudantium minus consequatur repellat ipsa, nemo repudiandae perspiciatis, magni aut temporibus nam ipsum expedita aperiam laboriosam quia, sapiente.</span>
				<span>Hic  nemo quia odio quo numquam cum praesentium quis dolor impedit amet porro aut eos eaque dolore esse incidunt quos, voluptas doloremque eveniet blanditiis! Earum doloremque temporibus cupiditate laboriosam.</span>
				<span>Doloribus fugiat cumque nostrum, error iusto vitae voluptatem porro ipsam officiis provident ut ad. Repellat quas at temporibus numquam rem culpa adipisci, blanditiis soluta vitae accusantium, veritatis laboriosam. Voluptate, praesentium.</span>
				<span>Laborum repudiandae id, quasi voluptate animi nulla, molestias provident possimus, architecto accusamus magnam veniam rerum perspiciatis dicta assumenda unde et eveniet sed illum quaerat aut eum suscipit! Deserunt voluptas, doloribus.</span>
				<span>Rem ipsum eligendi id consequatur, expedita cumque neque. Dolor natus tempora repellendus quaerat accusamus eligendi doloribus, accusantium dolore voluptatibus dolorem fugiat architecto dolorum inventore error! Magnam doloremque velit, commodi minima!</span></p>
				<p><span>Eligendi architecto voluptas alias labore reprehenderit temporibus sed, et laborum repellendus quis quae dicta mollitia voluptates, hic? Excepturi praesentium vel, labore veniam earum facere quae deserunt eius quaerat deleniti quod.</span>
				<span>Qui asperiores assumenda, magni hic magnam quis earum blanditiis dolor adipisci, quibusdam voluptatibus ducimus distinctio quidem eaque dolorum voluptate delectus fuga nisi beatae veritatis. Debitis optio aspernatur deserunt commodi! Saepe.</span></p>`,
    3: `<p><span><strong>Storie 3.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit similique molestiae eligendi laudantium minus consequatur repellat ipsa, nemo repudiandae perspiciatis, magni aut temporibus nam ipsum expedita aperiam laboriosam quia, sapiente.</span>
				<span>Hic nesciunt nemo quia odio quo numquam cum praesentium quis dolor impedit amet porro aut eos eaque dolore esse incidunt quos, voluptas doloremque eveniet blanditiis! Earum doloremque temporibus cupiditate laboriosam.</span>
				<span>Doloribus fror iusto vitae voluptatem porro ipsam officiis provident ut ad. Repellat quas at temporibus numquam rem culpa adipisci, blanditiis soluta vitae accusantium, veritatis laboriosam. Voluptate, praesentium.</span>
				<span>Laborum repudiandae id, quasi voluptate animi nulla, molestias provident possimus, architecto accusamus magnam veniam rerum perspiciatis dicta assumenda unde et eveniet sed illum quaerat aut eum suscipit! Deserunt voluptas, doloribus.</span>
				<span>Rem ipsum eligendi id consequatur, expedita cumque neque. Dolor natus tempora repellendus quaerat accusamus eligendi doloribus, accusantium dolore voluptatibus dolorem fugiat architecto dolorum inventore error! Magnam doloremque velit, commodi minima!</span></p>
				<p><span>Eligendi architecto voluptas alias labore reprehenderit temporibus sed, et laborum repellendus quis quae dicta mollitia voluptates, hic? Excepturi praesentium vel, labore veniam earum facere quae deserunt eius quaerat deleniti quod.</span>
				<span>Qui asperiores assumenda, magni hic magnam quis earum blanditiis dolor adipisci, quibusdam voluptatibus ducimus distinctio quidem eaque dolorum voluptate delectus fuga nisi beatae veritatis. Debitis optio aspernatur deserunt commodi! Saepe.</span></p>`,
    4: `<p><span><strong>Storie 4.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit similique molestiae eligendi laudantium minus consequatur repellat ipsa, nemo repudiandae perspiciatis, magni aut temporibus nam ipsum expedita aperiam laboriosam quia, sapiente.</span>
				<span>Hic nesciunt nemo quia odio quo numquam cum praesentium quis dolor impedit amet porro aut eos eaque dolore esse incidunt quos, voluptas doloremque eveniet blanditiis! Earum doloremque temporibus cupiditate laboriosam.</span>
				<span>Doloribus fugiat cumque nostrum, error iusto vitae voluptatem porro ipsam officiis provident ut ad. Repellat quas at temporibus numquam rem culpa adipisci, blanditiis soluta vitae accusantium, veritatis laboriosam. Voluptate, praesentium.</span>
				<span>Laborum rid, quasi voluptate animi nulla, molestias provident possimus, architecto accusamus magnam veniam rerum perspiciatis dicta assumenda unde et eveniet sed illum quaerat aut eum suscipit! Deserunt voluptas, doloribus.</span>
				<span>Rem ipsum eligendi id consequatur, expedita cumque neque. Dolor natus tempora repellendus quaerat accusamus eligendi doloribus, accusantium dolore voluptatibus dolorem fugiat architecto dolorum inventore error! Magnam doloremque velit, commodi minima!</span></p>
				<p><span>Eligendi architecto voluptas alias labore reprehenderit temporibus sed, et laborum repellendus quis quae dicta mollitia voluptates, hic? Excepturi praesentium vel, labore veniam earum facere quae deserunt eius quaerat deleniti quod.</span>
				<span>Qui asperiores assumenda, magni hic magnam quis earum blanditiis dolor adipisci, quibusdam voluptatibus ducimus distinctio quidem eaque dolorum voluptate delectus fuga nisi beatae veritatis. Debitis optio aspernatur deserunt commodi! Saepe.</span></p>`,
    5: `<p><span><strong>Storie 5.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit similique molestiae eligendi laudantium minus consequatur repellat ipsa, nemo repudiandae perspiciatis, magni aut temporibus nam ipsum expedita aperiam laboriosam quia, sapiente.</span>
				<span>Hic nesciunt nemo quia odio quo numquam cum praesentium quis dolor impedit amet porro aut eos eaque dolore esse incidunt quos, voluptas doloremque eveniet blanditiis! Earum doloremque temporibus cupiditate laboriosam.</span>
				<span>Doloribus fugiat cumque nostrum, error iusto vitae voluptatem porro ipsam officiis provident ut ad. Repellat quas at temporibus numquam rem culpa adipisci, blanditiis soluta vitae accusantium, veritatis laboriosam. Voluptate, praesentium.</span>
				<span>Laborum repudiandae id, quasi voluptate animi nulla, molestias provident possimus, architecto accusamus magnam veniam rerum perspiciatis dicta assumenda unde et eveniet sed illum quaerat aut eum suscipit! Deserunt voluptas, doloribus.</span>
				<span>Rem ipsum eligendi id consequatur, expedita cumque neque. Dolor natus tempora repellendus quaerat accusamus eligendi doloribus, accusantium dolore voluptatibus dolorem fugiat architecto dolorum inventore error! Magnam doloremque velit, commodi minima!</span></p>
				<p><span>Eligendi architecto voluptas alias labore reprehenderit temporibus sed, et laborum repellendus quis quae dicta mollitia voluptates, hic? Excepturi praesentium vel, labore veniam earum facere quae deserunt eius quaerat deleniti quod.</span>
				<span>Qui asperiores assumenda, magni hic magnam quis earum blanditiis dolor adipisci, quibusdam voluptatibus ducimus distinctio quidem eaque dolorum voluptate delectus fuga nisi beatae veritatis. Debitis optio aspernatur deserunt commodi! Saepe.</span></p>`
};


let nav = document.getElementById("navbar");
let text = document.getElementById("text");
let burger = document.getElementsByClassName("burger2")[0];

/**
 * закриває меню якщо ми натискаємо на пункт меню 
 * коли ширина екрана менша 900px
 * author: Rostyk Broslavsky
 * email: broslavsky.rostislaw@gmail.com
 */
function hideBurgerMenu() {
    let width = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    let maxWidth = 900;
    if (width < maxWidth) {
        nav.classList.toggle("menu-open");
        nav.classList.toggle("menu-close");
        burger.classList.toggle("open");
    }
}

/**
 * додає колір для вибраного елемента
 * author: Rostyk Broslavsky
 * email: broslavsky.rostislaw@gmail.com
 */
function setMark(target) {
    let a = Array.from(nav.children);

    a.forEach((el) => {
        el.classList.remove("check");
    });
    target.classList.add("check");
}

/**
 * при виборі пункта меню показує відповідний текст
 * author: Rostyk Broslavsky
 * email: broslavsky.rostislaw@gmail.com
 */
function showText(index) {
    let textChild = Array.from(text.children);

    textChild.forEach((el) => {
        el.id = "";
    });
    textChild[index].id = "animeText";
}

/**
 * Заповнює елементи контентом і показує 
 * author: Rostyk Broslavsky
 * email: broslavsky.rostislaw@gmail.com
 */
function checkStory({ target }) {

    if (target.tagName == "A") {
        for (let i = 0; i < nav.children.length; i++) {
            if (nav.children[i] == target) {
            	if(!text.children[i].children.length) text.children[i].innerHTML = stories[i + 1];
                delete stories[i+1];
                showText(i);
            }
        }

        setMark(target);
        hideBurgerMenu();
    }
}

nav.addEventListener("click", checkStory);

/**
 * Відкриває закриває меню при натисканні на бургер
 * author: Rostyk Broslavsky
 * email: broslavsky.rostislaw@gmail.com
 */
function hideOpenBurgerMenu(e) {
    nav.classList.toggle("menu-open");
    nav.classList.toggle("menu-close");
    burger.classList.toggle("open");
}

let burgerButton = document.getElementsByClassName("burger")[0];

burgerButton.addEventListener("click", hideOpenBurgerMenu);
