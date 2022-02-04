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
                        Gary Caplan was born in Philadelphia and earned three bachelor’s degrees from the University of Pittsburgh, later earning M.D. and M.P.H. degrees. He serves as a colonel and preventive medicine officer in the reserves and has published articles in medical journals. Caplan became interested in reading science fiction and fantasy books as a young man and, after practicing medicine for several years, began to write his own fiction. At first strictly a hobby, his writing flourished and he decided to publish both a science fiction and sword and sorcery novels in his spare time.
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