import { useState } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

import InstagramPost from '../components/InstagramPost';
import UpcomingEvent from '../components/UpcomingEvent';

const Home = ({ postData }) => {

  const [formData, setFormData] = useState({ name: "", email: "", query: "" });
  const [loading, setLoading] = useState(false);

  const handleUpdate = ({ target }) => {
    setFormData((currFormData) => ({ ...currFormData, [target.id]: target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/api/contact', formData);
      toast.success("Email Sent!");
    }
    catch (e) {
      console.log(e);
      toast.error("Unable to send email :(");
    }
    finally {
      setFormData({ name: "", email: "", query: "" });
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>OSDG - Home</title>
      </Head>
      <div className='d-flex flex-row' id='intro-div'>
        <div className="d-flex flex-column col-1 justify-content-center align-items-center ps-2">
          <h2 className='mx-2 social-link' onClick={() => { window.open('https://www.facebook.com/groups/185567594878116', '_blank') }}><FontAwesomeIcon icon={faFacebook} /></h2>
          <h2 className='mx-2 social-link' onClick={() => { window.open('https://github.com/OSDG-IIITH', '_blank') }}><FontAwesomeIcon icon={faGithub} /></h2>
          <h2 className='mx-2 social-link' onClick={() => { window.open('https://www.linkedin.com/company/74330374', '_blank') }}><FontAwesomeIcon icon={faLinkedin} /></h2>
          <h2 className='mx-2 social-link' onClick={() => { window.open('https://www.instagram.com/osdg.iiith', '_blank') }}><FontAwesomeIcon icon={faInstagram} /></h2>
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
            {/* <button className='btn-custom mt-3'>Sponsor Us</button> */}
          </div>
        </div>
      </div>
      <div className='d-flex flex-column py-5' id='featured-div'>
        <h2 className='featured-heading text-center mb-5'>Featured</h2>
        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center" style={{ overflowX: 'hidden' }}>
          <div className="d-flex flex-column align-items-center col-10 col-lg-3 px-4 featured-sub-heading">
            <h4 className='mb-4'>Upcoming Event</h4>
            <UpcomingEvent eventData={{ image: "https://i.pinimg.com/474x/77/0c/e5/770ce5db197bf1cdf239e49757666480.jpg", title: "Intro to Linux", description: "A beginner friendly introduction to Linux Based Operating Systems for first time users." }} />
          </div>
          <div className="d-flex flex-column align-items-center col-10 col-lg-6 col-xl-5 px-4 featured-sub-heading m-3">
            <h4 className='mb-4'>Latest Instagram Post</h4>
            <InstagramPost postData={postData} />
          </div>
        </div>
      </div>
      <div id="contact-form-scroll-point" className="d-flex flex-row">
        <div className="d-none d-md-flex col-4 flex-column justify-content-center align-items-center contact-decorator">
          <img src="Images/ContactGraphic.svg" alt="" className='img-fluid' width="250" />
        </div>
        <div className="d-flex flex-column justify-content-center contact-form col-12 col-md-8 p-5">
          <h2 className="contact-heading text-center mb-5">Contact Us</h2>
          <form className='mx-1 px-1 mx-md-3 px-md-3 mx-lg-5 px-lg-5' onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" value={formData.name} onChange={handleUpdate} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" value={formData.email} onChange={handleUpdate} />
            </div>
            <div className="mb-3">
              <label className="form-check-label" htmlFor="query">Message/Query</label>
              <textarea name="Query" id="query" rows={8} className="form-control" value={formData.query} onChange={handleUpdate}></textarea>
            </div>
            {loading ?
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              :
              <button type="submit" className="btn-custom px-3">Submit</button>}
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};


export async function getStaticProps(context) {

  let postData = {};

  try {
    const instagramRegExp = new RegExp(/<script type="text\/javascript">window\._sharedData = (.*);<\/script>/);
    const dateRegex = new RegExp(/Photo by OSDG, IIIT Hyderabad on (.*?)\./);

    const response = await axios.get('https://www.instagram.com/osdg.iiith');
    console.log(response.data);
    const json = JSON.parse(response.data.match(instagramRegExp)[1]);
    const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 8);
    const { node } = edges[0];

    const date = dateRegex.exec(node.accessibility_caption)[1];

    const imageData = await axios.get(node.thumbnail_src, { responseType: 'arraybuffer' });
    const image = `data:${imageData.headers["content-type"]};base64,${Buffer.from(imageData.data).toString('base64')}`;

    postData = {
      url: `https://www.instagram.com/p/${node.shortcode}/`,
      thumbnailUrl: image,
      caption: node.edge_media_to_caption.edges.length > 0 ? node.edge_media_to_caption.edges[0].node.text : "",
      likes: node.edge_liked_by.count,
      comments: node.edge_media_to_comment.count,
      date: date
    };
  }
  catch (e) {
    console.log("Error fetching latest instagram post: ");
    console.log(e);
    postData = {
      url: 'https://www.instagram.com/osdg.iiith',
      thumbnailUrl: 'Images/SquareLogo.png',
      caption: "Head on over to our instagram to see our posts.",
      likes: "Like",
      comments: "Comment",
      date: "New Posts Every Week!"
    };
  }
  finally {
    return {
      props: { postData },
      revalidate: 86400
    };
  }

}

export default Home;