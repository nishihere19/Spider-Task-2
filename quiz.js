let all_ques=[];
var clicked=0;
var A=document.getElementById("A");
var lastindex=0;
localStorage.setItem("initialised","yes");
if(localStorage.getItem("initialised")=="null"){
    console.log("set");
    localStorage.setItem("highscore",0);
}
A.addEventListener('click',function(e){
    console.log("A");
    next_ques("A");
    
})
var B=document.getElementById("B");
B.addEventListener('click',function(e){
    console.log("B");
    next_ques("B");
    
})
var C=document.getElementById("C");
C.addEventListener('click',function(e){
    console.log("C");
    next_ques("C");
    
})
var D=document.getElementById("D");
D.addEventListener('click',function(e){
    console.log("D");
    next_ques("D");
    
})
var name;
var extra=[];
function feed(){
    let obj={chosen:"null",ques: "Which of the following statement is/are correct about Favipiravir?", a: " Favipiravir is an antiviral COVID-19 drug.", b:" Glenmark Pharmaceuticals under the brand name FabiFlu has launched an antiviral drug Favipiravir.", c: "It is India's first COVID-19 drug launched, priced at Rs 103 per tablet.", d:"All the above are correct.", ans: "D"}
    extra.push(obj);
    obj={chosen:"null",ques: "How many countries, areas or territories are suffering from novel coronavirus outbreak in the World?",a :"More than 50", b:"More than 100", c:"More than 150", d:"More than 200", ans: "D"}
    extra.push(obj);
    obj={chosen:"null",ques: "Thailand announced that it has proceeded to test its novel coronavirus vaccine on which animal/bird?",a: "Monkeys",b: "Lizards", c: "Hens", d: 'Kites', ans: "A"};
    extra.push(obj);
    obj={chosen:"null",ques: "In a study, which cells are found in COVID-19 patients 'bode well' for long term immunity?", a: " P-cell", b:"D-Cell", c:"T-Cell", d: " Endothelial Cells", ans: "C"};
    extra.push(obj);
    obj={chosen:"null",ques: "Name the vaccine that is jointly developed by the German company BioNTech and US pharma giant Pfizer for COVID-19?",a: "BNT162", b: "PICOVACC", c: "Both A and B", d: "Neither A nor B", ans: "A"};
    extra.push(obj);
    obj={chosen:"null",ques:"Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition?", a: "Plasma Therapy", b: "Solidarity", c:"Remdesivir", d:"Hydroxychloroquine", ans: "A"};
    extra.push(obj);
    obj={chosen:"null",ques: "How does Coronavirus transmit?", a: "When a person sneezes or cough, droplets spread in the air or fall on the ground and nearby surfaces.", b:" If another person is nearby and inhales the droplets or touches these surfaces and further touches his face, eyes or mouth, he or she can get an infection.", c:"If the distance is less than 1 meter from the infected person.", d:"All the above are correct.", ans: "D"};
    extra.push(obj);
    obj={chosen:"null",ques: "What happens to a person suffering from COVID-19?", a: "Around 80% of the people will require no treatment as such and will recover on their own.", b:"Around <20% or a small proportion may need hospitalisation.", c:"A very small proportion basically suffering from chronic illness may need admission in an Intensive Care Unit (ICU).", d:"All the above are correct", ans:"D"};
    extra.push(obj);
    obj={chosen:"null",ques: "In which age group the COVID-19 spreads?", a:"COVID-19 occur in all age groups.", b:"Coronavirus infection is mild in children.", c:"Older person and persons with pre-existing medical conditions are at high risk to develop serious illness.", d:"All the above are correct", ans:"D"};
    extra.push(obj);
    obj={chosen:"null",ques: "What is Coronavirus?", a:"It is a large family of viruses.", b:"It belongs to the family of Nidovirus.", c:"Both A and B are correct", d:"Only A is correct.", ans: "C"};
    extra.push(obj);
    var j=0;
    var random;
    console.log(extra);
    while (j<10){
        random=Math.floor(Math.random()*10);
        console.log(j);
        if(extra[random]!=="slctd"){
            all_ques[j]=extra[random];
            extra[random]="slctd";
            //console.log(all_ques[j]);
            j++;
        }
    }
}
document.getElementsByClassName("ques")[0].textContent="Welcome To The Quiz!!";
document.getElementsByClassName("ques")[0].style.fontWeight="Bold";
document.getElementsByClassName("ques")[0].style.fontSize="70px";
document.getElementsByClassName("ans")[0].style.height="0";

var started="false";
function fn(){
    if(document.getElementById("name").value==""){
        alert("Please type your name in the box below!");
        return;
    }
    
    //console.log(started);
    document.getElementsByClassName("sad")[0].style.display="none";
    document.getElementsByClassName("happy")[0].style.display="none";
    document.getElementById("left").disabled=false;
    document.getElementById("right").disabled=false;
    name=document.getElementById("name").value;
    document.getElementById("name").style.display="none";
    document.getElementsByClassName("name")[0].textContent="Player:"+ name;
    document.getElementsByClassName("time")[0].style.display="block";
   
    for(i=1;i<11;i++){
        document.getElementById((i).toString()).style.background="rgb(255, 145, 0)";
    }
    
    if(started=="false"){
        start();
        //console.log("started");
        document.getElementsByClassName("img")[0].style.display="none";
        document.getElementsByClassName("ques")[0].style.fontSize="40px";
        document.getElementsByClassName("ans")[0].style.height="fit-content";
        document.getElementsByClassName("time")[0].style.display="block";
        
        
        document.getElementById("start").value="Reset";
        
        all_ques=[];
        extra=[];
        j=0;
        feed();
        document.getElementsByClassName("ques")[0].textContent=all_ques[0].ques;
        document.getElementById("A").textContent=all_ques[0].a;
        document.getElementById("B").textContent=all_ques[0].b;
        document.getElementById("C").textContent=all_ques[0].c;
        document.getElementById("D").textContent=all_ques[0].d;
        index=0;
        started="true";
    }
else{
    console.log(localStorage.getItem("highscore"));
    if(localStorage.getItem("highscore")<score){
        var d=new Date();
        localStorage.setItem("highscore",score);
        console.log(localStorage.getItem("highscore"),score);
        localStorage.setItem("best",name);
        localStorage.setItem("date",d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear());
        console.log(localStorage.getItem("date"));
        localStorage.setItem("time",d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
        console.log(localStorage.getItem("time"));
        localStorage.setItem("besttime",x);
    }
    reset_time();
    if(score<8){
        
        document.getElementsByClassName("ques")[0].textContent="Your Score is: "+ score+". Better luck next time," + name+"!!";
        document.getElementsByClassName("sad")[0].style.display="inline-block";
    }
    else{
        
        document.getElementsByClassName("ques")[0].textContent="Your Score is: "+ score+". Well done," +name+"!!";
        document.getElementsByClassName("happy")[0].style.display="inline-block";
    }
    var date, bestscore, time;
    date=localStorage.getItem("date");
    time=localStorage.getItem("time");
    bestscore=localStorage.getItem("highscore");
    document.getElementsByClassName("time")[0].style.display="none";
    document.getElementsByClassName("name")[0].textContent="Best Player:"+ name+". Best Score: "+ bestscore+ ". Date: "+ date+". Time: "+time;
    document.getElementById("left").disabled=true;
    document.getElementById("right").disabled=true;
    
    
    document.getElementsByClassName("ques")[0].style.fontWeight="Bold";
    document.getElementsByClassName("ques")[0].style.fontSize="70px";
    document.getElementsByClassName("ans")[0].style.height="0";
    
    if(all_ques[index].chosen==all_ques[index].ans){
        document.getElementsByClassName(all_ques[index].chosen.toLowerCase())[0].style.border="none";
        //document.getElementsByClassName(all_ques[index-1].chosen.toLowerCase())[0].style.backgroundColor="white";
    }
    else if(all_ques[index].chosen!="null"){
        //console.log("forward",selectedId);
        document.getElementsByClassName(all_ques[index].ans.toLowerCase())[0].style.border="none";
        //document.getElementsByClassName(all_ques[index-1].ans.toLowerCase())[0].style.backgroundColor="white";
        document.getElementsByClassName(all_ques[index].chosen.toLowerCase())[0].style.border="none";
        //document.getElementsByClassName(all_ques[index-1].chosen.toLowerCase())[0].style.backgroundColor="white";
    }
    document.getElementById("A").textContent=null;
    document.getElementById("B").textContent=null;
    document.getElementById("C").textContent=null;
    document.getElementById("D").textContent=null;
    started="false";
    score=0;
        
    
}

    
}
var index;
var selected;
var selectedId, ansId;
var score=0;
var status;

function next_ques(d){
    //document.getElementsByClassName("ques")[0].textContent=all_ques[0].ques;
    console.log(d);
   
    if(index==0){
        document.getElementById("left").disabled=true;
    }
    else{
        document.getElementById("left").disabled=false;
    }
    if(index==9){
        document.getElementById("right").disabled=true;
    }
    else{
        document.getElementById("right").disabled=false;
    }
    //console.log("next_ques");
    
    if(d=="A" && all_ques[index].chosen=="null"){
            all_ques[index].chosen="A";
            selectedId="a";
            clicked++;
    }
    else if(d=="B" && all_ques[index].chosen=="null"){
        all_ques[index].chosen="B";
        selectedId="b";
        clicked++;
}
else if(d=="C" && all_ques[index].chosen=="null"){
    all_ques[index].chosen="C";
    selectedId="c";
    clicked++;
}
else if(d=='D' && all_ques[index].chosen=="null"){
    all_ques[index].chosen="D";
    selectedId="d";
    clicked++;
}
console.log(all_ques[index].chosen,all_ques[index].ans);
    if(all_ques[index].chosen==all_ques[index].ans){
        document.getElementsByClassName(selectedId)[0].style.border="5px solid green";
        //document.getElementsByClassName(selectedId)[0].style.backgroundColor="light-green";
        document.getElementById((index+1).toString()).style.background="green";
        score++;
        status=true;
    }
    else{
        selectedId=all_ques[index].chosen.toLowerCase();
        //console.log(selectedId,ansId);
        document.getElementsByClassName(selectedId)[0].style.border="5px solid red";
        //document.getElementsByClassName(selectedId)[0].style.backgroundColor="light-red";
        ansId=all_ques[index].ans.toLowerCase();
        document.getElementsByClassName(ansId)[0].style.border="5px solid green";
        //document.getElementsByClassName(ansId)[0].style.backgroundColor="light-green";
        document.getElementById((index+1).toString()).style.background="red";
        status=false;


    }
    
    if(index==9){
        fn();
    }
    
}
function forward(){
    //console.log("forward",selectedId,status);
    
    index++;
    if(index==0){
        document.getElementById("left").disabled=true;
    }
    else{
        document.getElementById("left").disabled=false;
    }
    if(index==9){
        document.getElementById("right").disabled=true;
    }
    else{
        document.getElementById("right").disabled=false;
    }
    //console.log("next_ques");
    
    
    if(all_ques[lastindex].chosen==all_ques[lastindex].ans){
        document.getElementsByClassName(all_ques[lastindex].chosen.toLowerCase())[0].style.border="none";
        //document.getElementsByClassName(all_ques[index-1].chosen.toLowerCase())[0].style.backgroundColor="white";
    }
    else if(all_ques[lastindex].chosen!="null"){
        //console.log("forward",selectedId);
        document.getElementsByClassName(all_ques[lastindex].ans.toLowerCase())[0].style.border="none";
        //document.getElementsByClassName(all_ques[index-1].ans.toLowerCase())[0].style.backgroundColor="white";
        document.getElementsByClassName(all_ques[lastindex].chosen.toLowerCase())[0].style.border="none";
        //document.getElementsByClassName(all_ques[index-1].chosen.toLowerCase())[0].style.backgroundColor="white";
    }
    if(all_ques[index].chosen=="null"){
        document.getElementsByClassName("ques")[0].textContent=all_ques[index].ques;
        document.getElementById("A").textContent=all_ques[index].a;
        document.getElementById("B").textContent=all_ques[index].b;
        document.getElementById("C").textContent=all_ques[index].c;
        document.getElementById("D").textContent=all_ques[index].d;
    }
    else{
        document.getElementsByClassName("ques")[0].textContent=all_ques[index].ques;
    document.getElementById("A").textContent=all_ques[index].a;
    document.getElementById("B").textContent=all_ques[index].b;
    document.getElementById("C").textContent=all_ques[index].c;
    document.getElementById("D").textContent=all_ques[index].d;
        if(all_ques[index].chosen==all_ques[index].ans){
            selectedId=all_ques[index].chosen.toLowerCase();
            document.getElementsByClassName(selectedId)[0].style.border="5px solid green";
            //document.getElementsByClassName(selectedId)[0].style.backgroundColor="light-green";
            selectedId=null;
            //ansId=null;
        }
        else{
            selectedId=all_ques[index].chosen.toLowerCase();
            ansId=all_ques[index].ans.toLowerCase();
            document.getElementsByClassName(selectedId)[0].style.border="5px solid red";
           // document.getElementsByClassName(selectedId)[0].style.backgroundColor="light-red";
            document.getElementsByClassName(ansId)[0].style.border="5px solid green";
            //document.getElementsByClassName(ansId)[0].style.backgroundColor="light-green";
            selectedId=null;
            ansId=null;
        }
    }
    lastindex=index;

}
function back(){
    //console.log("back");
    
    index--;
    if(index==0){
        document.getElementById("left").disabled=true;
    }
    else{
        document.getElementById("left").disabled=false;
    }
    if(index==9){
        document.getElementById("right").disabled=true;
    }
    else{
        document.getElementById("right").disabled=false;
    }
    //console.log("next_ques");
    
    
    if(all_ques[lastindex].chosen==all_ques[lastindex].ans){
        document.getElementsByClassName(all_ques[lastindex].chosen.toLowerCase())[0].style.border="none";
        //document.getElementsByClassName(all_ques[index+1].chosen.toLowerCase())[0].style.backgroundColor="white";
    }
    else if(all_ques[lastindex].chosen!="null"){
        //console.log("back",selectedId);
        document.getElementsByClassName(all_ques[lastindex].ans.toLowerCase())[0].style.border="none";
        //document.getElementsByClassName(all_ques[index+1].ans.toLowerCase())[0].style.backgroundColor="white";
        document.getElementsByClassName(all_ques[lastindex].chosen.toLowerCase())[0].style.border="none";
        //document.getElementsByClassName(all_ques[index+1].chosen.toLowerCase())[0].style.backgroundColor="white";
    }
    if(all_ques[index].chosen=="null"){
        document.getElementsByClassName("ques")[0].textContent=all_ques[index].ques;
        document.getElementById("A").textContent=all_ques[index].a;
        document.getElementById("B").textContent=all_ques[index].b;
        document.getElementById("C").textContent=all_ques[index].c;
        document.getElementById("D").textContent=all_ques[index].d;
    }
    else{
    document.getElementsByClassName("ques")[0].textContent=all_ques[index].ques;
    document.getElementById("A").textContent=all_ques[index].a;
    document.getElementById("B").textContent=all_ques[index].b;
    document.getElementById("C").textContent=all_ques[index].c;
    document.getElementById("D").textContent=all_ques[index].d;
        if(all_ques[index].chosen==all_ques[index].ans){
            selectedId=all_ques[index].chosen.toLowerCase();
            document.getElementsByClassName(selectedId)[0].style.border="5px solid green";
            //document.getElementsByClassName(selectedId)[0].style.backgroundColor="light-green";
            selectedId=null;
            //ansId=null;
        }
        else{
            selectedId=all_ques[index].chosen.toLowerCase();
            ansId=all_ques[index].ans.toLowerCase();
            document.getElementsByClassName(selectedId)[0].style.border="5px solid red";
            //document.getElementsByClassName(selectedId)[0].style.backgroundColor="light-red";
            document.getElementsByClassName(ansId)[0].style.border="5px solid green";
           // document.getElementsByClassName(ansId)[0].style.backgroundColor="light-green";
            selectedId=null;
            ansId=null;
        }
    }
    lastindex=index;
    
}

    var num=document.getElementById("1");
    num.addEventListener('click',function(e){
         menu("1");
    })
    var num=document.getElementById("2");
    num.addEventListener('click',function(e){
         menu("2");
    })
    var num=document.getElementById("3");
    num.addEventListener('click',function(e){
         menu("3");
    })
    var num=document.getElementById("4");
    num.addEventListener('click',function(e){
         menu("4");
    })
    var num=document.getElementById("5");
    num.addEventListener('click',function(e){
         menu("5");
    })
    var num=document.getElementById("6");
    num.addEventListener('click',function(e){
         menu("6");
    })
    var num=document.getElementById("7");
    num.addEventListener('click',function(e){
         menu("7");
    })
    var num=document.getElementById("8");
    num.addEventListener('click',function(e){
         menu("8");
    })
    var num=document.getElementById("9");
    num.addEventListener('click',function(e){
         menu("9");
    })
    var num=document.getElementById("10");
    num.addEventListener('click',function(e){
         menu("10");
    })

function menu(myid){
    lastindex=index;
    index= parseInt(myid)-2;
    console.log(lastindex, index);
    forward();
}
var x,timer,divide;
x=0;
divide=1000;
var best_time;


function start(){
    timer=self.setInterval("increment()",(1000000/divide)); 
}

function increment(){
    x++;
    document.getElementsByClassName("time")[0].textContent="Your Time Left: "+(200-x);
    if(x==200){
        fn();
    }

    
}
function stop(){
    
    clearInterval(timer);
   
    timer=null;
}
function reset_time(){
    stop();
    x=0;    
}