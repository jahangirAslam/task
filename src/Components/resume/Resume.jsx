import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import React from "react";
import { ArrowDown } from 'react-bootstrap-icons';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./resume.css";


pdfMake.vfs = pdfFonts.pdfMake.vfs;
const Resume = () => {
    const handleDownload = () => {
        const element = document.getElementById('resume');
        const content = [
            {
                text: element.innerText,
                fontSize: 12,
                margin: [0, 0, 0, 12], // Optional margin
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
                    <Col sm={6} className="resume-address">
                        <h3>Nabeel Raza</h3>
                        <p>Lahore 54570</p>
                    </Col>
                    <Col sm={6} className="resume-accounts">
                        <p>github.com/Nabeel965 <br /> syednabeelraza437@gmail.com <br /> +92  323-0492481</p>
                    </Col>
                    <Col sm={12} className="resume-header">
                        <h3>Design leader with extensive experience in Product, User experience, Performance Marketing and Brand.</h3>
                    </Col>
                    <Col sm={12} className="resume-experience">
                        <p>Work Experience</p>
                        <p className="resume-projects">Southrac <br /> September 2022 - April 2023 <br /> Gym monitoring software using face recognition, FAST APIs, and AWS</p>
                        <p className="resume-projects">Toptal<br /> October 2021 - June 2022 <br /> IVR classifier for a global sales company using deep learning</p>
                        <p className="resume-projects">PI School<br /> December 2021 - February 2022 <br /> Project related to signal processing and deep learning</p>
                        <p className="resume-projects">LUMS University<br /> March 2018 - November 2020 <br /> Publication in Machine Learning, other projects related to signal processing, machine learning, and deep learning</p>
                    </Col>
                    <Col sm={12} className="resume-experience">
                        <p>Education</p>
                    </Col>
                    <Col sm={5} className="resume-study-Mas">
                        <h3>Master in Data Science</h3>
                        <p>ITU Lahore <br /> September 2018 - July 2020<br /></p>
                    </Col>
                    <Col sm={3} className="resume-study-bach offset-sm-4">
                        <h3>BSc Electrical Engineering</h3>
                        <p>UET Lahore <br /> September 2014 - May 2018<br /></p>
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
