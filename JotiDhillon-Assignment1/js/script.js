//Joti Dhillon

//First function fetches data out of the randomuser api
function fetchData() {
fetch("https://randomuser.me/api/?results=53").then((apidata)=>{
    
    return apidata.json();
}).then((newData)=>{
    
    let data ="";
  
    newData.results.map((values)=>{
       
        data+=`<ul class="contact-list">
        <li class="contact-item cf">
        <div class="contact-details">
              <img class="avatar" src="${values.picture.thumbnail}">
              <h3>${values.name.first} ${values.name.last}</h3>
              <span class="email">${values.email}</span>
          </div>
          <div class="joined-details">
                 <span class="date">${values.registered.date}</span>
         </div>
         </li>
         </ul>`
         
});
            //shows the contact details for the student
            document.getElementById("contact").innerHTML=data;
            totalCount(data);
            Pages(data);
    
}).catch((err)=>{
    console.log(err);
});

}


/*
function that should be counting the number for the count per page (10) which would
calculate the numOfPages with Math ceiling to get the data.length divided by numCountPerPage
slice should be slicing the data into 10 piece increments 
*/
function Pages(data){
    let numCountPerPage = 10;
    let currentPage = 1;
    let newData1 = data.slice(0,10);
    let numOfPages = Math.ceil(newData1.length / numCountPerPage);
    for(let i=1; i<=numOfPages; i++)  {
        let startingPoint = (currentPage - 1)*numCountPerPage;
        let endingPoint = startingPoint + numCountPerPage;
       
    }
}

//function shows the amount of students in total
function totalCount(data) {
    let students = 53;
    document.getElementById("number").innerHTML= "<b>Total: </b>" + students;
}
fetchData();
