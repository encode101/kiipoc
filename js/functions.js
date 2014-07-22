function performRegistration() {
    var username = $("#username").val();
    var password = $("#password").val();
    try {
        var user = KiiUser.userWithUsername(username, password);
        user.register({
            success: function (theAuthedUser) {
                alert("User registered: " + user);
                Kii.logger("User registered: " + user);
            },
            failure: function (theUser, anErrorString) {
                alert("Unable to register: " + anErrorString);
                Kii.logger("Unable to register user: " + anErrorString);
            }
        });
    } catch (e) {
        alert("Unable to register: " + e.message);
        Kii.logger("Unable to register user: " + e.message);
    }
}

function performLogin() {
    var username = $("#username").val();
    var password = $("#password").val();
    KiiUser.authenticate(username, password, {
        success: function (theAuthedUser) {
            getUser = KiiUser.getCurrentUser();
            console.log(getUser);
            $.mobile.changePage("#inner");
        },
        failure: function (theUser, anErrorString) {
            alert("Login Error: " + anErrorString);
            Kii.logger("Unable to register user: " + anErrorString);
        }
    });
}

$(document).ready(function () {
     Kii.initializeWithSite("0c05c8de", "1a9dad3ba2542a1b231ba930490ab911", KiiSite.US);
     $("#register-button").click(performRegistration);
     $("#login-button").click(performLogin);

 });