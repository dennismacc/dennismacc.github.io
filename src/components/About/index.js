import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
// import DownloadIcon from '@mui/icons-material/Download'
import { about } from '../../portfolio'
import './style.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, my name is <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>I'm a {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>

        {social && (
          <>
            {social.github && (
              <a
              href={social.github}
              aria-label='github'
              className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {resume && (
              <a href={resume}>
                <span type='button' className='btn btn--outline'>
                  resume
                </span>
              </a>
            )}

            {/* {resume && (
              <a 
              href={resume}
              aria-label='resume'
              className='link link--icon'
              >
                <DownloadIcon />
              </a>
            )} */}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
