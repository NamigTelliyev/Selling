const products=document.getElementById("products");
const inp1=document.getElementById("inp1");
const inp2=document.getElementById("inp2");
const inp3=document.getElementById("inp3");
const inp4=document.getElementById("inp4");
const form=document.getElementById("form");

// function getProducts(){
//     axios.get(``)
//     .then(res=>{
//         const data=res.data
//         db=data
//         db.forEach(item=>{
//             let box=document.createElement("div");
//             box.className="col"
//             box.innerHTML=``
//         })
//     })
// }


function postForm(e){
e.preventDefault()
    axios.post("https://655c846525b76d9884fd70e4.mockapi.io/forms",
    {
        firstname:inp1.value,
        lastname:inp2.value,
        email:inp3.value,
        subject:inp4.value

    })
    .then(res=>{
        console.log(res);
    })
}

form.addEventListener("submit",postForm)