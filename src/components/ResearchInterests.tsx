
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// ... (Giữ nguyên phần khai báo labels/arrays của Duy) ...
const research_interests = [
    "Speech Processing",
    "Speaker Diarization and Modeling",
    "Speech Representation Learning",
    "Transformer-based Speech Models",
    "Auditory-inspired Signal Processing",
    "Speech Emotion Recognition"
];

function ResearchInterests() {
    return (
    <div className="container" id="researchinterests">
        <div className="skills-container">
            <h1>Research Interests</h1>
            {/* <div className="skills-grid"> */}
                
                {/* --- Skill 1: Research --- */}
                <div className="skill">
                    {/* <FontAwesomeIcon icon={faBrain} size="3x"/> */}
                    <div className="flex-chips">
                        <span className="chip-title">Tech Stack: </span>
                        {research_interests.map((interests, index) => (
                            <Chip key={index} className='chip' label={interests} />
                        ))}
                    </div>
                </div>
            {/* </div> */}
        </div>
    </div>
    );
}

export default ResearchInterests;