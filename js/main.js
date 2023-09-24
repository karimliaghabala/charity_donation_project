fetch('https://localhost:7076/api/Sliders', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => response.json()).then(data=>{
        data.forEach(element => {
            console.log(element);
            var coru=document.querySelector(".carousel-inner")
            
            coru.innerHTML+=`

          <div class="carousel-item ${element.id==3?"active":null}">
            <img src="https://localhost:7076/image/slider/${element.İmageName}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>${element.title}</h5>
              <p>${element.title2}</p>
            </div>
          </div>


            `
        });
    })
