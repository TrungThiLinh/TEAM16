const nameInput = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    const success = document.querySelector("#success");
    const errorNodes = document.querySelectorAll(".error");


    function validateForm(){

        clearMessages();
        let errorFlag = false;

        if(nameInput.value.length < 1){
            errorNodes[0].innerHTML = "Name cannot be blank";
            nameInput.classList.add("error-border");
            errorFlag = true;
        }
        if(!emailIsValid(email.value)){
            errorNodes[1].innerHTML = "Invalid email address";
            email.classList.add("error-border");
            errorFlag = true;
        }
        if(message.value.length < 1){
            errorNodes[2].innerHTML = "Please enter mesage";
            message.classList.add("error-border");
            errorFlag = true;
        }
        if(!errorFlag){
            success.innerHTML = "Bạn đã gửi phản hồi thành công!";
        }

    }

    function clearMessages(){
        for(let i = 0;i < errorNodes.length; i++)
        {
            errorNodes[i].innerHTML = "";
        }
        success.innerHTML = "";
        nameInput.classList.remove("error-border");
        email.classList.remove("error-border");
        message.classList.remove("error-border");
    }
    function emailIsValid(email){
        let pattern = /\S+@\S+\.\S+/;
        return pattern.test(email);
    }
    