import React from 'react'


const Blog = () => {
  return (
    <>
    <h2 className="text-center mb-5 mt-5">Featured Blogs</h2>
    <div className="blogpage container d-flex">
   <div className="blog1 ">
        <h2>A guide to Thai Curry</h2>
      <div className="d-flex justify-content-between">  
        <div className="d-flex mt-5 ms-3">
           <img src="img/Ellipse 150.png" alt="picture" />
           <p className="ms-2">Andrew Jonson  </p>
           <p> 27th January 2021</p>
        </div>
        <div >
        </div>
        <div className="read">
            <p>Read More<img src="img/Arrow 6.png" className="me-2 ms-2" /></p>
        </div>
      </div>  
    </div>
    <div className="ms-5">
        <img src="img/blog image1.png" alt="work" /> 
       <h4>You can move the text by dragging and dropping the text </h4>
        <p>Writing UX copies can be a little frustrating and confusing, and sometimes </p>
        <img src="img/imageblog2.png" alt="cofee" />
        <h4>Edit this text to make it your own. To edit, simply  </h4>
        <p>Writing UX copies can be a little frustrating and confusing, and sometimes </p>
        <img src="img/imageblog3.png" alt="work" />
        <h4>You can move the text by dragging and dropping the text </h4>
        <p>Writing UX copies can be a little frustrating and confusing, and sometimes </p>
    </div>
</div>  

<div className="blog1-naslov">
     <h3 className="text-center mb-5">All Articles</h3>
<div className="all container d-flex">
 <div>
  <div className="d-flex">
    <img src="img/all1.png" alt="workplace" />
    <div className="ms-5 mt-3">
      <img src="img/Ellipse 150.png" alt="picture" />
      <p>Andrew Jonson  </p>
      <p> 27th January 2021</p>
      <h4 className=" mb-5">A guide to Thai Curry</h4>
      <p>Read More<img src="img/Arrow 6.png" className="me-2 ms-2" /></p>
    </div> 
  </div>
  <div className="d-flex">
    <img src="img/all2.png" alt="workplace" className="mt-3" />
    <div className="ms-5 mt-3">
      <img src="img/Ellipse 150.png" alt="picture" />
      <p>Andrew Jonson  </p>
      <p> 27th January 2021</p>
      <h4 className=" mb-5">How to store Tomatoes (and Whether to Refrigerate Them)</h4>
      <p>Read More<img src="img/Arrow 6.png" className="me-2 ms-2 " /></p>
    </div> 
  </div>
</div>
<div>
  <div className="d-flex">
    <img src="img/all3.png" alt="workplace" />
    <div className="ms-5 mt-3">
      <img src="img/Ellipse 150.png" alt="picture" />
      <p>Andrew Jonson  </p>
      <p> 27th January 2021</p>
      <h4 className=" mb-5">The best guacamole recipe with only 4 ingredients</h4>
      <p>Read More<img src="img/Arrow 6.png" className="me-2 ms-2" /></p>
    </div> 
  </div>
  <div className="d-flex">
    <img src="img/all4.png" alt="workplace" className="mt-3" />
    <div className="ms-5 mt-3">
      <img src="img/Ellipse 150.png" alt="picture" />
      <p>Andrew Jonson  </p>
      <p> 27th January 2021</p>
      <h4 className=" mb-5">The Absolute Best Way to Cook French Fries</h4>
      <p>Read More<img src="img/Arrow 6.png" className="me-2 ms-2" /></p>
    </div> 
  </div>
 </div>
 </div>
</div>
</>
  );
};

export default Blog;