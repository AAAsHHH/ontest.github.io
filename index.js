  function handleCredentialResponse(response) {
    const credential = response.credential;
    const parts = credential.split('.');
    const payload = JSON.parse(atob(parts[1]));
  
    const userId = payload.sub;
    const name = payload.name;
    const email = payload.email;
    const picture = payload.picture;
  
    console.log('ID:', userId);
    console.log('Full Name:', name);
    console.log('Email:', email);
    console.log('Profile Picture:', picture);
    $(("#name")).text(payload.name);
    $(("#email")).text(payload.email);
    $(("#image")).attr('src', payload.picture);
    $((".data")).css("display", "block");
    $(("#.g-signin2")).css("display", "block");
  }
 window.onload = function() {
    google.accounts.id.initialize({
        client_id: "542701689003-qmngcm1vdsq0vcgfeo0jme0r8iovbnmm.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
        document.getElementsByClassName("g_id_signin")[0],
        { theme: "outline", size: "large" }
    );
