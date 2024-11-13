window.addEventListener("scroll", function(){
    const header = documet.querySelector("header");
    header.classLister.toggle("sticky", window.scrollY > 0);
});

const menuBtn = document.querySelector(".nav-menu-btn");
const clseBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItem = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

menuBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active"); 
    });
});
