'use strict';
// Task Model

// class Task {
//   constructor(description, priority, list){
//     this.description = description
//     this.priority = priority
//     this.list = list
//   }
// }
function Task(description,priority, list){
  this.description = description
  this.priority = priority
  this.list = list
  list.tasks.push(this)
  this.id = list.tasks.length
}
