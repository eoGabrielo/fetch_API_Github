
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Cadastro',
  description: 'Cadastros',
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


export default function Cadastro(){
  
  return(
    <div>
      <h1>Página de cadastros</h1>
      <h3>Essa pagina de cadastro de clientes do dashboard</h3>
      <br />
    </div>
  )
}
















