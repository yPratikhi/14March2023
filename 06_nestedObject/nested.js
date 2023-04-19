
  
  function extractNameAndStreet(sampleObject){
    const {name,age,address:{street,city,state} } = sampleObject;
    return {name,age,street,city,state}
  }

  const person ={
    name:"Mithun",
    age:21,
    address:{
        street:"B8,Block B,Industrial Area.",
        city:"Sector 62,Noida",
        state:"Utter Pradesh",
    },
  };
 
  console.log(extractNameAndStreet(person));
