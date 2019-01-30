document.addEventListener('DOMContentLoaded', ()=>{
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const menuItem = document.querySelectorAll('.menu-item');
    const contentItem = document.querySelectorAll('.content-item');
    burger.addEventListener('click', ()=>{
        burger.classList.toggle('change');
        menu.classList.toggle('open');
    });
    let active;

    switchActive=(i)=>{
        contentItem.forEach(item => item.classList.remove('active'));
        contentItem[i].classList.toggle('active');
        menuItem.forEach(item => item.classList.remove('chosen'));
        menuItem[i].classList.toggle('chosen');
    };

    switchActive(1);

    menu.addEventListener('click', (event)=>{
        let {target} = event;
        menuItem.forEach((item, i)=>{
            if (target == item){
                switchActive(i);
            }
        })
    })
})