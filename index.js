/** 
// import { Request } from "express";
// import { event } from "events";
// import { axios } from "axios";



// submitButton.addEventListener('click', (e)=>{     
//     e.preventDefault();
   *



const BaseURL = "http://localhost:5566/";
const submitButton = document.getElementById("submitButton");
const form = document.getElementById("signupform");
// *
async function post() {
    
 fetch(BaseURL,
    {
        method:'POST',
        body : JSON.stringify({
        parentName :  document.getElementById('parentName').value,
parentNumber :  document.getElementById('parentNumber').value,
parentEmail :  document.getElementById('parentEmail').value,
parentPassword :  document.getElementById('parentPassword').value,
        }),

        // body : JSON.stringify(insertObject);

        headers :{
            'Content-type': 'application/json; charset=UTF-8'
        },
    }
    )
.then(response => response.json())
.then(json => console.log(json));
}
//  /*
form.addEventListener('submit',async(event)=>{     
    event.preventDefault();
    event.stopPropagation();
    let parentName =  document.getElementById('parentName').value;
    let parentNumber =  document.getElementById('parentNumber').value;
    let parentEmail =  document.getElementById('parentEmail').value;
    let parentPassword =  document.getElementById('parentPassword').value;
    var insertObject = {
        parentName :  parentName,
        parentNumber :  parentNumber,
        parentEmail :  parentEmail,
        parentPassword :  parentPassword,
    };

    // console.log(insertObject.parentName); // acknowledgement
    // if(insertObject = {}){return}
    //  let res = "Hello API"; 

    // await fetch("BaseURL"+"/user", {
    //     method: 'POST',
    //     header: {
    //         'Content-type': 'application/json',
    //         // 'Content-type': 'x-www-form-urlencoded',
    //     },
    //     body : JSON.stringify({ insertObject      }),
    // }   );
});
    // res();
    
 
    // .then( response => response.json())
    // .then( data => console.log(data) );
    // console.log(res);


    // axios.post(BaseURL+'user', object/*{
    //     parentName :  parentName,
    //     parentNumber :  parentNumber,
    //     parentEmail :  parentEmail,
    //     parentPassword :  parentPassword,
    //   })*/
    //   .then(function (response) {
    //     console.log(response);
    //     alert(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     alert(`Error occured ${error}`);

    //   }); //   axios.post()
    //   return false;
    // });
 
    
    
    /*
    fetch("http://localhost:"+port+"/public/dashboard" )
    .then((response) =>{
         console.log(response)})
    .then((data) =>{
         console.log(data)
    })
    .catch((err) => {
        console.log("Something went wrong !! "+(err))
    });

    submitButton.setAttribute('href', data);

    /** 
     * 
    




//code ended


// setTimeout(() => {
//     console.log(`Hello world`);
//     console.log(parentNumber);
    
// }, 10000);

// app.listen(5400);
// index.js D:\Websites\CareTracker\index.js */