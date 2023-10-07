const ThemeHandler = {
    setTheme: function(themeName)
    {
        localStorage.setItem("theme", themeName);
        document.documentElement.className = themeName;
    },

    toggleTheme: function(toggleIsOnLoad)
    {
        const currentTheme = localStorage.getItem("theme");

        if (toggleIsOnLoad)
        {
            this.setTheme(currentTheme)
        }
        else if (currentTheme === "theme-dark")
        {
            this.setTheme("theme-light");
        }
        else
        {
            this.setTheme("theme-dark");
        }
    }
}