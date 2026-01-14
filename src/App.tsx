import { Header } from './components/Header'
import graph from '@/assets/images/bg_graph.svg'
import './App.css'
import {WelcomeSection} from "@/components/WelcomeSection";
import {Events} from "@/components/events";

function App() {


  return (
    <>
        <div id="bg" className='fixed inset-0 top-0 left-0 -z-10'>
            <img src={graph} className='absolute -left-7 top-0 w-[654px] opacity-50' alt=""/>
            <div className="absolute w-509 h-509 rounded-full opacity-50 -top-full -left-[50%] radial-glow "/>
        </div>
        <Header />
            <main className='container mx-auto py-20 w-full'>
                <WelcomeSection/>
                <Events/>
            </main>

    </>
  )
}

export default App
