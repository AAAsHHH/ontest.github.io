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
