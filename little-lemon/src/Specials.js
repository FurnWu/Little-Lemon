import './Styling/Specials.css';
import deliveryIcon from './Assets/delivery.svg'
import {Link} from 'react-router-dom';
const specialmenu = [
    {
        title: "Greek Salad",
        price: "$12.99",
        description:
          "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        getImageSrc: () => require("./Assets/GreekSalad.jpg"),
    },
    {
      title: "Bruschetta",
      price: "$5.99",
      description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      getImageSrc: () => require("./Assets/Bruschetta.jpg"),
  },
  {
       title: "Little Lemon Cake",
       price: "$5.00",
       description:
       "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
       getImageSrc: () => require("./Assets/Lemon.jpg"),
  },

];

function Specials() {
    return(
        <div style={{backgroundColor:"white"}}>
          <div className='specials-header' >
            <h1 style={{fontSize: '57px', backgroundColor:'white', paddingBottom:'1rem', paddingRight:'20.5rem'}}>This week specials!</h1>
            <Link to="/online-menu" style={{ textDecoration: 'none' }}>
            <button style={{marginBlock:'1.3rem', fontSize:'16px'}} className='hero-btn'>Online Menu</button>
          </Link>
          </div>
      {specialmenu.map((menu) => {
      const { title, price, description, getImageSrc } = menu;
    return (
        <div className="responsive">
          <ul>
            <div className="gallery-layout">
              <div class="gallery">
                <img src={getImageSrc()} alt={title} />
                <div className='whole-title'>
                    <div className="card-title" >{title}</div>
                  <div className="price-tag">{price}</div>
                </div>
                <div className="desc">{description}</div>
                <div className="card-footer">Order a delivery <img src={deliveryIcon} alt="delivery" style ={{height: '18px', width:'18px', marginLeft:5}} /></div>
              </div>
            </div>
           </ul>
            </div>
              );
            })}
        </div>
        
    );
    };
    
    export default Specials;

               