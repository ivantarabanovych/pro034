fetch('https://study.todor.academy/profile/settings')
  .then(response => {
    console.log(response.status); 
    return response.text();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  fetch('https://study.todor.academy/nonexistent-page')
  .then(response => {
    console.log(response.status); 
  })
  .catch(error => console.error('Error:', error));

  fetch ('https://study.todor.academy/api/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({invalid: "data"})
  })
  .then(response => {
    console.log(response.status);
  })
.catch(error => console.error('ERROR:', error));


// 200 OK Запит успішно оброблено, ресурс знайдено GET https://study.todor.academy/profile/settings
// 404 not found Запитаний ресурс не знайдено на сервері GET https://study.todor.academy/nonexistent-page
// 500 Internal Server Error Виникла помилка на сервері. POST https://study.todor.academy/api/data з некоректними даними