// arrays
var dayz=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var males=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var females=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua","Ama"]


var click=function(){
    let dat= document.getElementById('dat').value;
    let gen= document.getElementById('gen').value;

    let dayoftheweek = new Date(dat).getDay()


  if(gen=="Female"){
    document.getElementById("Akan").textContent=females[dayoftheweek];
  }
  else{
    document.getElementById("Akan").textContent=males[dayoftheweek];
  }
    
}

// event listener

document.getElementById("button").addEventListener("click",function(event){
    event.preventDefault();
    click()
})

