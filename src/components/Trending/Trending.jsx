import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import car1 from '../../assets/car18.JPEG';
import car2 from '../../assets/car17.JPEG';

const Trending = () => {
  return (
    <section className="trending section">
      <div className="sectionContainer container">
        <div className="sectionHeading flex">
          <h3 className="sectionTitle">
            Trending Near You
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
            <h5 className="carTitle">Mercedes C63 Amg</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD"> The 2023 Mercedes-AMG C63 S, for example, is equipped with a hand-built, twin-turbo 4.0-liter V-8 engine that produces 503 horsepower and 516 lb-ft of torque</span>

            <div className="price_seller flex">
              <span className="price">$42,200</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Mercedes C63 Amg</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD"> The 2023 Mercedes-AMG C63 S, for example, is equipped with a hand-built, twin-turbo 4.0-liter V-8 engine that produces 503 horsepower and 516 lb-ft of torque</span>

            <div className="price_seller flex">
              <span className="price">$42,200</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Mercedes C63 Amg</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD"> The 2023 Mercedes-AMG C63 S, for example, is equipped with a hand-built, twin-turbo 4.0-liter V-8 engine that produces 503 horsepower and 516 lb-ft of torque</span>

            <div className="price_seller flex">
              <span className="price">$42,200</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trending