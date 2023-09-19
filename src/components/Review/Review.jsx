import { faArrowLeft, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import reviewCar1 from '../../assets/reviewCar1.JPEG';
import review1 from '../../assets/review.png';

const Review = () => {
  return (
    <section className='review section'>
      <div className="sectionContainer container">
        <div className="sectionHeading flex">
          <h3 className="sectionTitle">Recent Reviews</h3>

          <div className="navBtns flex">
            <FontAwesomeIcon className='icon leftIcon' icon={faArrowLeft} />
            <FontAwesomeIcon className='icon rightIcon' icon={faArrowRight} />
          </div>
        </div>

        <div className="reviewContainer grid">
          <div className="singleReview grid">
            <div className="imgDiv">
              <img src={reviewCar1} alt="Car Image" />
            </div>
            <h5 className="reviewTitle">
              2023 Cadiallac
            </h5>
            <span className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quod minima vitae incidunt ipsa.
            </span>

            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={review1} alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">Jakline Nelson</span>
                  <p>Chief Editor</p>
                </div>
              </div>
              <div className="rightDiv flex">
              <FontAwesomeIcon className='icon' icon={faStar} />
              <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>
          <div className="singleReview grid">
            <div className="imgDiv">
              <img src={reviewCar1} alt="Car Image" />
            </div>
            <h5 className="reviewTitle">
              2023 Cadiallac
            </h5>
            <span className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quod minima vitae incidunt ipsa.
            </span>

            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={review1} alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">Jakline Nelson</span>
                  <p>Chief Editor</p>
                </div>
              </div>
              <div className="rightDiv flex">
              <FontAwesomeIcon className='icon' icon={faStar} />
              <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>
          <div className="singleReview grid">
            <div className="imgDiv">
              <img src={reviewCar1} alt="Car Image" />
            </div>
            <h5 className="reviewTitle">
              2023 Cadiallac
            </h5>
            <span className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quod minima vitae incidunt ipsa.
            </span>

            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={review1} alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">Jakline Nelson</span>
                  <p>Chief Editor</p>
                </div>
              </div>
              <div className="rightDiv flex">
              <FontAwesomeIcon className='icon' icon={faStar} />
              <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review