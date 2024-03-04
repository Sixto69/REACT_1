import { useState } from 'react';
import './App.css';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/MyCard.jsx';



function App() {
  

  return (
    <>
    
    
      <Header title = "Adopta un Perrito"/>
       
       <div className='espacioCarta'>
       <MyCard
      image = "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg"
      title = "Milo"
      descripcion = "Conoce a Santi, tu nueva mejor amiga: Santi es una cachorra dulce y juguetona que ha pasado sus primeros meses de vida buscando un hogar donde pueda compartir su amor y alegría. Esta pequeña peluda tiene ojos brillantes y una cola que no para de moverse."
      color="danger"
      text=" Santi"
      />

      <MyCard
      image = "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"
      title = "Milo"
      descripcion = "Pluto: tu fiel compañero de por vida: Pluto es un cachorro inteligente y leal que está listo para formar parte de tu familia. Este pequeño amigo de cuatro patas tiene una personalidad juguetona y un corazón lleno de afecto, esperando encontrar un hogar donde pueda crecer y prosperar."
      color="primary"
      text=" Pluto"
      />

     
      <MyCard
      image = "https://images.pexels.com/photos/8497489/pexels-photo-8497489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      title = "Milo"
      descripcion = "Lala es una cachorra valiente que ha superado muchas adversidades en su corta vida. Abandonada en las calles, esta pequeña luchadora ha encontrado refugio en nuestro centro de adopción, donde ha demostrado ser una compañera cariñosa y leal."
      color="success"
      text=" Lala"
      />
<MyCard
      image = "https://images.pexels.com/photos/3763312/pexels-photo-3763312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      title = "Milo"
      descripcion = "La historia de Capitan te espera: Capitan es un cachorro lleno de energía y entusiasmo que está buscando a su compañero humano perfecto. Este pequeño travieso tiene una personalidad encantadora y un espíritu aventurero, listo para embarcarse en nuevas y emocionantes aventuras a tu lado."
      color="info"
      text=" Capitan"
      />
     </div>
      
      <Footer/>

      
      
    </>
  )
}

export default App

      
    