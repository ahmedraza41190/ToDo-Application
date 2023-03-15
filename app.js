function del(){
    var del = document.getElementById('ul-list')
    del.innerHTML = ''
}

function addTodo(){
    var inp = document.getElementById('inp')
    var list = document.createElement('li')
    var listText = document.createTextNode(inp.value)
    var ulGet = document.getElementById('ul-list')
    list.appendChild(listText)
    ulGet.appendChild(list)
    inp.value = ''
    var deleteBtn = document.createElement('button')
    var deleteBtnText = document.createTextNode('Delete')
    deleteBtn.appendChild(deleteBtnText)
    list.appendChild(deleteBtn)
    deleteBtn.setAttribute('onclick','del(this)')
    var editBtn = document.createElement('button')
    var editBtnText = document.createTextNode('Update')
    editBtn.appendChild(editBtnText)
    list.appendChild(editBtn)
    editBtn.setAttribute('onclick','upt(this)')
    deleteBtn.setAttribute('class','btn btn-danger')
    editBtn.setAttribute('class','btn btn-info')
   // console.log(inp.value)
    // var para = document.getElementById('para')
    // para.innerHTML = inp.value
}

function upt(e){
    var editprompt = prompt('Enter New Value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = editprompt
    // console.log(e.parentNode.firstChild.nodeValue)
}




// function del(a){
//     a.parentNode.remove()
// }