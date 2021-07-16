console.log("Loading data to storage...");

function onSubmit() {
    var txt = "";
    if (document.getElementById("phone").validity.rangeOverflow) {
        txt = "Value too large";
    } else {
        txt = "Input OK";
    }
    document.getElementById("demo").innerHTML = txt;
    if (document.getElementById("phone").validity.rangeUnderflow) {
        txt = "Value too small";
    } else {
        txt = "Input OK";
    }
    document.getElementById("demo").innerHTML = txt;


    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("phone").value;
    const dob = document.getElementById("date").value;
    const user = new User(name, email, phone, date);
   
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem(user.email, user.toString());
        alert("Data saved successfully!");
    } else {
        alert("Data not saved!");
    }
}

function User(name, email,phone, date) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.date= date;
    this.toString = function() {
        return name + " " + email + " " + phone + " " + date;
    }
}
console.log("Data saved!");