let tr_calc =document.getElementById("tr_calc")
let rec_calc =document.getElementById("rec_calc")
let pr_calc =document.getElementById("pr_calc")
let rm_calc =document.getElementById("rm_calc")
let pt_calc =document.getElementById("pt_calc")
let ell_calc =document.getElementById("ell_calc")
let calc_history= document.getElementById("calc_history")
let count=0


function  appendCalcToHistory(area ,type){
    let areadiv =document.createElement("div")
    areadiv.setAttribute('class','flex items-center justify-between')
    
    areadiv.innerHTML=
   `<p>${++count}. ${type}</p>
                <p>${area.toFixed(2)} Cm<sup>2</sup></p> 
               
   `
   calc_history.append(areadiv)
}



tr_calc.addEventListener('click', ()=>{
    let tr_b =parseFloat(document.getElementById("tr_b").value);
    let tr_h =parseFloat(document.getElementById("tr_h").value);
    let area =0.5*tr_b*tr_h
   
    
    //alert(area.toFixed(2));
    
    document.getElementById("tr_b").value=" "
    document.getElementById("tr_h").value=" "

    appendCalcToHistory(area,'Triangle')


})

rec_calc.addEventListener('click',()=>{
    let rec_w =parseFloat(document.getElementById("rec_w").value);
    let rec_l =parseFloat(document.getElementById("rec_l").value);

    let area = rec_w * rec_l
    //alert(area.toFixed(2))
    document.getElementById("rec_w").value=" "
    document.getElementById("rec_l").value=" "
    appendCalcToHistory(area,'Rectangle')

})
pr_calc.addEventListener('click', ()=>{
    let pr_b =parseFloat(document.getElementById("pr_b").value);
    let pr_h =parseFloat(document.getElementById("pr_h").value);
    let area =pr_b* pr_h;
    //alert(area.toFixed(2))
    document.getElementById("pr_b").value=" "
    document.getElementById("pr_h").value=" "
    appendCalcToHistory(area,'Parallelogram')

})


rm_calc.addEventListener('click',() =>{
    let rm_d1 =parseFloat(document.getElementById("rm_d1").value);
    let rm_d2 =parseFloat(document.getElementById("rm_d2").value);
    let area  = 0.5* rm_d1*rm_d2
    //alert (area.toFixed(2))
    document.getElementById("rm_d1").value=" "
    document.getElementById("rm_d2").value=" "
    appendCalcToHistory(area,'Rhombus')
})


pt_calc.addEventListener('click',()=>{
    let pt_p =parseFloat(document.getElementById("pt_p").value);
    let pt_b =parseFloat(document.getElementById("pt_b").value);

    let area = 0.5*pt_p*pt_b
    //alert(area.toFixed(2))
    document.getElementById("pt_p").value=" "
    document.getElementById("pt_b").value=" "
    appendCalcToHistory(area,'Pentagon')


})

ell_calc.addEventListener('click',()=>{
    let ell_a =parseFloat(document.getElementById("ell_a").value);
    let ell_b =parseFloat(document.getElementById("ell_b").value);
    let area  =3.1416 *ell_a* ell_b
    //alert(area.toFixed(2))
    document.getElementById("ell_a").value=" "
    document.getElementById("ell_b").value=" "
    appendCalcToHistory(area,'Ellipse')




})
