                                                                                           // привязываемся к  svg файлу
var mapSvg = document.getElementById("df-svg"); 
var mapContDoc = mapSvg.contentDocument;
	
//создаем объект  ajax
var xmlhttp = new XMLHttpRequest(); //создаем объект  ajax


 // создаем  массив всех объектов для управления
  
 var names = 'KKD-11,KKD-11-1,KKD-1,KKD-1-1,KKD-11-2,KKD-11-3,KRD-12,KRD-12-1,KRD-13,KRD-13-1,KKD-1-2,KKD-1-3,KRD-2,KRD-3,'+
			 'KRD-2-1,KRD-3-1,PIT_17,PIT_16,PIT_15,PIT_14,PIT_4,PIT_5,PIT_6,PIT_7,K-2-1,K-1-1,K-2-2,K-1-2,M-2-1,M-1-1,M-2-2,M-1-2,PIT_KSD3,PIT_KSD4,PIT_KSD5,PIT_KSD6,PIT_KSD12,PIT_KSD11,PIT_KSD10,PIT_KSD9,PIT_KSD4-1,PIT_KSD4-2,PIT_KSD4-3,PIT_KSD5-1,PIT_KSD5-2,PIT_KSD5-3,PIT_KSD11-1,PIT_KSD11-2,PIT_KSD11-3,PIT_KSD10-1,PIT_KSD10-2,PIT_KSD10-3,'+
     'GR-3-1,GR-6-1,GR-12-1,GR-9-1,GR-3-2,GR-4-2,GR-5-2,GR-6-2,GR-12-2,GR-11-2,GR-10-2,GR-9-2,KSD-3,KSD-4,KSD-5,KSD-6,KSD-12,KSD-11,KSD-10,KSD-9,KMD-3,KMD-4,KMD-5,KMD-6,KMD-12,KMD-11,KMD-10,KMD-9,'+
     'M-15,M-16,1P-1,1P-2,1P-12,1P-11,1P-21,1P-22,1P-2-1,1P-2-2,KS-1-1,KS-2-1,KS-1-2,KS-2-2,KC-4,KC-5,KC-6,KC-7,KC-8,KC-9,KC-10,KC-11,KC-12,KC-13,CP-2-1,CP-3-1,CP-4-1,CP-5-1,CP-6-1,CP-7-1,CP-8-1,CP-9-1,CP-10-1,CP-11-1,'+
     'O-11,O-12,O-9,O-10,O-4,O-3,CX-1,CX-2,CX-3,CX-3A,GR-CX-1,SN-1-2,SN-1-1,GR-CX-2,GR-CX,KC-16,KC-17,KC-18,KC-19,KC-20,KC-21,KC-22,CP-2-2,CP-3-2,CP-4-2,CP-5-2,CP-6-2,CP-7-2,CP-8-2,CP-9-2,CP-10-2,CP-11-2,VAL-1,TB1-11,TB1-12,TB1-13,TB1-14,TB1-15,TB1-21,TB1-22,TB1-23,TB1-24,TB1-25,TB2-11,TB2-12,TB2-13,TB2-14,TB2-15,TB2-21,TB2-22,TB2-23,TB2-24,TB2-25,TB3-11,TB3-12,TB3-21,TB3-22,TB3-31,TB3-32,TB3-41,TB3-42,TB3-51,TB3-52,VAL-2,VAL-3,VAL-4,VAL-5';
 				 
 				 
 var arr = names.split(',');
 
 // общие настройки страницы
 var fps  = 4;  	// кол-во обновлений на экране  в сек
 var ask  = 5000; // период  запроса информации с сервера  в мсек
 
 
 // вспомогательные переменные для различных функций
 var blnker =  0 ; 	// для функции  "блинк"
 var ask_nmb = 0 ; 	// пор.номер  запроса к серверу
 
 
 
//----------------------- управления svg объектами------------------------------ 
 
function anim() {
    setTimeout(function() {
    	
		// привязываемся к  svg файлу
		var mapSvg = document.getElementById("df-svg"); 
		var mapContDoc = mapSvg.contentDocument;    	
    	
    	// переменные для данной функции
    	var obj ;
    	var element ;
    	var look ;
    	    	       
      //визуализация работы скрипта -> объект mr 
    	if(blnker==0){blnker=1;}
      else{blnker=0;}
      if(element = mapContDoc.getElementById('mr')){
      	if (blnker==0) {	look  = 'fill:black;stroke:black;stroke-width:0.3;';}
        	if (blnker==1) {	look  = 'fill:gray;stroke:black;stroke-width:0.3;';}
        	element.setAttribute('style', look) ;
      }
        
      // обработка объектов из массива   arr
      for (var i = 0; i < arr.length; i++) {
			obj   = arr[i] ;
        	if(element = mapContDoc.getElementById(obj)){
        		if(element.getAttribute('type') == "1"){ func_type1(element); }
        		if(element.getAttribute('type') == "2"){ func_type2(element); }
        		if(element.getAttribute('type') == "3"){ func_type3(element); }
        		if(element.getAttribute('type') == "4"){ func_type4(element); }
        		if(element.getAttribute('type') == "10"){func_type10(element);}
  			}
		}
        
        requestAnimationFrame(anim);

    }, 1000 / fps);
}


// тип 1: изменение цвета заливки и линий, толщины линий
function func_type1(element) {
	
	
	
	// формируем нужные переменные
	var look = "x";
	 	
	if(element.getAttribute('color')){     
   	if(element.getAttribute('blnk')!="none"){
      	if(blnker==0){ look  = element.getAttribute('color');}
         if(blnker==1){ look  = element.getAttribute('blnk');}
      }else{
      	look  = element.getAttribute('color');
      }
      element.setAttribute('style', look);
	}
}

// тип 4: изменение цвета и содержания текстового поля
function func_type4(element) {
	
	if(element.getAttribute('font')){     
   	if(element.getAttribute('txt')){
      	element.textContent = element.getAttribute('txt') ;
      	element.setAttribute('style', element.getAttribute('font'));
      }
	} 	
	
}

//======================== получение информации от сервера ================================

function get_inform() {
	console.log(' '); 
	console.log('------------------ ask server ' + ask_nmb + ' -------------------------'); 
	
	
	// привязываемся к  svg файлу
	var mapSvg = document.getElementById("df-svg"); 
	var mapContDoc = mapSvg.contentDocument;
	
	// переменные для данной функции
	var ask_obj ;	// перечень запрашиваемых объектов с параметрами  в формате json
	var inform  ; 	// полученная информация в формате json
	var nmbr;		// кол-во  объектов json
	var element;
	var i ;
	var x ;
	
	// обрабатываем  ответ от сервера на свой запрос	
 	xmlhttp.onreadystatechange=function(){
 	  if (this.readyState == 4 && this.status == 200) {

		inform = JSON.parse(xmlhttp.responseText);
   	nmbr = inform.length;
   	console.log('answer = ' + xmlhttp.responseText); 		
   	console.log('you have nmbr = ' + nmbr); 		
   	
   	for (i = 0; i < nmbr; i++) {
   		
   		if(element = mapContDoc.getElementById(inform[i].obj)){ x = 'obj is on page' ;}
   		else {x = 'err - there is not on page' ;}
   		if (inform[i].obj=="end") { x = 'end of answer' ;}
   		console.log('obj = ' + inform[i].obj + '  /  type = ' + inform[i].type + '  /  ' + x);
   		
   		if(x == "obj is on page"){
   			
   			// ТИП 1. изменение цвета, толщ.линий
   			if (inform[i].type == "1") {   
   				element.setAttribute('type', inform[i].type);
   				element.setAttribute('color', inform[i].color);
               element.setAttribute('blnk',  inform[i].blnk);
            } 
            
            
         	
         	// ТИП 4. изменение цвета, содержание
   			if (inform[i].type == "4") {   
   				element.setAttribute('type', inform[i].type);
   				element.setAttribute('font', inform[i].font);
              	element.setAttribute('txt',  inform[i].txt);
            }
         
      	                			
      	}
   	}
   	
   	}
	}
	
	// отсылаем  запрос к серверу 
	// p - страница
	// g - группа на странице
	// tmp -> Date.now()  нужен для  "отключения" кеширования ответа
	
	xmlhttp.open("GET","answer_1.php?p=2&g=1&tmp=" + Date.now(),true);
   xmlhttp.send(); 

setTimeout(get_inform, 1000); 
setTimeout(ask);
}
anim();			// управление объектами  
get_inform(); 	// запрос информации с сервера 


//*******************************************************************

    


