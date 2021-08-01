
function openPrompt() {
    var modal = document.getElementById("myModal");
    
    modal.style.display = "block";
    
}

function Cancel() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    
    var SMSDiv = document.getElementById("driverSMSCode");
    SMSDiv.style.display = "none";
    
    var smsInput = document.getElementById("SMS");
    smsInput.value = "";
    
}

function passCheck() {
    if (document.getElementById('pass').value == document.getElementById('vpass').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'matching';
        return true;
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'not matching';
        return false;
    }
}

function emailCheck() {
    if (document.getElementById('email').value == document.getElementById('vemail').value) {
        document.getElementById('emessage').style.color = 'green';
        document.getElementById('emessage').innerHTML = 'matching';
        return true;
    } else {
        document.getElementById('emessage').style.color = 'red';
        document.getElementById('emessage').innerHTML = 'not matching';
        return false;
    }
}

function FA2Check() {
    if (document.getElementById('2FA').value == document.getElementById('v2FA').value) {
        document.getElementById('2FAmessage').style.color = 'green';
        document.getElementById('2FAmessage').innerHTML = 'matching';
        return true;
    } else {
        document.getElementById('2FAmessage').style.color = 'red';
        document.getElementById('2FAmessage').innerHTML = 'not matching';
        return false;
    }
}



function addDriver() {
    
    var fName = document.getElementById('fName');
    var lName = document.getElementById('lName');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');
    var password = document.getElementById('pass');
    var FA2 = document.getElementById('2FA');
    
    var vType = document.getElementById('vType').value;
    var vBrand = document.getElementById('vBrand').value;
    var vModel = document.getElementById('vModel').value;
    var vPlate = document.getElementById('vPlate').value;
    
    var dob = document.getElementById('dob').value;
    
    var SMS = document.getElementById('SMS').value;
    
    if (vType != "Motorbike" && vType != "Car" && vType != "Mini-Bus") {
        
        alert("Invalid vehicle type");
        return;
        
    } else if (vPlate.length > 6 || vPlate.length <= 1) {
        
        alert("Invalid vehicle plate number");
        return;
        
    } else if (vBrand.length > 60 || vBrand.length <= 1) {
        
        alert("Invalid vehicle brand");
        return;
    } else if (vModel.length > 100 || vModel.length <=1) {
        
        alert("Invalid vehicle model");
        return;
    }
    
    let isValidDate = Date.parse(dob);

    if (isNaN(isValidDate)) {
        alert("Invalid date format");
        return;
    }
    
    var smsAuthorised = SMS;
    if (SMS.length < 6 || SMS.length > 12) {
        
        smsAuthorised = "none";
    } 
    
    
}

function checkInfo() {
    
    var check1 = passCheck();
    var check2 = emailCheck();
    var check3 = FA2Check();
    
    if (check1 === false) {
        
        alert("Driver passwords do not match");
        return;
        
    } else if (check2 === false) {
        
        alert("Driver email do not match");
        return;
        
    } else if (check3 === false) {
        alert("Driver two factor authentication code do not match");
        return;
    }
    
    
    
    
}
