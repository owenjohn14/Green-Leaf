// ----- Variables and data types -----
let companyName = "GreenLeaf Enterprises";   // string
let yearFounded = 2010;                      // number (placeholder, replace with the real year)
let tipIndex = 0;

let activities = [
    "Monthly community clean-up days",
    "School gardening programme",
    "Annual green innovation fair"
];

let tips = [
    "Switch off lights when you leave a room.",
    "Reuse and recycle paper wherever possible.",
    "Fix leaking taps to save water."
];

// ----- Function: accepts an argument and returns a result -----
function calculateTrees(numberOfStudents) {
    return numberOfStudents * 2;   // each student plants 2 trees
}

// ----- Function: processes an array and returns a result -----
function countItems(list) {
    return list.length;
}

// ----- Change the heading when the page loads (DOM manipulation) -----
document.addEventListener("DOMContentLoaded", function () {
    let heading = document.getElementById("mainHeading");
    heading.textContent = "Welcome to " + companyName;

    // Populate the activity list from the array
    let activityList = document.getElementById("activityList");
    activities.forEach(function (activity) {
        let li = document.createElement("li");
        li.textContent = activity;

        // Mouse events: change the element's style on hover
        li.addEventListener("mouseover", function () {
            li.style.backgroundColor = "#c8e6c9";
        });
        li.addEventListener("mouseout", function () {
            li.style.backgroundColor = "";
        });

        activityList.appendChild(li);
    });
});

// ----- Button click: change the text of an element -----
document.getElementById("tipBtn").addEventListener("click", function () {
    tipIndex = (tipIndex + 1) % tips.length;
    document.getElementById("infoText").textContent = tips[tipIndex];
});

// ----- Button click: use a function and display its result -----
document.getElementById("showActivitiesBtn").addEventListener("click", function () {
    let total = countItems(activities);
    document.getElementById("activityCount").textContent = "We currently have " + total + " activities.";
});

// ----- Button click: pass input to a function and use the returned value -----
document.getElementById("calcBtn").addEventListener("click", function () {
    let students = Number(document.getElementById("studentCount").value);
    let resultEl = document.getElementById("treeResult");

    if (isNaN(students) || students <= 0) {
        resultEl.textContent = "Please enter a valid number of students.";
    } else {
        let trees = calculateTrees(students);
        resultEl.textContent = "Your group can plant " + trees + " trees.";
    }
});