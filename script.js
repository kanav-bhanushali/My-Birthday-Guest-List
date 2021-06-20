var guestList=[];


function submit(){
    guestList.push (document.getElementById("guest_name").value);
    document.getElementById("guest_name").value="";
}

function show(){
   
    for(i=0;i<guestList.length;i++)
    {
        document.getElementById("my_guest_list").innerHTML=document.getElementById("my_guest_list").innerHTML + "<br>" + guestList[i];
    }
}
    
function search(){
var s= document.getElementById("GuestsearchName").value;
var found=0;
for(j=0; j<guestList.length; j++)
{
    if(s==guestList[j]){ 
        found=found+1;
    }
}
    document.getElementById("search_result").innerHTML="name found "+found+" time/s";
    console.log("found name "+found+" time/s")
}

function sort(){
guestList.sort();
for(i=0;i<guestList.length;i++)
    {
        document.getElementById("show_sort").innerHTML=document.getElementById("show_sort").innerHTML + "<br>" + guestList[i];
    }

}
