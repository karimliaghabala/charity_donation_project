fetch('https://localhost:7076/api/Sliders', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => {
        console.log(response);})
