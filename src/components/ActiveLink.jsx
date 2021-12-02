import { cloneElement } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";


export const ActiveLink = ({ children, matchExactHref = false, ...rest } ) => {
  const { asPath } = useRouter();
  
  let isActive= false;  
  
  if(matchExactHref && (asPath === rest.href) ){
    isActive = true
  }

  if(!matchExactHref && 
      (asPath.startsWith(String(rest.href))) ||
      (asPath.startsWith(String(rest.as)))
    ){
    isActive = true

  }


  return (
    <Link {...rest}>
      { cloneElement(children, {
        color: isActive ? "#ff69ff" : "gray.50"
      }) }
    </Link>
  )
}