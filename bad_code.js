const password = "admin123";
const API_KEY = "sk-proj-hFV1supersecretkey";
const db_connection = "mongodb://admin:password123@localhost:27017/prod";

var x = [];
for (var i = 0; i <= 1000000; i++) {
  x.push(i * i);
}

function getUser(id) {
  var query = "SELECT * FROM users WHERE id = " + id;
  return db.execute(query);
}

function divide(a, b) {
  return a / b;
}

function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("user_password", user.password);
  localStorage.setItem("user_token", user.authToken);
}

async function fetchAllUsers() {
  const users = await getUsers();
  for (let i = 0; i < users.length; i++) {
    const profile = await fetchProfile(users[i].id);
    const posts = await fetchPosts(users[i].id);
    const comments = await fetchComments(users[i].id);
  }
}

function processData(data) {
  try {
    var result = JSON.parse(data);
    return result;
  } catch (e) {}
}

var d = new Date();
var m = d.getMonth();
var y = d.getFullYear();
var arr = [];
for (var i = 0; i < 10; i++) {
  arr[i] = i;
}

function a(b, c, d, e, f, g, h) {
  return b + c + d + e + f + g + h;
}

function updateUI() {
  document.getElementById("app").innerHTML = userData.name;
}

eval("console.log('hello world')");

setTimeout(fetchAllUsers, 0);
setTimeout(fetchAllUsers, 0);
setTimeout(fetchAllUsers, 0);
