                                                                                           // привязываемся к  svg файлу
var mapSvg = document.getElementById("map-svg"); 
var mapContDoc = mapSvg.contentDocument;
	
//создаем объект  ajax
var xmlhttp = new XMLHttpRequest(); //создаем объект  ajax


 // создаем  массив всех объектов для управления
  
var names ='NVD_9,NVD_10,NVD_11,NVD_12,A1_MD11,A1_MD12,A2_MD21,A2_MD22,MD11,MD12,MD21,MD22,ALARM_1,'+	
'MD11_KR,MD12_KR,MD21_KR,MD22_KR,KR1_KR2,KR1_1,KR1_2,KR2_1,'+ 	 		 
'N_1K,N_2K,N_3K,N_4K,N_5K,N_6K,PUMP_1K,PUMP_2K,PUMP_3K,PUMP_4K,PUMP_5K,PUMP_6K,PUMP_P11,PUMP_P12,PUMP_P21,PUMP_P22,PUMP_5K6K,'+
'N_1P,N_2P,N_3P,N_4P,N_5P,N_6P,N_7P,VAK_1,VAK_2,VAK_3,VAK_4,VAK_5,VAK_6,VAK_7,VAK_8,VAK_9,VAK_10,VAK_11,VAK_12,VAK_13,VAK_14,VAK_15,VAK_16,PUM_KO,PUM_KV,'+
'TVD_1,TVD_2,TVD_3,TVD_4,TVD_6,N_1F,N_5F,N_2F,N_3F,N_6F,N_4F,FIL_56,FIL_55,FIL_54,FIL_53,FIL_52,FIL_51,'+
'FIL_46,FIL_45,FIL_44,FIL_43,FIL_42,FIL_41,FIL_36,FIL_35,FIL_34,FIL_32,FIL_31,FIL_26,FIL_25,FIL_24,FIL_23,FIL_22,FIL_21,FIL_16,FIL_15,FIL_14,FIL_13,FIL_12,FIL_11,'+
'PUM_OF1,PUM_OF2,PUM_OF3,PUM_OF4,PUM_OF5,N_DR1,N_DR2,N_DR3,TC_1,TC_2,DV_1,RV_1,DW_1,PUM_OF6,PUM_OF7,PUM_OF8,PUM_OF9,PUM_OF10,'+
'PUM_CK23,PUM_CK22,PUM_CK22-1,PUM_CK2P,PUM_CK4P,PUM_PM-2,PUM_PU1-1,PUM_PU1-2,PUM_PU2-1,PUM_PU2-2,PUM_H1,PUM_H2,PUM_H3,PUM_H4,'+
'PUM_CK1P,PUM_CK3P,PUM_PM-1,PUM_CK18,PUM_CK17,PUM_CK21,PUM_CK21-1,PB_1,PB_2,SB_1,SB_2,SB_3,SB_4,SB_5,SB_6,SB_7,SB_8,N_AL1,N_AL2,N_AL3,N_AL4,P_11,P_12,P_21,P_22,PUM_OF2-OF10,PUM_OF8-CK-2P,PUM_OF1-OF6,PUM_OF4-OF6';
 				 
 				 
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
		var mapSvg = document.getElementById("map-svg"); 
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
	var mapSvg = document.getElementById("map-svg"); 
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
	
	xmlhttp.open("GET","answer_1.php?p=1&g=1&tmp=" + Date.now(),true);
   xmlhttp.send(); 
    

	setTimeout(get_inform, 1000); 
    setTimeout(ask); 
}
anim();			// управление объектами  
get_inform(); 	// запрос информации с сервера 


//*************** запускаем  функции на  выполнение *****************  


//*******************************************************************



