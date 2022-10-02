import next from "next";
import Image from "next/image";
import Link from "next/link";
import style from "../../../styles/footer.module.css";


const Footer = () => {
  return (


    // <!-- Site footer -->
    <footer className={style.sitefooter}>
      <div className={style.container}>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Codespace is an initiative  to help the upcoming programmers with the SDE.path. Codespace focuses on providing the most efficient code or snippets as the UI wants to be simple. We will help programmers build up concepts in different programming languages and DSA that include C, C++, Java, Python, HTML, CSS, SQL and Algorithm.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="#">SDE Sheet</a></li>
              <li><a href="#">UI Design</a></li>
              <li><a href="#">PHP</a></li>
              <li><a href="#">Java</a></li>
              <li><a href="#">Android</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><Link href="../../Home">Home </Link></li>
              <li><Link href="../../about">About Us </Link></li>
              <li><Link href="../../connect">Contact Us </Link></li>
              <li><Link href="../../Community">Community </Link></li>
              <li><Link href="../../practice">Practice </Link></li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className="container">
        <div class="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <a href="#">Codespace</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            {/* <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul> */}
          </div>
        </div>
      </div>
</footer>


    )
}

export default Footer