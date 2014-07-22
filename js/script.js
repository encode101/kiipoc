// Perform Registration

function performRegistration() {

    // get the user credentials from the UI
    var username = $("#username").val();
    var password = $("#password").val();

    // create the user
    try {
        var user = KiiUser.userWithUsername(username, password);

        // perform the asynchronous registration, with callbacks defined
        user.register({

            // callback for successful registration
            success: function (theAuthedUser) {
                alert("User registered: " + user);
                Kii.logger("User registered: " + user);
            },

            // callback for failed registration
            failure: function (theUser, anErrorString) {

                // tell the user
                alert("Unable to register: " + anErrorString);

                // tell the console
                Kii.logger("Unable to register user: " + anErrorString);
            }
        });

    } catch (e) {

        // hide the loading animation
        

        // tell the user
        alert("Unable to register: " + e.message);

        // tell the console
        Kii.logger("Unable to register user: " + e.message);
    }

}

// Perform Login

// the user clicked the 'sign in' button
function performLogin() {

    var username = $("#username").val();
    var password = $("#password").val();

    // perform the asynchronous authentication, with callbacks defined
    KiiUser.authenticate(username, password, {

        // callback for successful authentication
        success: function (theAuthedUser) {
            window.location.href = "inner.html";
        },

        // callback for failed registration
        failure: function (theUser, anErrorString) {

            alert("Nope!: " + anErrorString);

            // tell the console
            Kii.logger("Unable to register user: " + anErrorString);
        }
    });

}


$(document).ready(function () {

     // initialize the Kii SDK!
     Kii.initializeWithSite("0c05c8de", "1a9dad3ba2542a1b231ba930490ab911", KiiSite.US);
     // bind clicks to our login/sign up methods
     $("#register-button").click(performRegistration);
     $("#login-button").click(performLogin);

 });