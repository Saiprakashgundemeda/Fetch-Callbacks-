## GET METHOD:

let options ={
    method:"GET"
}

fetch("https://gorest.co.in/public-api/users",options)
.then(function(response){
   return response.json();
})
.then(function(jsonData){
    console.log(jsonData);
});

## POST METHOD:

let data={
    name:"sai",
    gender:"male",
    email:"saigundemeda@gmail.com",
    status:"Active"
}


let options ={
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        Authorization:"Bearer 35faab55d5f90f1d88774401867c3e1d788c50701a6ae188686ec3d7e19affd1"
    },
    body:JSON.stringify(data)
}

fetch("https://gorest.co.in/public-api/users",options)
.then(function(response){
   return response.json();
})
.then(function(jsonData){
    console.log(jsonData);
});

## PUT METHOD:

let data={
    name:"Sai Prakash Gundemeda"
}


let options ={
    method:"PUT",
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        Authorization:"Bearer 35faab55d5f90f1d88774401867c3e1d788c50701a6ae188686ec3d7e19affd1"
    },
    body:JSON.stringify(data)
}

fetch("https://gorest.co.in/public-api/users/5824512",options)
.then(function(response){
   return response.json();
})
.then(function(jsonData){
    console.log(jsonData);
});


## DELETE METHOD:

let options ={
    method:"DELETE",
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        Authorization:"Bearer 35faab55d5f90f1d88774401867c3e1d788c50701a6ae188686ec3d7e19affd1"
    }
}

fetch("https://gorest.co.in/public-api/users/5824512",options)
.then(function(response){
   return response.json();
})
.then(function(jsonData){
    console.log(jsonData);
});
