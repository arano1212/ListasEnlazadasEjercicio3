// los ejercicios estan comentados 


//Implemente un procedimiento que inserte un dato de modo similar 
//al insertar, al final de la lista. Pero ahora,
// no se debe permitir insertar datos repetidos, 
//si un dato ya está almacenado entonces la lista no cambia.
//Ejercicio 1 

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;

        }
        let current = this.head;

        while (current.next) {
            if (current.data === data) {
                return

            }

            current = current.next;
        }
        if(current.data ===data){
            return;
        }
        current.next = newNode;
    }


    seeDisplay(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;

        }
    }
}


const Linked = new LinkedList();

Linked.add(200);
Linked.add(300);
Linked.add(700);
Linked.add(1000);
Linked.add(200);
Linked.add(500);
Linked.add(200);
Linked.add(300);
Linked.add(700);
Linked.add(1);
Linked.add(200);
Linked.add(500);
Linked.add(200);
Linked.add(300);
Linked.add(5);
Linked.add(1);
Linked.add(200);
Linked.add(5);


Linked.seeDisplay();


//Escribir un programa para formar una lista que realice las siguientes tareas:
//Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
//Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
//Mostrar todos los Nodos que superen un valor determinado.
//ejercicio2

/*class Node {
    constructor(data) {
        this.data = data;
        this.next = null;

    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addData(data) {
        const newNode = new Node(data);


        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    displayNodes(value) {
        let current = this.head;
        while (current) {
            if (current.data > value) {
                console.log(current.data);
            }
            current = current.next;

        }
    }
}

function getIntoData(min, max){
    return Math.floor(Math.random() * (max - min +1))+ min;

}

const list1 = new LinkedList();
const list2 = new LinkedList();

for (let i = 0; i < 10; i++) {
    list1.addData(getIntoData(1, 100));
    list2.addData(getIntoData(1, 1000));
    
}


console.log(" lista 1")
list1.displayNodes(0);

console.log("lista 2")
list2.displayNodes(0);*/

