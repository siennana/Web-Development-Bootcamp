
var todos = [0];
var input = prompt("What woud you like to do?");
while (input !== "quit") {
    if (input == "new") {
        var item = prompt("add item");
        todos.push(item);
    }
    else if ("list") {
        todos.forEach(function(todo, i) {
            console.log(i + ": " + todo);
        });
    }
    else if ("delete") {
        var item = prompt("item to delete?");
        todos.splice(index, 1);
    }
    input = prompt("What would you like to do?");
}
console.log("Bye bye");
