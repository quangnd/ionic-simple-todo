import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  task = '';
  tasks = [];
  constructor(public navCtrl: NavController) {

  }

  addTask() {
    this.tasks.push(this.task);
    this.task = '';
  }

  deleteTask(task) {
    let taskIndex = this.tasks.indexOf(task);
    this.tasks.splice(taskIndex, 1);
  }

  clearAll() {
    this.tasks = [];
  }
}
