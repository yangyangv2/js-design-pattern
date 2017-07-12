
var task = {
    title : 'My Task',
    description : 'My Description'
};

Object.defineProperty(task, 'toString', {
    value: function(){
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});

/*
Object.defineProperty(task, 'toString', {
    enumerable: true,
});
*/

var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
    value: function(){
        return this.title + ' ' + 'urgent task';
    },
    writable: false,
    enumerable: false,
    configurable: false
});


//task.toString = 'hi';

console.log(Object.keys(task));
console.log(task.toString());
console.log(urgentTask.toString());
console.log(urgentTask);