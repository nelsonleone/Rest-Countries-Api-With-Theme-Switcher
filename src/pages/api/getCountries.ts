import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(req: NextApiRequest,res: NextApiResponse){

   const { limit } = req.query;
   const URL = 'https://restcountries.com/v3.1/all'

   try{
      const response = await axios.get(URL)
      const data = response.data
      const slicedData = data.slice(0,Number(limit))
      res.status(200).json(limit ? slicedData : data)
   }catch(err){
      res.status(500).json({error:"error getting countries data"})
   }  
}