

var blnk=0;


//         ----------------1СО------------

// зеленая лампа led_1CO_pum_1
var look11 = "fill:#00fc1d;fill-opacity:1";        
var look10 = "fill:rgb(21, 34, 23);fill-opacity:1";

// красная лампа led_1CO_al_1
var look21 = "fill:#fc0027;fill-opacity:1";        
var look20 = "fill:rgb(83, 22, 36);fill-opacity:1";








function anim() {
    
    setTimeout(function(){
        

        var mapSvg = document.getElementById("fl-svg");
        var mapContDoc = mapSvg.contentDocument;
        var element;
        
        
        if(mapContDoc != null){
        
        if(blnk==0){
            blnk=1;
        }else{
            blnk=0;
        }
        
        // led_1CO_pum_1
        if(element = mapContDoc.getElementById('led_1CO_pum_1')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_1CO_pum_1');
        }
            
             // led_1CO_pum_2
        if(element = mapContDoc.getElementById('led_1CO_pum_2')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_1CO_pum_2');
        }
            
             // led_1CO_pum_3
        if(element = mapContDoc.getElementById('led_1CO_pum_3')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_1CO_pum_3');
        }
            
             // led_1CO_pum_4
        if(element = mapContDoc.getElementById('led_1CO_pum_4')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_1CO_pum_4');
        }
            
             // led_1CO_pum_5
        if(element = mapContDoc.getElementById('led_1CO_pum_5')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_1CO_pum_5');
        }
            
             // led_1CO_pum_6
        if(element = mapContDoc.getElementById('led_1CO_pum_6')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_1CO_pum_6');
        }
            
             // led_1CO_pum_7
        if(element = mapContDoc.getElementById('led_1CO_pum_7')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_1CO_pum_7');
        }
            
             // led_1CO_pum_8
        if(element = mapContDoc.getElementById('led_1CO_pum_8')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_1CO_pum_8');
        }
            
             // led_1CO_pum_9
        if(element = mapContDoc.getElementById('led_1CO_pum_9')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_1CO_pum_9');
        }
            
             // led_1CO_pum_10
        if(element = mapContDoc.getElementById('led_1CO_pum_10')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_1CO_pum_10');
        }
            
             // led_1CO_pum_11
        if(element = mapContDoc.getElementById('led_1CO_pum_11')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_1CO_pum_11');
        }
            
             // led_1CO_al_1
        if(element = mapContDoc.getElementById('led_1CO_al_1')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_1CO_al_1');
        }
            
             // led_1CO_al_2
        if(element = mapContDoc.getElementById('led_1CO_al_2')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_1CO_al_2');
        }
            
             // led_1CO_al_3
        if(element = mapContDoc.getElementById('led_1CO_al_3')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_1CO_al_3');
        }
            
             // led_1CO_al_4
        if(element = mapContDoc.getElementById('led_1CO_al_4')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_1CO_al_4');
        }
            
             // led_1CO_al_5
        if(element = mapContDoc.getElementById('led_1CO_al_5')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_1CO_al_5');
        }
            
             // led_1CO_al_6
        if(element = mapContDoc.getElementById('led_1CO_al_6')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_1CO_al_6');
        }
            
             // led_1CO_al_7
        if(element = mapContDoc.getElementById('led_1CO_al_7')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_1CO_al_7');
        }
            
             // led_1CO_al_8
        if(element = mapContDoc.getElementById('led_1CO_al_8')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_1CO_al_8');
        }
            
            
            
            
//            -----------------------2CO---------------------
            
            
            
               // led_2CO_pum_1
        if(element = mapContDoc.getElementById('led_2CO_pum_1')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_2CO_pum_1');
        }
            
             // led_2CO_pum_2
        if(element = mapContDoc.getElementById('led_2CO_pum_2')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_2CO_pum_2');
        }
            
             // led_2CO_pum_3
        if(element = mapContDoc.getElementById('led_2CO_pum_3')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_2CO_pum_3');
        }
            
             // led_2CO_pum_4
        if(element = mapContDoc.getElementById('led_2CO_pum_4')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_2CO_pum_4');
        }
            
             // led_2CO_pum_5
        if(element = mapContDoc.getElementById('led_2CO_pum_5')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_2CO_pum_5');
        }
            
             // led_2CO_pum_6
        if(element = mapContDoc.getElementById('led_2CO_pum_6')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_2CO_pum_6');
        }
            
             // led_2CO_pum_7
        if(element = mapContDoc.getElementById('led_2CO_pum_7')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_2CO_pum_7');
        }
            
             // led_2CO_pum_8
        if(element = mapContDoc.getElementById('led_2CO_pum_8')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_2CO_pum_8');
        }
            
             // led_2CO_pum_9
        if(element = mapContDoc.getElementById('led_2CO_pum_9')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_2CO_pum_9');
        }
            
             // led_2CO_pum_10
        if(element = mapContDoc.getElementById('led_2CO_pum_10')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_2CO_pum_10');
        }
            
             // led_2CO_pum_11
        if(element = mapContDoc.getElementById('led_2CO_pum_11')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_2CO_pum_11');
        }
            
             // led_2CO_al_1
        if(element = mapContDoc.getElementById('led_2CO_al_1')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2CO_al_1');
        }
            
             // led_2CO_al_2
        if(element = mapContDoc.getElementById('led_2CO_al_2')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2CO_al_2');
        }
            
             // led_2CO_al_3
        if(element = mapContDoc.getElementById('led_2CO_al_3')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2CO_al_3');
        }
            
             // led_2CO_al_4
        if(element = mapContDoc.getElementById('led_2CO_al_4')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2CO_al_4');
        }
            
             // led_2CO_al_5
        if(element = mapContDoc.getElementById('led_2CO_al_5')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2CO_al_5');
        }
            
             // led_2CO_al_6
        if(element = mapContDoc.getElementById('led_2CO_al_6')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2CO_al_6');
        }
            
             // led_2CO_al_7
        if(element = mapContDoc.getElementById('led_2CO_al_7')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2CO_al_7');
        }
            
             // led_2CO_al_8
        if(element = mapContDoc.getElementById('led_2CO_al_8')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2CO_al_8');
        }
            
            
            
            
//            --------------1GVP--------------------
            
            // led_1GVP_pum_1
        if(element = mapContDoc.getElementById('led_1GVP_pum_1')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_1GVP_pum_1');
        }
            
              // led_1GVP_pum_2
        if(element = mapContDoc.getElementById('led_1GVP_pum_2')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_1GVP_pum_2');
        }
            
              // led_1GVP_pum_3
        if(element = mapContDoc.getElementById('led_1GVP_pum_3')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_1GVP_pum_3');
        }
            
              // led_1GVP_pum_4
        if(element = mapContDoc.getElementById('led_1GVP_pum_4')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_1GVP_pum_4');
        }
            
              // led_1GVP_pum_5
        if(element = mapContDoc.getElementById('led_1GVP_pum_5')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_1GVP_pum_5');
        }
            
              // led_1GVP_pum_6
        if(element = mapContDoc.getElementById('led_1GVP_pum_6')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_1GVP_pum_6');
        }
            
             // led_1GVP_al_1
        if(element = mapContDoc.getElementById('led_1GVP_al_1')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_1GVP_al_1');
        }
            
              // led_1GVP_al_2
        if(element = mapContDoc.getElementById('led_1GVP_al_2')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_1GVP_al_2');
        }
            
              // led_1GVP_al_3
        if(element = mapContDoc.getElementById('led_1GVP_al_3')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_1GVP_al_3');
        }
            
              // led_1GVP_al_4
        if(element = mapContDoc.getElementById('led_1GVP_al_4')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_1GVP_al_4');
        }
        
            
            
//            -------------------2 GVP------------------------------
        
         // led_2GVP_pum_1
        if(element = mapContDoc.getElementById('led_2GVP_pum_1')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_2GVP_pum_1');
        }
            
              // led_2GVP_pum_2
        if(element = mapContDoc.getElementById('led_2GVP_pum_2')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_2GVP_pum_2');
        }
            
              // led_2GVP_pum_3
        if(element = mapContDoc.getElementById('led_2GVP_pum_3')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_2GVP_pum_3');
        }
            
              // led_2GVP_pum_4
        if(element = mapContDoc.getElementById('led_2GVP_pum_4')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_2GVP_pum_4');
        }
            
              // led_2GVP_pum_5
        if(element = mapContDoc.getElementById('led_2GVP_pum_5')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_2GVP_pum_5');
        }
            
              // led_2GVP_pum_6
        if(element = mapContDoc.getElementById('led_2GVP_pum_6')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_2GVP_pum_6');
        }
            
             // led_2GVP_al_1
        if(element = mapContDoc.getElementById('led_2GVP_al_1')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2GVP_al_1');
        }
            
              // led_2GVP_al_2
        if(element = mapContDoc.getElementById('led_2GVP_al_2')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2GVP_al_2');
        }
            
              // led_2GVP_al_3
        if(element = mapContDoc.getElementById('led_2GVP_al_3')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2GVP_al_3');
        }
            
              // led_2GVP_al_4
        if(element = mapContDoc.getElementById('led_2GVP_al_4')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2GVP_al_4');
        }
        
        
//        -------------------1 COTL------------------
            
            // led_1COL_al_1
        if(element = mapContDoc.getElementById('led_1COL_al_1')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_1COL_al_1');
        }
            
               // led_1COL_pum_1
        if(element = mapContDoc.getElementById('led_1COL_pum_1')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_1COL_pum_1');
        }
            
            // led_1COL_pum_2
        if(element = mapContDoc.getElementById('led_1COL_pum_2')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_1COL_pum_2');
        }
            
            // led_1COL_pum_3
        if(element = mapContDoc.getElementById('led_1COL_pum_3')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_1COL_pum_3');
        }
        
        
            
            
            
//            --------------------2 COTL--------------------------
            
            
            // led_2COTL_al_1
        if(element = mapContDoc.getElementById('led_2COTL_al_1')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2COTL_al_1');
        }
            
            // led_2COTL_al_2
        if(element = mapContDoc.getElementById('led_2COTL_al_2')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2COTL_al_2');
        }
            
            // led_2COTL_al_3
        if(element = mapContDoc.getElementById('led_2COTL_al_3')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2COTL_al_3');
        }
            
            // led_2COTL_al_4
        if(element = mapContDoc.getElementById('led_2COTL_al_4')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2COTL_al_4');
        }
            
            // led_2COTL_al_5
        if(element = mapContDoc.getElementById('led_2COTL_al_5')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2COTL_al_5');
        }
            
            // led_2COTL_al_6
        if(element = mapContDoc.getElementById('led_2COTL_al_6')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2COTL_al_6');
        }
            
            // led_2COTL_al_7
        if(element = mapContDoc.getElementById('led_2COTL_al_7')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2COTL_al_7');
        }
            
            // led_2COTL_al_8
        if(element = mapContDoc.getElementById('led_2COTL_al_8')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2COTL_al_8');
        }
            
            // led_2COTL_al_9
        if(element = mapContDoc.getElementById('led_2COTL_al_9')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2COTL_al_9');
        }
            
            // led_2COTL_al_10
        if(element = mapContDoc.getElementById('led_2COTL_al_10')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2COTL_al_10');
        }
            
            // led_2COTL_al_11
        if(element = mapContDoc.getElementById('led_2COTL_al_11')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2COTL_al_11');
        }
            
            // led_2COTL_al_12
        if(element = mapContDoc.getElementById('led_2COTL_al_12')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2COTL_al_12');
        }
            
            // led_2COTL_al_13
        if(element = mapContDoc.getElementById('led_2COTL_al_13')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2COTL_al_13');
        }
            
            // led_2COTL_al_14
        if(element = mapContDoc.getElementById('led_2COTL_al_14')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2COTL_al_14');
        }
            
            // led_2COTL_al_15
        if(element = mapContDoc.getElementById('led_2COTL_al_15')){
            if(blnk==0){
                element.setAttribute('style', look21);
            }
            else{
                element.setAttribute('style', look20);
            }
        }else{
            console.log('err_led_2COTL_al_15');
        }
            
             // led_2COTL_pum_1
        if(element = mapContDoc.getElementById('led_2COTL_pum_1')){
            if(blnk==0){
                element.setAttribute('style', look11);
            }
            else{
                element.setAttribute('style', look10);
            }
        }else{
            console.log('err_led_2COTL_pum_1');
        }
            
            
            
            
        }
        
       
        
        requestAnimationFrame(anim);
        
        
    
        }, 500);  
}

anim();	


