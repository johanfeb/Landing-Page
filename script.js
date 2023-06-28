// Tambahkan kode JavaScript kalian di file ini

function handleGetFormData () {
    let name = document.getElementById('name').value;
    let city = document.getElementById('city').value;
    let email = document.getElementById('email').value;
    let zipCode = document.getElementById('zip-code').value;
    let status = document.getElementById('status').checked;
    
    var obj = {
        name: name,
        city: city,
        email: email,
        zipCode: zipCode,
        status: status
    };
    return obj;
}

function isNumber (string) {
    if(isNaN(string)){
        return false;
    } else {
        return true;
    }
}

function checkboxIsChecked() {
  const checkbox = document.getElementById('status');
  if (checkbox.checked) {
    return true;
  } else {
    return false;
  }
}

function validateFormData (obj){
    if((obj.name != null) && (!isNaN(obj.zipCode)) && (checkboxIsChecked())){
        return true;
    } else {
        return false;
    }
}

document.getElementById('submit-form').addEventListener('click',submit)
function submit () {
    
        let obj = handleGetFormData();
        if(validateFormData(obj)){
            document.getElementById("warning").innerHTML = ''; 
            event.preventDefault();
        } else {
            document.getElementById("warning").innerHTML = 'Periksa form anda sekali lagi'; 
            event.preventDefault();
    }
}