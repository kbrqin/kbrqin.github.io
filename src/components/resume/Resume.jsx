import './resume.css';
import resume from '../../files/resume.pdf';
import { Document, Page } from 'react-pdf';

const Resume = () => {
 return (
  <div className="r">
     <embed
	src={resume}
	type="application/pdf"
	width="100%"
	height="100%"/>
  </div>
 );
};
export default Resume;