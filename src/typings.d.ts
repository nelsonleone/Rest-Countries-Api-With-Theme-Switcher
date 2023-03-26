
type ILanguages = {
   [key:string]: any
}

type IName = {
   common: string,
   official: string,
   nativeName:object
}

interface INativeName {
   [key:string]:{
      common: string,
      official: string,
   }
}

interface ICurrency {
   [key:string]:{
      name: string,
   }
}


export  interface ICountryDetails {
   name: IName,
   nativeName: INativeName,
   population: number,
   region: string,
   subregion: string,
   capital: string,
   tld: string,
   currencies: ICurrency,
   languages: ILanguages,
   flags: {
      svg: string,
      png: string,
      alt: string
   },
   borders:string[],
   [key:string]: any
}



interface ISearchContext {
   inputValue: string,
   setSearchInputValue: (value:string) => void,
   setSelectedFilter: (filter:string) => void,
   selectedFilter: string,
   foundCountries: ICountryDetails[] | []
} 