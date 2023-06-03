window.onload = function() {
    let navLinks = document.querySelectorAll('.nav-link');
    let sections = document.querySelectorAll('section');
    const offsetY = 100;
    
    let coordinatesY = {
        heroSection: sections[0].offsetTop,
        aboutSection: sections[1].offsetTop,
        skillsSection: sections[2].offsetTop,
        projectsSection: sections[3].offsetTop,
        contactSection: sections[4].offsetTop
    };

    window.onscroll = function() {
        let scrollY = window.scrollY + offsetY;

        if (scrollY >= coordinatesY.heroSection && scrollY < coordinatesY.aboutSection) {
            activeNavLinkInList(0, navLinks);
        }
        else if (scrollY >= coordinatesY.aboutSection && scrollY < coordinatesY.skillsSection) {
            activeNavLinkInList(1, navLinks);
        }
        else if (scrollY >= coordinatesY.skillsSection && scrollY < coordinatesY.projectsSection) {
            activeNavLinkInList(2, navLinks);
        }
        else if (scrollY >= coordinatesY.projectsSection && scrollY < coordinatesY.contactSection) {
            activeNavLinkInList(3, navLinks);
        }
        else if (scrollY >= coordinatesY.contactSection) {
            activeNavLinkInList(4, navLinks);
        }
    }

    function activeNavLinkInList(index, list) {
        if (!list[index].classList.contains('active')) {
            for(let i = 0; i < list.length; i++) {
                list[i].classList.remove('active');
            }
            list[index].classList.add('active');
        }
    }
}