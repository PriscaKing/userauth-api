import shortid from "shortid";
import URL from "../models/url.js";

export const handleGenerateNewShortURL= async (req, res)=> {
    try {
        const body = req.body;
        if (!body.url) return res.status(400).json({ error: "url is required" });
        const shortID = shortid();
      
        await URL.create({
          shortId: shortID,
          redirectURL: body.url,
          visitHistory: [],
          createdBy: req.user._id,
        });
      
        return res.render("home", {
          id: shortID})

          //Return response
    } catch (error) {
        next(error)
    }
};
  
  export const handleGetAnalytics =async (req, res) => {
   try {
     const shortId = req.params.shortId;
     const result = await URL.findOne({ shortId });
     return res.json({
       totalClicks: result.visitHistory.length,
       analytics: result.visitHistory,})
   } catch (error) {
    next(error)
   };
  }


  

export {handleGenerateNewShortURL,handleGetAnalytics}