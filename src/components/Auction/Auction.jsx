import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import car1 from '../../assets/car11.JPEG';

const Auction = () => {
  return (
    <section className="auction section">
      <div className="sectionContainer container">
        <div className="sectionHeading flex">
          <h3 className="sectionTitle">
            Active Auctions
          </h3>

          <div className="navBtns flex">
            <FontAwesomeIcon className="icon leftIcon" icon={faArrowLeft} />
            <FontAwesomeIcon className="icon leftIcon" icon={faArrowRight} />
          </div>
        </div>
        <div className="carContainer grid">
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi 54 Premium Plus</h5>
            <span className="miles">11457Miles</span>
            <span className="AWD">Awd 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$42,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
          <div className="singleCar singleCarActive grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi 54 Premium Plus</h5>
            <span className="miles">11457Miles</span>
            <span className="AWD">Awd 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$42,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi 54 Premium Plus</h5>
            <span className="miles">11457Miles</span>
            <span className="AWD">Awd 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$42,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
          <div className="singleCar singleCarActive grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi 54 Premium Plus</h5>
            <span className="miles">11457Miles</span>
            <span className="AWD">Awd 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$42,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi 54 Premium Plus</h5>
            <span className="miles">11457Miles</span>
            <span className="AWD">Awd 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$42,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
          <div className="singleCar singleCarActive grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi 54 Premium Plus</h5>
            <span className="miles">11457Miles</span>
            <span className="AWD">Awd 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$42,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Auction;