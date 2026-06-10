const table=document.getElementById(`table`)
const caution="ⓘ Add item to cart"
table.innerHTML=caution;
let serialno=0;

let totalmoney=document.getElementById(`totalmoney`)
total=0;


const services = [
    {
        name: "Dry Cleaning",
        price: 200
    },
    {
        name: "Wash & Fold",
        price: 100
    },
    {
        name: "Ironing",
        price: 20
    },
    {
        name: "Stain Removal",
        price: 500
    },
    {
        name: "Leather & Suede Cleaning",
        price: 999
    },
    {
        name: "Wedding Dress Cleaning",
        price: 2800
    }
];


const buttons=document.querySelectorAll(`.btn`);
buttons.forEach(function(button,index){
let added=false;
    let row
button.addEventListener('click',function(){

if(added==false)
    {
    if(serialno==0){
        table.innerHTML=""
    }
    
    serialno ++;
    const newtable=document.createElement(`table`)
    row=document.createElement(`tr`)
    const cell1=document.createElement('td')
    const cell2=document.createElement('td')
    const cell3=document.createElement('td')

    cell1.innerHTML=serialno;
    cell2.innerHTML=services[index].name;
    cell3.innerHTML=services[index].price;


    row.appendChild(cell1)
    row.appendChild(cell2)
    row.appendChild(cell3)
    table.appendChild(row)



    total+=services[index].price;
    totalmoney.innerHTML="$"+total


    button.innerHTML='Remove Item'
    button.style.backgroundColor='red'
        added=true
}
else{
    button.innerHTML='Add Item'
    button.style.backgroundColor=''
    total-=services[index].price;
    totalmoney.innerHTML="$"+total
    row.remove();
    added = false
    serialno--;
    if(serialno==0){
        table.innerHTML=caution;
    }
    }


})


})


const form=document.getElementById('form')
const p=document.getElementById(`p`)
form.addEventListener('submit',function(event){
    const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("Ph").value,
    total: total
};
    event.preventDefault();
    if(serialno==0){
         p.innerHTML="ⓘ Add items First"
        p.style.color="Red"

    }else{
    emailjs.send(
    "service_qqpsao8",
    "template_6medxll",
    params
)
     p.innerHTML="Email has been sent to you"
    p.style.color="Green"
    form.reset();
    }

    setTimeout(function() {
        p.innerHTML = "";
    }, 2000);
    })

const contactbtn=document.getElementById(`contactbtn`)
contactbtn.addEventListener('click',function(){
    const name=document.getElementById("namecnt").value
    const email= document.getElementById("emailcnt").value
    if(name==""||email==""){
        alert('Enter your name and your email')
    }else alert('Your Email has been recieved our team member will contact you shortly.')
})




