import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
// import Event from '../components/event'


import Banner from '../components/non-front-banner'
// import AuthorImg from '../../static/author/author-profile.jpg'
import DummyImg from '../../static/author/dummy-profile.jpg'
import { Helmet } from "react-helmet"

const ATB = (props) => {

    return (
        <>
            <Layout>
                <Helmet title="About the Author | James Bosley" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img
                                    src={DummyImg}
                                    alt="_main_author" />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                - “What other’s think of me is none of my business.” And “When struggling with a decision, ask yourself this, ‘what is really going to mean a hundred years from now?"
                                <br/>

                                </h4>
                                <p>
                                    <span className="author-name">
                                        {/* <span className="author-span-ft">Author | Writer </span> */}
                                        {/* <span className="ata-name">James Bosley</span> */}
                                    </span>
                                </p>
                            </div>
                        </div>

                        
                        <article className="article-section column" id="author">

                        <p>
                        I consider myself more of an intense storyteller rather than a strict structured writer. I believe that an overabundance of narratives and details rather than actions lead to lost of interest for the reader. I described the characters enough physically and personality wise for the reader to develop their own outlook on individuals involved in the novel without me, the author, holding their hands along the way. I believe the strength of my fiction novels are the actions and adventures faced by those involved in the plot of the story. I attempt to place the readers on the edge of their seat throughout four hundred pages or more with adversity, hurdles, failures, ensuring, delivering, setbacks, paybacks, enemies, allies, friends, foes, beliefs dismissed, new horizons found, doubts revealed, confidence restored, skirmishes lost, and battles won. And in the end of every mood, every error, every triumph, and every resolution all equal two words = Merely Human.         </p>

                        
                            
                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">James Bosley</span>
                                </span>
                            </p> 

                        </article>
                    </section>
                </div>

                {/* <Event /> */}
                

            </Layout>
        </>
    )
}


export default ATB;
