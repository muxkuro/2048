import Field from './components/field.js';


document.addEventListener('DOMContentLoaded', () => {
    const field = new Field([]);
    field.createEmptyField(4, 4);
    field.render();
});
