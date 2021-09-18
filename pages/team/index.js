import Head from 'next/head';
import styles from '../../styles/Team.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const TeamMemberCard = (props) => {
	return (
	<div className={`${styles.teamMember} mx-2 my-2 px-4 py-4 container`}>
		<div className={`${styles.teamMemberTopDiv} row`}>
			<div className={`${styles.teamMemberImageContainer} col-10 h-75`}>
				<img className={`${styles.teamMemberImage} img-fluid`} src={props.img} />
			</div>
			<div className={`${styles.teamMemberSocialMediaIcons} col-2 mt-auto mb-4`}>
				<a href={props.web}>
					<FontAwesomeIcon className={`${styles.teamMemberSocialMediaIcon} ml-2 my-2`} size='2x' icon={faGlobe} />
				</a>
				<a href={props.gh}>
					<FontAwesomeIcon className={`${styles.teamMemberSocialMediaIcon} ml-2 my-2`} size='2x' icon={faGithub} />
				</a>
				<a href={props.li}>
					<FontAwesomeIcon className={`${styles.teamMemberSocialMediaIcon} ml-2 my-2`} size='2x' icon={faLinkedin} />
				</a>
			</div>
		</div>
		<div className='row justify-content-end'>
			<div className={`${styles.teamMemberNameTag} border col-8 order-last`}>
				<h5 className='my-1'>{props.name}</h5>
			</div>
		</div>
	</div>
	);
}

const Team = () => {
	return <>
		<Head>
			<title>OSDG - Team</title>
		</Head>
		<div className={`${styles.topDiv} d-flex flex-column align-items-center py-5`}>
			<h1>Team</h1>
		</div>
		<div className='d-flex flex-column align-items-center'>
			<TeamMemberCard name='Pratyay Suvarnapathaki' img='https://clipartart.com/images/clipart-avitars.png'
							web='https://youtube.com'/>
			<TeamMemberCard name='Dhruv Kapur' img='https://clipartart.com/images/clipart-avitars.png'/>
		</div>
	</>
};

export default Team;
