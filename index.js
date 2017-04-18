$(document).ready(function () {

    // Submit Button 
    $('#submitBtn').click(function () {

        var inputNameValue = $('#inputName').val();
        var inputEmailValue = $('#inputEmail').val();

        // Get a reference to the database service
        var databaseRef = firebase.database().ref('users/');
        
        // Setting the input field values into the database
        databaseRef.push().set({
            name: inputNameValue,
            email: inputEmailValue
        });

        // Empties the fields after pushing the data into firebase
        $('#inputName').val('');
        $('#inputEmail').val('');
    });

});
