
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner.jsx'
import Card from './Components/Card.jsx'
import CardDes from './Components/CardDes.jsx'
import Footer from './Components/Footer.jsx'
import Get from './Components/Get.jsx'
import Navbar from './Components/Navbar.jsx'
import Pricing from './Components/Pricing.jsx'
import Star from './Components/Star.jsx'
import Empty from './Components/Empty.jsx'

const GetModels = async () => {
  const res = await fetch("/Models.json");
  return res.json();
}
const Promise = GetModels();

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [carts, setCart] = useState([]);

  return (
    <>



      <Navbar />
      <Banner />
      <Star />
      <CardDes />
      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40  checked:bg-gradient-to-r
  checked:from-[#4F39F6]
  checked:to-[#9514FA]
  checked:text-white"
          aria-label="Products"
          onClick={() => setActiveTab("products")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40  checked:bg-gradient-to-r
  checked:from-[#4F39F6]
  checked:to-[#9514FA]
  checked:text-white"
          aria-label={`Cart (${carts.length})`}

          onClick={() => setActiveTab("cart")}
        />
      </div>

      {
        activeTab === "products" && <Card Promise={Promise} carts={carts} setCart={setCart} />
      }
      {
        activeTab === "cart" && <Empty carts={carts} />
      }
      <Get />
      <Pricing />

      <Footer />


    </>
  )
}

export default App
