import React from "react";

const Slide = () => {
	return ( 
	<div>
		<section id="hero">
		<div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">
	
		  <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
	
		  <div className="carousel-inner" role="listbox">
	
			{/* <!-- Slide 1 --> */}

			<div class="carousel-item active" id="slide1">
			  <div class="carousel-container">
				<div class="container">
				  <h2 class="animate__animated animate__fadeInDown">Bienvenido a <span>TRANSFLULLANOS</span></h2>
				  <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus ea molestias est non reiciendis consectetur facere fugit, sapiente recusandae sit, inventore eius officia, quia adipisci ipsa earum officiis eos.</p> 
				  
				  <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
				</div>
			  </div>
			</div>
	
		  </div>
	
	
		</div>
	  </section>.

	  {/* <!-- End Hero --> */}

	  </div>
	 );
}
 
export default Slide;