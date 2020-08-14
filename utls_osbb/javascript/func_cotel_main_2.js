//создаем объект  ajax

var xmlhttp = new XMLHttpRequest();


function get_inform() {
    


// обрабатываем  ответ от сервера на свой запрос	
xmlhttp.onreadystatechange=function(){
    if (this.readyState == 4 && this.status == 200) {
        
    var inform = JSON.parse(xmlhttp.responseText);    
        
        
        
   look11 = inform['look11'];
   look10 = inform['look10'];
   look21 = inform['look21'];
   look20 = inform['look20'];
   
   
//console.log('>get_information-----'+inform['look33']) ;

        
    }
}
    
    
    
    
xmlhttp.open("GET","database/answer_1.php?tmp=" + Date.now(),true);
xmlhttp.send();    
    
    
    
    
    


    

setTimeout(get_inform, 1000); 

}

get_inform();













