import "./Styling/OnlineMenu.css";
import OurMenu from "./OurMenu";
const ourmenu = [
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

export default function OnlineMenu() {
    return(
        
        <div style={{backgroundColor: "#495E57", paddingTop: "5.7rem", paddingBottom:"0"}}>
            <h1 style={{paddingBottom:"1rem", color:"#F4CE14"}}>This week specials!</h1>
            {ourmenu.map((cuisine) => {
                const {title, price, description, getImageSrc} = cuisine;
                return(
                    <div className="responsiveIII">
                        <div className="food-layout">
                       <img className="food-pic" src={getImageSrc()} alt="food"/>
                       <div className="food-profile">
                        <div className="food-header">
                            <div className="food-name">{title}</div>
                            <div className="food-price">{price}</div>
                        </div>
                        <div className="food-des">{description}</div>
                        </div>
                        </div> 
                    </div>
                )
            })}
            
        
        <OurMenu/>
        </div>
    );
}



