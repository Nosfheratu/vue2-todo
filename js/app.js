new Vue({
  el: "#todo",
  data: {
    newTask: "",
    tasks: []
  },
  methods: {
    addTask: function() {
      var task = this.newTask.trim();
      if (task) {
        this.tasks.push({
          text: task,
          checked: false
        });

        this.newTask = "";
      }
    },
    removeTask: function(task) {
      var index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1)
    }
  }
});
