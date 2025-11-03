import { nanoid } from "nanoid";
import { addURL, getSmallToBig } from "../services/url-service.js";

export const getBigURL = async (req , res) => {
    const {code} = req.params;
    const doc = await getSmallToBig(code);
    try {

    if(doc && doc._id)
    {
        res.redirect(doc.bigurl);

    }
    else{
        res.json({message:'invalid small url'});
    }
}
catch(err)
{
    console.log(err);
    res.json({message:'invalid small url',err});

}

}
export const urlShort = async (req , res) => {
    const bigUrl = req.body.bigUrl;
    console.log(bigUrl);
    try{
    const num = nanoid();
    const doc = await addURL({email:req.body.email , shortid:num , bigurl:bigUrl});
    if(doc && doc._id){
        res.json({shorturl:process.env.BASE_URL+'small/'+num});
    }
    else{
        res.json({error:"Unable to generate URL"});
    }
}

    catch(err){
        console.log(err);
        res.json({error:"Unable to generate URL"});
}
};