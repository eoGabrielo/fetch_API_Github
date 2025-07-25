
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Painel',
  description: 'Painel Pagina',
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


export default function Dashboard(){
  
  return(
    <div>
      <h1>Página de Dashboard</h1>
      <span>Bem vindo ao painel do site</span>
      <br />
    </div>
  )
}
















