
const specialmenu = [
    {
        
        title: "Greek Salad",
        description:
          "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
        getImageSrc: () => require("./Assets/GreekSalad.jpg"),
    }

];

function Specials() {
    return(
        <div>
      {specialmenu.map((menu) => {
              const { title, description, getImageSrc } = menu;
              return (
                /*<ul>
                  <img src={getImageSrc()} alt="test" />
                  <h1>menu: {title}</h1>
                  <h1>detail: {description}</h1>
                </ul>*/
                <div class="gallery">
    
      <img src={getImageSrc()} alt="Greek Salad" width="600" height="400"/>
    <div className="title" >{title}</div>
    <div className="desc">{description}</div>
  </div>
                
              );
            })}
        </div>
        
    );
    };
    
    export default Specials;

                /*  */