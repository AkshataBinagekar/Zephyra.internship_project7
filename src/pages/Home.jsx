import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
function Home() {
  return (
    <div className='home'>
      <Navbar />
      <section className='btn-nav'>
      <button>New Arrivals</button>
      <button>Customisable</button>
      <button>Festive Collection</button>
      <button>On Sale</button>
      </section>

      <section className='header'>
<h1>Handcrafted Scented Candle</h1>
      </section>

      <section className='card_container'>
      <div className='cards'>
<div className='picture'>

</div>
<i class="fa-solid fa-cart-shopping"></i>
<p>Rs.XXXX</p>
      </div>
      <div className='cards'>
<div className='picture'>

</div>
<i class="fa-solid fa-cart-shopping"></i>
<p>Rs.XXXX</p>
      </div>
      <div className='cards'>
<div className='picture'>

</div>
<i class="fa-solid fa-cart-shopping"></i>
<p>Rs.XXXX</p>
      </div>
      <div className='cards'>
<div className='picture'>

</div>
<i class="fa-solid fa-cart-shopping"></i>
<p>Rs.XXXX</p>
      </div>
      <div className='cards'>
<div className='picture'>

</div>
<i class="fa-solid fa-cart-shopping"></i>
<p>Rs.XXXX</p>
      </div>

      </section>

      <section className='card_container'>
      <div className='cards'>
<div className='picture'>

</div>
<i class="fa-solid fa-cart-shopping"></i>
<p>Rs.XXXX</p>
      </div>
      <div className='cards'>
<div className='picture'>

</div>
<i class="fa-solid fa-cart-shopping"></i>
<p>Rs.XXXX</p>
      </div>
      <div className='cards'>
<div className='picture'>

</div>
<i class="fa-solid fa-cart-shopping"></i>
<p>Rs.XXXX</p>
      </div>
      <div className='cards'>
<div className='picture'>

</div>
<i class="fa-solid fa-cart-shopping"></i>
<p>Rs.XXXX</p>
      </div>
      <div className='cards'>
<div className='picture'>

</div>
<i class="fa-solid fa-cart-shopping"></i>
<p>Rs.XXXX</p>
      </div>

      </section>
    </div>
  )
}

export default Home
