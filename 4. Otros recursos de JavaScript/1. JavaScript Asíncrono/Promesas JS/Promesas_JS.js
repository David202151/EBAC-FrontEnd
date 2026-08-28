const partyStarted = (started) =>{
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if(started){
        resolve("La fiesta ha empezado"); 
      } else{
        reject("La fiesta NO ha empezado"); 
      }
    }, 2000); 
  }); 
}; 

const onTheParty = (juanCarlos) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(juanCarlos){
        resolve("cervezas"); 
      }else{
        reject("no hay cervezas"); 
      }
    }, 2000); 
  }); 
}; 


onTheParty(false).then((value) => {
    console.log("Si hay " + value); 
    return partyStarted(true)
  }).then((value) =>{
  console.log(value); 
}).catch((error) => {
  console.error(error); 
}); 