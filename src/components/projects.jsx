import projectStyle from '../stylemodules/projects.module.css';


function Projects(){
    return <>
        <div className={projectStyle.topdiv}>
            <div className={projectStyle.projectlist}>
                <a className={projectStyle.acontainer} href="http://emicalculator.gauravpadwal.com/" target="_blank">
                    <div className={projectStyle.projectlist_item}>
                        <p><a className={projectStyle.projectlink} >Calculator Application</a></p>
                    </div>
                </a>
                <a className={projectStyle.acontainer} href="http://bloodbank.gauravpadwal.com/" target="_blank">
                    <div className={projectStyle.projectlist_item}>
                        <p><a className={projectStyle.projectlink} >BloodBank Application</a></p>
                    </div>
                </a>
            </div>
        </div>
        
    </>
}

export default Projects;