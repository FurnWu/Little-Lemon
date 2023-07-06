import './Testimonial.css';
import rating from './Assets/stars.png'

const comments = [
    {
        customerName: "Nora H.",
        comment: "Little lemon cake is so amazing, you've to try it!",
        getImageSrc: () => require("./Assets/Profile/Nora.png"),
    },
    {
        customerName: "Alex D.",
        comment: "fantastic service, and the great quality of food",
        getImageSrc: () => require("./Assets/Profile/Alex.png"),
    },
    {
        customerName: "Henry W.",
        comment: "Interesting Mediterranean cuisine, with a great atmosphere.",
        getImageSrc: () => require("./Assets/Profile/Henry.png"),
    },
    {
        customerName: "Gabriella S.",
        comment: "The staffs are so nice, and the food is great.",
        getImageSrc: () => require("./Assets/Profile/Gabriella.png"),
    }
];

function Testimonial() {
    return(
        <div style={{backgroundColor: "#EDEFEE", paddingBottom:"3rem", paddingTop:"1rem"}}>
            <div className='testimonial-header'>
                <h1 style={{color: "#333333", paddingBottom: "1rem", fontSize:"55px"}}>Our customers say ...</h1>
            </div>
        {comments.map((customer) => {
            const {customerName, comment, getImageSrc } = customer;
            return (
                <div className="responsiveII">
                    <ul>
                    <div className="customer-card">
                        <div className="profile">
                            <img src={getImageSrc()} alt="customer profile" style={{width: "4rem"}}/>
                            <div className="customer-name">{customerName}</div>
                        </div>
                        <div className="review">
                            <img src={rating} alt="rating" style={{width: "5rem"}}/>
                            <div className="customer-say">{comment}</div>
                        </div>
                    </div>
                    </ul>
                </div>
            );
        })}
        </div>

    );
};

export default Testimonial;