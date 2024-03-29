const header = {
    homepage: 'https://dennismacc.github.io',
    title: 'DM.',
  }
  
  const about = {
    name: 'Dennis',
    role: 'Full-Stack Web Developer',
    description:
      'My goal is to provide a user-focused, quality-driven, and more accessible web and mobile experience for all users. This is accomplished by communicating with clients and team members to build responsive and intuitive applications, from ideation to deployment. I strive to create a positive user experience for all users by providing accessibility to everyone through universal, inclusive, and equitable design.',
    resume: 'https://docs.google.com/document/d/e/2PACX-1vSLPp0aAzUmOUN_D4odVpJ4cQrKp922oDXFavsIhGaxaDdk57jZgC854BdYsd-WjBX6cfqlbGTRwmtx/pub',
    social: {
      linkedin: 'https://www.linkedin.com/in/dennismacc/',
      github: 'https://github.com/dennismacc',
    },
  }
  
  const projects = [
    {
      name: 'Holistic Kids Foundation',
      description: 'WordPress website for a non-profit organization that helps raise awareness through alternative and natural activities that encourage personal growth, physical and emotional therapy, social integration, healthy lifestyle, volunteering and the protection of childrens rights.',
      stack: ['Wordpress', 'Figma', 'ADA Compliance', 'CSS'],
      livePreview: 'https://www.holistickidsfoundation.org/',
    },
    {
      name: 'Sunnie Hunnies',
      description:
        'Shopify e-commerce store that sells children and womens swimwear and other beach accessories. The store is built with a custom theme that is fully responsive and ADA compliant.',
      stack: ['Shopify', 'Liquid', 'HTML', 'CSS', 'JavaScript'],
      livePreview: 'https://sunniehunnies.co',
    },
    {
      name: 'Groove',
      description:
        'Groove is a simple productivity app specifically designed to keep you focusing on the tasks that you are doing and nothing else.',
      stack: ['JavaScript (React & Node)', 'GraphQL', 'Apollo', 'JWT', 'Jotai', 'MongoDB', 'Mongoose', 'TailwindCSS'],
      sourceCode: 'https://github.com/dennismacc/Groove',
      // livePreview: 'https://groovey.herokuapp.com',
    },
    {
      name: 'DÜDL',
      description:
        'DÜDL is a multiplayer drawing and guessing game that can be played with friends anytime, anywhere!',
      stack: ['JavaScript', 'Express.js', 'Socket.io', 'Handlebars.js'],
      sourceCode: 'https://github.com/dennismacc/DUDL-Game',
      // livePreview: 'https://dudl.herokuapp.com',
    },
    // {
    //   name: 'Tech Blog',
    //   description:
    //     'CMS-style blog sites that publish articles, blog posts, and other content. The app follows the MVC paradigm in its architectural structure.',
    //   stack: ['MVC', 'Handlebars.js', 'Sequelize', 'Express-Session'],
    //   sourceCode: 'https://github.com/dennismacc/Tech-Blog',
    //   livePreview: 'https://tech-blog-dm.herokuapp.com/',
    // },
    {
      name: 'E-Commerce Back End',
      description:
        'Back end for a sample internet retail company that uses the latest technologies to make them a stronger competitor.',
      stack: ['Node.js', 'Express.js', 'MySQL', 'Sequelize'],
      sourceCode: 'https://github.com/dennismacc/E-Commerce-Back-End',
      livePreview: 'https://drive.google.com/drive/folders/1ET1LksRO79usM_65eSCR5TkwCVNBgWhe?usp=sharing',
    },
    {
      name: 'Employee Tracker',
      description:
        `Command-line application that allows the user to quickly view and manage a company's employee database.`,
      stack: ['Node.js', 'MySQL', 'Inquirer'],
      sourceCode: 'https://github.com/dennismacc/Employee-Tracker',
      livePreview: 'https://drive.google.com/file/d/1CHFgz_nYEHIf8Z0UoO3jTQoxj2WyC8a2/view?usp=sharing',
    },
  ]
  
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'jQuery',
    'Responsive Design',
    'Bootstrap',
    'React',    
    'Material UI',
    'TailwindCSS',
    'APIs',
    'Node.js',
    'Express.js',
    'MySQL/Sequelize',
    'MongoDB/Mongoose',
    'GraphQL',
    'REST',
    'MVC',
    'Git',
    'ADA Compliance',
    'Agile',
    'UI/UX',
    'Figma',
    'Shopify',
    'WordPress',
    'Adobe Creative Suite',
  ]

  const certificates = [
    {
      name: 'Full-Stack Web Development',
      description:
        'A 24-week intensive program that teaches the skills needed to become a full-stack web developer.',
      link: 'https://bootcamp.umn.edu/coding/',
    },
    {
      name: 'React.js',
      link: 'https://www.credly.com/badges/6354981e-c31b-4ea7-98f6-89e88ac6e2cd/public_url'
    }
  ]

  
  const contact = {
    email: 'dennis.maccarthy@gmail.com',
  }
  
  export { header, about, projects, skills, certificates, contact }