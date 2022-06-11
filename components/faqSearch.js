import React, {useState, useEffect} from "react"
import { useRouter } from 'next/router'

const FaqSearch = ({params}) => {
	const router = useRouter();
  const [input, setInput] = useState();
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    if (e.key === 'Enter') {
      router.push(params + '/search/'+ lowerCase);
      setInput(lowerCase)
    }
  };


  

  return (
		<input id="faqSearch" type="text" placeholder="Search" onChange={inputHandler} onKeyUp={inputHandler}/>
  )
}

export default FaqSearch
