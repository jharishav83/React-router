import React from 'react'
// import Header from './component/Header'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  const goToContact=()=>{
    navigate("/contact");
  }
  const backToHome=()=>{
    navigate(-1);
  }

  return (
        <>
{/* <Header/> */}
       <section>
        <h1>About page content here</h1>
        <button className="next-btn" onClick={goToContact}>go to Contact Page</button>
        <button className="next-btn" onClick={backToHome}>Back to Home Page</button>
       </section>
      </>
  )
}

export default About
