jQuery(document).ready(function() {
    
    // Initializes theme.
    ThemeHandler.toggleTheme(true);

    // Initializes AOS library.
    AOS.init({ duration: 600 });

    // WorkHandler.loadWork();
    // BlogHandler.loadBlogs();

    window.addEventListener("resize", onresize);
});