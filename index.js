alert("javascript is embedded and running")
//Nan =>returns true if the argument is not a number

function sanitise (x){
    if (isNaN(x)){
        return Nan
    }
    return x
}
console.log(sanitise('1'))
console.log(sanitise('NotANumber'))

//Accessing global functions

function greeting (){
    console.log("hi")
}
window.greeting ()
//or
greeting()

//Infinity => is a js number which can be derived by dividing a negative by 0

function checkNumber (smallnumber) {
    if (smallnumber===Number.NEGATIVE_INFINITY){
        return 'process number as a infinity'
    }
    return smallnumber
    
}

//code that adds element dynamically
function addNode () { 
    var newP = document. createElement("p"); 
    var textNode = document.createTextNode(" This is a new text node"); 
    newP.appendChild(textNode); document.getElementById("firstP").appendChild(newP);
}

// TImers 
//can be used to delay the execution of functions 
setTimeout(function () {
    console.log("hello after 4 seconds")
}, 4000
)

//LInked List using Constructor
class Node {
    constructor(value, next=null){
        this.value=value;
        this.next=next;

    }
}
//let newNode = new Node('xyz')

//create the linked list 

class List {
    constructor(){
        this.head=new Node ('head');
    }
    find(value){
        let tempNode = this.head;

        while (tempNode.value !== value){
            tempNode = tempNode.next;
        }
        return tempNode
    }
    insert(where, value){
        let whereToInsert = this.find(where);
        letnewNode = new Node(value, whereToInsert)
    }
}