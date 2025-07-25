import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Meu site Contatos',
  description: 'Entre em contato',
  keywords: ['Html', 'CSS', 'JavaScript', 'Programação'],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index: true,
      follow: true,
      noimageindex: true,
    }
  }

}



export default function Contatos(){
  
  return(
    <div>
      <h1>Página de contatos</h1>
      <span>(xx) 000230-2323</span>
    </div>
  )
}