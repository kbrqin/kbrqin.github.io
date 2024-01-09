import './skills.css';

const Skills = () => {
    return (
        <div className='s'>
            <div className="s-wrapper">
                <div className="s-heading">Skills/Tools</div>
                <div className="s-content-wrapper">
                    <div className="s-design-wrapper">
                        <ul className='s-list'>
                            <li className='s-list-heading'>Design Tools</li>
                            <ul>
                                <li>Figma</li>
                                <li>Adobe Illustrator</li>
                                <li>MockFlow</li>
                                <li>Blender (CAD Software)</li>
                            </ul>
                        </ul>
                    </div>
                    <div className='s-l-and-f-wrapper'>
                        <div className="s-langs-wrapper">
                            <ul className='s-list'>
                                <li className='s-list-heading'>Languages</li>
                                <ul>
                                    <li>Java</li>
                                    <li>C</li>
                                    <li>Python</li>
                                    <li>R</li>
                                </ul>
                            </ul>
                        </div>
                        <div className="s-frameworks-wrapper">
                            <ul className='s-list'>
                                <li className='s-list-heading'>Frameworks</li>
                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Flask (Python)</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;