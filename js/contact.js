var btn=document.querySelector(".contact-form");
btn.onclick=(e)=>{
    e.preventDefault();
    var fullN=document.getElementById("FullName-Contact").value;
    var mail=document.getElementById("Email-Contact").value;
    var subj=document.getElementById("Subject-Contact").value;
    var mass=document.getElementById("Massege-Contact").value;

    const data = {
        id:0,
        fullName: fullN,
        email: mail,
        subject: subj,
        message: mass
      };
      
      fetch('https://localhost:7076/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => {
            if(response.status==204){
                document.getElementById("contact-form").innerHTML=`
                <h4>Send Your Message...</h4>
                `
            };
        })
        // .then(res => console.log(res))
        // .catch(error => console.log('Error:', error));
    }