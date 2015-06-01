$(document).ready(function() {

  var allTasks = []

  $("form#add-task").submit(function(event) {
    event.preventDefault();
    var taskName = $("input#new-task").val();
    var task = { name: taskName, isComplete: false};
    allTasks.push(task);
    drawTasks();
  });

  $("button#mark-complete").click(function() {

  });

  var drawTasks = function() {
    $("ul").empty();
    for(i = 0; i < allTasks.length; i++) {
      if(allTasks[i].isComplete) {
        $("ul#completed-tasks").append("<li>" + allTasks[i].name + ' <input id="' + allTasks[i].name + '" type="checkbox">' + "</li>");
      } else {
        $("ul#pending-tasks").append("<li>" + allTasks[i].name + ' <input id="' + allTasks[i].name + '" type="checkbox">' + "</li>");
      }
    }
  };

});
