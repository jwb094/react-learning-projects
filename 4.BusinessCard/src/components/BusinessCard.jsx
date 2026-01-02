import '../css/BusinessCard.css';

function BusinessCard({ BusinessCardProfile }) {

    return <section className="c-card">
        <div className="c-card-header">

            <img src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="c-card-image" />
            <h3>{BusinessCardProfile.firstName} {BusinessCardProfile.lastName}</h3>
            <p>{BusinessCardProfile.jobTitle}</p>
        </div>
        <div className="c-card-body">
            <ul>
                <li>
                    <p>
                        <i class="bi bi-phone"></i>&nbsp;
                        {BusinessCardProfile.phoneNumber}</p>
                </li>
                <li>
                    <p><i class="bi bi-envelope"></i>&nbsp;
                        {BusinessCardProfile.email}</p>
                </li>
                <li>

                    <p>   <i class="bi bi-globe"></i>&nbsp;{BusinessCardProfile.personalWebsite}</p>
                </li>
            </ul>
        </div>
        <div className="c-card-footer">
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
    </section>


}

export default BusinessCard;