import '../stylemodules/home.module.css';
import homeStyle from '../stylemodules/home.module.css'

import svg1 from '../assets/svg1.svg';

function Home(){
    return <>
        <div className={homeStyle.topdiv}>
            <div className={homeStyle.contentdiv}>
                <img className={homeStyle.image} src={svg1} alt="" />
                <div className={homeStyle.textspace}>
                    <p>Myself <b>Gaurav Padwal.</b></p>
                    <p>I&apos;m a fullstack developer with 3+ 
                        years of experience building modern web applications. 
                    </p>
                    <p>I&apos;m proficient in React, Nodejs 
                        and passionate about creating user-friendly and performant 
                        web experiences.
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default Home;