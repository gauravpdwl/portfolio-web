import connectStyle from '../stylemodules/connect.module.css';

function Connect(){
    return <>
        <div className={connectStyle.topdiv}>
            <div>
                <p className={connectStyle.para}>
                    &ldquo;Please feel free to reach out if you have any questions - I&apos;m happy to chat!&rdquo;
                </p>

                <p className={connectStyle.para}>
                    &ldquo;For any doubts or suggestions, let me know. Your feedback is valuable!&rdquo;
                </p>
            </div>
            <div className={connectStyle.socialmedialist}>
                <p className={connectStyle.para}><i className="fa-solid fa-envelope"> </i>  gauravpadwal456@gmail.com</p>
                <p className={connectStyle.para}><i className="fa-brands fa-linkedin"></i> <a className={connectStyle.at} href="https://in.linkedin.com/in/gauravpadwal?trk=people-guest_people_search-card" target="_blank">Gaurav Padwal</a></p>
                <p className={connectStyle.para}><i className="fa-brands fa-github"></i> <a className={connectStyle.at} href="https://github.com/gauravpdwl" target="_blank">gauravpdwl</a></p>
                
            </div>
        </div>
    </>
}

export default Connect;