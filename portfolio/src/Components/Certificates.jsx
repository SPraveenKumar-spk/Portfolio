import Image1 from '../assets/Conference (2).png';
import Image2 from '../assets/Algorithmist.jpeg';
import Image3 from '../assets/Ibm.jpeg';
import Image4 from '../assets/vintra.png';
import Image5 from '../assets/Hyd.jpeg';
import Image6 from "../assets/oracle.png"
function Certificates() {
  const images = [
    {
      src: Image1,
      alt: 'First slide',
    },
    {
      src: Image2,
      alt: 'Second slide',
    },
    {
      src : Image6,
      title : "sixth slide"
    },
    {
      src: Image3,
      alt: 'Third slide',
    },
    {
      src: Image4,
      alt: 'Fourth slide',
    },
    {
      src: Image5,
      alt: 'Fifth slide',
    }
  ];

  return (
    <div className="container pb-5 ">
      <h2 className="text-info">Certifications</h2>
      <div id="carouselExampleIndicators" className="carousel slide mt-5 " data-bs-ride="carousel">
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner ">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={image.src} className="d-block mx-auto  rounded-5" alt={image.alt} style={{ maxHeight: '400px', maxWidth: '80%' }} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Certificates;
