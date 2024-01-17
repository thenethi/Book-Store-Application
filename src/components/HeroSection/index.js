import Carousel from 'react-bootstrap/Carousel';


function HeroSection() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://res.cloudinary.com/de2lwnsu7/image/upload/v1705243617/Untitled_1_ykklra.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/de2lwnsu7/image/upload/v1705243889/Firefly_book_images_and_make_your_own_path_to_business_success_99234_n7mbqh.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/de2lwnsu7/image/upload/v1705244999/Untitled_2_qohf8w.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;