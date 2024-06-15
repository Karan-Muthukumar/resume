let myresume = {
  BASICS: [
    "Name - Karan M",
    "Email - karan.blackking@gmail.com",
    "Phone - 8248555835",
    "Degree - BCA",
  ],
  LOCATION: [
    "Address - 49/6a village 4st sathumanagar ",
    "PostalCode - 600019",
    "City - Chennai",
    "State - Tamilnadu",
    "Country - India",
  ],

  WORK: [
    "Company - National Comapany Law Tribunal",
    "Position - Office Assitant",
    "StartDate - 03-07-2023",
    "EndDate -Till Date",
  ],
  EDUCATION: [
    "Institution - Vel Tech Ranga Sangu Arts Collage",
    "Department - BCA",
    "StudyType - fulltime",
    "Batch start year - 2018",
    "Batch end year - 2020",
    "Cgpa - 7.5",
  ],
  SKILLS: ["Name - html,css", "level - beginer"],
  LANGUAGE: ["Language - Tamil,Enlish"],
  INTEREST: ["Name - Gym,Reading books,Music"],
};

//---------------------------------------------------------------------------------------------------------------


// for loop

console.log("");
console.log("             <--------For Loop-------->  ");

var keys=Object.keys(myresume)
for(var i=0;i<=keys.length;i++){
    var a=keys[i]
    if(Array.isArray(myresume[a])){
        console.log("");
         console.log(`              ${a}               `);
         console.log("");
        for(var j=0;j<=myresume[a].length-1;j++){
            console.log(myresume
                [a][j]);
                ;
        }
    }
    else{

    }

}

// // For in

 console.log("");
 console.log("               <--------For in Loop-------->");
 for (const key in myresume) {

     if(Array.isArray(myresume[key])){
  console.log("");
      
         console.log(`              ${key}               `);
console.log("");
        
         for(var i=0;i<=myresume[key].length-1;i++){
          
            console.log(myresume[key][i]);
            
         }

                  }
                  else{
                     console.log(key + myresume[key]);
                  }
             }

//For of
console.log("");

console.log("             <--------For of Loop-------->");
for (const [key] of Object.entries(myresume)) {

    if(Array.isArray(myresume[key])){
      console.log("");
      
        console.log(`              ${key}               `);
        console.log("");
        for(var i=0;i<=myresume[key].length-1;i++){

            console.log(myresume[key][i]);

        }
        console.log("");
                 }
                 else{
                    console.log(key + myresume[key]);
                 }
             }
              //For Each
              console.log("");
console.log("          <--------For Each-------->");

Object.entries(myresume).forEach(([key, values]) => {
  if (Array.isArray(values)) {
    console.log("");
    console.log(`              ${key}               `);
console.log("");
    values.forEach((ele) => {
      console.log(ele);
    });
  } else {
    console.log(key + values);
  }
});
