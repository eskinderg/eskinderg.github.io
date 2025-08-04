if (isBrowser()) {
    // debugger;
    setTheme(getTheme(), getIsDarkMode());

    // requestAnimationFrame(() => {
    //     // debugger;
    //     const loadingBar = document.getElementById('loading-bar');
    //     if (loadingBar) {
    //         setTimeout(() => loadingBar.remove(), 500);
    //     }
    // });
}

function getIsDarkMode() {
    if (getThemeMode() === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else if (getThemeMode() === 'dark') {
        return true;
    } else {
        return false;
    }
}

function setTheme(theme, isDarkMode) {
    document.documentElement.className = theme;

    const root = document.querySelector(':root');
    if (root) {
        root.classList.toggle('dark', isDarkMode);
    }
}

function getTheme() {
    return localStorage.getItem('theme') ?? 'indigo';
}

function getThemeMode() {
    return localStorage.getItem('thememode') ?? 'system';
}

function isBrowser() {
    return typeof window !== 'undefined';
}
