import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties, FC, PropsWithChildren } from "react";
import { ScriptProps } from "next/script";

const style: CSSProperties ={
    color: '#0070f3',
    textDecoration: 'underline'
}

interface Props{
  text: string;
  href: string;
}

export const ActiveLink: React.FC<PropsWithChildren<Props>>  = ({text, href,}) => {
    const {asPath} = useRouter();
 

 

  return (
    <Link href={href} style={asPath === href ? style: undefined}> 
    {text}
    </Link>
  )
}
