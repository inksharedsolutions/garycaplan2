import React from 'react'



const Banner = () => {

    return (
        <>
            <section className="banner-section">
                <div className="container-gt">
                    <div className="one-grid-columns">
                        <div className="grid-child-elem">
                            <div className="banner-text" id ='bannercontent'>

                                <h1>
                                The Felons of <span className = "bannertxt"> Harpersfield </span>
                                </h1>
                                {/* <div className='banner-line2' id = 'bannerline2'>
                                    <p className="right-sub-text">                            
                                    
                                    The Eternity Connection
                                   <hr/>
                                    A Spiritual Memoir told in Short Stories
                                   </p>


                                </div>                          */}

                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;