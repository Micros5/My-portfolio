import React from 'react'
import ProjectCard from '../sub/ProjectCards'

const Projects = () => {
  return (
    <div
     className='flex flex-col items-center justify-center py-20'
     id='Projects'
    >
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
           <ProjectCard
           src="/Project01.jpg"
           title="Promtopia Website Project" 
           description='Develop a Next.js application that highlights the key features of Next.js along with a comprehensive CRUD AI Prompt sharing system utilizing a MongoDB database and implementing NextAuth authentication.'
            />
          <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="A Space themed portfolio website with Next.js 13. By typescript, framer motion, three.js, showcasing my projects, skills, and achievements"
          />
          <ProjectCard
          src="/project02.jpg"
          title="Space Themed Website"
          description="Developed the game using programming languages such as GD Script, along with game development framework Godot Game engine."
          />
        </div>
    </div>
  )
}

export default Projects