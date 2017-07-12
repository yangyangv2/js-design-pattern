
//var Task = require('./prototype');
//var Task = require('./constructor');
var Task = require('./class');
var Repo = require('./module');

var repoFactory = require('./factory');



var task1 = new Task('create a demo for constructors');
var task2 = new Task('create a demo for modules');
var task3 = new Task('create a demo for singletons');
var task4 = new Task('create a demo for prototypes');

var task5 = new Task(Repo.get('1').name);

task1.complete();
task2.save();
task3.save();
task4.save();

task5.save();

repoFactory.task.get();
repoFactory.task.get();
repoFactory.task.get();
repoFactory.task.get();
repoFactory.task.get();
repoFactory.user.get();



