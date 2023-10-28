let arrTasks = JSON.parse(tasks);

console.log(arrTasks);

arrTasks.forEach(task => {
    const importanceClass = getImportanceClass(task.importance);
    document.getElementById("result").innerHTML += `
    <div class="card">
        <img src="${task.image}" class="card-img-top" alt="${task.taskName}">
        <div class="card-body">
            <h3 class="card-title">${task.taskName}</h3>
            <p class="card-text">Age: ${task.description}</p>
            <button class="btn btn-light btnImportance"><span class="glyphicon glyphicon-alert"></span> Priority level: <span class="${importanceClass} importance"> ${task.importance}</span></button>
        </div>
    </div>
    `;
});

// the background color of the priority level number will change depending on the displayed number
function getImportanceClass(importance) {
    if (importance >= 0 && importance <= 1) {
        return "bg-success";
    }
    else if (importance >= 2 && importance <= 3) {
        return "bg-warning";
    }
    else if (importance >= 4 && importance <= 5) {
        return "bg-danger";
    }
    else{
        return '';  // default case, no class
    }
};

// set the importance up if importanceBtn is clicked
let btns = document.querySelectorAll(".btnImportance");
btns.forEach((btn, i) => {
    btn.addEventListener("click", function () {
        importanceUp(i)
    });
});
function importanceUp(i) {
    const importanceElements = document.querySelectorAll(".importance");
    if (arrTasks[i].importance < 5) {
        arrTasks[i].importance++;
        importanceElements[i].innerText = arrTasks[i].importance;
        // Update the Bootstrap class color for .importance element
        const importanceClass = getImportanceClass(arrTasks[i].importance);
        importanceElements[i].classList.remove('bg-success', 'bg-warning', 'bg-danger');
        importanceElements[i].classList.add(importanceClass);
    } else {
        alert("This Task allready reached the highest importance of 5.");
    }
};

// sort the tasks by importance
document.getElementById("sort-button").addEventListener("click", function () {
    // here i say make a new array with the elements from arrTasks but sorted
    let newVar = arrTasks.sort((a, b) => a.importance - b.importance);
    // empty the #result HTML element
    document.getElementById("result").innerHTML = "";
    // now put the elements from the array into the #result 
    newVar.forEach(task => {
        const importanceClass = getImportanceClass(task.importance);
        document.getElementById("result").innerHTML += `
        <div class="card">
            <img src="${task.image}" class="card-img-top" alt="${task.taskName}">
            <div class="card-body">
                <h3 class="card-title">${task.taskName}</h3>
                <p class="card-text">Age: ${task.description}</p>
                <button class="btn btn-light btnImportance"><span class="glyphicon glyphicon-alert"></span> Priority level: <span class="${importanceClass} importance"> ${task.importance}</span></button>
            </div>
        </div>
        `;
    });
});


