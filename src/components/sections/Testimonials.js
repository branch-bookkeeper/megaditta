import React from 'react';

export default () => (
    <section id="testimonials">
        <div className="row content">
            <span><i className="quote-left fa fa-quote-left" /></span>
            <div className="text-container">
                <div className="twelve columns">
                    <h1>What People Are Saying.</h1>
                </div>

                <div className="twelve columns flex-container">
                    <div className="flexslider">
                        <ul className="slides">
                            <li>
                                <blockquote>
                                    <p>
                                        Your work is going to fill a large part of your life,
                                        and the only way to be truly satisfied is to do what you believe is great work.
                                        And the only way to do great work is to love what you do.
                                        If you haven&apos;t found it yet, keep looking. Don&apos;t settle.
                                        As with all matters of the heart, you&apos;ll know when you find it.
                                    </p>
                                    <cite>Steve Jobs</cite>
                                </blockquote>
                            </li>

                            <li>
                                <blockquote>
                                    <p>
                                        This is Photoshop&apos;s version  of Lorem Ipsum.
                                        Proin gravida nibh vel velit auctor aliquet.
                                        Aenean sollicitudin, lorem quis bibendum auctor,
                                        nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                                        Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                                    </p>
                                    <cite>Mr. Adobe</cite>
                                </blockquote>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <span><i className="quote-right fa fa-quote-right" /></span>
        </div>
    </section>
);
