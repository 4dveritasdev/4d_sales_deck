import { Box } from '@mui/material';
import slider1 from '../assets/1.png';
import slider2 from '../assets/2.png';
import slider3 from '../assets/3.png';
import slider4 from '../assets/4.png';
import slider5 from '../assets/5.png';
import slider6 from '../assets/6.png';
import slider7 from '../assets/7.png';
import slider8 from '../assets/8.png';
import slider9 from '../assets/9.png';
import slider10 from '../assets/10.png';
import slider11 from '../assets/11.png';
import slider12 from '../assets/12.png';
import slider13 from '../assets/13.png';
import slider14 from '../assets/14.png';
import slider15 from '../assets/15.png';
import slider16 from '../assets/16.png';
import video from '../assets/video.mp4';
import emailjs from "@emailjs/browser";
import { useRef } from 'react';

const Page = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_0gmm02w",
            "4d_template",
            form.current,
            "Qz2HS_HcW236_Hyco"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
          
        emailjs
            .sendForm(
                "service_c1h3dss",
                "4d_template_2",
                form.current,
                "Qz2HS_HcW236_Hyco"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    return (
        <Box sx={{ backgroundColor: 'gray' }}>
            
            
            <Box sx={{ position: 'relative' }}>
                <img src={slider1} width='100%' alt=''/>
                <Box sx={{ position: 'absolute', top: '12%', left: '40%', right: '5%'}}>
                    <video autoPlay={true} loop muted playsInline width="100%">
                        <source src={video} type="video/mp4" />
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </Box>
            </Box>
            <img src={slider2} width='100%' alt=''/>
            <img src={slider3} width='100%' alt=''/>
            <img src={slider4} width='100%' alt=''/>
            <img src={slider5} width='100%' alt=''/>
            <img src={slider6} width='100%' alt=''/>
            <img src={slider7} width='100%' alt=''/>
            <img src={slider8} width='100%' alt=''/>
            <img src={slider9} width='100%' alt=''/>
            <img src={slider10} width='100%' alt=''/>
            <img src={slider11} width='100%' alt=''/>
            <img src={slider12} width='100%' alt=''/>
            <img src={slider13} width='100%' alt=''/>
            {/* <img src={slider14} width='100%' alt=''/> */}
            <img src={slider15} width='100%' alt=''/>
            {/* <img src={slider16} width='100%' alt=''/> */}

            <Box sx={{ backgroundColor: '#080808', textAlign: 'center', pt: 6}}>
                <label style={{ color: '#d3ab4f', fontSize: 60, fontWeight: 'bold' }}>Contact Us </label>
                <form ref={form} onSubmit={sendEmail} style={{display: 'flex', paddingBottom: 100, paddingTop: 50}}>
                    <div style={{ width: '40%', display: 'flex', flexDirection: 'column', textAlign: 'right'}}>
                        <label style={{ color: '#d3ab4f', fontSize: 24, paddingTop: 53 }}>Name : </label>
                        <label style={{ color: '#d3ab4f', fontSize: 24, paddingTop: 30 }}>Email :  </label>
                        <label style={{ color: '#d3ab4f', fontSize: 24, paddingTop: 30 }}>Message :  </label>

                    </div>
                    <div style={{ width: '60%', display: 'flex', flexDirection: 'column', paddingLeft: 20, paddingTop: 50}}>
                        <input required type="text" name="from_name" style={{ fontSize: 20, width: 400, backgroundColor: '#333', border: 0, padding: 10, color: '#d3ab4f' }} />   
                        <br/>
                        <input required type="text" name="from_email" style={{ fontSize: 20, width: 400, backgroundColor: '#333', border: 0, padding: 10, color: '#d3ab4f' }} />
                        <br/>
                        <textarea required name="message" rows="5" style={{ fontSize: 20, width: 400, backgroundColor: '#333', border: 0, padding: 10, color: '#d3ab4f' }} />
                        <br/>
                        <button type="submit" style={{ backgroundColor: '#d3ab4f', fontSize: 20, width: 420, padding: 10, fontWeight: 'bolder'}}>Send Message</button>
                    </div>                    
                </form>
            </Box>
        </Box>
    );
}

export default Page;