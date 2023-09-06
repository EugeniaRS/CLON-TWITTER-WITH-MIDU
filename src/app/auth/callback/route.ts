//se crea la ruta
//para que responda en NEXT.JS le tengo que indicar que es route.ts
//asi se crean los endpoints de la API en NEXT.JS

//se crea un cliente

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { type  NextRequest, NextResponse } from "next/server";

// esto es una opcion de NEXT.JS para evitar que cachee de forma estatica
// la ruta  y que siempre se ejecute en el servidor
export const dynamic= 'force-dynamic'
//para crear la API es :
//nombre del metodo que quiero que responda (GET,PATCH, POST)
export async function GET(request:NextRequest) {
    // la plataforma web 
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')
    if(code){
        const supabase= createRouteHandlerClient({cookies})
        //esta llamada usa el codigo que le hemospasado  por URL
        //NOS DEVUELVE la sesion del user
       await supabase.auth.exchangeCodeForSession(code)
    }

    return NextResponse.redirect('/')
  
}