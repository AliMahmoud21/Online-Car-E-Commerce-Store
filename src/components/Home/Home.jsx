import homeImg from '../../assets/logo5.png';

const Home = () => {
  return (
    <section className='home'>
      <div className="sectionContainer">
        <div className="homeText">
          <span className="homeSpan">
            Meet your new car
          </span>
          <h1 className='homeTitle'>Honda Civic Type R</h1>
          <div className="btns flex">
            <button className="btn">More Details</button>
            <button className="btn primaryBtn">Test Drive</button>
          </div>
        </div>

        <div className="homeImage">
          <img src={homeImg} alt="Home Image" />
        </div>
      </div>
    </section>
  )
}

export default Home;