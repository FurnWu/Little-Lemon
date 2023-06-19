
const specialmenu = [
    {
        
        title: "Lemon Tart",
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
                <li>
                    <img src={getImageSrc()} alt="test" />
                  <h1>menu: {title}</h1>
                  <h1>detail: {description}</h1>
                </li>
              );
            })}
        </div>
        
    );
    };
    
    export default Specials;