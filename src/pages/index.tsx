import Countries from '@/components/Countries'
import SearchSection from '@/components/SearchSection'
import { ICountryDetails } from '@/typings'
import { GetServerSideProps } from 'next'
import Head from 'next/head'


export interface ICountriesDetailsProps {
  countriesData: ICountryDetails[]
}

export default function Home(props:ICountriesDetailsProps) {

  return (
    <>
      <Head>
        <title> Frontend Mentor | RCAWTS </title>
      </Head>
      <main>
        <SearchSection />
        <Countries countriesData={props.countriesData} />
      </main>
    </>
  )
}


export const getServerSideProps:GetServerSideProps = async () => {

  const apiUrl = process.env.NODE_ENV === "development" ? 
  "http://localhost:3000" :
  "https://restcountries.com/v3.1/all";

  try{
    const response = await fetch(`${apiUrl}/api/getCountries?limit=50`)
    const countriesData = await response.json()
    return{
      props: {
        countriesData
      }
    }
  }
  catch(err){
     return{
        props:{
          countriesData:[]
        }
     }
  }
}
