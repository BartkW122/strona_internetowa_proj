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

        let sub_log_btn=document.querySelector('.sub_zal_btn')
        let sub_rej_btn=document.querySelector('.sub_rej_btn')

      //rej
      let rej_name=document.querySelector('.rej_name')
      let rej_email=document.querySelector('.rej_email')
      let rej_pass=document.querySelector('.rej_pass')

      //console.log(rej_name)

      //log
      let log_name=document.querySelector('.log_name')
      let log_pass=document.querySelector('.log_pass')

      //console.log(log_name)

      //console.log(sub_log_btn)
      //console.log(form_log);

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

        sub_rej_btn.addEventListener("click",item=>{
          item.preventDefault()
          
          //walidacja danych
          if(rej_name.value==""||rej_email.value==""||rej_pass.value==""){
            alert('wypelnij formularz!!')
          }else{
            
            window.location.href = "index2.html";

          }

        })

        sub_log_btn.addEventListener("click",item=>{
          item.preventDefault()

           //walidacja danych
          if(log_name.value==""||log_pass.value==""){
            alert('wypelnij formularz!!')
          }else{
            
            window.location.href = "index2.html";

          }
        })
        
        // console.log(element)
        // alert('witaj!!')
    });

  })

