var list = document.getElementById("list")


function addTodo(){
    var todo_item = document.getElementById("todo-item")

        //  create li tag with text node 

    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)
    localStorage.setItem('data',todo_item.value)

    //  create delete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)

    // create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT")
    editBtn.setAttribute("class","btn")
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editText) 


    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)

    todo_item.value = ""

    console.log(li)
}

function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value",val)
    
    e.parentNode.firstChild.nodeValue = editValue
}

function deleteAll(){
    list.innerHTML = ""
}















































// function del(){
//     var del = document.getElementById('ul-list')
//     del.innerHTML = ''
// }

// function addTodo(){
//     var inp = document.getElementById('inp')
//     var list = document.createElement('li')
//     var listText = document.createTextNode(inp.value)
//     var ulGet = document.getElementById('ul-list')
//     list.appendChild(listText)
//     ulGet.appendChild(list)
//     inp.value = ''
//     var deleteBtn = document.createElement('button')
//     var deleteBtnText = document.createTextNode('Delete')
//     deleteBtn.appendChild(deleteBtnText)
//     list.appendChild(deleteBtn)
//     deleteBtn.setAttribute('onclick','del(this)')
//     var editBtn = document.createElement('button')
//     var editBtnText = document.createTextNode('Update')
//     editBtn.appendChild(editBtnText)
//     list.appendChild(editBtn)
//     editBtn.setAttribute('onclick','upt(this)')
//     deleteBtn.setAttribute('class','btn btn-danger')
//     editBtn.setAttribute('class','btn btn-info')
//    // console.log(inp.value)
//     // var para = document.getElementById('para')
//     // para.innerHTML = inp.value
// }

// function upt(e){
//     var editprompt = prompt('Enter New Value',e.parentNode.firstChild.nodeValue)
//     e.parentNode.firstChild.nodeValue = editprompt
//     // console.log(e.parentNode.firstChild.nodeValue)
// }




// function del(a){
//     a.parentNode.remove()
// }