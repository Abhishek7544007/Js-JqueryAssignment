function fun(){
    let qTeams = document.getElementById("data").value;
     qTeams = JSON.parse(qTeams);                                    
  let sortedqTeams = Object.keys(qTeams).sort(function order(key1 , key2){
                           if(qTeams[key1]< qTeams[key2]) return -1;
                           else if (qTeams[key1]> qTeams[key2]) return +1;
                           else return 0;
                       })
                       var list = document.createElement("ol");                   
                       for (let i in sortedqTeams) {
                           var elem = document.createElement("li");
                           elem.innerHTML = sortedqTeams[i];
                           list.appendChild(elem);
                       }
                    document.body.appendChild(list);   
            //  $('body').append(list);
             console.log(sortedqTeams);
    
    }
    
   
    