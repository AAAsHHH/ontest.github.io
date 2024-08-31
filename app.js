
const url= 'https://script.google.com/macros/s/AKfycbyXpDk0M2XhIAXmoz0ODEZtzM9QVaOUkfOJSCzpA1hw_jZTkdHsBv1-JJw5qkW2oJy5rQ/exec'

const form = document.forms['contact-form']
const loading = document.getElementById('loading');
// loading.style.display = 'block';

form.addEventListener('submit', e => {
  e.preventDefault()
  loading.style.display = 'block';
  fetch(url, { method: 'POST', body: new FormData(form)})
  .then(response =>  alert("Thank you! your form is submitted successfully." ))
  .then(() => {         fetch(`${url}?header=score`)
            .then((response) => response.json())
            .then(({ data }) => {
                console.log(data);
                populateDatalists("score", data)
            })
            .catch((error) => console.error('!!!!!!!!', error));})
  .catch(error => console.error('Error!', error.message))

})



        // fetch(`${url}?header=number`)
        //     .then((response) => response.json())
        //     .then(({ data }) => {
        //         console.log(data);
        //         populateDatalists("numbers", data)
        //     })
        //     .catch((error) => console.error('!!!!!!!!', error));
        
        // fetch(`${url}?header=email`)
        //     .then((response) => response.json())
        //     .then(({ data }) => {
        //         console.log(data);
        //         populateDatalists("emails", data)
        //     })
        //     .catch((error) => console.error('!!!!!!!!', error));

        // function to add options to datalists
        const populateDatalists = (id, arr) => {
            let result = '';
            // for (const item of arr ) {
            //     result += `<option value="${item}">`;
            // }
            document.getElementById(id).value = result[result.length - 1];
        }


