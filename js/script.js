// Perform Registration

function performRegistration() {

    // show a loading animationa
    $.mobile.showPageLoadingMsg();

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

                // show the list of objects
                $.mobile.changePage("list.html");

                // hide the loading animation
                $.mobile.hidePageLoadingMsg();

                // tell the console
                Kii.logger("User registered: " + user);
            },

            // callback for failed registration
            failure: function (theUser, anErrorString) {

                // hide the loading animation
                $.mobile.hidePageLoadingMsg();

                // tell the user
                alert("Unable to register: " + anErrorString);

                // tell the console
                Kii.logger("Unable to register user: " + anErrorString);
            }
        });

    } catch (e) {

        // hide the loading animation
        $.mobile.hidePageLoadingMsg();

        // tell the user
        alert("Unable to register: " + e.message);

        // tell the console
        Kii.logger("Unable to register user: " + e.message);
    }

}

// Perform Login

// the user clicked the 'sign in' button
function performLogin() {

    // show a loading animation
    // $.mobile.showPageLoadingMsg();

    // get the user credentials from the UI
    var username = $("#username").val();
    var password = $("#password").val();

    // perform the asynchronous authentication, with callbacks defined
    KiiUser.authenticate(username, password, {

        // callback for successful authentication
        success: function (theAuthedUser) {

            // show the list of objects
            $.mobile.changePage("list.html");

            // hide the loading animation
            $.mobile.hidePageLoadingMsg();

            // tell the console
            Kii.logger("User authenticated: " + user);
        },

        // callback for failed registration
        failure: function (theUser, anErrorString) {

            // hide the loading animation
            $.mobile.hidePageLoadingMsg();

            // tell the user
            alert("Unable to register: " + anErrorString);

            // tell the console
            Kii.logger("Unable to register user: " + anErrorString);
        }
    });

}