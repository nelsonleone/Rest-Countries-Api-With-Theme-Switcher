import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(req: NextApiRequest,res: NextApiResponse){

   const { value } = req.query;
   const searchURL = `https://restcountries.com/v3.1/name/${value}`
   try{
      const response = await fetch(searchURL)
      const data = await response.json()
      res.status(200).json(data)
   }catch(err){
      res.status(500).json({error:"No country was found"})
   }  
}