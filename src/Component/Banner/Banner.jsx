

const Banner = () => {
    return (
        <div className="carousel w-full h-[550px] mb-10">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/2KLRVCT/regibg.pnghttps://i.ibb.co/5G80cm5/banner1.jpg" className="w-full " />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-5 bg-slate-400">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-slate-400">❯</a>
    </div>
    <div className="absolute  transform -translate-y-1/2 left-5 right-5 bottom-0 space-y-4 p-4 bg-gradient-to-r from-[#151515] to-[ #15151500 ]">
     <div className="text-white w-1/3 ">
     <p className="text-5xl font-bold ">Get Hired: Find Your Dream Job Here</p>
      <p>There are many variations of Job available, Search Your Job</p>
     </div>
      

    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/GsYnKbz/banner2.webp" className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5 bg-slate-400">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-slate-400">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/87cFXBz/banner3.png" className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-5 bg-slate-400">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-slate-400">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/Dgy6828/banner4.webp" className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-5 bg-slate-400">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-slate-400">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;