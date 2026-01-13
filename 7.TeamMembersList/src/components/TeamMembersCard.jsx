import "../css/TeamMembersCards.css";
function TeamMembersCard(teamMember) {
    console.log(teamMember.teamMember.Role)

    return <section className="teamMemberCard" data-component="teamMemberCard">
        <div className="card-bloc">
            <div className="card-bloc-bgimg">
                <img src="https://images.unsplash.com/photo-1765873360499-3f7459f2ff94?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="card-bloc-profileimg">
                <img src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="card-bloc-content">
                <h2>{teamMember.teamMember.name}</h2>
                <b>{teamMember.teamMember.Role}</b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sit amet culpa repellendus, praesentium neque fuga quia doloribus tempore cum consequatur omnis quis error repudiandae labore, delectus, asperiores ut suscipit.</p>
            </div>
            <div className="card-bloc-socials">
                {/* <i class="bi bi-facebook"></i>
                <i class="bi bi-linkedin"></i>
                <i class="bi bi-twitter-x"></i>
                <i class="bi bi-instagram"></i> */}
                <ul>
                    <li>
                        <a href="https://facebook.com" aria-label="Facebook">
                            <i class="bi bi-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com" aria-label="LinkedIn">
                            <i class="bi bi-linkedin"></i>
                        </a>
                    </li>
                    <li> <a href="https://x.com" aria-label="X">
                        <i class="bi bi-twitter-x"></i>
                    </a></li>
                    <li>
                        <a href="https://instagram.com" aria-label="Instagram">
                            <i class="bi bi-instagram"></i>
                        </a></li>
                </ul>
            </div>
        </div>
    </section>


}


export default TeamMembersCard;