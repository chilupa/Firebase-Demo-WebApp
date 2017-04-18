$(document).ready(function () {

    // Submit Button 
    $('#submitBtn').click(function () {

        var inputNameValue = $('#inputName').val();
        var inputEmailValue = $('#inputEmail').val();

        // Get a reference to the database service
        var databaseRef = firebase.database().ref('users/');

        // Setting the input field values into the database (HTML ---> Firebase)
        databaseRef.push().set({
            name: inputNameValue,
            email: inputEmailValue
        });

        // Empties the fields after pushing the data into firebase
        $('#inputName').val('');
        $('#inputEmail').val('');


        // Getting the values from Firebase to HTML page (Firebase ---> HTML)
        databaseRef
            .once('child_added', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {

                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();

                    console.log(childKey + " - " + childData); // Displays key with its value in your Browser Console

                    $("#usersData").append('<tr class="success"><td>' + childKey + '</td><td>' + childData + '</td></tr>');
                });
            });

    });


});
