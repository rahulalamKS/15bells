document.onreadystatechange = function () {
    setTimeout(function () {
        if (document.readyState == "complete") {
            document.querySelector(".loaderContainer").className = "loaderContainer removeLoader";
        } else {
            document.querySelector(".loaderContainer").className = "loaderContainer";
        }
    }, 1300)

}
window.onload = function () {

    const slideClass = document.querySelectorAll(".slide_lines");
    const aniClass = document.querySelectorAll(".slide_ani");

    setTimeout(function () {
        slideClass.forEach(function (slides) {
            slides.classList.add("animation");
        })
    }, 1300)

    aniClass.forEach(function (targetAni) {
        targetAni.addEventListener("click", function () {
            slideClass.forEach(function (removeClass) {
                removeClass.classList.remove("animation");
            })
            setTimeout(function () {
                slideClass.forEach(function (addClass) {
                    addClass.classList.toggle("animation");
                })
            }, 0)
        })
    });

    setTimeout(function () {
        document.querySelector(".header").classList.add("ani_header");
        document.querySelector(".banner_cont").classList.add("banner_ani");
        document.querySelector(".steps_cont").classList.add("steps_cont_show");
    }, 2000)

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
        // console.log(scroll);
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


    document.querySelector(".current_city_container").onclick = function () {
        document.querySelector(".city_internal").classList.add("show_city_overlay")
        document.querySelector(".overlay").classList.toggle("overlay_show")
        document.body.style.overflowY = "hidden";
    }

    document.querySelector(".cross_city_overlay").onclick = function () {
        document.querySelector(".city_internal").classList.remove("show_city_overlay")
        document.querySelector(".overlay").classList.remove("overlay_show")
        document.body.style.overflowY = "scroll";
    }

    document.querySelector(".overlay").onclick = function () {
        document.querySelector(".city_internal").classList.remove("show_city_overlay")
        document.querySelector(".overlay").classList.remove("overlay_show")
        document.body.style.overflowY = "scroll";
    }

    document.querySelector(".back_btn").onclick = function () {
        window.history.back();
    }

    if ((window.location == "https://rahulalamks.github.io/15bells/checkbox.html") || (window.location == "https://rahulalamks.github.io/15bells/radion.html")) {
        window.onresize = function () {
            if (window.outerWidth < 751) {
                document.querySelector(".header_menus .black_menus").classList.remove("black_menus");
            } else {
                document.querySelector(".header_menus .black_menus").classList.add("black_menus");
            }
        }
    }
}