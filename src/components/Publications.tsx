import React, {useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAward, faFilePdf, faLink } from '@fortawesome/free-solid-svg-icons';
import pdfWavLM from '../assets/Publications/Adapting WavLM for Vietnamese Speaker Diarization.pdf';
import pdfSegJSW from '../assets/Publications/SegJSW.pdf';
import '../assets/styles/Publications.scss';
import CloseIcon from "@mui/icons-material/Close";

interface Publication {
  title: string;
  authors: string;
  conference: string;
  year: string;
  award?: string;
  pdf: string; // Đường dẫn đến file pdf trong thư mục public/ hoặc link online
  url: string;
  doi?: string;
}

const publications: Publication[] = [
  {
    title: "Adaptation of WavLM for Vietnamese Speaker Diarization in Real Conversations",
    authors: "*Tuan-Duy Thang*, Van-Huy Nguyen, Tri-Nhan Do, Quoc-Khanh Nguyen, Trung-Kien Phan, Dang-Khoa Mac",
    conference: "International Conference on Multimedia Analysis and Pattern Recognition (MAPR)",
    year: "2025",
    award: "Best Runner-up Paper Award",
    pdf: pdfWavLM,
    url: "https://ieeexplore.ieee.org/abstract/document/11133848/",
  },
  {
    title: "SegJSW: A Hybrid Model for Knee Osteoarthritis Classification",
    authors: "Trung-Hieu Phan, Thiet-Su Nguyen, Trung-Tuan Nguyen, Quang-Thang Tran, *Tuan-Duy Thang*, Thanh-Tho Quan, Minh-Triet Tran",
    conference: "RIVF International Conference on Computing and Communication Technologies (RIVF)",
    year: "2023",
    doi: "10.1109/RIVF60135.2023.10471829",
    pdf: pdfSegJSW,
    url: "https://ieeexplore.ieee.org/abstract/document/10471829",
  }
];

function Publications() {
  const [viewingPdf, setViewingPdf] = useState<Publication | null>(null);

  return (
    <div className="publications-container" id="publications">
        <h1>Publications</h1>
        <div className="publications-grid">
          {publications.map((pub, index) => (
            <div className="pub-card" key={index}>
              <div className="pub-info">
                {pub.award && <div className="award-tag"><FontAwesomeIcon icon={faAward} className="icon-orange"/> {pub.award}</div>}
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-authors">
                    {pub.authors.split(', ').map((author, i, arr) => {
                        // Kiểm tra xem tên có dấu * ở đầu và cuối không
                        const isMe = author.startsWith('*') && author.endsWith('*');
                        // Loại bỏ dấu * để hiển thị tên sạch
                        const displayName = isMe ? author.slice(1, -1) : author;

                        return (
                        <React.Fragment key={i}>
                            {isMe ? (
                            <strong className="author-me">{displayName}</strong>
                            ) : (
                            <span>{displayName}</span>
                            )}
                            {/* Thêm dấu phẩy và khoảng trắng nếu không phải tác giả cuối cùng */}
                            {i < arr.length - 1 ? ', ' : ''}
                        </React.Fragment>
                        );
                    })}
                    </p>
                <p className="pub-venue">{pub.conference}, {pub.year}</p>
                
                <div className="pub-actions">
                  <button className="btn-pdf" onClick={() => setViewingPdf(pub)}>
                    <FontAwesomeIcon icon={faFilePdf} /> View Paper
                  </button>
                  <a href={pub.url} target="_blank" rel="noreferrer" className="btn-url">
                    <FontAwesomeIcon icon={faLink} className="icon-black" /> URL
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Pop-up Viewer */}
      {viewingPdf && (
        <div className="pdf-modal-overlay" onClick={() => setViewingPdf(null)}>
          <div className="pdf-modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{viewingPdf.title}</h3>
              <button className="close-btn" onClick={() => setViewingPdf(null)}>
                 <CloseIcon/>
              </button>
            </div>
            <div className="pdf-body">
              <iframe 
                src={`${viewingPdf.pdf}#toolbar=0`} 
                title="Paper PDF"
                width="100%" 
                height="100%"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Publications;