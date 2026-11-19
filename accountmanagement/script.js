function createAccount() {
    let name = document.getElementById("name").value;
    let account = document.getElementById("account").value;
    let balance = document.getElementById("balance").value;

    if (name === "" || account === "" || balance === "") {
        alert("Please enter all details");
    } else {
        document.getElementById("result").innerHTML =
            "Account Created Successfully!<br>" +
            "Name: " + name + "<br>" +
            "Account Number: " + account + "<br>" +
            "Balance: " + balance;
    }
}