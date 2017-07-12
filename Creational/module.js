// module pattern

var repo = function(){

    var db = {};


    var get = function(id){
        return {
            name: 'new task from db'
        }
    };
    
    var save = function(task){
        console.log('Task ' + task.name  + ' into database');
    };

    return {
        get: get,
        save: save
    }
}

module.exports = repo();