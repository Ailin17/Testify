window.addEventListener('DOMContentLoaded', (event) => {

    /*     document.body.addEventListener('click', () => {
            if (event.target.classList.contains('navlist__link')) {
                return;
            } else {
                const dropdowns = document.querySelectorAll('.dropdown-menu');
                dropdowns.forEach(dropdown => dropdown.style.display = 'none');
            }
        }) */



    // Menu click for submenus
    const menuItems = document.querySelectorAll('.navlist__link');

    menuItems.forEach(item => {
        item.addEventListener('click', drowdownMenu);
    });

    const hero = document.querySelector('.hero');
    hero.addEventListener('click', () => {
        const dropdowns = document.querySelectorAll('.dropdown-menu');
        dropdowns.forEach(dropdown => dropdown.style.display = 'none')
    })

    // Listener for hover effect on dress images
    const newArrivalImg = document.querySelectorAll('.dress > .img-wrapper');

    newArrivalImg.forEach(img => {
        img.addEventListener('mouseover', e => {
            let image = img.firstElementChild;
            let qv = image.nextElementSibling;
            image.classList.add('img-hover');
            qv.style.display = 'block';
        })
        img.addEventListener('mouseout', e => {

            let image = img.firstElementChild;
            image.classList.remove('img-hover');
            let qv = image.nextElementSibling;
            qv.style.display = 'none';
        })
    });

    // Hover for instagram images for hashtags
    const instaImg = document.querySelectorAll('.insta-img-wrapper');

    instaImg.forEach(img => {
        img.addEventListener('mouseover', e => {
            let image = img.firstElementChild;
            let hv = image.nextElementSibling;
            hv.style.display = 'grid';
        })
        img.addEventListener('mouseout', e => {

            let image = img.firstElementChild;
            image.classList.remove('img-hover');
            let qv = image.nextElementSibling;
            qv.style.display = 'none';
        })
    });

    const leftArrow = document.querySelector('#larr');
    const rightArrow = document.querySelector('#rarr');


    rightArrow.addEventListener('click', () => {

        let galleryOffset = document.querySelector('.gallery-wrapper').offsetWidth;
        let galleryScroll = document.querySelector('.gallery-wrapper').scrollWidth;
        instaScroll('right', galleryOffset, galleryScroll);
    })


    leftArrow.addEventListener('click', () => {

        let galleryOffset = document.querySelector('.gallery-wrapper').offsetWidth;
        let galleryScroll = document.querySelector('.gallery-wrapper').scrollWidth;
        instaScroll('left', galleryOffset, galleryScroll);
    })

    const loginView = document.querySelector('.login-view');
    const createView = document.querySelector('.create-view');
    document.querySelector('.login').addEventListener('click', () => loginView.classList.add('active'));
    document.querySelector('.create').addEventListener('click', () => createView.classList.add('active'));

    loginView.addEventListener('click', e => { closeViewbox(e, loginView); })
    createView.addEventListener('click', e => { closeViewbox(e, createView); })
});


function menuToggle() {

    const menuButtonActive = document.querySelector('.menu-btn-container').classList.contains('active');

    if (!menuButtonActive) {
        document.querySelector('.menu-btn-container').classList.add('active');
        document.querySelector('.navlist').style.display = 'block';

    } else {
        document.querySelector('.menu-btn-container').classList.remove('active');
        document.querySelector('.navlist').style.display = 'none';
    }
}

function drowdownMenu() {
    const currentSubmenu = event.target.nextElementSibling;
    if (currentSubmenu.style.display === "grid") {
        let height = currentSubmenu.clientHeight;
        interval = setInterval(() => {
            currentSubmenu.style.height = height + 'px';
            height = height - 2;
            if (height <= 0) {
                clearInterval(interval);
                currentSubmenu.style.display = "none";
            }
        }, 1)
        return;
    } else {
        currentSubmenu.style.height = '195px';
        const dropdowns = document.querySelectorAll('.dropdown-menu');
        dropdowns.forEach(dropdown => dropdown.style.display = 'none');
        event.target.nextElementSibling.style.display = "grid";
    }


}

function instaScroll(direction, galleryOffset, galleryScroll) {
    let shift = galleryScroll - galleryOffset;
    let currentMargin = parseInt(document.querySelector('.insta-gallery').style.marginLeft.split('rem')[0]);
    if (direction === 'right') {
        if (shift > 10) {
            if (currentMargin) {
                newMargin = currentMargin - 20;
                document.querySelector('.insta-gallery').style.marginLeft = newMargin + 'rem';
            } else {
                document.querySelector('.insta-gallery').style.marginLeft = '-20rem';
            }
        }
    } else if (direction === 'left') {
        if (currentMargin < 0) {
            newMargin = currentMargin + 20;
            document.querySelector('.insta-gallery').style.marginLeft = newMargin + 'rem';
        }
    }
    console.log(shift);
}

function closeViewbox(e, viewbox) {
    if (e.target == e.currentTarget) {
        viewbox.classList.remove('active');
    }

}