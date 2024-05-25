import '../stylemodules/home.module.css';
import homeStyle from '../stylemodules/home.module.css'

import svg1 from '../assets/svg1.svg';

function Home(){
    return <>
        <div className={homeStyle.topdiv}>
            <div className={homeStyle.contentdiv}>
                <div>
                    <p className={homeStyle.paratop}>
                            Myself, Gaurav Padwal.
                    </p>
                </div>
                <div>
                    <img className={homeStyle.image} src={svg1} alt="" />
                </div>
                <div className={homeStyle.about}>
                    
                    <p className={homeStyle.para}>
                    Software Engineer with over 1.5 years of experience in 
                    Frontend development, passionate about developing platforms and innovative features for users, 
                    to meet company targets and client&apos;s business goals. An experienced team player with excellent interpersonal skills. 
                    </p>
                    <p className={homeStyle.parabottom}>
                        I&apos;m proficient in <a className={homeStyle.skills}>Javascript, React, 
                        Nodejs, MongoDB, Docker, Nginx, Git, HTML, CSS </a> 
                        and passionate about creating user-friendly and performant 
                        web experiences.
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default Home;