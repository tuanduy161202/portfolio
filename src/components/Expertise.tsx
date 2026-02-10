import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faRobot, faMicrochip } from '@fortawesome/free-solid-svg-icons'; // Sử dụng icon phù hợp hơn cho AI
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// Nhóm 1: Tập trung vào AI Core và Research (VinBigData, GSOFT)
const labelsFirst = [
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "OpenCV",
    "YOLO",
    "Hugging Face",
    "Pyannote",
    "WavLM",
    "CLIP",
    "NumPy",
    "Pandas"
];

// Nhóm 2: Tập trung vào Deployment & DevOps (Triton, Docker, ONNX)
const labelsSecond = [
    "Docker",
    "Triton Inference Server",
    "ONNX Runtime",
    "FastAPI",
    "Git",
    "Linux",
    "Railway",
    "C++",
    "Python"
];

// Nhóm 3: Tập trung vào GenAI & Automation (Dự án Video, RAG, n8n)
const labelsThird = [
    "Generative Video (Wan2.1)",
    "Infinite Talk",
    "ComfyUI",
    "RAG",
    "OpenAI API",
    "Pinecone",
    "n8n",
    "Playwright",
    "Gradio"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>AI Research & Development</h3>
                    <p>Experience in developing SOTA models for Speaker Diarization [cite: 29, 33] and Medical Imaging[cite: 39, 41]. Proficient in end-to-end R&D, from data annotation with LabelStudio [cite: 34] to publishing scientific papers[cite: 44, 45].</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMicrochip} size="3x"/>
                    <h3>AI Model Deployment</h3>
                    <p>Specialized in optimizing and deploying AI models for production environments[cite: 18, 40]. Experienced with Triton Inference Server , ONNX , and building scalable backends using FastAPI [cite: 19, 24, 80] and Docker[cite: 18, 34, 80].</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>GenAI & Automation</h3>
                    <p>Building advanced Generative AI systems, including Text-to-Video pipelines (Wan2.1, InfiniteTalk) [cite: 13, 19] and automated RAG chatbots[cite: 52, 55]. Skilled in workflow automation using n8n and web scraping with Playwright[cite: 54].</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
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