import Link from 'next/link'
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(
  () => 
    Promise.all([
      import('./components/Heavy'),
      new Promise(resolve => setTimeout(resolve, 2000)) // Затримка 2 секунди
    ]).then(([module]) => module),
  { 
    loading: () => <div>Завантаження... (чекайте 2 секунди)</div>
  }
)
 
export default function Page() {

 

  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <HeavyComponent/>
    </div>
  )
}