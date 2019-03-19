// Check document is loaded
document.onreadystatechange = function () {
    setTimeout(function () {
        if (document.readyState == "complete") {
            document.querySelector(".loaderContainer").className = "loaderContainer removeLoader";
        } else {
            document.querySelector(".loaderContainer").className = "loaderContainer";
        }
    }, 1300)
}
// Check document is loaded (End)

window.onload = function () {
    // for onload animation
    const slideClass = document.querySelectorAll(".slide_lines");

    setTimeout(function () {
        slideClass.forEach(function (slides) {
            slides.classList.add("animation");
        })
    }, 1300)

    setTimeout(function () {
        document.querySelector(".header").classList.add("ani_header");
        document.querySelector(".banner_cont").classList.add("banner_ani");
        if (document.querySelector(".steps_cont")) {
            document.querySelector(".steps_cont").classList.add("steps_cont_show");
        }
    }, 2000)
    // for onload animation (End)

    // for header scroll
    window.onscroll = function () {
        const scroll = window.scrollY;
        if (scroll > 0) {
            document.querySelector(".header").classList.add("fix_header");
            document.querySelector(".sign_up a").classList.add("signup_border");
            document.querySelector(".logo_color").classList.add("logo_color_change");
            $(".sign_login").addClass("color_login_signup");
        } else {
            document.querySelector(".header").classList.remove("fix_header");
            document.querySelector(".sign_up a").classList.remove("signup_border");
            document.querySelector(".logo_color").classList.remove("logo_color_change");
            $(".sign_login").removeClass("color_login_signup");
        }
    }
    // for header scroll (end)


    // onlick hamburger menu open 
    document.querySelector(".ham").onclick = function () {
        document.querySelector(".ham_container").classList.add("show_ham");
        document.body.style.overflowY = "hidden";
    }
    // onlick hamburger menu open (end)


    // onlick hamburger menu close 
    document.querySelector(".ham_close").onclick = function () {
        document.querySelector(".ham_container").classList.remove("show_ham");
        document.body.style.overflowY = "scroll";
    }
    // onlick hamburger menu close (end)

    // onclick open city list modal
    document.querySelector(".current_city_container").onclick = function () {
        document.querySelector(".city_internal").classList.add("show_city_overlay")
        document.querySelector(".overlay").classList.toggle("overlay_show")
        document.body.style.overflowY = "hidden";
    }
    // onclick open city list modal (End)

    // onclick close city list modal
    document.querySelector(".cross_city_overlay").onclick = function () {
        document.querySelector(".city_internal").classList.remove("show_city_overlay")
        document.querySelector(".overlay").classList.remove("overlay_show")
        document.body.style.overflowY = "scroll";
    }
    // onclick close city list modal (End)

    // when click outside close city list modal if it's open
    document.querySelector(".overlay").onclick = function () {
        document.querySelector(".city_internal").classList.remove("show_city_overlay")
        document.querySelector(".overlay").classList.remove("overlay_show")
        document.body.style.overflowY = "scroll";
    }
    // when click outside close city list modal if it's open (End)

    // onclick go to previous page
    if (document.querySelector(".back_btn")) {
        document.querySelector(".back_btn").onclick = function () {
            window.history.back();
        }
    }
    // onclick go to previous page (End)


    // if ((window.location == "https://rahulalamks.github.io/15bells/checkbox.html") || (window.location == "https://rahulalamks.github.io/15bells/radion.html") || (window.location == "https://rahulalamks.github.io/15bells/form.html")) {
    //     window.onresize = function () {
    //         if (window.outerWidth < 751) {
    //             document.querySelector(".header_menus .black_menus").classList.remove("black_menus");
    //         } else {
    //             document.querySelector(".header_menus .black_menus").classList.add("black_menus");
    //         }
    //     }
    // }

    if (document.querySelector(".black_menus")) {
        if (window.innerWidth < 751) {
            document.querySelector(".header_menus .black_menus").classList.remove("black_menus");
        } else {
            document.querySelector(".header_menus .black_menus").classList.add("black_menus");
        }
    }
}