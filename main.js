fetch('https://study.todor.academy/', {
    mode: 'no-cors'
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  fetch('https://cors-anywhere.herokuapp.com/https://study.todor.academy/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));



  fetch('https://study.todor.academy/', {
    method: 'POST',
    headers: {
        'Content-Type' : 'aplication/json',
    }, 
    body: JSON.stringify({key: 'value'})
  })
  .then(response => {
    console.log('Status:', response.status);
    console.log('Headers:', response.headers);
    return response.json();
  })
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error:', error));



  fetch('https://study.todor.academy/', {
    method: 'PUT',
    headers: {
        'Content-Type' : 'aplication/json',
    }, 
    body: JSON.stringify({key: 'newValue'})
  })
  .then(response => {
    console.log('Status:', response.status);
    console.log('Headers:', response.headers);
    return response.json();
  })
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error:', error));



  fetch('https://study.todor.academy/', {
    method: 'DELETE',
  })
  .then(response => {
    console.log('Status:', response.status);
    console.log('Headers:', response.headers);
    return response.json();
  })
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error:', error));