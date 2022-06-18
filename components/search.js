import React, {useState, useEffect} from "react"
import { useRouter } from 'next/router'
import Modal from 'react-modal';

const Search = ({params}) => {
	const router = useRouter();
  const [input, setInput] = useState();
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    if (e.key === 'Enter') {
      router.push(params + '/search/'+ lowerCase);
      setInput(lowerCase)
			setShow2(false);
    }
  };

	const [show2, setShow2] = useState(false);

	const handleClose2 = () => setShow2(false);

  const handleShow2 = () => {
    if (show2 == false){
      setShow2(true);
    } else{
      setShow2(false);
    }
  }

	const modalStyles = {
    overlay: {
      backgroundColor: 'transparent',
    },
  };
  

  return (
		<>
			<a onClick={handleShow2}>
				Search
			</a>
			<Modal isOpen={show2} onHide={handleClose2} className="search-modal" style={modalStyles}>
				<input type="text" onChange={inputHandler} onKeyUp={inputHandler} placeholder="type here..."/>
			</Modal>
		</>
    
  )
}

export default Search
