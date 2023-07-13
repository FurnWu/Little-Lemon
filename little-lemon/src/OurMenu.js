import "./Styling/OnlineMenu.css";
const ourmenu = [
    {
        title: "Greek Salad",
        price: "$12.99",
        getImageSrc: () => require("./Assets/GreekSalad.jpg"),
    },
    {
      title: "Bruschetta",
      price: "$5.99",
      getImageSrc: () => require("./Assets/Bruschetta.jpg"),
  },
  {
       title: "Little Lemon Cake",
       price: "$5.00",
       getImageSrc: () => require("./Assets/Lemon.jpg"),
  },
  {
    title: "Caponata",
    price: "$13.00",
    getImageSrc: () => require("./Assets/Food/Caponata.jpg"),
},
{
    title: "Chickpeas Stew",
    price: "$14.00",
    getImageSrc: () => require("./Assets/Food/Chickpeas Stew.jpg"),
},
{
    title: "Creme Brulee",
    price: "$7.00",
    getImageSrc: () => require("./Assets/Food/Creme Brulee.jpg"),
},
{
    title: "Hibiscus Tea",
    price: "$5.00",
    getImageSrc: () => require("./Assets/Food/Hibiscus Tea.jpg"),
},
{
    title: "Limonada",
    price: "$5.29",
    getImageSrc: () => require("./Assets/Food/Limonada.jpg"),
},
{
    title: "Mussel Soup",
    price: "$15.00",
    getImageSrc: () => require("./Assets/Food/Mussel Soup.jpg"),
},
{
    title: "Olive and Avocado Salad",
    price: "$13.00",
    getImageSrc: () => require("./Assets/Food/Olive and Avocado Salad.jpg"),
},
{
    title: "Pasta Arrabiata",
    price: "$13.00",
    getImageSrc: () => require("./Assets/Food/Pasta Arrabiata.jpg"),
},
{
    title: "Sangria",
    price: "$6.00",
    getImageSrc: () => require("./Assets/Food/Sangria.jpg"),
},
{
    title: "Tiramisu",
    price: "$5.29",
    getImageSrc: () => require("./Assets/Food/Tiramisu.jpg"),
},
{
    title: "Tzatziki",
    price: "$11.00",
    getImageSrc: () => require("./Assets/Food/Tzatziki.jpg"),
},
];

export default function OurMenu() {
    return(
        <div style={{backgroundColor: "white", paddingTop: "3rem", paddingBottom:"3rem"}}>
            <h1 style={{paddingBottom:"2rem", color:"black"}}>Our Menu</h1>
            {ourmenu.map((cuisine) => {
                const {title, price, getImageSrc} = cuisine;
                return(
                    <div className="responsiveIII" style={{height:"17rem", borderRadius:"16px", boxShadow:"0 10px 20px 0 gray"}}>
                        <div className="food-layout">
                       <img className="food-pic" src={getImageSrc()} alt="food"/>
                       <div className="food-profile">
                        <div className="food-header">
                            <div className="food-name">{title}</div>
                            <div className="food-price">{price}</div>
                        </div>
                        </div>
                        </div> 
                    </div>
                )
            })}
        </div>
    );
}