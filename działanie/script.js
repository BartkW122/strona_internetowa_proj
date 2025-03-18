fetch("dane.json")
  .then(response => response.json()) 
  .then(data => {

    let users= data.users;
    users.forEach(element => {

        console.log(element)

        let form_log=document.querySelector('.log');
        let form_rej=document.querySelector('.rej');

        let rej_btn=document.querySelector('.rejestrowanie');
        let log_btn=document.querySelector('.logowanie');

      console.log(form_log);
        rej_btn.addEventListener("click",()=>{
          console.log('rej');

          if(form_log.style.visibility='visible'){
            form_log.style.visibility='hidden'
          }
          if(form_rej.style.visibility='hidden'){
            form_rej.style.visibility='visible'
          }

        })
        log_btn.addEventListener("click",()=>{
          console.log('log');

          if(form_rej.style.visibility='visible'){
            form_rej.style.visibility='hidden'
          }
          if(form_log.style.visibility='hidden'){
            form_log.style.visibility='visible'
          }
          
        })
    });

  })

