<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" href="css/login.css">
    <meta name="viewport" charset="utf-8" content="width=device-width, initial-scale=1">
    <script type="text/javascript" src = "javascript/func_cotel_main_1.js"></script>
    <script type="text/javascript" src = "javascript/func_cotel_main_2.js"></script>
    <script type="text/javascript" src="javascript/slider.js"></script>
    <title>КОТЕЛЬНЯ UTLS</title>
    
</head>
<body >

<!--
<div id="log-pass" style="display:block;">
        <h1>Котельня</h1>
        <h3>Амосова</h3>
        <form>
            <input id="login" name="email" type="text" placeholder="логин" >
            <input id="pass" name="pass" type="password" placeholder="пароль" >
            <input class="but-logpass" type="button" value="ОК" onclick="Logpass()" />
        </form>
</div>
-->



<div id="panel"  style="display:block;"  >
<div class="sl_ctr">
    <div href="#" class="prv_b"  onclick="slide(-1)"></div> | <div href="#" class="nxt_b" onclick="slide(1)"></div>
    
     <object id="fl-svg"  data="images/osbb_1CO.svg" type="image/svg+xml"  width="80%" height="100%"  ></object>
     </div>
</div>
<script language="javascript">
var index = 0;
     var links = new Array (
            "images/osbb_1CO.svg", 
            "images/osbb_2CO.svg",
            "images/osbb_1GVP.svg", 
            "images/osbb_2GVP.svg",
            "images/osbb_1COTL.svg",
            "images/osbb_2COTL.svg", 
            
    ); 
  
    function slide(v) {
      var element = document.getElementById("fl-svg");
      index += 1 * v;
            
      if(index > links.length - 1) index = 0;
      else if(index < 0) index = links.length - 1;
      element.data = links[index];
  }
    
   </script> 
   
<script>
    
//function Loadsvg(){
//    
//    if (window.screen.availWidth >=1280){
//        document.all("fl-svg").data="images/osbb_1CO.svg"
//    }else{
//        document.all("fl-svg").data="images/osbb_1CO.svg"
//    }
//    
//}
//    Loadsvg();
//function Logpass(){
//    
//
//var log = document.getElementById('login').value;
//var pass = document.getElementById('pass').value;
//
//if (pass== null) { alert('Авторизация отменена!'); }
//else if (pass == '000' && log == 'cotel1') 
//{ 
//    document.getElementById('log-pass').style.display = 'none';
//    document.getElementById('panel').style.display = 'block'; 
//}
//
//else { alert('Неверный пароль!'); }
//    
//    Loadsvg();
//   
//}
   
    
    
</script>

<script language="javascript">
//        var i=0;
//        var image=document.getElementById("fl-svg");
//        // Добавьте свои картинки в массив через запятую
//        var imgs=new Array('images/osbb_2CO.svg','images/osbb_1COTL.svg');
//        function imgsrc() {
//            i++;i%=imgs.length;
//            image.data = imgs[i];
//        }
    </script>

    
  

                                                                                         


    