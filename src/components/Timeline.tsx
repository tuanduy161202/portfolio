import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  
  // Dữ liệu timeline được tách ra để dễ quản lý
  const historyElements = [
    {
      id: 1,
      title: "Freelance AI Engineer",
      subtitle: "Remote",
      date: "Aug 2025 - Present",
      icon: faBriefcase,
      type: "work",
      description: [
        "Building end-to-end multilingual video dubbing pipelines with Whisper ASR and CosyVoice.",
        "Architecting SOTA Generative Video systems using Wan2.1 and InfiniteTalk.",
        "Automating workflows with ComfyUI and Python for scalable content creation."
      ]
    },
    {
      id: 2,
      title: "AI Engineer Trainee",
      subtitle: "VinBigData, Ho Chi Minh City",
      date: "Jul 2024 - Jul 2025",
      icon: faBriefcase,
      type: "work",
      description: [
        "Researched on Vietnamese Speaker Diarization, achieving SOTA performance.",
        "Optimized and deployed models using Triton Inference Server and ONNX Runtime.",
        "First Author of the 'Best Runner-up Paper' at MAPR 2025 conference."
      ]
    },
    {
      id: 3,
      title: "AI Engineer Intern & Collaborator",
      subtitle: "GSOFT, Ho Chi Minh City",
      date: "May 2023 - Dec 2023",
      icon: faBriefcase,
      type: "work",
      description: [
        "Developed a hybrid deep learning pipeline for Knee Osteoarthritis grading.",
        "Supported clinical deployment at Cho Ray Hospital.",
        "Co-authored a research paper published at RIVF 2023."
      ]
    },
    {
      id: 4,
      title: "Bachelor of Computer Science",
      subtitle: "VNU-HCM University of Technology (HCMUT)",
      date: "2020 - 2025",
      icon: faGraduationCap,
      type: "education",
      description: [
        "GPA: 7.91 / 10.0.",
        "Major: Computer Science.",
        "Speciality: Applied Artificial Intelligence.",
        "Honor: Recipient of the prestigious Luong Van Can Fund Scholarship (2020-2024)."
      ]
    }
  ];

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {historyElements.map((element) => {
            const isWork = element.type === "work";
            return (
              <VerticalTimelineElement
                key={element.id}
                className={`vertical-timeline-element--${element.type}`}
                contentStyle={{ background: 'white', color: '#333', borderTop: `4px solid ${isWork ? '#5000ca' : '#f9c74f'}` }}
                contentArrowStyle={{ borderRight: '7px solid white' }}
                date={element.date}
                dateClassName="date-style"
                iconStyle={{ background: isWork ? '#5000ca' : '#f9c74f', color: '#fff' }}
                icon={<FontAwesomeIcon icon={element.icon} />}
              >
                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                <h4 className="vertical-timeline-element-subtitle" style={{color: '#666', marginTop: '5px'}}>
                  {element.subtitle}
                </h4>
                <ul style={{ paddingLeft: '20px', marginTop: '15px' }}>
                  {element.description.map((desc, i) => (
                    <li key={i} style={{ marginBottom: '8px', lineHeight: '1.5' }}>
                      {desc}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;