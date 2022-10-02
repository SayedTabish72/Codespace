import Navigation from "../Component/Navigation";
import Link from 'next/link';
import style from "../../styles/About.module.css"
import Image from "next/image";
import bg from "../../public/Bgbanner.png"
import sayed from "../../public/sayedtabish.png"
import Footer from "../Component/Footer";


const index = () => {
  return (
    <div>
      <Navigation/>
      <div className={style.main}>
        <div className={style.overlay}></div>
        <Image className={style.bg} src={bg} />
        <h1 className={style.h1}>Our Team<strong/></h1>
        <p className={style.title}>"It is literally true that you can succeed best and quickest by helping others to succeed."</p>
        <div className={style.card}>
        <div className={style.cardconttent}>
        <Image className={style.sayed} src={sayed}alt="profile"/>
        <div class={style.details}>
            <h2>Sayed Tabish</h2>
            <p>Full Stack Developer</p>
        </div>
        <p id={style.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    </div>
      </div>
      <Footer/>
    </div>
  )
}

export default index
