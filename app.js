let Baseurl="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("button");
let fromCurr=document.querySelector(".from select");
let toCurr=document.querySelector(".to select");

for(select of dropdown){
    for (currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText= currCode;
        newOption.value= currCode;
        select.append(newOption);

        if(select.name==="from" && currCode==="USD"){
          newOption.selected=true;
        }
        
        if(select.name==="to" && currCode==="INR"){
            newOption.selected=true;
          }
    }

    select.addEventListener("change" , (evt)=>{
      updateFlag(evt.target);
      
    })

  }

const updateFlag=(element)=>{
  const currCode=element.value;
  let countryCode=countryList[currCode];
  let newSrc=`https://flagsapi.com/${countryCode}/shiny/64.png`;
  let img= element.parentElement.querySelector("img");
  img.src=newSrc;
}

btn.addEventListener("click", async (evt)=>{
  evt.preventDefault();
const amount=document.querySelector(".amount input");
let amt=amount.value;
if(amt==="" || amt<0){
  amt=1;
  amount.value=1;
}

const URL=`${Baseurl}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
let response = await fetch(URL);
let data = await response.json();
let rate=data[toCurr.value.toLowerCase()];

})