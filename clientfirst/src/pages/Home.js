import React from 'react'


import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>

    <header className="header container d-md-flex justify-content-between">
        <div>
            <h1 className="pb-md-3">We serve high quality foods of all kinds.</h1>
            <p className="pb-3">Edit this text to make it your own. To edit, simply click directly on the text to start
                adding your own words. You can move the text.</p>
            <Link to="/Menu"><button className="btn">View Menu
                <img src="img/Arrow.png" className="btnar" />
            </button></Link>
            | <h4 className="mt-3">Opening Times</h4>
            <p>Sunday to Saturday  l  09:00 AM to 11:00 PM</p>
            <h4>Location</h4>
            <p>Master canteen, BBSR , Odisha 752054</p>
            <h4>Call us</h4>
            <p>+9776462441</p>
        </div>
        <div className="heimg">
            <img src="img/Header Image.jpg" alt="breaktime" />
        </div>
    </header>


<article className="aboutus container">
  <div className="d-md-flex justify-content-between">
    <div className="text-area">
        <p className="line">KNOW MORE ABOUT US<img src="img/Line.png" className="ms-3" /></p>
        <h2>We source sustainable & line caught Foods</h2>
        <p className="pt-3">Edit this text to make it your own. To edit, simply click directly on the text to start
        adding your own words. You can move the text by dragging and dropping the text anywhere on the page.
        </p>
    <div className="d-flex">
    <div>
        <p className="text"><img src="img/Icon.png" alt="icon" className="me-1" />10+ People</p>
        <p>We are Small Team</p>
        <p className="pt-3">Through True Rich Attended does no end it his mother since favourable.</p>
    </div>
    <div>
        <p className="text1"><img src="img/Icon.png" alt="icon" className="me-1" />2014</p>
        <p>We are From</p>
        <p className="pt-3">Through True Rich Attended does no end it his mother since favourable.</p>
      </div>
    <div>
        <p className="text2"><img src="img/Icon.png" alt="icon" className="me-1" />200k</p>
        <p>We Served</p>
        <p className="pb-2 pt-3">Through True Rich Attended does no end it his mother since favourable.</p>
      </div>
    </div>
<div>
    <Link to='/Menu'><button className="btn">View Menu
      <img src="img/Arrow.png" className="btnar" />
    </button></Link>
 </div>
</div>
 <div className="image-section d-flex justify-content-between">
    <div>
      <img src="img/Know more Image 1.jpg" alt="relaxtime" className="slika1 me-5" />
    </div>
  <div>
      <img src="img/Know more Image 2.jpg" alt="relaxtime" />
    </div>
   </div>
 </div>
</article>


    <div className="serving container d-md-flex justify-content-between mb-5">
        <div>
            <p className="wws mb-md-5">WHAT WE ARE SERVING<img src="img/Line.png" className="ms-2"/></p>
            <h2>We all have to eat, so why not do it beautifully?</h2>
        </div>
        <div className="ms-5 mt-md-5">
            <p>Through True Rich Attended does no end it his mother since favourable real had half every him case in
                packages enquire we up ecstatic.. Through True Rich Attended does no end it his mother</p>
        </div>
    </div>
    <div className="menu d-md-flex container">
        <div>
            <img src="img/Icon (1).png" alt="icon" />
            <h3>Quafe Cake</h3>
            <p className="mb-5">Through True Rich Attended no end it his mother since favourable real had half every him.
            </p>
            <img src="img/Serving 4.png" alt="icon" className="mt-5" />
            <h3>Cocktails</h3>
            <p>Through True Rich Attended no end it his mother since favourable real had half every him.</p>
        </div>
        <div>
            <img src="img/Vector.png" alt="icon" className="mt-4" />
            <h3>Cofee</h3>
            <p className="mb-5">Through True Rich Attended no end it his mother since favourable real had half every him.
            </p>
            <img src="img/Icon (3).png" alt="icon" className="mt-5" />
            <h3>Fast Food</h3>
            <p>Through True Rich Attended no end it his mother since favourable real had half every him.</p>
        </div>
        <div>
            <img src="img/Serving 4.png" alt="icon" />
            <h3>Fast Food</h3>
            <p className="mb-5">Through True Rich Attended no end it his mother since favourable real had half every him.
            </p>
            <img src="img/Icon (4).png" alt="icon" className="mt-5" />
            <h3>Snacks</h3>
            <p>Through True Rich Attended no end it his mother since favourable real had half every him.</p>
        </div>
    </div>


    <div className="ourmenu container d-md-flex justify-content-between">
        <div>
            <p className="meni mb-5">OUR MENU<img src="img/Line.png" className="ms-2" /></p>
            <h2>Discover our menu chart</h2>
            <h5>Most Popular Picks</h5>
        </div>
        <div className="paragraf">
            <p>Through True Rich Attended does no end it his mother since favourable real had half every him case in
                packages enquire we up ecstatic.. Through True Rich Attended does no end it his mother</p>
        </div>
    </div>

    <div className=" container mt-5 mb-5">
        <div className="slika">

            <div className="me-2">
                <img src="img/Image.jpg" alt="coffee" />
                <div className="item d-md-flex justify-content-between">
                    <p className="mt-md-2">Drop Cofee</p>
                    <p className="mt-md-2">$08.85</p>
                </div>
            </div>
            <div className="me-md-2">
                <img src="img/Image (1).png" alt="cake" />
                <div className="item d-md-flex justify-content-between">
                    <p className="mt-2">Choco Cup Cake</p>
                    <p className="mt-2">$4.85</p>
                </div>
            </div>
            <div>
                <img src="img/Image (2).png" alt="cake" />
                <div className="item d-md-flex justify-content-between">
                    <p className="mt-2">Chicken Burger</p>
                    <p className="mt-2">$8.85</p>
                </div>
            </div>
        </div>

        <div className="slika1">
            <div className="me-2">
                <img src="img/Image (3).png" alt="cake" />
                <div className="item d-md-flex justify-content-between">
                    <p className="mt-2">French Fries</p>
                    <p className="mt-2">$7.85</p>
                </div>
            </div>
            <div>
                <img src="img/Image (4).png" alt="cake" />
                <div className="item d-flex justify-content-between">
                    <p className="mt-2">Sandwitch</p>
                    <p className="mt-2">$3.97</p>
                </div>
            </div>
            <div className="ms-md-2">
                <img src="img/Image (5).png" alt="cake" />
                <div className="item d-flex justify-content-between">
                    <p className="mt-2">Chinese Soup</p>
                    <p className="mt-2">$8.85</p>
                </div>
            </div>
        </div>
        <div className="dugme text-center">
            <Link to='/Menu'><button className="btn">View Menu
                <img src="img/Arrow.png" />
            </button></Link>
        </div>
    </div>


    <div className="quote d-md-flex">
        <div className="quote-text container">
            <p className="qn mt-0">"</p>
            <p className="qnn mt-1">Edit this text to make it your own. To edit, simply click directly on the text to start
                adding your own words. You can move the text by dragging and dropping the text</p>
            <p className="ja mb-0">Joheny Andro</p>
            <p className="jaadres">Bhubaneswar, Odisha<img src="img/Img (1).jpg" alt="slika"
                    className="rounded-circle mb-2 me-4"/></p>
            <img src="img/Line (1).png" />
        </div>
        <div className="quotevideo">
            <img src="img/Video.jpg" alt="play" style={{width: "100%"}} />
        </div>
    </div>



    <div className="blog container">
        <h2>Read Our Lastest Blog</h2>
        <div className="d-md-flex justify-content-between mt-5">
            <div className="blog-card me-4">
                <p className="date px-3 py-3">21 Jun 2021</p>
                <h3 className="px-3">Extra Thick Homemad Pizza Sauce</h3>
                <p className="px-4 py-1">It is a long established fact that a reader will be distracted by the readable
                    content of a page.</p>
                <img src="img/blog1.jpg" alt="cofee" style={{width: "100%"}} />
            </div>
            <div className="blog-card me-4">
                <p className="date px-3 py-3">21 Jun 2021</p>
                <h3 className="px-3">The Best Way to Store Fresh Herbs</h3>
                <p className="px-4 py-4">It is a long established fact that a reader will be distracted by the readable
                    content of a page.</p>
                <img src="img/blog2.jpg" alt="cofee" style={{width: "100%"}} />
            </div>
            <div className="blog-card">
                <p className="date px-3 py-3">21 Jun 2021</p>
                <h3 className="px-3">5 ways to prepare porridge</h3>
                <p className="px-4 py-4">It is a long established fact that a reader will be distracted by the readable
                    content of a page.</p>
                <img src="img/blog3.jpg" alt="cofee" style={{width: "100%"}} />
            </div>
        </div>
    </div>
    </>
  );
};

export default Home;