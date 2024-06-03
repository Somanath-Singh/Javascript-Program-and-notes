 var info=[
            {
                name: "Somanath Singh",
                email: "somanathsingh531@gmail.com",
                password: "Singh@123"
            },
            {
                name: "",
                email: "",
                password: ""
            }
        ]

    function registerForm(){

        alert(1)

        let name=document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        alert(2)
        //set the values to the array object

        info[1].name=name;
        info[1].email=email;
        info[1].password=password;

        alert(3)
        //success

        for(var i of info){
            alert(`${i.name}<br>${i.email}<br>${i.password}`)
        }

        location.href="login.html";

        alert(4)
    }



    function loginForm(){

        let email=document.getElementById("email").value;
        let password=document.getElementById("password").value;
        let msg=document.getElementById("message");

        alert(password)

        //check the data is present or not

        for(var data of info){
            if(data.email===email && data.password===password){
                location.href="profile.html";
                break;
            }
            else{
                msg.innerText="Invalid Details";
                msg.style.color="red";
            }
        }

    }


    function loadProfile(){

        let profile=document.getElementById("profile");

        // profile.innerHTML=`<h2 class="text-danger">${info[1].name} </h2>
        //                         <br>
        //                     <h2 class="text-danger">${info[1].email} </h2>
        //                         <br>
        //                     <h2 class="text-danger">${info[1].password} </h2>`;

        profile.innerHTML="value";

    }
