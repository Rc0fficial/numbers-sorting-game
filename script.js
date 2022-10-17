


// let dragStartIndex;

// addEventListener();


// function dragStart() {
//     // console.log('Event: ', 'dragstart');
//     dragStartIndex = +this.closest('container').getAttribute('draggable');
//     console.log(dragStartIndex);
// }
// function dragOver() {
//     // console.log('Event: ', 'dragover');
// }
// function dragDrop() {
//     // console.log('Event: ', 'drop');
// }
// function dragEnter() {
//     // console.log('Event: ', 'dragenter');
    
// }
// function dragLeave() {
//     // console.log('Event: ', 'dragleave');
// }

// function addEventListener() {
//     const draggables = document.querySelectorAll('.draggable');
//     const containers = document.querySelectorAll('.container');

//     draggables.forEach(draggable => {
//         draggable.addEventListener('dragstart', dragStart);
        
//     })
//     containers.forEach(draggable => {
//         draggable.addEventListener('dragover', dragOver);
//         draggable.addEventListener('drop', dragDrop);
//         draggable.addEventListener('dragenter', dragEnter);
//         draggable.addEventListener('dragleave', dragLeave);
//     })
// }


































const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', ()=> {
        draggable.classList.add('dragging')
    })
    draggable.addEventListener('dragend', ()=>{
        draggable.classList.remove('dragging')
    })
})
containers.forEach(container=>{ 
    container.addEventListener('dragover',e=>{
        e.preventDefault()
        const afterElement = getDragAfterElement(container, e.clientY)
        const draggable = document.querySelector('.dragging')
        if (afterElement == null) {
            container.appendChild(draggable)
        } else {
            container.insertBefore(draggable, afterElement)
        }
    })
})



const sortedOrder = ['One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
const check = sortedOrder[3]
const checkOrder = document.querySelectorAll('p') ;
if(check === checkOrder){
    alert('Game over!')
}



function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElements.reduce((closest, child)=>{
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child}
        } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY}).element
}
const checkSr = [{}]

// var btnsArr = Array.prototype.slice.call(checkOrder);

console.log(checkOrder);

// var arr = [];
// for(var i = 0; i < checkOrder.length; i++) arr.push(checkOrder[i]);
// var arr = Array.prototype.slice.call( checkOrder, 0 );
// const checkOrderArr = [...checkOrder.children].toString();
// console.log(btnsArr)
// console.log(check)
// console.log(arr)
