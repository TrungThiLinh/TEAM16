const username = "admin"
    const password = "12345"

    var inputs = document.querySelectorAll("input")
    var submit = document.querySelector("button")
    var formGroup = document.querySelectorAll(".form-group")
    var invalid_error = document.querySelector(".invalid_error")

    submit.addEventListener("click", function(e){
        e.preventDefault()

        if(inputs[0].value !== username || inputs[1].value !== password){
            if(inputs[0].value !== username){
                formGroup[0].style.borderBottomColor = "red"
            }
            else{
                formGroup[0].style.borderBottomColor = "#68e0cf"
            }

            if(inputs[1].value !== password){
                formGroup[1].style.borderBottomColor = "red"
            }
            else{
                formGroup[1].style.borderBottomColor = "#68e0cf"
            }

            invalid_error.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i> Incorrect username or password. Double check your login information."
        }
        else{
            window.location.assign('admin.html');
        }
    })