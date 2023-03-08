document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu_block'),
    hamburger = document.querySelector('.hamburger'),
    cross = document.querySelector('.cross');

    hamburger.addEventListener('click', () => {
        console.log('1');
        menu.classList.toggle('menu_block_active');
    });

    cross.addEventListener('click', () =>{
        menu.classList.toggle('menu_block_active');
    });
});

