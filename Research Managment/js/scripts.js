

var menuItems = document.querySelector('.menu-bar');

menuItems.addEventListener('mouseenter', event => {
    menuItems.classList.toggle('active');
});

menuItems.addEventListener('mouseleave', event => {
    menuItems.classList.remove('active');
});

/*menuItem.addEventListener('click', event => {
    menuItem.classList.add('active');
});*/