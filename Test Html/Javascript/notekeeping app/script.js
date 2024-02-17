const addButton = document.querySelector('#add');
const noteContainer = document.querySelector('.note-container');

// Storing data in local storage
const updateLSdata = () => {
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];
    textAreaData.forEach((note) => {
        return notes.push(note.value);
    });
    localStorage.setItem('notes', JSON.stringify(notes));
};

const addNewNote = (text = "") => {
    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `
    <div class="operation">
        <button class="edit"> <i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete"> <i class="fa-solid fa-trash"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"} "></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

    note.insertAdjacentHTML('afterbegin', htmlData);

    const editButton = note.querySelector('.edit');
    const deleteButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textarea = note.querySelector('textarea');

    deleteButton.addEventListener('click', () => {
        note.remove();
        updateLSdata();
    });

    textarea.value = text;
    mainDiv.innerHTML = text;

    editButton.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    });

    textarea.addEventListener('input', (event) => {
        const value = event.target.value;
        mainDiv.innerHTML = value;
        updateLSdata(); // Update local storage as you type
    });

    noteContainer.appendChild(note);
    updateLSdata(); // Update local storage after adding a new note
};

// Getting data from local storage
const notes = JSON.parse(localStorage.getItem('notes'));
if (notes) {
    notes.forEach((note) => addNewNote(note));
}

addButton.addEventListener('click', () => addNewNote());
