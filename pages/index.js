import Head from 'next/head';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <>
      <Head>
        <title>OSDG - Home</title>
      </Head>
      <div className='d-flex flex-row' id='intro-div'>
        <div className="d-flex flex-column col-1 justify-content-center align-items-center ps-2">
          <h3 className='mx-2 social-link'><FontAwesomeIcon icon={faFacebook} /></h3>
          <h3 className='mx-2 social-link'><FontAwesomeIcon icon={faGithub} /></h3>
          <h3 className='mx-2 social-link'><FontAwesomeIcon icon={faLinkedin} /></h3>
          <h3 className='mx-2 social-link'><FontAwesomeIcon icon={faInstagram} /></h3>
        </div>
        <div className="d-flex flex-column col-11 col-lg-4 justify-content-center ps-3 pe-4 py-3">
          <h1 className='intro-heading'>Open Source,</h1>
          <h1 className='intro-heading'>for the sake</h1>
          <h1 className='intro-heading'>of Open Source</h1>
          <span className='my-3' />
          <p className='intro-text'>As a club for enthusiastic students with a passion for open source, we have started numerous open source initiatives,
            and plan on starting many more, ensuring you'll find something that is perfectly suited for you. Be it a beginner, or
            a professional, looking forward to talks, hackathons, learning sessions, community projects, and many more events, we've got you covered at
            every step of the way in your Open Source journey.</p>
          <p className='intro-text'>We are the Open Source Development Group, IIIT Hyderabad, Working together on Open Source, for Open Source's sake.</p>

        </div>
        <div className="d-none d-lg-flex flex-column col-7 p-5 justify-content-center">
          <img src="Images/IntroGraphic.svg" alt="" className='img-fluid' />
        </div>
      </div>
      <div className='d-flex flex-column p-5' id='about-div'>
        <h2 className='about-heading text-center mb-5'>About Us</h2>
        <div className="d-flex flex-row justify-content-evenly my-5">
          <div className="d-none d-md-flex flex-column col-2 col-md-3 justify-content-center align-items-center">
            <img src="Images/AboutGraphic.svg" alt="" className="img-fluid" />
          </div>
          <div className="d-flex flex-column col-12 col-md-5 justify-content-center">
            <h6 className='about-text my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quod totam! Sed, iste optio quaerat laudantium corrupti delectus tempora iusto magni maiores odit, sapiente soluta repellendus vitae vero, eligendi beatae quo aut provident. Eius quasi quas eos enim beatae maxime tenetur dolor, tempora molestias, harum, illum deleniti aliquam aliquid cupiditate.</h6>
            <h6 className="about-text my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus molestiae deleniti molestias illo. Fugiat laudantium tenetur necessitatibus, aspernatur dolores quisquam voluptate voluptas delectus alias in dolorum totam harum placeat neque.</h6>
            <button className='btn-custom mt-3'>Sponsor Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;