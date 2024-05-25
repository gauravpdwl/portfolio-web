import projectStyle from '../stylemodules/projects.module.css';


function Projects(){
    return <>
        <div className={projectStyle.topdiv}>
            <div className={projectStyle.projectlist}>
                <a className={projectStyle.acontainer} href="http://emicalculator.gauravpadwal.com/" target="_blank">
                    <div className={projectStyle.projectlist_item}>
                        <p className={projectStyle.projecttitle}>Calculator Application</p>
                        <p className={projectStyle.projectdescription}>Calculate your EMI in easy way</p>
                    </div>
                </a>
                <a className={projectStyle.acontainer} href="http://bloodbank.gauravpadwal.com/" target="_blank">
                    <div className={projectStyle.projectlist_item}>
                        <p className={projectStyle.projecttitle}>BloodBank Application</p>
                        <p className={projectStyle.projectdescription}>Submit your Nomination for Blood Donation</p>
                    </div>
                </a>
                <a className={projectStyle.acontainer} href="">
                    <div className={projectStyle.projectlist_item}>
                        <p className={projectStyle.projecttitle}>Pizza - In Development</p>
                        <p className={projectStyle.projectdescription}>Order Pizza from your favourite restaurant</p>
                    </div>
                </a>
            </div>
        </div>
        
    </>
}

export default Projects;