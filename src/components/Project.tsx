import React, { useState } from "react";
import '../assets/styles/Project.scss';

// Import ảnh mẫu (Đảm bảo file tồn tại trong assets/images)
import CloseIcon from "@mui/icons-material/Close";
// import videoWan from '../assets/videos/wan_demo.mp4'; 

// Định nghĩa kiểu dữ liệu cho dự án
interface Media {
  type: 'image' | 'video';
  src: string;
  caption: string;
}

interface ProjectItem {
  title: string;
  overview: string;
  description: string[];
  thumbnail: string;
  mediaList: Media[];
  tech: string;
}

function Project() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0);

  const projects: ProjectItem[] = [
    {
      title: "Audio-Driven Generative Video System",
      overview: "A high-performance generative video system that integrates state-of-the-art multimodal models to produce cinematic 720p content. The project features an automated, audio-driven pipeline for realistic lip-sync and motion synchronization, fully optimized for efficient inference in resource-constrained environments and containerized for seamless, reproducible deployment.",
      description: [
        "- Engineered a multimodal pipeline (Text/Image-to-Video) leveraging SOTA models (Wan2.1, InfiniteTalk) to generate high-fidelity 720p video content.",
        "- Enhanced memory efficiency to ensure seamless execution within 20GB RAM and 16GB VRAM constraints.",
        "- Accelerated inference speed by integrating LightX2V, significantly reducing sampling steps while maintaining visual quality.",
        "- Orchestrated complex Audio-Driven workflows via ComfyUI to automate precise lip-sync and facial animation synchronization.",
        "- Containerized the entire architecture using Docker for reproducible deployment and consistent inference across environments."
      ],
      thumbnail: "/images/video_gen_thumb.png",
      mediaList: [
        { type: 'video', src: "Projects/video_gen/Wan21_00002.mp4", caption: "High-quality animation generated via Wan2.1-I2V-14B (720p)" },
        { type: 'video', src: "Projects/video_gen/InfiniteTalk_00007.mp4", caption: "Audio-driven lip-sync synchronization using InfiniteTalk" },
      ],
      tech: "Python, PyTorch, ComfyUI, Docker, FastAPI, Wan2.1, InfiniteTalk, LightX2V"
    },
    {
      title: "CLIP-Based Image Classification & Search",
      overview: "A sophisticated vision-language system enabling zero-shot image classification and semantic keyword search. By leveraging high-dimensional embeddings and efficient vector indexing, the project provides an intuitive interface for managing and retrieving large-scale image datasets without manual labeling.",
      description: [
        "- Implemented a Zero-Shot image classification pipeline using CLIP ViT-L/14 to achieve accurate multi-category labeling without task-specific training.",
        "- Developed a semantic search engine utilizing CLIP embeddings to bridge the gap between textual queries and visual content.",
        "- Optimized high-speed vector retrieval by integrating FAISS (Facebook AI Similarity Search) for efficient similarity indexing.",
        "- Designed an interactive web interface using Gradio to provide users with real-time image search and classification capabilities."
      ],
      thumbnail: "/images/clip_search_thumb.png",
      mediaList: [
        { type: 'image', src: "Projects/clip_search/pipeline.png", caption: "CLIP-Based Image Classification Pipeline" },
        { type: 'video', src: "Projects/clip_search/demo.mp4", caption: "CLIP-Based Image Classification & Search Demo" }
      ],
      tech: "Python, PyTorch, CLIP (OpenAI), FAISS, Gradio"
    },
    {
      title: "Automated Advertisement Banner Generation",
      overview: "An automated creative pipeline developed for the Zalo AI Challenge 2023. The system synergizes large language models with latent diffusion and layout detection models to transform raw marketing data into visually consistent and aesthetically pleasing advertisement banners.",
      description: [
        "- Developed an end-to-end generation pipeline integrating GPT-4o mini for creative copywriting and Realistic_Vision_V1.4 for high-quality background synthesis.",
        "- Implemented precise spatial arrangement of visual elements by leveraging LayoutDETR for automated advertisement layouts.",
        "- Designed a custom text-rendering engine to ensure visually consistent and readable typography within complex advertisement backgrounds.",
        "- Engineered automated prompt engineering workflows to translate marketing requirements into high-fidelity visual assets."
      ],
      thumbnail: "/images/zalo_ai_thumb.png",
      mediaList: [
        { 
          type: 'image', 
          src: 'Projects/adbanner/pipeline.png', 
          caption: "End-to-end automated banner generation pipeline architecture"
        },
        { 
          type: 'image', 
          src: 'Projects/adbanner/pipeline2.png', 
          caption: "Transforming marketing data into background prompts and visual elements"
        },
        { 
          type: 'image', 
          src: 'Projects/adbanner/pipeline3.png', 
          caption: "Background generation via Stable Diffusion and spatial layout optimization using LayoutDETR"
        },
        { 
          type: 'image', 
          src: 'Projects/adbanner/pipeline4.png', 
          caption: "Dynamic text color selection for enhanced visual contrast"
        },
        { 
          type: 'image', 
          src: 'Projects/adbanner/pipeline5.png', 
          caption: "Final advertisement asset with integrated text and background"
        },
        { 
          type: 'image', 
          src: 'Projects/adbanner/banner_vis.png', 
          caption: "Other output 1"
        },
        { 
          type: 'image', 
          src: 'Projects/adbanner/banner_vis (1).png', 
          caption: "Other output 2"
        },
        { 
          type: 'image', 
          src: 'Projects/adbanner/banner_vis (2).png', 
          caption: "Other output 3"
        },
    ],
      tech: "Python, GPT-4o mini, Stable Diffusion, Realistic_Vision_V1.4, LayoutDETR, OpenCV"
    },
    {
      title: "Smart Home Assistant",
      overview: "A comprehensive IoT ecosystem integrating a natural language chatbot with mobile hardware control. The project demonstrates a full-stack approach to home automation, from embedded sensor integration to cross-platform mobile application development.",
      description: [
        "- Developed a cross-platform mobile application for real-time device control and sensor data visualization.",
        "- Integrated an NLP-based chatbot using Rasa and Django to enable natural language commands for smart home automation.",
        "- Engineered a robust backend architecture using Kotlin, MySQL, and Django to manage user data and IoT device states.",
        "- Bridged software and hardware by integrating IoT modules including Adafruit and Yolo:bit for physical environment control."
      ],
      thumbnail: "/images/smarthome_thumb.png",
      mediaList: [
        { type: 'image', src: "Projects/smarthomeassist/architecture.png", caption: "System architecture" },
        { type: 'image', src: "Projects/smarthomeassist/dashboard.png", caption: "Real-time monitoring dashboard for sensor data visualization and device status tracking" },
        { type: 'image', src: "Projects/smarthomeassist/dieukhien.png", caption: "Executing device commands via natural language chat interface" },
        { type: 'image', src: "Projects/smarthomeassist/vuotnguong.png", caption: "Real-time notifications for temperature and humidity threshold breaches" },
        { type: 'image', src: "Projects/smarthomeassist/weather.png", caption: "Integrated weather services" },
        { type: 'image', src: "Projects/smarthomeassist/dubao-demo.png", caption: "Conversational weather forecasting" },
        { type: 'image', src: "Projects/smarthomeassist/chart.png", caption: "Graphical visualization of environmental trends over time" },
      ],
      tech: "Python, Rasa, Django, Kotlin, MySQL, , IoT (Adafruit, Yolo:bit)"
    },
    {
      title: "Lab-Instrument Object Detection System",
      overview: "A specialized object detection project focused on laboratory automation and safety. The system identifies various chemistry instruments in real-time, providing a foundation for automated inventory management and safety protocol monitoring in scientific environments.",
      description: [
        "- Built a high-performance object detection system for specialized laboratory instruments utilizing the YOLOv7 architecture.",
        "- Curated and annotated a custom dataset of chemistry equipment using LabelImg to ensure high detection precision in laboratory settings.",
        "- Fine-tuned model parameters to handle varying lighting conditions and instrument reflections commonly found in lab environments.",
        "- Evaluated model performance using mAP (mean Average Precision) to ensure reliability for automated inventory monitoring."
      ],
      thumbnail: "/images/chem_detect_thumb.png",
      mediaList: [
        { type: 'image', src: "Projects/chemistry_instruments/example1.png", caption: "Example 1"},
        { type: 'image', src: "Projects/chemistry_instruments/example2.png", caption: "Example 2"},
        { type: 'video', src: "Projects/chemistry_instruments/DetectVideo.mp4", caption: "Inference on pre-recorded laboratory footage"},
        { type: 'video', src: "Projects/chemistry_instruments/DetectCamera.mp4", caption: "Real-time detection performance via webcam integration"},
      ],
      tech: "Python, YOLOv7, PyTorch, OpenCV, LabelImg"
    },
    {
      title: "Fall Detection for Healthcare",
      overview: "A real-time Pose-based activity recognition system designed to enhance elderly safety in healthcare environments. Utilizing computer vision to track skeletal landmarks, the project achieved a high level of accuracy in detecting critical falls.",
      description: [
        "- Developed a robust fall detection system using pose estimation to identify critical changes in human orientation and activity.",
        "- Leveraged OpenCV and MediaPipe for high-performance skeletal landmark tracking and real-time motion analysis.",
        "- Engineered pose-based activity recognition logic to minimize false alarms by distinguishing between falls and regular daily movements.",
        "- Recognized as one of the Top 30 teams out of 100+ global participants for the Final Rounds at the Global Health Hackathon 2022 organized by Swinburne Vietnam."
      ],
      thumbnail: "/images/fall_detection_thumb.png",
      mediaList: [
        { type: 'video', src: "Projects/fall_detection/demo-detecting-fall.mp4", caption: "Real-time fall detection and pose tracking demo" }
      ],
      tech: "Python, OpenCV, MediaPipe, Machine Learning"
    },
  ];

  const openModal = (proj: ProjectItem) => {
    setSelectedProject(proj);
    setActiveMediaIndex(0);
  };

  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project" key={index} onClick={() => openModal(proj)} style={{ cursor: 'pointer' }}>
            {/* <img src={proj.thumbnail} className="zoom" alt="thumbnail" width="100%"/> */}
            <h2>{proj.title}</h2>
            <p>{proj.overview}</p>
          </div>
        ))}
      </div>

      {/* Pop-up (Modal) */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedProject(null)}><CloseIcon/></button>
            
            <h2 style={{color: 'black'}}>{selectedProject.title}</h2>
            {selectedProject.description.map((line) => (
              <p style={{color: 'black'}}>{line}</p>
            ))}
            <div className="modal-footer">
              <p className="tech-stack"><b>Technologies:</b> {selectedProject.tech}</p>
            </div>
            <div className="media-viewer">
              {/* Nút điều hướng nếu có nhiều media */}
              {selectedProject.mediaList.length > 1 && (
                <button className="nav-btn prev" onClick={() => setActiveMediaIndex((prev) => (prev - 1 + selectedProject.mediaList.length) % selectedProject.mediaList.length)}>&#10094;</button>
              )}
              
              <div className="display-area">
                {selectedProject.mediaList[activeMediaIndex].type === 'video' ? (
                  <video controls autoPlay preload="none" key={selectedProject.mediaList[activeMediaIndex].src}>
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
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;