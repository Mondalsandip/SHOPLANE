import { useCallback, useState } from "react"

const useHttp=()=>{

  const [isLoading, stIsLoading] = useState()
  const [error, setError] = useState()
  const [isLoadingStated, setIsLoadingStatted]= useState()

  const getData =useCallback( async (requestConfig, applyData) => {
    stIsLoading(true)
    setError(null)
    setIsLoadingStatted(true)

    try {
      const response = await fetch(
        requestConfig.url,{
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body:    requestConfig.body ?  JSON.stringify(requestConfig.body) : null
        }
        
        
        
        
        )
      if (!response.ok) {
        throw new Error('Request Failed!')
      }
      const recvData = await response.json()
      // console.log('recvData put request',recvData)
      applyData(recvData)
    } catch (err) {
      setError(err.message || 'Something went wrong')
    }
    stIsLoading(false)
    setIsLoadingStatted(false)
  },[])

  return {isLoading,error,getData }


}

export default useHttp