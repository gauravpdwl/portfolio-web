import projectStyle from '../stylemodules/projects.module.css';


function Projects(){
    return <>
        <div className={projectStyle.topdiv}>
            <div className={projectStyle.projectlist}>
                <a className={projectStyle.acontainer} href="">
                    <div className={projectStyle.projectlist_item}>
                        <p>Calculator Application</p>
                    </div>
                </a>
                <a className={projectStyle.acontainer} href="">
                    <div className={projectStyle.projectlist_item}>
                        <p>BloodBank Application</p>
                    </div>
                </a>
            </div>
        </div>
        
    </>
}

export default Projects;