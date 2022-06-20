const nameInput = document.querySelector("#name");
    const password = document.querySelector("#password");
    const success = document.querySelector("#success");
    const errorNodes = document.querySelectorAll(".error");


    function validateForm(){

        clearMessages();
        let errorFlag = false;

        if(nameInput.value.length < 1){
            errorNodes[0].innerHTML = "Vui lòng nhập tên!";
            nameInput.classList.add("error-border");
            errorFlag = true;
        }
        if(password.value.length < 6){
            errorNodes[1].innerHTML = "Password phải có độ dài từ 6 ký tự trở lên!";
            message.classList.add("error-border");
            errorFlag = true;
        }

    
        else{
            alert("Đăng nhập thành công!!!!");
            window.location.assign('demo2_BT.html');
        }

    }

    function clearMessages(){
        for(let i = 0;i < errorNodes.length; i++)
        {
            errorNodes[i].innerHTML = "";
        }
        success.innerHTML = "";
        nameInput.classList.remove("error-border");
        password.classList.remove("error-border");
    }

    