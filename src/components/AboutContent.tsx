import { Link } from "react-router-dom"
import "../components/AboutContentstyle.css"
import boys from '../assets/boys.avif'
const AboutContent = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row gy-5 justify-content-center justify-content-md-between align-items-center ">
          <div className="col-md-7 order-2 order-md-1">
            <div className="left">
              <h1>Who Am I?</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, impedit assumenda tenetur ut veniam deleniti. Cupiditate, iure unde odio mollitia sapiente quia pariatur delectus tempore modi aut soluta obcaecati ipsam?</p>
              <Link to="/contact" className="mt-2">
                <button className="btn">Download CV</button>
              </Link>
                <div className="row gy-3 mt-3">
                  <div className="col-6">
                    <div className="skill">
                      <div className="subject mb-1">Hard Work</div>
                      <div className="progress_bar">
                        <div className="progress_line" defaultValue="94%" style={{ maxWidth: "94%" }}>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="skill">
                      <div className="subject mb-1">Hard Work</div>
                      <div className="progress_bar">
                        <div className="progress_line" defaultValue="94%" style={{ maxWidth: "94%" }}>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="skill">
                      <div className="subject mb-1">Hard Work</div>
                      <div className="progress_bar">
                        <div className="progress_line" defaultValue="94%" style={{ maxWidth: "70%" }}>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="skill">
                      <div className="subject mb-1">Hard Work</div>
                      <div className="progress_bar">
                        <div className="progress_line" defaultValue="94%" style={{ maxWidth: "94%" }}>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
            </div>
          </div>
          <div className="col-8 col-sm-7 col-md-4 col-lg-3 order-1 order-md-2">
            <div className="img-stack top">
              <img src={boys} className="img" alt="image" />
            </div>
            {/* <div className="img-stack bottom">
                    <img src={react2} className="img" alt="image"/>
                </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
export default AboutContent