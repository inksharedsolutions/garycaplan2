import React from 'react'
import AuthorImg from '../../static/author/dummy-profile.jpg';
import DummyAuthor from "../../static/author/dummy-profile.jpg";
import { Link } from 'gatsby'

const Author = () => {
    return (
        <>
            <section className="upper-main-author" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p>
                            Do you like Epic fantasy, do you like adventures that leave you hanging in the edge of your seat? then you will really enjoy reading Prince Gideon
                        </p>

                        <h1 className="author-name-tag">
                            <span>Gary Caplan</span>
                        </h1>

                        <span className="author-tagline">
                            Author & Writer
                        </span>

                        <button >
                            <Link to="/about-the-author">Read More</Link>
                        </button>
                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} />
                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={DummyAuthor} hidden />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;