import React from 'react'
import Navbar from '../components_lite/Navbar'
import Gaurav from './Gaurav.png'; 


const Creator = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
          <div className="flex justify-center">
            <img src={Gaurav} alt="Gaurav Kumar" className="h-80 object-cover rounded-lg shadow-md" />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Gaurav Kumar</h2>
            <p className="text-gray-600 mb-2">
              I am currently pursuing my <strong>B.Tech in Information Technology</strong> from <strong>Harcourt Butler Technical University (HBTU), Kanpur</strong>, and am in my <strong>final year</strong> of study.
            </p>
            <p className="text-gray-600 mb-2">
              Throughout my academic journey, I have developed a strong foundation in software development, web technologies, and programming. I am passionate about building innovative tech solutions and constantly strive to improve my skills through real-world projects and collaborations.
            </p>
            <p className="text-gray-600 mb-2">
              In addition to academics, I’ve worked on several full-stack development projects, ranging from educational platforms to utility tools. I enjoy exploring new technologies and applying them to solve problems efficiently.
            </p>
            <p className="text-gray-600">
              I'm currently looking for opportunities to contribute to impactful tech projects, internships, or full-time roles where I can grow as a developer and collaborate with like-minded professionals.
            </p>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Creator
