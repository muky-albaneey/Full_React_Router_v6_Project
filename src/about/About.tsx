import './about.css';
import r1 from '../assets/r1.png'

export const About = () => {
  return (
    <section className='aboutWrapper flexColStart secondaryColor'>
      <div className="secOne">
        <img src={r1} alt="" />
      </div>
      <div className="secTwo flexColStart">
        <h2>
          Don't squeeze  in a sedan when<br />
          You could relax in van 🧛‍♀️ 
        </h2>
        <span>
          Lorem ipsum dolor sit amet consectetur  provident fugit non quisquam commodi necessitatibus hic accusantium, illo cum corporis 
        </span>
      </div>
      <div className="secThree flexColStart">
        <h4>
        accusantium, illo cum corporis 
        accusantium, illo cum corporis 
        accusantium, illo cum corporis 
        </h4>
        <button className='aboutBtn'>send message</button>
      </div>
    </section>
  )
}
