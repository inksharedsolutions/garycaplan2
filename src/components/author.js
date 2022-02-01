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
                    I consider myself more of an intense storyteller rather than a strict structured writer. I believe that an overabundance of narratives and details rather than actions lead to lost of interest for the reader. 
                        </p>                        
        
                        <h1 className="author-name-tag">
                            <span>James Bosley</span>
                        </h1>

                        <span className="author-tagline">
                            Author & Writer
                        </span>

                        <button >
                            <Link to="/about-the-author">Read More</Link>
                        </button>
                    </div>
                    
                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg}/>
                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={DummyAuthor} hidden/>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;