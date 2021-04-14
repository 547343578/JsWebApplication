import AddTodo from './components/add-todo.js';

export default class View{
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        this.addTodoForm = new AddTodo();

        this.addTodoForm.onClick((title, description) => this.addTodo(title, description))
    }

    setModel(model){
        this.model = model;
    }

    render(){
        const todos = this.model.getTodos();
        todos.forEach((todo) => this.createRow(todo));
    }

    addTodo(title, description){
        const todo = this.model.addTodo(title, description);
        this.createRow(todo);
    }

    toggleCompleted(id){
        this.model.toggleCompleted(id);
    }

    removeTodo(id){
        this.model.removeTodo(id);
        document.getElementById(id).remove();
    }

    createRow(todo){
        const row = table.insertRow();
        row.setAttribute('id', todo.id);             // anadir un atributo al row que es el id
        row.innerHTML = `                         
            <td>${todo.title}</td>
            <td>${todo.description}</td>
            <td class="text-center">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;                                         // cadena `${title.value}` = cadena title.value

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.onclick = () => this.toggleCompleted(todo.id);
        row.children[2].appendChild(checkbox);   

        const removeBtn = document.createElement('button');         // crear un nuevo elemento boton
        removeBtn.classList.add('btn', 'btn-danger','mb-1','ml-1');   // anadir las propiedades
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        removeBtn.onclick = () =>  this.removeTodo(todo.id);  
        
        row.children[3].appendChild(removeBtn);  // para anadir el boton al row
    }
}