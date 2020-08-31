let all_ques=[];
var clicked=0;
var A=document.getElementById("A");
A.addEventListener('click',function(e){
    console.log("A");
    next_ques("A");s
    
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
function feed(){
    let obj={chosen:"null",ques: "Which of the following statement is/are correct about Favipiravir?", a: " Favipiravir is an antiviral COVID-19 drug.", b:" Glenmark Pharmaceuticals under the brand name FabiFlu has launched an antiviral drug Favipiravir.", c: "It is India's first COVID-19 drug launched, priced at Rs 103 per tablet.", d:"All the above are correct.", ans: "D"}
    all_ques.push(obj);
    obj={chosen:"null",ques: "How many countries, areas or territories are suffering from novel coronavirus outbreak in the World?",a :"More than 50", b:"More than 100", c:"More than 150", d:"More than 200", ans: "D"}
    all_ques.push(obj);
    obj={chosen:"null",ques: "Thailand announced that it has proceeded to test its novel coronavirus vaccine on which animal/bird?",a: "Monkeys",b: "Lizards", c: "Hens", d: 'Kites', ans: "A"};
    all_ques.push(obj);
    obj={chosen:"null",ques: "In a study, which cells are found in COVID-19 patients 'bode well' for long term immunity?", a: " P-cell", b:"D-Cell", c:"T-Cell", d: " Endothelial Cells", ans: "C"};
    all_ques.push(obj);
    obj={chosen:"null",ques: "Name the vaccine that is jointly developed by the German company BioNTech and US pharma giant Pfizer for COVID-19?",a: "BNT162", b: "PICOVACC", c: "Both A and B", d: "Neither A nor B", ans: "A"};
    all_ques.push(obj);
    obj={chosen:"null",ques:"Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition?", a: "Plasma Therapy", b: "Solidarity", c:"Remdesivir", d:"Hydroxychloroquine", ans: "A"};
    all_ques.push(obj);
    obj={chosen:"null",ques: "How does Coronavirus transmit?", a: "When a person sneezes or cough, droplets spread in the air or fall on the ground and nearby surfaces.", b:" If another person is nearby and inhales the droplets or touches these surfaces and further touches his face, eyes or mouth, he or she can get an infection.", c:"If the distance is less than 1 meter from the infected person.", d:"All the above are correct.", ans: "D"};
    all_ques.push(obj);
    obj={chosen:"null",ques: "What happens to a person suffering from COVID-19?", a: "Around 80% of the people will require no treatment as such and will recover on their own.", b:"Around <20% or a small proportion may need hospitalisation.", c:"A very small proportion basically suffering from chronic illness may need admission in an Intensive Care Unit (ICU).", d:"All the above are correct", ans:"D"};
    all_ques.push(obj);
    obj={chosen:"null",ques: "In which age group the COVID-19 spreads?", a:"COVID-19 occur in all age groups.", b:"Coronavirus infection is mild in children.", c:"Older person and persons with pre-existing medical conditions are at high risk to develop serious illness.", d:"All the above are correct", ans:"D"};
    all_ques.push(obj);
    obj={chosen:"null",ques: "What is Coronavirus?", a:"It is a large family of viruses.", b:"It belongs to the family of Nidovirus.", c:"Both A and B are correct", d:"Only A is correct.", ans: "C"};
    all_ques.push(obj);
}
document.getElementsByClassName("ques")[0].textContent="Welcome To The Quiz!!";
document.getElementsByClassName("ques")[0].style.fontWeight="Bold";
document.getElementsByClassName("ques")[0].style.fontSize="70px";
document.getElementsByClassName("ans")[0].style.height="0";

var started="false";
function fn(){
    //console.log(started);
    document.getElementById("left").disabled=false;
    document.getElementById("right").disabled=false;
    
    if(started=="false"){
        //console.log("started");
        document.getElementsByTagName("img")[0].style.display="none";
        document.getElementsByClassName("ques")[0].style.fontSize="40px";
        document.getElementsByClassName("ans")[0].style.height="70%";
        
        
        document.getElementById("start").value="Reset";
        
        
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
    
    document.getElementById("left").disabled=true;
    document.getElementById("right").disabled=true;
    
    document.getElementsByClassName("ques")[0].textContent="Your Score is: "+ score;
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
    
    
    if(all_ques[index-1].chosen==all_ques[index-1].ans){
        document.getElementsByClassName(all_ques[index-1].chosen.toLowerCase())[0].style.border="none";
        //document.getElementsByClassName(all_ques[index-1].chosen.toLowerCase())[0].style.backgroundColor="white";
    }
    else if(all_ques[index-1].chosen!="null"){
        //console.log("forward",selectedId);
        document.getElementsByClassName(all_ques[index-1].ans.toLowerCase())[0].style.border="none";
        //document.getElementsByClassName(all_ques[index-1].ans.toLowerCase())[0].style.backgroundColor="white";
        document.getElementsByClassName(all_ques[index-1].chosen.toLowerCase())[0].style.border="none";
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
    
    
    if(all_ques[index+1].chosen==all_ques[index+1].ans){
        document.getElementsByClassName(all_ques[index+1].chosen.toLowerCase())[0].style.border="none";
        //document.getElementsByClassName(all_ques[index+1].chosen.toLowerCase())[0].style.backgroundColor="white";
    }
    else if(all_ques[index+1].chosen!="null"){
        //console.log("back",selectedId);
        document.getElementsByClassName(all_ques[index+1].ans.toLowerCase())[0].style.border="none";
        //document.getElementsByClassName(all_ques[index+1].ans.toLowerCase())[0].style.backgroundColor="white";
        document.getElementsByClassName(all_ques[index+1].chosen.toLowerCase())[0].style.border="none";
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
    
    
}
