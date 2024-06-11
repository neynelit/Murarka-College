import React from 'react'
import './Navebar.css'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router'

function Navebar() {
    const navigate = useNavigate()
  return (
    <> 
        <Navbar expand='lg' className='bg-body-tertiary topNav'>
            <Container fluid className='topNav-container'>
                <Navbar.Brand className='logo-navbar-brand'>
                    <div className='logo-section'>
                        <img src='../images/logo.png' alt='Murararka College' />
                        <h3>Murarka College</h3>
                    </div>
                </Navbar.Brand>

                <Nav className='justify-content-center naac-iso'>
                    <Nav.Item className='naac-iso-box'>
                        <img src='../images/naac.png' alt='NAAC' />
                        <h5>NAAC Accredited</h5>
                    </Nav.Item>

                    <Nav.Item className='naac-iso-box'>
                        <img src='../images/iso.png' alt='ISO' />
                        <h5>ISO 9001:0000</h5>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>

        <Navbar expand='xl' className='bg-body-tertiary text-center mainNav' variant='dark'>
            <Container fluid className='text-center mainNav-container'>
                <Navbar.Toggle aria-controls='responsive-navbar-nav navbar-nav' />

                <Navbar.Collapse collapseOnSelect id='responsive-navbar-nav' className='justify-content-center mainNav-navbar'>
                    <Nav.Item className='mainNav-item'>
                        <Nav.Link>Home</Nav.Link>
                    </Nav.Item>

                    <Nav.Item className='mainNav-item'>
                        <NavDropdown title='About' data-bs-theme='dark'>
                            <NavDropdown.Item onClick={() => navigate('/history-of-the-college')}>History Of The College</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/principal-desk')}>Principal Desk</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/vision-mission-value')}>Mission, Vision & Goal</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/campus-map-layout')}>Campus Map & Layout</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/strategic-prospective-plan')}>Strategic/ Prospective Plan</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/human-values-and-professional-ethics')}>Human Values And Professional Ethics</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/core-values')}>Our Core Values</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/maintenance-policy')}>Maintenance Policy</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/best-practices')}>Best Practices</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/institutional-distinctive')}>Institutional Distinctive</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/college-gallery')}>College Gallery</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>

                    <Nav.Item className='mainNav-item'>
                        <NavDropdown title='Administration' data-bs-theme='dark'>
                            <NavDropdown.Item onClick={() => navigate('/')}>Organogram</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Governing Body</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Our Faculty</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Teacher's Council</NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavDropdown className='nav-dropdown-child' title='Committee & Cell'>
                                <NavDropdown.Item onClick={() => navigate('/')}>Anti Ragging Cell</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate('/')}>Purchase Committee</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate('/')}>Examination Committee</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate('/')}>Grievance Redressal Cell</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate('/')}>IT Management Committee</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate('/')}>All Committee Members</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Non-Teaching Staff</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Code Of Conduct</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Disciplinary Rules</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Uniform Leave Rules</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>

                    <Nav.Item className='mainNav-item'>
                        <NavDropdown title='Academics' data-bs-theme='dark'>
                            <NavDropdown.Item>
                                <NavDropdown className='nav-dropdown-child' title='Departments'>
                                <NavDropdown.Item onClick={() => navigate('/')}>Bachelor Of Arts</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate('/')}>Bachelor Of Science</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate('/')}>Bachelor Of Commerce</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Time Table</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Results</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Examination Section</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Intake Capacity</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Program Outcome</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Academic Calendar</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Holiday List</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Courses Offered</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>

                    <Nav.Item className='mainNav-item'>
                        <NavDropdown title='Admission' data-bs-theme='dark'>
                            <NavDropdown.Item onClick={() => navigate('/')}>Guideline</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Eligibility Criteria</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Admission Committee</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Fees Structure</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>

                    <Nav.Item className='mainNav-item'>
                        <NavDropdown title='Activities' data-bs-theme='dark'>
                            <NavDropdown.Item onClick={() => navigate('/')}>Announcements</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Alumni</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>College Activities</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Amenities</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>NSS</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>NCC</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Sports & Games</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>

                    <Nav.Item className='mainNav-item'>
                        <NavDropdown title='Students' data-bs-theme='dark'>
                            <NavDropdown.Item>
                                <NavDropdown className='nav-dropdown-child' title='Facilities'>
                                <NavDropdown.Item onClick={() => navigate('/')}>ICT Classroom</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate('/')}>Remedial Coaching</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate('/')}>Scholarship</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate('/')}>Career Counselling</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Rules & Regulations</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Student Support Services</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Skill Development Program</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>

                    <Nav.Item className='mainNav-item'>
                        <NavDropdown title='IQAC' data-bs-theme='dark'>
                            <NavDropdown.Item onClick={() => navigate('/')}>About IQAC</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>AQAR</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Minutes of Meeting</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Action Taken Report</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Seminars & Workshops</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Academic And Administrative Audit</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Green Audit Report</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Quality Initiative</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>IQAC Report</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>NIRF</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>SSR 2022-23</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>

                    <Nav.Item className='mainNav-item'>
                        <NavDropdown title='Library' data-bs-theme='dark'>
                            <NavDropdown.Item onClick={() => navigate('/')}>About The Library</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Library Rules</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Library Services</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>OPAC</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>N-List</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Question Paper Archive</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>E-Resources</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>

                    <Nav.Item className='mainNav-item'>
                        <NavDropdown title='Research & Publications' data-bs-theme='dark'>
                            <NavDropdown.Item onClick={() => navigate('/')}>Research Activity</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Ph.D Holders</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Research Papers</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>Books And Chapters</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/')}>College Prospectus</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>

                    <Nav.Item className='mainNav-item'>
                        <NavDropdown title='E-Governance'>
                        <NavDropdown.Item onClick={() => navigate('/')}>Feedback</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate('/')}>Online Grievance</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate('/')}>College ERP</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate('/')}>E-Teachers Diary</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate('/')}>LMS</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate('/')}>Students Profile Mapping System</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>
                    
                    <Nav.Item className='mainNav-item'>
                        <Nav.Link>Contact</Nav.Link>
                    </Nav.Item>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Outlet />
    </>
  )
}

export default Navebar
