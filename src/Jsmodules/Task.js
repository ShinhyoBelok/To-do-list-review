export default class Task {
  constructor(description, listOfTask) {
    this.description = description;
    this.completed = false;
    this.index = listOfTask.length;
  }
}