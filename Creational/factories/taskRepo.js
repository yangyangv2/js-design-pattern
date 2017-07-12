// singleton
var TaskRepo = function(){

    var counter = 0;

    this.get =function(){
        counter ++;
        console.log('I am task repo, called ' + counter + ' times');
    }
}

//  this is effectively create a singleton! see: factory.js line 13
module.exports = new TaskRepo