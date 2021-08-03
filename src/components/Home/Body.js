import React,{useEffect} from 'react';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Body=()=>{
    useEffect(()=>{
        AOS.init({
            duration:1000,
            offset:200
          });
    },[])
    return(
        <div className="home_page_body">
            <div  className="home_page_body_content">
                <div className="home_page_body_content_img">
                <img src="https://pngimg.com/uploads/computer_pc/computer_pc_PNG17485.png" alt="mac" />
                </div>
            <div data-aos="fade-up" className="home_page_body_content_text">
            <h1>MacBook</h1>
            <p>The MacBook is a line of Macintosh laptop computers designed by Apple. ... The MacBook lineup came from the merging of the PowerBook and iBook lines as Apple transitioned over to using Intel instead of PowerPC processors. Click a link below for more information on each type of MacBook.</p>
            </div>
            </div>
            <Footer />
            </div>
    )
}

export default Body;