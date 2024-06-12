import React, { useEffect, useState } from 'react'
import './Navebar.css'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router'

function Navebar() {
    const navigate = useNavigate()

    const pathname = window.location.href
    console.log(pathname);
    
    const [ home, setHome ] = useState('active')
    const [ about, setAbout ] = useState('')
    const [ administration, setAdministration ] = useState('')
    const [ academics, setAcademics ] = useState('')
    const [ admission, setAdmission ] = useState('')
    const [ activities, setActivities ] = useState('')
    const [ students, setStudents ] = useState('')
    const [ iqac, setIqac ] = useState('')
    const [ library, setLibrary ] = useState('')
    const [ research, setResearch ] = useState('')
    const [ governance, setGovernance ] = useState('')
    const [ contact, setContact ] = useState('')

    useEffect(() => {
        if(pathname == `${process.env.REACT_APP_MURARKA_FRONTEND}/`){
            setHome('active')
            setAbout('')
            setAdministration('')
            setAcademics('')
            setAdmission('')
            setActivities('')
            setStudents('')
            setIqac('')
            setLibrary('')
            setResearch('')
            setGovernance('')
            setContact('')
        }

        else if(pathname == `${process.env.REACT_APP_MURARKA_FRONTEND}/`){
            setHome('')
            setAbout('')
            setAdministration('')
            setAcademics('')
            setAdmission('')
            setActivities('')
            setStudents('')
            setIqac('')
            setLibrary('')
            setResearch('')
            setGovernance('')
            setContact('')
        }

        else if(pathname == `${process.env.REACT_APP_MURARKA_FRONTEND}/`){
            setHome('')
            setAbout('')
            setAdministration('')
            setAcademics('')
            setAdmission('')
            setActivities('')
            setStudents('')
            setIqac('')
            setLibrary('')
            setResearch('')
            setGovernance('')
            setContact('')
        }

        else if(pathname == `${process.env.REACT_APP_MURARKA_FRONTEND}/`){
            setHome('')
            setAbout('')
            setAdministration('')
            setAcademics('')
            setAdmission('')
            setActivities('')
            setStudents('')
            setIqac('')
            setLibrary('')
            setResearch('')
            setGovernance('')
            setContact('')
        }

        else if(pathname == `${process.env.REACT_APP_MURARKA_FRONTEND}/`){
            setHome('')
            setAbout('')
            setAdministration('')
            setAcademics('')
            setAdmission('')
            setActivities('')
            setStudents('')
            setIqac('')
            setLibrary('')
            setResearch('')
            setGovernance('')
            setContact('')
        }

        else if(pathname == `${process.env.REACT_APP_MURARKA_FRONTEND}/`){
            setHome('')
            setAbout('')
            setAdministration('')
            setAcademics('')
            setAdmission('')
            setActivities('')
            setStudents('')
            setIqac('')
            setLibrary('')
            setResearch('')
            setGovernance('')
            setContact('')
        }

        else if(pathname == `${process.env.REACT_APP_MURARKA_FRONTEND}/`){
            setHome('')
            setAbout('')
            setAdministration('')
            setAcademics('')
            setAdmission('')
            setActivities('')
            setStudents('')
            setIqac('')
            setLibrary('')
            setResearch('')
            setGovernance('')
            setContact('')
        }

        else if(pathname == `${process.env.REACT_APP_MURARKA_FRONTEND}/`){
            setHome('')
            setAbout('')
            setAdministration('')
            setAcademics('')
            setAdmission('')
            setActivities('')
            setStudents('')
            setIqac('')
            setLibrary('')
            setResearch('')
            setGovernance('')
            setContact('')
        }

        else if(pathname == `${process.env.REACT_APP_MURARKA_FRONTEND}/`){
            setHome('')
            setAbout('')
            setAdministration('')
            setAcademics('')
            setAdmission('')
            setActivities('')
            setStudents('')
            setIqac('')
            setLibrary('')
            setResearch('')
            setGovernance('')
            setContact('')
        }

        else if(pathname == `${process.env.REACT_APP_MURARKA_FRONTEND}/`){
            setHome('')
            setAbout('')
            setAdministration('')
            setAcademics('')
            setAdmission('')
            setActivities('')
            setStudents('')
            setIqac('')
            setLibrary('')
            setResearch('')
            setGovernance('')
            setContact('')
        }

        else if(pathname == `${process.env.REACT_APP_MURARKA_FRONTEND}/`){
            setHome('')
            setAbout('')
            setAdministration('')
            setAcademics('')
            setAdmission('')
            setActivities('')
            setStudents('')
            setIqac('')
            setLibrary('')
            setResearch('')
            setGovernance('')
            setContact('')
        }

        else if(pathname == `${process.env.REACT_APP_MURARKA_FRONTEND}/`){
            setHome('')
            setAbout('')
            setAdministration('')
            setAcademics('')
            setAdmission('')
            setActivities('')
            setStudents('')
            setIqac('')
            setLibrary('')
            setResearch('')
            setGovernance('')
            setContact('')
        }
    }, [pathname])

    const [ show1, setShow1 ] = useState(false)
    const [ show2, setShow2 ] = useState(false)
    const [ show3, setShow3 ] = useState(false)
    const [ show4, setShow4 ] = useState(false)
    const [ show5, setShow5 ] = useState(false)
    const [ show6, setShow6 ] = useState(false)
    const [ show7, setShow7 ] = useState(false)
    const [ show8, setShow8 ] = useState(false)
    const [ show9, setShow9 ] = useState(false)
    const [ show10, setShow10 ] = useState(false)
    const [ show11, setShow11 ] = useState(false)
    const [ show12, setShow12 ] = useState(false)
    const [ show13, setShow13 ] = useState(false)
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
                    <Nav.Item className={`mainNav-item ${home}`}>
                        <Nav.Link>Home</Nav.Link>
                    </Nav.Item>

                    <Nav.Item className={`mainNav-item ${about}`}>
                        <NavDropdown title='About' data-bs-theme='dark' onMouseEnter={() => { setShow1(true); setShow2(false); setShow3(false); setShow4(false); setShow5(false); setShow6(false); setShow7(false); setShow8(false); setShow9(false); setShow10(false); }} onMouseLeave={() => setShow1(false)} show={show1}>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/history-of-the-college')}>History Of The College</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/principal-desk')}>Principal Desk</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/vision-mission-value')}>Mission, Vision & Goal</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/campus-map-layout')}>Campus Map & Layout</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/strategic-prospective-plan')}>Strategic/ Prospective Plan</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/human-values-and-professional-ethics')}>Human Values And Professional Ethics</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/core-values')}>Our Core Values</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/maintenance-policy')}>Maintenance Policy</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/best-practices')}>Best Practices</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/institutional-distinctive')}>Institutional Distinctive</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/college-gallery')}>College Gallery</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>

                    <Nav.Item className={`mainNav-item ${administration}`}>
                        <NavDropdown title='Administration' data-bs-theme='dark' onMouseEnter={() => { setShow1(false); setShow2(true); setShow3(false); setShow4(false); setShow5(false); setShow6(false); setShow7(false); setShow8(false); setShow9(false); setShow10(false); }} onMouseLeave={() => setTimeout(() => { setShow2(false) }, 400)} show={show2}>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Organogram</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Governing Body</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Our Faculty</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Teacher's Council</NavDropdown.Item>
                            <NavDropdown.Item className='nav-dropdown-parent'>
                                <NavDropdown className='nav-dropdown-child' title='Committee & Cell' onMouseEnter={() => setShow11(true)} onMouseLeave={() => setTimeout(() => { setShow11(false) }, 2000)} show={show11}>
                                    <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Anti Ragging Cell</NavDropdown.Item>
                                    <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Purchase Committee</NavDropdown.Item>
                                    <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Examination Committee</NavDropdown.Item>
                                    <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Grievance Redressal Cell</NavDropdown.Item>
                                    <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>IT Management Committee</NavDropdown.Item>
                                    <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>All Committee Members</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Non-Teaching Staff</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Code Of Conduct</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Disciplinary Rules</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Uniform Leave Rules</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>

                    <Nav.Item className={`mainNav-item ${academics}`}>
                        <NavDropdown title='Academics' data-bs-theme='dark' onMouseEnter={() => { setShow1(false); setShow2(false); setShow3(true); setShow4(false); setShow5(false); setShow6(false); setShow7(false); setShow8(false); setShow9(false); setShow10(false); }} onMouseLeave={() => setTimeout(() => { setShow3(false) }, 400)} show={show3}>
                            <NavDropdown.Item className='nav-dropdown-parent'>
                                <NavDropdown className='nav-dropdown-child' title='Departments' onMouseEnter={() => setShow12(true)} onMouseLeave={() => setTimeout(() => { setShow12(false) }, 2000)} show={show12}>
                                    <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Bachelor Of Arts</NavDropdown.Item>
                                    <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Bachelor Of Science</NavDropdown.Item>
                                    <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Bachelor Of Commerce</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Time Table</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Results</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Examination Section</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Intake Capacity</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Program Outcome</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Academic Calendar</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Holiday List</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Courses Offered</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>

                    <Nav.Item className={`mainNav-item ${admission}`}>
                        <NavDropdown title='Admission' data-bs-theme='dark' onMouseEnter={() => { setShow1(false); setShow2(false); setShow3(false); setShow4(true); setShow5(false); setShow6(false); setShow7(false); setShow8(false); setShow9(false); setShow10(false); }} onMouseLeave={() => setTimeout(() => { setTimeout(() => { setShow4(false) }, 400) }, 400)} show={show4}>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Guideline</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Eligibility Criteria</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Admission Committee</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Fees Structure</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>

                    <Nav.Item className={`mainNav-item ${activities}`}>
                        <NavDropdown title='Activities' data-bs-theme='dark' onMouseEnter={() => { setShow1(false); setShow2(false); setShow3(false); setShow4(false); setShow5(true); setShow6(false); setShow7(false); setShow8(false); setShow9(false); setShow10(false); }} onMouseLeave={() => setTimeout(() => { setShow5(false) }, 400)} show={show5}>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Announcements</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Alumni</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>College Activities</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Amenities</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>NSS</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>NCC</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Sports & Games</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>

                    <Nav.Item className={`mainNav-item ${students}`}>
                        <NavDropdown title='Students' data-bs-theme='dark' onMouseEnter={() => { setShow1(false); setShow2(false); setShow3(false); setShow4(false); setShow5(false); setShow6(true); setShow7(false); setShow8(false); setShow9(false); setShow10(false); }} onMouseLeave={() => setTimeout(() => { setShow6(false) }, 400)} show={show6}>
                            <NavDropdown.Item className='nav-dropdown-parent'>
                                <NavDropdown className='nav-dropdown-child' title='Facilities' onMouseEnter={() => setShow13(true)} onMouseLeave={() => setTimeout(() => { setShow13(false) }, 2000)} show={show13}>
                                    <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>ICT Classroom</NavDropdown.Item>
                                    <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Remedial Coaching</NavDropdown.Item>
                                    <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Scholarship</NavDropdown.Item>
                                    <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Career Counselling</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Rules & Regulations</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Student Support Services</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Skill Development Program</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>

                    <Nav.Item className={`mainNav-item ${iqac}`}>
                        <NavDropdown title='IQAC' data-bs-theme='dark' onMouseEnter={() => { setShow1(false); setShow2(false); setShow3(false); setShow4(false); setShow5(false); setShow6(false); setShow7(true); setShow8(false); setShow9(false); setShow10(false); }} onMouseLeave={() => setTimeout(() => { setShow7(false) }, 400)} show={show7}>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>About IQAC</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>AQAR</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Minutes of Meeting</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Action Taken Report</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Seminars & Workshops</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Academic And Administrative Audit</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Green Audit Report</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Quality Initiative</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>IQAC Report</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>NIRF</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>SSR 2022-23</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>

                    <Nav.Item className={`mainNav-item ${library}`}>
                        <NavDropdown title='Library' data-bs-theme='dark' onMouseEnter={() => { setShow1(false); setShow2(false); setShow3(false); setShow4(false); setShow5(false); setShow6(false); setShow7(false); setShow8(true); setShow9(false); setShow10(false); }} onMouseLeave={() => setTimeout(() => { setShow8(false) }, 400)} show={show8}>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>About The Library</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Library Rules</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Library Services</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>OPAC</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>N-List</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Question Paper Archive</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>E-Resources</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>

                    <Nav.Item className={`mainNav-item ${research}`}>
                        <NavDropdown title='Research & Publications' data-bs-theme='dark' onMouseEnter={() => { setShow1(false); setShow2(false); setShow3(false); setShow4(false); setShow5(false); setShow6(false); setShow7(false); setShow8(false); setShow9(true); setShow10(false); }} onMouseLeave={() => setTimeout(() => { setShow9(false) }, 400)} show={show9}>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Research Activity</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Ph.D Holders</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Research Papers</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Books And Chapters</NavDropdown.Item>
                            <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>College Prospectus</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>

                    <Nav.Item className={`mainNav-item ${governance}`}>
                        <NavDropdown title='E-Governance' onMouseEnter={() => { setShow1(false); setShow2(false); setShow3(false); setShow4(false); setShow5(false); setShow6(false); setShow7(false); setShow8(false); setShow9(false); setShow10(true); }} onMouseLeave={() => setTimeout(() => { setShow10(false) }, 400)} show={show10}>
                        <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Feedback</NavDropdown.Item>
                        <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Online Grievance</NavDropdown.Item>
                        <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>College ERP</NavDropdown.Item>
                        <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>E-Teachers Diary</NavDropdown.Item>
                        <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>LMS</NavDropdown.Item>
                        <NavDropdown.Item className='main-dropdown' onClick={() => navigate('/')}>Students Profile Mapping System</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>
                    
                    <Nav.Item className={`mainNav-item ${contact}`}>
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
