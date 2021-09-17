import Head from 'next/head';
import styles from '../../styles/Team.module.css';

const TeamMemberCard = (props) => {
	return <>
		<div className={`${styles.teamMember} px-5 py-5`}>
			<div className={`${styles.teamMemberCardBackground} rounded h-75`}>
				<div>
					<img src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'
						className='px-4'/>
				</div>
			</div>
			<div className={`${styles.teamMemberNameTag} rounded border`}>
				<h3 className='mx-2 my-auto'> {props.name} </h3>
		    </div>
		</div>
	</>
}

const Team = () => {
	return <>
		<Head>
			<title>OSDG - Team</title>
		</Head>
		<div className={`${styles.topDiv} d-flex flex-column align-items-center`}>
			<h1>Team</h1>
		</div>
		<div className='d-flex flex-column align-items-center'>
			<TeamMemberCard name='Pratyay' />
		</div>
	</>
};

export default Team;
