
  import Portrait from '../../assets/Portrait.jpg'

export default function AboutMe() {
    return (
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-4">
            <img src={Portrait} className="img-fluid p-3" alt="Portrait of Kevin Kiely"/>
          </div>
          <div className="col-7">
            <h2>About Me</h2>
            <p className="fs-5"> Hello! My name is Kevin Kiely, and I am an aspiring software developer. Originally I studied Exercise Science at the University of Massachusetts Lowell, but soon discovered that I didn't enjoy working in healthcare. After a few months of consideration, I settled on software development to be my new career path. I soon after enrolled and have since finished a full-stack MERN bootcamp at University of New Hampshire. Since then I have continued to hone my skillset as I look for an entry level position in the industry. I'm naturally curious, enjoy problem solving, and am incredibly stubborn when I set my mind on completing a task.  </p>
          </div>
        </div>
      </div>
    );
}
