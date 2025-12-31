function ProfileCard() {

    return <section class="c-profile col-md-6">
        <img src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="c-profile__image" />
        <div className="c-profile-content">
            <div className="c-profile-user-profile">
                <h2 class="c-profile__name">Fay Amanada Indigo Theresa Holmes</h2>
                <div class="c-profile__content">Job Role</div>
                <div class="c-profile__details">1,200 followers</div>
            </div>
            <div class="c-profile-bio">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae voluptates commodi dolorum eligendi voluptatibus deserunt sequi consequatur. Non, quos!</p>
            </div>
        </div>
    </section>

}

export default ProfileCard;