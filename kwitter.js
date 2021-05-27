function login()
{
    username = document.getElementById("username").value;
    console.log(username);
    localStorage.setItem("username",username);
}