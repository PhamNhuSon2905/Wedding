
const slideNavigator = (name) => {
    document.querySelectorAll('.bg-slide').forEach((slide) => {
        slide.classList.toggle('active', slide.classList.contains(name));
    });
};

window.addEventListener('load', () => {
    document.querySelectorAll('.slide-btn').forEach((btn) => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('.slide-btn').forEach((el) => el.classList.remove('active'));
            this.classList.add('active');
            slideNavigator(this.getAttribute('data-target'));
        });
    });
});

const sectionNavigator = (name) => {
    const header = document.querySelector('header');
    document.querySelectorAll('section').forEach((section) => {
        section.classList.toggle('section-show', section.classList.contains(name));
    });
    header.classList.add('active');
};

const resetHeader = () => {
    const header = document.querySelector('header');
    header.classList.remove('active');
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');
    const body = document.body;
    menu.classList.remove('active');
    navMobile.classList.remove('active');
    body.classList.remove('menu-open');
};

const initNavigation = () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach((el) => {
        el.classList.toggle('active', el.getAttribute('data-target') === 'about');
    });
    sectionNavigator('about');
};

const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');
    const body = document.body;
    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
    body.classList.toggle('menu-open');
};

window.addEventListener('load', () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach((nav) => {
        nav.addEventListener('click', function (e) {
            e.preventDefault();
            navList.forEach((el) => el.classList.remove('active'));
            this.classList.add('active');
            sectionNavigator(this.getAttribute('data-target'));

            document.querySelector('.menu').classList.remove('active');
            document.querySelector('.nav-mobile').classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    document.querySelectorAll('.nav-mobile a').forEach((link) => {
        link.addEventListener('click', resetHeader);
    });
});
