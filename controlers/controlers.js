const Link = require("../models/linkSchema");

const createLink = async (req,res) =>{

    try{

        let allLinks = await Link.find({title: req.body.title})

        if(!(allLinks.length > 0)){

            let link = new Link(req.body)
            let ID = Math.random().toString(36).substring(2,6)
            link.ID = ID
            link.newURL= generateLink(link, ID)
            link.save()
            res.send(link)

        }
        else{
            res.status(400).send(JSON.stringify("Já foi utilizado"))
        }

    }catch(error){
        res.send(error)
        console.log(error)
    }

    
}

const redirect = async (req,res) =>{

    let params = req.params.args

    try{
    
    let findByID = await Link.findOneAndUpdate({ID: params}, {$set :{used : true}});
    let findByTitle = await Link.findOneAndUpdate({title: params}, {$set :{used : true}});

    let doc = findByID || findByTitle

        if(doc){
            if(!(doc.used == true)){
                res.redirect(doc.url);
            }else{
                res.status(400).send("Link já foi utilizado")
            }
        }
        else{
            res.send("Link não encontrado")
        }

    }catch(error){

        res.send(error)

    }
}

module.exports = {createLink, redirect}


function generateLink(doc, ID){

    return `http://localhost:3000/${!doc.title ? ID : doc.title}`

}