import PSFooter from './project-site-components/ps-footer/PSFooter';
import PSLeftHalf from './project-site-components/ps-left-half/PSLeftHalf';
import PSRightHalf from './project-site-components/ps-right-half/PSRightHalf';
import './projectssite.css';

const ProjectsSite = () => {
    return (
        <div className='ps' id='portfolio'>
            <div className='ps-left-container'><PSLeftHalf/></div>
            <div className='ps-right-container'>
                <PSRightHalf/>
                <PSFooter/>
            </div>
        </div>
    )
}

export default ProjectsSite;