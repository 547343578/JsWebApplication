document.addEventListener('DOMContentLoaded', function(){     // no ejecutar javascript hasta que se haya ejecutado todo html
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const btn = document.getElementById('add');
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');
    let id  = 1;

    function removeTodo(id){
        document.getElementById(id).remove();
    }

    function addTodo(){
        if(title.value === '' || description.value === ''){            // si esta vacio, saldra alertas
            alert.classList.remove('d-none');
            alert.innerText = 'Title and description are required';
            return;
        }

        alert.classList.add('d-none');            // anadir el d-none 
        const row = table.insertRow();
        row.setAttribute('id', id++);             // anadir un atributo al row que es el id
        row.innerHTML = `                         
            <td>${title.value}</td>
            <td>${description.value}</td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;                                         // cadena `${title.value}` = cadena title.value

        const removeBtn = document.createElement('button');         // crear un nuevo elemento boton
        removeBtn.classList.add('btn', 'btn-danger','mb-1','ml-1');   // anadir las propiedades
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        removeBtn.onclick = function(e){                  // darle una funcion 
            removeTodo(row.getAttribute('id'));  
        }
        row.children[3].appendChild(removeBtn);  // para anadir el boton al row
    }
    
    btn.onclick = addTodo;
});

