import { ICountryDetails } from "@/typings";
import Image from "next/image";
import Link from "next/link";

"use-client"

export default function Country({ CountryDetails }: { CountryDetails : ICountryDetails }){

   const {
     name:{
       official,
       common
     },
     flags,
     population,
     region,
     capital
   } = CountryDetails;

   return(
      <Link href={`/countries/${official}`}>
         <div className="country-item">
            <img src={flags.svg} alt={flags.alt}  /> 
            <div className="details-container">
               <h2>{common}</h2>
               <p>Population: <span>{population}</span></p>
               <p>Region: <span>{region}</span></p>
               <p>Capital: <span>{capital}</span></p>
            </div>
         </div>
      </Link>
   )
}
   