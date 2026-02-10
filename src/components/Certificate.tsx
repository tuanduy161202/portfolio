import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import '../assets/styles/Project.scss'; 

interface Media {
  type: 'image' | 'video';
  src: string;
  caption: string;
}

interface CertItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
  thumbnail: string;
  mediaList: Media[];
}

function Certificate() {
  const [selectedCert, setSelectedCert] = useState<CertItem | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0);

  const certificates: CertItem[] = [
    {
      title: "Best Runner-up Paper Award",
      issuer: "MAPR 2025 Organizers",
      date: "August 14-15, 2025",
      description: "Awarded for the research paper 'Adapting WavLM for Vietnamese Speaker Diarization in Real-world Conversations' at the International Conference on Multimedia Analysis and Pattern Recognition (MAPR 2025).",
      thumbnail: "Certificate/MAPR_Cert/mapr_cert.jpg",
      mediaList: [
        { type: 'image', src: "Certificate/MAPR_Cert/mapr_cert.jpg", caption: "Best Runner-up Paper Award Certificate - MAPR 2025" },
      ],
    },
    {
      title: "Health Hackathon 2022 Participation",
      issuer: "Swinburne University of Technology",
      date: "June 15 - August 8, 2022",
      description: "Certificate of Participation for completing the Health Hackathon 2022, organized by the Swinburne Innovation Space.",
      thumbnail: "Certificate/Certificate-HealthHackathon2022_Thang-Tuan-Duy_CTAI/Certificate-HealthHackathon2022_Thang-Tuan-Duy_CTAI_page-0001.jpg",
      mediaList: [
        { type: 'image', src: "Certificate/Certificate-HealthHackathon2022_Thang-Tuan-Duy_CTAI/Certificate-HealthHackathon2022_Thang-Tuan-Duy_CTAI_page-0001.jpg", caption: "Official Certificate of Participation - Health Hackathon 2022" },
      ],
    },
    {
      title: "Luong Van Can Scholarship",
      issuer: "Luong Van Can Fund (LVCF)",
      date: "2020 - 2022",
      description: "A prestigious scholarship awarded to students with outstanding academic achievements.",
      thumbnail: "Certificate/Certificate-LVCF_Thang-Tuan-Duy_CTAI/Certificate-LVCF_Thang-Tuan-Duy_CTAI_page-0001.jpg",
      mediaList: [
        { type: 'image', src: "Certificate/Certificate-LVCF_Thang-Tuan-Duy_CTAI/Certificate-LVCF_Thang-Tuan-Duy_CTAI_page-0001.jpg", caption: "Scholarship Certificate - Academic Year 2020" },
        { type: 'image', src: "Certificate/Certificate-LVCF_Thang-Tuan-Duy_CTAI/Certificate-LVCF_Thang-Tuan-Duy_CTAI_page-0002.jpg", caption: "Scholarship Certificate - Academic Year 2021" },
        { type: 'image', src: "Certificate/Certificate-LVCF_Thang-Tuan-Duy_CTAI/Certificate-LVCF_Thang-Tuan-Duy_CTAI_page-0003.jpg", caption: "Scholarship Certificate - Academic Year 2022" },
      ],
    }
  ];

  const openModal = (cert: CertItem) => {
    setSelectedCert(cert);
    setActiveMediaIndex(0);
  };

  return (
    <div className="projects-container" id="certificates">
      <h1>Certificates & Honors</h1>
      <div className="projects-grid">
        {certificates.map((cert, index) => (
          <div className="project" key={index} onClick={() => openModal(cert)} style={{ cursor: 'pointer' }}>
            <img src={cert.thumbnail} className="zoom" alt="thumbnail" width="100%"/>
            <h2>{cert.title}</h2>
            <p className="issuer"><b>{cert.issuer}</b></p>
            <p className="date"><small>{cert.date}</small></p>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedCert(null)}>
              <CloseIcon />
            </button>
            <div className="media-viewer">
              {selectedCert.mediaList.length > 1 && (
                <button className="nav-btn prev" onClick={() => setActiveMediaIndex((prev) => (prev - 1 + selectedCert.mediaList.length) % selectedCert.mediaList.length)}>&#10094;</button>
              )}
              <div className="display-area">
                <img src={selectedCert.mediaList[activeMediaIndex].src} alt="Certificate Detail" style={{maxHeight: '70vh', width: 'auto'}} />
                <p className="caption">{selectedCert.mediaList[activeMediaIndex].caption}</p>
              </div>
              {selectedCert.mediaList.length > 1 && (
                <button className="nav-btn next" onClick={() => setActiveMediaIndex((prev) => (prev + 1) % selectedCert.mediaList.length)}>&#10095;</button>
              )}
            </div>
            <div className="modal-footer">
              <h2>{selectedCert.title}</h2>
              <p><i>{selectedCert.issuer} — {selectedCert.date}</i></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificate;