import './hero.css';
import arrow_btn from "../../asserts/arrow_btn.png"
import pause_icon from "../../asserts/pause_icon.png"
import play_icon from "../../asserts/play_icon.png"
const Hero=({setplayStatus,heroData,heroCount,setheroCount,playStatus})=>{
    return(
        <div className="hero">
            <div className="hero-text">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="hero-explore">
                <p>Explore the features</p>
                <img src={arrow_btn} alt=""/>
            </div>

            <div className="hero-dot-play">
                <ul className="hero-dots">
                    <li onClick={()=>setheroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={()=>setheroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={()=>setheroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
                </ul>

            </div>

            <div className="play-status">
                <img onClick={()=>setplayStatus(!playStatus)} src={playStatus?pause_icon:play_icon}/>
                <p className="play-video">play video</p>
            </div>
        </div>

    )
}

export default Hero