'use client'

import Link from "next/link"
import { useEffect } from "react";



export default function Error({error, reset}: {error: Error; reset: () => void}){

    useEffect(() => {
        console.log(error)
    },[error])

    return(
        <div>
            <h2>Algo deu errado...</h2>
            <div>
                <Link href='/'>
                    Voltar para pagina de home
                </Link>
            </div>

        </div>
    )
};






