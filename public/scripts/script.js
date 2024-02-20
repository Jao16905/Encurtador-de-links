
const addButton = document.querySelector("#newLink");
const linkInput = document.querySelector("#linkInput");
const linkResult = document.querySelector("#linkResult");
const titleInput = document.querySelector("#titleInput")
const toastLive = document.querySelector("#liveToast")
const toastContent = document.querySelector(".toast-body")

const toastBootstrap = new bootstrap.Toast(toastLive)

addButton.addEventListener("click", () =>{
    
    if(linkInput != ''){
        linkGenerator(linkInput)
    }

})

function linkGenerator (input){

    let URL = input.value

    let options = {
        method: "POST",
        headers: new Headers({"content-type" : "application/json"}),
        body: JSON.stringify({url: URL, title: titleInput.value})

    }
    
    fetch("http://localhost:3000/api/add", options).then(res =>{
    res.json().then( data =>{

        if(data.newURL){

            linkResult.innerHTML = data.newURL

        }else if(data != Object){

            toastContent.textContent = data
            toastBootstrap.show()

        }

    })}).catch(error =>{
        console.log(error)
    })

}

