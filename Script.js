// ----------------------
// Register User
// ----------------------
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const user = {
            name,
            email,
            password
        };

        localStorage.setItem("user", JSON.stringify(user));

        alert("Registration Successful!");
        window.location.href = "index.html";
    });
}

// ----------------------
// Login User
// ----------------------
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const user = JSON.parse(localStorage.getItem("user"));

        if (
            user &&
            user.email === email &&
            user.password === password
        ) {
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid Email or Password");
        }
    });
}

// ----------------------
// Add Task
// ----------------------
const taskForm = document.getElementById("taskForm");

if (taskForm) {

    displayTasks();

    taskForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const title = document.getElementById("taskTitle").value;
        const description = document.getElementById("taskDescription").value;
        const date = document.getElementById("taskDate").value;

        const task = {
            title,
            description,
            date,
            status: "Pending"
        };

        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        tasks.push(task);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        taskForm.reset();

        displayTasks();
    });

}

// ----------------------
// Display Tasks
// ----------------------
function displayTasks() {

    const taskList = document.getElementById("taskList");

    if (!taskList) return;

    taskList.innerHTML = "";

    let tasks = JSON.parse(localStorage
