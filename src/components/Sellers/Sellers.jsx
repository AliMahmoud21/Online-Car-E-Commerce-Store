import logo1 from '../../assets/logo(1).png';
import logo2 from '../../assets/logo(2).png';
import logo3 from '../../assets/logo(3).png';
import logo4 from '../../assets/logo(4).png';
import logo5 from '../../assets/logo(5).png';
import logo6 from '../../assets/logo(6).png';

const Sellers = () => {
  return (
    <section className='sellers section'>
      <div className="sectionContainer container">
        <div className="sectionHeading grid">
          <h3 className="sectionTitle">Explore top sellers in town</h3>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil hic assumenda. Voluptate laborum quisquam ipsum velit iusto a cupiditate distinctio ipsa nesciunt debitis saepe aspernatur, exercitationem sit mollitia dolorum!</p>
        </div>

        <div className="sellersContainer grid">
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={logo1} alt="Seller Logo" />
            </div>
            <span className="info">
              <h4 className='name'>Toyota</h4>
              <p>from $40k</p>
            </span>
          </div>
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={logo2} alt="Seller Logo" />
            </div>
            <span className="info">
              <h4 className='name'>Mercedes Benz</h4>
              <p>from $60k</p>
            </span>
          </div>
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={logo3} alt="Seller Logo" />
            </div>
            <span className="info">
              <h4 className='name'>Volkswagen</h4>
              <p>from $35k</p>
            </span>
          </div>
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={logo4} alt="Seller Logo" />
            </div>
            <span className="info">
              <h4 className='name'>Hyundai</h4>
              <p>from $23k</p>
            </span>
          </div>
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={logo5} alt="Seller Logo" />
            </div>
            <span className="info">
              <h4 className='name'>Nissan</h4>
              <p>from $10k</p>
            </span>
          </div>
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={logo6} alt="Seller Logo" />
            </div>
            <span className="info">
              <h4 className='name'>Audi</h4>
              <p>from $36k</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sellers