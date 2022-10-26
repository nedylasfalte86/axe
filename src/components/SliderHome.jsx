import React from 'react'

const SliderHome = () => {
  return (
    <div style={{marginTop: "2rem"}} id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={'https://domospare.com/modules/ps_imageslider/images/9f0ea7f55ecf42af2006860d55f9508a87c6e536_6abc185f0f42eb4db429cbd9b4e03f95a987e4ea_banniere.jpg'} className="d-block w-100" alt="..."></img>
          {/* <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div> */}
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={'https://www.cdiscount.com/other/sl_1280-p19-82713_220906144734.png'} className="d-block w-100" alt="..."></img>
          {/* <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div> */}
        </div>
        <div className="carousel-item">
          <img src={'https://www.espares.fr/images/pubs/content/homepages/espares-responsive/fr/slider/2021/july/spares-d.jpg'} className="d-block w-100" alt="..."></img>
          {/* <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div> */}
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default SliderHome