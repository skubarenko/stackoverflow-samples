const loadModule = moduleIndex => {
    import(`./modules/module${moduleIndex}`)
        .then(({ default: moduleFunction }) => moduleFunction())
        .catch(error => console.error(error));
};

window.addEventListener('load', () => {
    const buttons = document.querySelectorAll('.module-button');
    buttons.forEach((button, index) => {
        button.addEventListener('click', loadModule.bind(window, index + 1));
    });
});