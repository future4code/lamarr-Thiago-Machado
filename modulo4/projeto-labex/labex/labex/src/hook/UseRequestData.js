import {useEffect, useState} from 'react'
import axios from 'axios'


const useRequestData=(url)=>{
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)
    const [erro, setErro] = useState(undefined)
    
    useEffect(() => {
        setIsLoading(true);
        axios.get(url).then(response =>{
          setIsLoading(false)
          setData(response.data.trips)
        }).catch(error =>{
          setIsLoading(false)
          setErro(error)
        })
      }, [url])

    return [data,isLoading,erro];
}

export default useRequestData;
