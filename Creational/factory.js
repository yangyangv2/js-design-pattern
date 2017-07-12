// factory pattern

var repoFactory = function(){


    var repos = this;
    var repoList = [
        {name: 'task', source: './factories/taskRepo'},
        {name: 'user', source: './factories/userRepo'}
    ];

    repoList.forEach(function(repo){
        // require(repo.source) will be cached!
        repos[repo.name] = require(repo.source);
    });

    // naive factory
    /*
    this.getRepo = function(repoType){
        if (repoType === 'task'){
            if(this.taskRepo){
                console.log('retrieve from cache');
            } else {
                console.log('create new task repo');
                this.taskRepo = require('./factories/taskRepo');
            }
            return this.taskRepo;
        }

        if (repoType === 'user'){
            return require('./factories/userRepo');
        }
    }*/
};
module.exports = new repoFactory;