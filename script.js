function mytime()
{
    var myDate= new Date();/// new date ekta object   
    var min=(myDate.getMinutes()<10) ? "0"+myDate.getMinutes() : myDate.getMinutes();
    var sec=(myDate.getSeconds()<10) ? "0"+myDate.getSeconds() : myDate.getSeconds();
    var hr=myDate.getHours(); 
    var M=(myDate.getHours()>=12) ? "PM" : "AM"; 
    if(myDate.getHours()==0)
    {
        hr=12;
    } 
    else if(myDate.getHours()>12)
    {
        hr=myDate.getHours()%12;
    } 
    else 
    {
         hr=myDate.getHours();
    } 
    var currentTime= hr + ":" + min+":"+sec; 
    document.getElementsByClassName("H")[0].innerHTML=currentTime;
    document.getElementsByClassName("M")[0].innerHTML=M;
    var myday=["sunday","monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var mymonth=["January","February","March","April","May","June","july","August","September","October","November","December"];
    var day=myDate.getDate();
    var currentDate=myday[myDate.getDay()]+","+mymonth[myDate.getMonth()]+","+day; 
    document.getElementsByClassName("date")[0].innerHTML=currentDate; 
     
} 
mytime();
setInterval(function()
{
    mytime();
},1000);