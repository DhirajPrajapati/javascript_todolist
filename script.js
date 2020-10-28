const addtodo = document.querySelector('.add ');
const list = document.querySelector('.todo');
const search = document.querySelector('.search input');

// ! Add Todos

const htmlTemplate = todo => {
    const html = `<li
    class="list-group-item d-flex justify-content-between align-item-center"
  >
    <span>${todo}</span>
    <i class="fas fa-trash delete"></i>
  </li>`;

  list.innerHTML += html;
}

addtodo.addEventListener('submit', (e) =>{
    e.preventDefault();
    const todo = addtodo.add.value.trim();
    addtodo.reset();
    if(todo.length){
        htmlTemplate(todo);
    }

})

// ! Delete Todos

list.addEventListener('click', e =>{
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})

// ! Search Todos

const filterTodos = (term)=>{
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach( todo => todo.classList.add('filtered'));
    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach( todo => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', ()=>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});
