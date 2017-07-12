// ES2015 class 

"use strict";

class Task {
    
    constructor(name){
        this.name = name;
        this.completed = false;
    };

    complete() {
        console.log('complete task:' + this.name);
        this.completed = true;   
    };

    save (){
        console.log('saving task: ' + this.name);         
    };
}

module.exports = Task;