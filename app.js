function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    // console.log('ID: ' + profile.getId());
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); 
    $(("#name")).text(profile.getName());
    $(("#email")).text(profile.getEmail());
    $(("#image")).attr('src', profile.getImageUrl());
    $((".data")).css("display","block");
    $(("#.g-signin2")).css("display","none");
    
  }
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert("U have been success signooout");
      $(("#.g-signin2")).css("display","none");
      $((".data")).css("display","block");
    });
  }
