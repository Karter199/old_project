                                                                                           // привязываемся к  svg файлу
var mapSvg = document.getElementById("map-rof"); 
var mapContDoc = mapSvg.contentDocument;
	
//создаем объект  ajax
var xmlhttp = new XMLHttpRequest(); //создаем объект  ajax


 // создаем  массив всех объектов для управления
  
 var names = 'VAL-O3,VAL-FeO3,VAL-O4,VAL-FeO4,PIT-8-1,PIT-9-1,PIT-10-1,PIT-11-1,PIT-12-1,PIT-13-1,PIT-14-1,PIT-15-1,PIT-16-1,PIT-17-1,PIT-18-1,PIT-8-2,PIT-9-2,PIT-10-2,PIT-11-2,PIT-12-2,PIT-13-2,PIT-14-2,PIT-15-2,PIT-16-2,PIT-17-2,PIT-18-2,'+
     'PIT-8-3,PIT-9-3,PIT-10-3,PIT-11-3,PIT-12-3,PIT-13-3,PIT-14-3,PIT-15-3,PIT-16-3,PIT-17-3,PIT-18-3,VAL-PIT-8,VAL-PIT-9,VAL-PIT-10,VAL-PIT-11,VAL-PIT-12,VAL-PIT-13,VAL-PIT-14,VAL-PIT-15,VAL-PIT-16,VAL-PIT-17,VAL-PIT-18,SM-81,SM-91,SM-101,SM-111,SM-121,SM-131,SM-141,SM-151,SM-161,SM-171,SM-181,SM-82,SM-92,SM-102,SM-112,SM-122,SM-132,SM-142,SM-152,SM-162,SM-172,SM-182,Z-12-1,Z-13-1,Z-14-1,Z-15-1,Z-14-2,Z-15-2,Z-16-1,Z-17-1,Z-16-2,Z-17-2,Z-18-1,Z-18-2,N_123,N_124,N_125,N_126,N_133,N_134,N_135,N_136,N_141,N_142,N_143,N_144,N_151,N_152,N_153,N_154,N_161,N_162,N_163,N_164,N_171,N_172,N_173,N_174,N_183,N_184,N_181,N_182,Z-10-1,Z-8-1,Z-11-1,Z-9-1,N_106,N_105,N_104,N_103,N_83,N_84,N_85,N_86,N_93,N_94,N_95,N_96,N_113,N_114,N_115,N_116,MD-161,MD-162,MD-181,ZD-161,ZD-162,ZD-181,MD-171,MD-172,MD-182,ZD-171,ZD-182,ZR-171,ZK-165,ZK-185,NZ_162,NZ_163,NZ_164,NZ_182,NZ_173,NZ_174,NZ_183,NZ_184,NR_171,NR_172,NK_165,NK_166,NK_185,NK_186,'+
 'MD-81,MD-82,MD-101,MD-102,MD-121,MD-122,MD-141,MD-142,ZD-81,ZD-82,ZD-101,ZD-102,ZD-121,ZD-122,ZD-141,ZD-142,ZD-143,ZD-144,MD-91,MD-92,MD-111,MD-112,MD-131,MD-132,MD-151,MD-152,ZD-91,ZD-111,ZD-112,ZD-131,ZD-132,ZD-151,ZR-81,ZR-101,ZR-121,ZR-171,ZK-81,ZK-101,ZK-121,ZD-92,NZ_81,NZ_82,NZ_101,NZ_102,NZ_121,NZ_122,NZ_142,NZ_143,NZ_144,NZ_91,NZ_92,NZ_97,NZ_111,NZ_112,NZ_117,NZ_131,NZ_132,NZ_137,NZ_153,NZ_154,NR_81,NR_82,NR_101,NR_102,NR_121,NR_122,NR_141,NR_142,NR_151,NR_152,NK_81,NK_82,NK_101,NK_102,NK_121,NK_122,NK_145,NK_146,ZK-145,ZR-141,ZR-151,NR_171,NR_172,MD-41,MD-42,MD-43,MD-44,MD-45,ZD-41,ZD-42,ZD-43,ZD-44,ZD-45,NZ_411,NZ_412,NZ_421,NZ_422,NZ_431,NZ_432,NZ_441,NZ_442,NZ_451,NZ_452,PD-1,P-731,P-732,P-733,P-734,P-735,P-736,P-737,P-738,ZD-71,ZR-72,ZR-73,ZD-73,NZ_71,NZ_72,NR_71,NR_72,NR_73,NZ_73,NZ_74,VAL-N21-Q,VAL-N21-R,VAL-N21-S,VAL-N22-Q,VAL-N22-R,VAL-N22-S,VAL-DN,VAL-UP,NVD_1,NVD_2,NVD_3,NVD_4,NVD_5,NVD_6,NVD_7,NVD_8,VAL-AB,VAL-VG,VAL-F2,VAL-F3,ALARM_1_1,TB4-11,TB4-12,TB4-13,TB4-14,TB4-15,TB4-16,TB4-21,TB4-22,TB4-23,TB4-24,TB4-25,TB4-26,TB4-31,TB4-32,TB4-33,TB4-34,TB4-35,TB4-36,TB4-41,TB4-42,TB4-43,TB4-44,TB4-45,TB4-46,VAL-Fe_mgt-8,VAL-Fe_mgt-9,VAL-Fe_mgt-10,VAL-Fe_mgt-11,VAL-Fe_mgt-12,VAL-Fe_mgt-13,PD-81,PD-811,PD-812,PD-813,PD-91,PD-911,PD-912,PD-913,PD-82-92,PD-921,PD-922,PD-923,PD-924,PD-925,PD-101,PD-111,PD-1011,PD-1012,PD-1013,PD-1111,PD-1112,PD-1113,PD-101-111,PD-1121,PD-1122,PD-1123,PD-1124,PD-1125,PD-121,PD-131,PD-1211,PD-1212,PD-1213,PD-1311,PD-1312,PD-1313,PD-121-131,PD-1321,PD-1322,PD-1323,PD-1324,PD-1325,D-841-844,D-831-834,D-1041-1044,D-1031-1034,D-1241-1244,D-1231-1234,D-841,D-842,D-843,D-844,D-831,D-832,D-833,D-834,D-1041,D-1042,D-1043,D-1044,D-1031,D-1032,D-1033,D-1034,D-1241,D-1242,D-1243,D-1244,D-1231,D-1232,D-1233,D-1234,MKS-81,MKS-82,MKS-92,MKS-91,MKS-101,MKS-102,MKS-112,MKS-111,MKS-121,MKS-122,MKS-132,MKS-131,KS-81,KS-91,KS-101,KS-111,KS-121,KS-131';
 				 
 				 
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
		var mapSvg = document.getElementById("map-rof"); 
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
	var mapSvg = document.getElementById("map-rof"); 
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
	
	xmlhttp.open("GET","answer_1.php?p=3&g=1&tmp=" + Date.now(),true);
   xmlhttp.send(); 
    

setTimeout(get_inform, 1000); 
    setTimeout(ask); 
}
anim();			// управление объектами  
get_inform(); 	// запрос информации с сервера 

//*************** запускаем  функции на  выполнение *****************  


//*******************************************************************



