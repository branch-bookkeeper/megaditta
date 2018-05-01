import React from 'react';

export default () => (
    <section id="hero">
        <div className="row">
            <div className="twelve columns">
                <div className="hero-text">
                    <h1 className="responsive-headline">
                        The perfect template to showcase your awesome product and service.
                    </h1>
                    <p>
                        Aenean condimentum, lacus sit amet luctus lobortis, dolores et quas molestias excepturi
                        enim tellus ultrices elit, amet consequat enim elit noneas sit amet luctu.
                        Quis nostrum exercitationem ullam corporis suscipit laboriosam.
                    </p>
                </div>

                <div className="buttons">
                    <a className="button trial" href="#">Free Trial</a>
                    <a className="button learn-more smoothscroll" href="#features">Learn More</a>
                </div>

                <div className="hero-image">
                    <img src="images/hero-image.png" alt="" />
                </div>
            </div>
        </div>
    </section>
);
