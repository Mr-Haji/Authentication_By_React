import "./Card.css"
// import {reviewPic} from "../pics/reviewPic"


const Card = ({ image, title, category, description, price, rating, lastButton, id }) => {
    return (
        <div className="card" key={id}>
            <div className="cardImage">
                <img width="200px" src={image}>
                </img>
            </div>
            <div className="cardTitle">
                {title}
            </div>
            <div className="cardCategory">
                <a href="#"> <button className="cardCategoryBtn">
                    {category}
                </button></a>
            </div>
            <div className="cardDescription">
                {description}.....<a href="#"><span>See more</span></a>
            </div>
            <div className="cardPrice">
                <button className="cardPriceBtn">
                    {price} $
                </button>
            </div>
            <div className="cardRatingStar">
                {/* <img src={reviewPic} width={100} alt="Pic" /> */}
            </div>
            <div className="cardRatingCount">
                {rating}+ Reviews
            </div>
            <div className="cardAddToCart">
                <a href="#">
                    <button className="cardAddToCartBtn">
                        {lastButton}
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Card;