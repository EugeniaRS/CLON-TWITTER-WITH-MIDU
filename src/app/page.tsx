// Se crea un cliente  desde supabase 
//en un componente de servidor
import {createServerComponentClient} from '@supabase/auth-helpers-nextjs'
import {cookies} from 'next/headers'
import { AuthButton } from './components/auth-button';

export default  async function Home() {
  const supabase= createServerComponentClient({cookies});
  const {data:posts} =  await supabase.from('posts').select('*')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>Hola coders 👋</h1>
     <AuthButton/>
     <pre>
      {
        JSON.stringify(posts, null,2)
      }
     </pre>
    </main>
  )
}
