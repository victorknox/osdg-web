import { useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/Events.module.css';
import EventCarousel from '../../components/EventCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';

const Events = () => {

    const [selectedEvent, setSelectedEvent] = useState(1);

    const eventList = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png",
            title: "Intro to Python",
            description: "Introducing the basics of Python, with no requirement for prior programming experience",
            longDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptas dicta dolore similique accusamus, consequatur eius, provident deleniti rem repudiandae excepturi nesciunt molestias et? Velit, veniam quibusdam officiis tenetur explicabo mollitia quod dolor distinctio deleniti aspernatur corrupti fugiat maxime voluptatem dolores culpa ea similique in est inventore debitis repellendus atque rem. Odit molestiae eius explicabo architecto nemo quibusdam a atque incidunt cumque. Ipsa est cupiditate veniam deserunt, mollitia corrupti! Quisquam impedit voluptatibus ducimus iusto! Nisi voluptate pariatur est fugit repellendus tenetur maxime ex odit. Totam ab, possimus magnam temporibus earum quibusdam esse voluptate rerum commodi accusantium ut, in iste similique.",
            date: "May 2021",
            day: "30th May, 2021",
            time: "7:00 PM",
            links: ["link1", "link2", "link3", "link4"],
            contacts: ["contact1"]
        },
        {
            image: "https://i.pinimg.com/474x/77/0c/e5/770ce5db197bf1cdf239e49757666480.jpg",
            title: "Intro to Linux",
            description: "A beginner friendly introduction to Linux Based Operating Systems for first time users.",
            longDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptas dicta dolore similique accusamus, consequatur eius, provident deleniti rem repudiandae excepturi nesciunt molestias et? Velit, veniam quibusdam officiis tenetur explicabo mollitia quod dolor distinctio deleniti aspernatur corrupti fugiat maxime voluptatem dolores culpa ea similique in est inventore debitis repellendus atque rem. Odit molestiae eius explicabo architecto nemo quibusdam a atque incidunt cumque. Ipsa est cupiditate veniam deserunt, mollitia corrupti! Quisquam impedit voluptatibus ducimus iusto! Nisi voluptate pariatur est fugit repellendus tenetur maxime ex odit. Totam ab, possimus magnam temporibus earum quibusdam esse voluptate rerum commodi accusantium ut, in iste similique.",
            date: "Oct 2021",
            day: "10th Oct 2021",
            time: "7:30 PM",
            links: ["link1", "link2", "link3"],
            contacts: ["contact1"]
        },
        {
            image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
            title: "Intro to Git",
            description: "Covering the basics of Git and GitHub and getting prepped for HacktoberFest.",
            longDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptas dicta dolore similique accusamus, consequatur eius, provident deleniti rem repudiandae excepturi nesciunt molestias et? Velit, veniam quibusdam officiis tenetur explicabo mollitia quod dolor distinctio deleniti aspernatur corrupti fugiat maxime voluptatem dolores culpa ea similique in est inventore debitis repellendus atque rem. Odit molestiae eius explicabo architecto nemo quibusdam a atque incidunt cumque. Ipsa est cupiditate veniam deserunt, mollitia corrupti! Quisquam impedit voluptatibus ducimus iusto! Nisi voluptate pariatur est fugit repellendus tenetur maxime ex odit. Totam ab, possimus magnam temporibus earum quibusdam esse voluptate rerum commodi accusantium ut, in iste similique.",
            date: "Oct 2021",
            day: "15th Oct 2021",
            time: "7:30 PM",
            links: ["link1", "link2"],
            contacts: ["contact1", "contact2"]
        },
        {
            image: "https://media.discordapp.net/attachments/868064937132568586/888107155679498260/Untitled-1.png?width=701&height=701",
            title: "Open Tech Summit",
            description: "The ultimate Open Source Event with talks, contests and a whole lot of fun!",
            longDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptas dicta dolore similique accusamus, consequatur eius, provident deleniti rem repudiandae excepturi nesciunt molestias et? Velit, veniam quibusdam officiis tenetur explicabo mollitia quod dolor distinctio deleniti aspernatur corrupti fugiat maxime voluptatem dolores culpa ea similique in est inventore debitis repellendus atque rem. Odit molestiae eius explicabo architecto nemo quibusdam a atque incidunt cumque. Ipsa est cupiditate veniam deserunt, mollitia corrupti! Quisquam impedit voluptatibus ducimus iusto! Nisi voluptate pariatur est fugit repellendus tenetur maxime ex odit. Totam ab, possimus magnam temporibus earum quibusdam esse voluptate rerum commodi accusantium ut, in iste similique.",
            date: "Dec 2021",
            day: "12th-14th Oct 2021",
            time: "9:30 AM",
            links: ["link1", "link2", "link3", "link4", "link5"],
            contacts: ["contact1", "contact2", "contact3"]
        }
    ]
    return <>
        <Head>
            <title>OSDG - Events</title>
        </Head>
        <div className={`${styles.topDiv} d-flex flex-column align-items-center`}>
            <h1 className='intro-heading my-3'>Events</h1>
            <div className="container pb-5">
                <EventCarousel eventList={eventList} setSelectedEvent={setSelectedEvent} />
            </div>
        </div>
        <div className={`${styles.eventData} p-2 p-md-3 p-lg-5 pb-5`}>
            <h1 className='mb-5 text-center'>{eventList[selectedEvent].title}</h1>
            <div className="d-flex flex-column flex-md-row mt-3 justify-content-center">
                <div className="col-12 col-md-6 col-lg-5 px-md-3 px-lg-5 px-2 ">
                    <h3 className="text-center">Details</h3>
                    <div className={`${styles.eventWhen} d-flex flex-row justify-content-around mt-3 mb-4`}>
                        <span><FontAwesomeIcon icon={faCalendar} /> {eventList[selectedEvent].day}</span>
                        <span><FontAwesomeIcon icon={faClock} /> {eventList[selectedEvent].time}</span>
                    </div>
                    <p className={styles.eventDetails}>{eventList[selectedEvent].longDesc}</p>
                </div>
                <div className="d-none d-md-block border-end border-2 border-dark m-0 p-0" />
                <div className="d-flex flex-row flex-md-column justify-content-between col-12 col-md-6 col-lg-5 px-5">
                    <div>
                        <h3 className="">Links</h3>
                        {eventList[selectedEvent].links.map((e, i) => <a className="d-block fw-light" key={i}>{e}</a>)}
                    </div>
                    <div>
                        <h3 className="">Contact</h3>
                        {eventList[selectedEvent].contacts.map((e, i) => <a className="d-block fw-light" key={i}>{e}</a>)}
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default Events;