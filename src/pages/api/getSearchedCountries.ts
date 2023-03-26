import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(req: NextApiRequest,res: NextApiResponse){

   const { value } = req.query;
   const searchURL = `https://restcountries.com/v3.1/name/${value}?fullText=true`
   try{
      const response = await axios.get(searchURL)
      res.status(200).json(response.data)
   }catch(err){
      res.status(500).json({error:"No country was found"})
   }  
}