import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faMicrochip, faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// ... (Giữ nguyên phần khai báo labels/arrays của Duy) ...
const labelsFirst = [
    "Python", "PyTorch", "TensorFlow", "Scikit-learn", "OpenCV",
    "YOLO", "Hugging Face", "NumPy", "Pandas"
];

const labelsSecond = [
    "Docker", "Git", "Linux", "FastAPI",
    "Triton Inference Server", "ONNX Runtime",
    
];

const labelsThird = [
    "Generative Video", "ComfyUI",
    "RAG", "OpenAI", "n8n"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                
                {/* --- Skill 1: Research --- */}
                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>AI Research & Development</h3>
                    <p>
                        Proficient in the complete end-to-end AI research lifecycle, from formulating problems and curating high-quality datasets to implementing and fine-tuning State-of-the-Art (SOTA) models. 
                        Experienced in conducting rigorous experiments and translating theoretical concepts into effective solutions.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech Stack: </span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* --- Skill 2: Deployment --- */}
                <div className="skill">
                    <FontAwesomeIcon icon={faMicrochip} size="3x"/>
                    <h3>Model Deployment</h3>
                    <p>
                        Specialized in bridging the gap between research and production. 
                        Skilled in optimizing deep learning architectures for low-latency inference, building scalable microservices, and managing containerized environments to ensure high availability and performance.
                    </p>

                    <div className="flex-chips">
                        <span className="chip-title">Tech Stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* --- Skill 3: GenAI --- */}
                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>Generative AI & Automation</h3>
                    <p>
                        Experience in architecting advanced Generative AI systems, including Multimodal generation pipelines and Retrieval-Augmented Generation (RAG) agents. 
                        Capable of designing autonomous workflows that integrate Large Language Models (LLMs) with external tools for complex task automation.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech Stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;