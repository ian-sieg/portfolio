import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './style.css'

export default function Resume() {
    return(
        <section id="resume" className="resume-sect">
            <div className='section-title'>
                <h1>Resume</h1>
                <hr/>
            </div>
            <Container>
                <Row md={1} lg={2}>
                    <Col>
                        <h1><u>Summary</u></h1>
                        <ul>
                            <li>
                                <h2>ian sieg</h2>
                                <p>Full stack web application developer and dynamic problem solver with a background in graphic design and communications, administration, and resource development. A quick-study who enjoys working collaboratively to build accessible, secure websites and develop creative solutions to issues. Strong organization and leadership abilities.</p>
                            </li>
                        </ul>
                        <h1><u>Technical Skills</u></h1>
                        <ul>
                            <li>
                                <p>JavaScript, ES6, HTML5, CSS3, React, AWS, Java, Spring Boot, Thymeleafe, Python, Flask,  OOP,  jQuery, Node.js, Express.js, Handlebars, MySQL, Sequelize, MongoDB, Mongoose, RESTful  APIs, GraphQL, Apollo, Bootstrap, Materialize CSS, Tailwind CSS, Semantic UI, Material UI, GitHub,  Git Bash/Terminal
</p>
                            </li>
                        </ul>

                        <h1><u>Education</u></h1>
                        <ul>
                            <li>
                                <h2>Certificate - Full Stack Web Developer</h2>
                                <b>Sep 2022</b>
                                <p>Northwestern University</p>
                            </li>
                            <li>
                                <h2>Certificate - Writing for Digital Media</h2>
                                <b>Dec 2020</b>
                                <p>Northwestern University</p>
                            </li>
                            <li>
                                <h2>BA - Cultural Anthropology</h2>
                                <b>May 2016</b>
                                <p>Willamette University</p>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h1><u>Experience</u></h1>
                        <ul>
                            <li>
                                <h2>Program Assistant</h2>
                                <b>Northwestern University</b>
                                <p>Sep 2018 - present</p>
                                <ul>
                                    <li>Trains new employees on department specific processes and procedures</li>
                                    <li>Collaborates with a team of seven to provide coverage during staffing shortages and restructuring</li>
                                    <li>Utilizes Cascade CMS to manage and update 3 separate websites</li>
                                    <li>Manages over 30 faculty and staff calendars, purchases and travel</li>
                                </ul>
                            </li>
                            <li>
                                <h2>Board Member, Membership Manager</h2>
                                <b>Praxis Collaborative Chicago</b>
                                <p>Jun 2018 - Feb 2019</p>
                                <ul>
                                    <li>Increased membership by over 50%</li>
                                    <li>Created the organization's website on Wordpress</li>
                                    <li>Tracked organization expenses in QuickBooks</li>
                                </ul>
                            </li>
                            <li>
                                <h2>Resource Development and Communications Americorps VISTA</h2>
                                <b>HANA Center</b>
                                <p>Apr 2017 - Apr 2018</p>
                                <ul>
                                    <li>Led a team of 8 staff to solicit over $10,000 of in-kind donations for the  gala</li>
                                    <li>Built a donor tracking system and trained other employees on how to use it</li>
                                    <li>Supported a 22 day, 24h/day action in front of the white house through filming videos, coordinating supply needs, and troubleshooting IT issues while managing team burnout and stress</li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col sm={{span:2, offset:10}}><p><a download='' href='../../assets/files/ims_resume.pdf'>Download full resume</a></p></Col>
                </Row>
            </Container>
        </section>
    )
}