
const specialmenu = [
    {
        title: "Greek Salad",
        description:
          "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
        getImageSrc: () => require("./Assets/GreekSalad.jpg"),
    },
    {
      title: "Bruschetta",
      description:
        "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
      getImageSrc: () => require("./Assets/Bruschetta.jpg"),
  },
  {
    title: "Little Lemon Shortcake",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("./Assets/Lemon.jpg"),
  },

];

function Specials() {
    return(
        <div>
      {specialmenu.map((menu) => {
      const { title, description, getImageSrc } = menu;
    return (
          <div className="responsive">
            <div class="gallery">
                <img src={getImageSrc()} alt={title} />
                <div className="card-title" >{title}</div>
                <div className="desc">{description}</div>
            </div>
          </div>
  
                
              );
            })}
        </div>
        
    );
    };
    
    export default Specials;

                /*  */