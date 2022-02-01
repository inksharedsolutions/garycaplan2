import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/JamesWBosleybook.png'
import { Helmet } from "react-helmet"


const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'gary-caplan',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
            <Helmet title="About the Book | James Bosley"/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

<BookInfo
                            data={{
                                title: `The Felons of Harpersfield`,
                                spanFirst: ``,
                                imgSrc: Book1,
                                id: 'sailor-sermon',
                                content:
                                    `
                                    <p>
                                    Justice forever lost. Revenge needed found.
                                    </p>
                                    <p>
                                    Generations of the family Porter have tormented the innocent lives involving local citizens of a small town in Southern Tennessee. Promised threats carried out, including brutal assaults and even murder. This is the story of the current generation.
                                    </p>
                                    <p>
                                    One strong willed sister and granddaughter along with an undercover agent labor to exact rightful payback.
                                    </p>



                                    

                                    

                                    `,

                                ebooks: {
                                    stratton:"",
                                    barnes: 'https://www.barnesandnoble.com/w/the-felons-of-harpersfield-james-bosley/1140316562?ean=9781648956034',
                                    amazon: 'https://www.amazon.com/Felons-Harpersfield-James-Bosley-ebook/dp/B09HXXTCC4/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1634324176&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Felons-Harpersfield-James-Bosley/dp/1648956025/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1634324176&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/the-felons-of-harpersfield-james-bosley/1140316562?ean=9781648956027',
                                    booksamillion: 'https://www.booksamillion.com/p/Felons-Harpersfield/James-Bosley/9781648956027?id=8414367126265',
                                },

                                hardcover: {
                                    amazon: 'https://www.amazon.com/Blue-Skies-Tail-Winds-Gerry/dp/1648955282/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1634327061&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/blue-skies-and-tail-winds-gerry-cole/1140141267?ean=9781648955280',
                                    booksamillion: 'https://www.booksamillion.com/p/Blue-Skies-Tail-Winds/Gerry-Cole/9781648955280?id=8330748555077&__cf_chl_jschl_tk__=pmd_RdmYxguYmNajNNFUw5XyCFOY03f.Cnw2x4NkS5844n8-1634847040-0-gqNtZGzNAqWjcnBszQrl',
                                },
                            }}
                        />


                            
                           
                                    

                                    

                            
                    



                        <div className="commentSection">
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;