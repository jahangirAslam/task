import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import React from "react";
import { AlignEnd, ArrowDown } from 'react-bootstrap-icons';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./resume.css";
import { Last } from 'react-bootstrap/esm/PageItem';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
const Resume = () => {
    const handleDownload = () => {
        const content = [
            {
                text: document.getElementById('resumename').innerText,
                bold:true,
                marginBottom:10,
    
            },
          {
            text: document.getElementById('resumeaddress').innerText,
            fontSize: 10,
            margin: [0, 0, 0, 0], // Optional margin
          },
          
          {
            text: document.getElementById('resumelinks').innerText,
            fontSize: 10,
            relativePosition: { x: 0, y: -40  },
            alignment: 'right',
            color: '#C1C1C3',
          },
          {
            text: document.getElementById('resumeheaders').innerText,
            fontSize: 10,
            marginTop:20, // Optional margin
            bold:true,
          },
          {
            text: document.getElementById('work').innerText,
            fontSize: 10,
            marginTop:20,
          },
          {
            text: document.getElementById('projects').innerText,
            fontSize: 10,
            marginTop:20,

            
          },
          {
            text: document.getElementById('education').innerText,
            fontSize: 10,
            marginTop:20,
            },
          {
            text: document.getElementById('master').innerText,
            fontSize: 12,
            marginTop:20,
            bold:true,

          },
          {
            text: document.getElementById('itu').innerText,
            fontSize: 10,
            marginTop:20,
            bold:true,


          },
          {
            text: document.getElementById('engineering').innerText,
            fontSize: 12,
            relativePosition: { x: 0, y: -55  },
            alignment: 'right',
            bold:true,

            
          },
          {
            text: document.getElementById('uet').innerText,
            fontSize: 10,
            relativePosition: { x: -88, y: -20  },
            alignment: 'right',
            bold:true,

            
          },
          {
            text: document.getElementById('date').innerText,
            fontSize: 10,
            relativePosition: { x: -13, y: -10 },
            alignment: 'right',
            bold:true,

            
          },
         


          
          
        ];
      
        // Define the PDF document
        const docDefinition = {
          content,
        };
      
        // Generate and save the PDF
        pdfMake.createPdf(docDefinition).download('resume.pdf');
      };
      
    



    
    return (
        <div>
            <Container fluid className="resume" id="resume" style={{ padding: "20px" }} >
                <Row className="resume-bg">
                    <Col sm={6}  className="resume-address">
                        <h3 id="resumename">Nabeel Raza</h3>
                        <p id="resumeaddress">Lahore 54570</p>
                    </Col>
                    <Col sm={6} id="resumelinks" className="resume-accounts">
                        <p>github.com/Nabeel965 <br /> syednabeelraza437@gmail.com <br /> +92  323-0492481</p>
                    </Col>
                    <Col sm={12} id="resumeheaders" className="resume-header">
                        <h3>Design leader with extensive experience in Product, User experience, Performance Marketing and Brand.</h3>
                    </Col>
                    <Col sm={12}  className="resume-experience">
                        <p id="work">Work Experience</p>
                        <div  id="projects">
                        <p className="resume-projects">Southrac <br /> September 2022 - April 2023 <br /> Gym monitoring software using face recognition, FAST APIs, and AWS</p>
                        <p className="resume-projects">Toptal<br /> October 2021 - June 2022 <br /> IVR classifier for a global sales company using deep learning</p>
                        <p className="resume-projects">PI School<br /> December 2021 - February 2022 <br /> Project related to signal processing and deep learning</p>
                        <p className="resume-projects">LUMS University<br /> March 2018 - November 2020 <br /> Publication in Machine Learning, other projects related to signal processing, machine learning, and deep learning</p>
                        </div>
                    </Col>
                    <Col sm={12} id="education" className="resume-experience">
                        <p>Education</p>
                    </Col>
                    <Col sm={4}  className="resume-study-Mas">
                        <h3 id="master">Master in Data Science</h3>
                        <p id="itu"> ITU Lahore <br /> September 2018 - July 2020<br /></p>
                    </Col>
                    <Col sm={3} className="resume-study-bach offset-sm-5">
                        <h3 id="engineering" > BSc Electrical Engineering</h3>
                        <p id="uet" > UET Lahore</p>
                        <p id="date" > September 2014 - May 2018</p>
                    </Col>
                    

                </Row>
            </Container>

            <Col sm={12}>
                <div className="downloadBtn">
                    <button onClick={handleDownload}>
                        <ArrowDown size={24} />     Download Resume
                    </button>
                </div>
            </Col>
            
        </div>
    );
}

export default Resume;
