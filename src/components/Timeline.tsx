import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {/* Freelance - Generative Video & Dubbing */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="08/2025 - Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance AI Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
              Developed SOTA Text-to-Video/Image-to-Video systems (Wan2.1, InfiniteTalk). 

              Built end-to-end Multilingual Video Dubbing pipelines with Whisper ASR and CosyVoice.
            </p>
          </VerticalTimelineElement>

          {/* VinBigData - Speaker Diarization */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="07/2024 - 07/2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Engineer Trainee</h3>
            <h4 className="vertical-timeline-element-subtitle">VinBigData, Ho Chi Minh City</h4>
            <p>
              Researching SOTA models for Vietnamese speaker diarization. 
              
              Deployed systems using Triton Inference Server and ONNX. 
          
              Awarded Best Runner-up Paper at MAPR 2025.
            </p>
          </VerticalTimelineElement>

          {/* GSOFT - Knee Osteoarthritis */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="05/2023 - 12/2023"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Engineer Intern & Collaborator</h3>
            <h4 className="vertical-timeline-element-subtitle">GSOFT, Ho Chi Minh City</h4>
            <p>
              Developed a hybrid deep learning pipeline for knee osteoarthritis grading using YOLO and SAM. 
              Clinical deployment at Cho Ray Hospital. Co-authored RIVF 2023 paper.
            </p>
          </VerticalTimelineElement>

          {/* Education - Bách Khoa */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020 - 2024"
            iconStyle={{ background: '#2196f3', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">VNU-HCM University of Technology</h4>
            <p>
              GPA: 7.91 / 10.0. Focus on AI, Computer Vision. 

              Recipient of Luong Van Can Fund Scholarship.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;