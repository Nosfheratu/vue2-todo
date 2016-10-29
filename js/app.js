new Vue({
  el: "#todo",
  data: {
    newTask: "",
    tasks: []
  },
  computed: {
    areAllSelected: function() {
      return this.tasks.every(function(task) {
        return task.checked;
      }) && this.tasks.length > 0;
    }
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
    },
    clearTasks: function() {
      this.tasks = [];
    },
    selectAll: function() {
      var targetValue = this.areAllSelected ? false : true;

      for (var i = 0; i < this.tasks.length; i++) {
        this.tasks[i].checked = targetValue;
      }
    }
  }
});
