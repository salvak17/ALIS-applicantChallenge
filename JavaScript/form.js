
// shows data on window once submit button is clicked
function submitForm() {
    DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=700,height=500')
    // contact info
    message = "salutation: " + document.form1.salutation.value + "<br>";
    message += "firstName: " + document.form1.fName.value + "<br>";
    message += "lastName: " + document.form1.lName.value + "<br>";
    message += "address: " + document.form1.address.value + "<br>";
    message += "city: " + document.form1.city.value + "<br>";
    message += "state: " + document.form1.state.value + "<br>";
    message += "zipCode: " + document.form1.zip.value + "<br>";
    message += "phoneNumber: " + document.form1.phone.value + "<br>";
    message += "email: " + document.form1.email.value + "<br>";
    // incident info
    message += "who: " + document.form1.who.value + "<br>";
    message += "what: " + document.form1.what.value + "<br>";
    message += "where: " + document.form1.incidentCity.value + ", " + document.form1.incidentState.value + "<br>";
    message += "when: " + document.form1.incidentDate.value + "<br>";
    // additional questions
        //witness info
    message += "witness: " + document.form1.witnessFirstName.value + " " + document.form1.witnessLastName.value + "<br>";
    message += "witnessPhoneNumber: " + document.form1.witnessPhoneNumber.value + "<br>";
        //attorney info
    message += "attorney: " + document.form1.attorneyFullName.value + "<br>";
    message += "attorneyPracticeName: " + document.form1.attorneyPracticeName.value + "<br>";
    message += "attorneyWebsite: " + document.form1.attorneyWebsite.value + "<br>";
    DispWin.document.write(message);
    
}

// open and close witness and attorney fields
function openWitness() {
    document.getElementById("witnessInfo").style.display = 'block';
}

function closeWitness() {
    document.getElementById("witnessInfo").style.display = 'none';
}

function openAttorney() {
    document.getElementById("attorneyInfo").style.display = 'block';
}

function closeAttorney() {
    document.getElementById("attorneyInfo").style.display = 'none';
}