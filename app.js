
const url= 'https://script.google.com/macros/s/AKfycby-6D0T1doa37XxoGE0jqBdjP1mWeGeqbyeZJQNiQoDqMeD1WPAfPWOYHdK39FoOXunLw/exec'

const form = document.forms['contact-form']
const loading = document.getElementById('loading');
// loading.style.display = 'block';

form.addEventListener('submit', e => {
  e.preventDefault()
  loading.style.display = 'block';
  fetch(url, { method: 'POST', body: new FormData(form)})
  .then(response =>  alert("Thank you! your form is submitted successfully." ))
  .then(() => { document.getElementById('myform').reset(); loading.style.display = 'none';})
  .catch(error => console.error('Error!', error.message))

})

        fetch(`${url}?header=score`)
            .then((response) => response.json())
            .then(({ data }) => {
                console.log(data);
                const score1 = data[data.length-1];
                populateDatalists("score", data)                
            })
            .catch((error) => console.error('!!!!!!!!', error));
        fetch(`${url}?header=number`)
            .then((response) => response.json())
            .then(({ data }) => {
                console.log(data);
              const score2 = data[data.length-1];
              console.log(score2);

                // populateDatalists("score", data)
            })
            .catch((error) => console.error('!!!!!!!!', error));
              const scoredef = score2 - score1;
              console.log(scoredef);
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
            // let result = '';
            // for (const item of arr ) {
            //     result += `<option value="${item}">`;
            // }

            document.getElementById(id).value = arr[arr.length-1];
        }


