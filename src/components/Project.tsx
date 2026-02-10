import React, { useState } from "react";
import '../assets/styles/Project.scss';

// Import ảnh mẫu (Đảm bảo file tồn tại trong assets/images)
import CloseIcon from "@mui/icons-material/Close";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
// import videoWan from '../assets/videos/wan_demo.mp4'; 

// Định nghĩa kiểu dữ liệu cho dự án
interface Media {
  type: 'image' | 'video';
  src: string;
  caption: string;
}

interface ProjectItem {
  title: string;
  description: string;
  thumbnail: string;
  mediaList: Media[];
  tech: string;
}

function Project() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0);

  const projects: ProjectItem[] = [
    {
      title: "Generative Video System",
      description: "Developed a SOTA Text-to-Video system utilizing Wan2.1 and Infinite Talk[cite: 13, 19].",
      thumbnail: mock01,
      mediaList: [
        { type: 'image', src: mock01, caption: "Hệ thống tạo video từ văn bản sử dụng Wan2.1 [cite: 13, 19]" },
        { type: 'image', src: mock02, caption: "Hệ thống tạo video từ văn bản sử dụng Wan2.1 [cite: 13, 19]" },
        // { type: 'video', src: videoWan, caption: "Demo kết quả tạo video thực tế [cite: 13]" },
      ],
      tech: "Python, PyTorch, Wan2.1, Docker [cite: 19]"
    },
    {
      title: "Vietnamese Speaker Diarization",
      description: "Researching SOTA models for Vietnamese conversations at VinBigData[cite: 27, 29].",
      thumbnail: mock02,
      mediaList: [
        { type: 'image', src: mock02, caption: "Sơ đồ kiến trúc mô hình WavLM cải tiến cho tiếng Việt [cite: 33]" },
      ],
      tech: "Triton, ONNX, Pyannote [cite: 34]"
    }
    // Duy có thể thêm các dự án khác vào đây theo cấu trúc tương tự
  ];

  const openModal = (proj: ProjectItem) => {
    setSelectedProject(proj);
    setActiveMediaIndex(0);
  };

  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project" key={index} onClick={() => openModal(proj)} style={{ cursor: 'pointer' }}>
            <img src={proj.thumbnail} className="zoom" alt="thumbnail" width="100%"/>
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>

      {/* Pop-up (Modal) */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            
            <button className="close-button" onClick={() => setSelectedProject(null)}><CloseIcon/></button>
            
            <div className="media-viewer">
              {/* Nút điều hướng nếu có nhiều media */}
              {selectedProject.mediaList.length > 1 && (
                <button className="nav-btn prev" onClick={() => setActiveMediaIndex((prev) => (prev - 1 + selectedProject.mediaList.length) % selectedProject.mediaList.length)}>&#10094;</button>
              )}
              
              <div className="display-area">
                {selectedProject.mediaList[activeMediaIndex].type === 'video' ? (
                  <video controls autoPlay key={selectedProject.mediaList[activeMediaIndex].src}>
                    <source src={selectedProject.mediaList[activeMediaIndex].src} type="video/mp4" />
                  </video>
                ) : (
                  <img src={selectedProject.mediaList[activeMediaIndex].src} alt="Demo" />
                )}
                <p className="caption">{selectedProject.mediaList[activeMediaIndex].caption}</p>
              </div>

              {selectedProject.mediaList.length > 1 && (
                <button className="nav-btn next" onClick={() => setActiveMediaIndex((prev) => (prev + 1) % selectedProject.mediaList.length)}>&#10095;</button>
              )}
            </div>
            
            <div className="modal-footer">
              <h2>{selectedProject.title}</h2>
              <p className="tech-stack"><b>Technologies:</b> {selectedProject.tech}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;