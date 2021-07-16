console.log("app.js loaded ....");
function onSubmit(){
    
    const userName=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const phone=document.getElementById("phone").value;
    const dob=document.getElementById("date").value;
    
    const user=new User(userName,email,phone,date);
    if(typeof(Storage)!=="undefined"){     
        localStorage.setItem(user.email,user.toString());
        alert("user data saved successfully!")
    }else{
        alert("Storage not supported ! ");
    }
    console.log("name "+Name);
    console.log("email "+email);
    console.log("phone"+phone)
    console.log("date "+date);
    // return false;
}

// 1. creating Javascript object: overaloaded constructor for an object
function User(name,email,phone,date){
    this.name=name;
    this.email=email;
    this.phone=phone;
    this.date=date;
    this.toString=function (){
       return userName+" "+email+" "+phone+" "+date;
    }
}
console.log("Data saved!");