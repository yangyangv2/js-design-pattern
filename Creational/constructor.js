// constructor pattern

var Task = function(name){
    this.name = name;
    this.completed = false;
    this.complete = function(){
        console.log('complete task:' + this.name);
        this.completed = true;
    }
    this.save = function(){
        console.log('saving task: ' + this.name);
    }
}
