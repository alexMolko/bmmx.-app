import React from "react";
import { Link } from "react-router-dom";

const BlogSidebar = () => {
  return (
    <div className="sidebar-style">
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">BUSCAR</h4>
        <div className="pro-sidebar-search mb-55 mt-25">
          <form className="pro-sidebar-search-form" action="#">
            <input type="text" placeholder="BUSCAR INSTRUCTIVO" />
            <button>
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div>
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">INSTRUCTIVOS RECIENTES</h4>
        <div className="sidebar-project-wrap mt-30">
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/sidebar-1.jpg"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>MOTOCICLETAS</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                INSTRUCTIVO MOTOCICLETAS 1
                </Link>
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/sidebar-2.jpg"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>Cuatrimotos</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                INSTRUCTIVO CUATRIMOTOS 2
                </Link>
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/sidebar-3.jpg"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>CUATRIMOTOS</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                INSTRUCTIVO CUATRIMOTOS 3
                </Link>
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/sidebar-2.jpg"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>MOTOCICLETAS</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                INSTRUCTIVO CUATRIMOTOS 4
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
