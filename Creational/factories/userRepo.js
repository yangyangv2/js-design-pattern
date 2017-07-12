var UserRepo = function(){

    this.get = function(){
        console.log('I am user repo');
    }

}

module.exports = new UserRepo;