import { useRouter } from 'next/router';
import React, {useEffect} from 'react';

const Lexicon = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('https://portal.verdensrommet.network/lexicon');
  });
  

  return (
    <></>
  )
}

export default Lexicon;