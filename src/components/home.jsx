import '../stylemodules/home.module.css';
import homeStyle from '../stylemodules/home.module.css'

import svg1 from '../assets/svg1.svg';

function Home(){
    return <>
        <div className={homeStyle.topdiv}>
            <div className={homeStyle.contentdiv}>
                <p className={homeStyle.paratop}>
                        Myself, Gaurav Padwal.
                </p>
                <img className={homeStyle.image} src={svg1} alt="" />
                <div>
                    
                    <p className={homeStyle.para}>
                        I&apos;m a fullstack developer with 3+ 
                        years of experience building modern web applications. 
                    </p>
                    <p className={homeStyle.para}>
                        I&apos;m proficient in React, Nodejs 
                        and passionate about creating user-friendly and performant 
                        web experiences.
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default Home;