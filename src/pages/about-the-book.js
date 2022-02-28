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
                <Helmet title="About the Book | Gary Caplan" />
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
                                title: `Prince Gideon`,
                                spanFirst: ``,
                                imgSrc: Book1,
                                id: 'sailor-sermon',
                                content:
                                    `
                                    <p>
                                    This story is about a hero who trough hard work and perseverance and with allies has built up two cities in lands that were his ancestral lands. Until recently
                                    and with a non-aggression treaty in place such construction would not have been possible. Unfortunately close to completion he must leave his city as a situation 
                                    in the north west calls a muster of several militant Orders including The Order of the Shield that Gideon belongs. Meanwhile at about the same time ancient enemies
                                    who slew Gideon's ancestors return from their multiplanas travels. These enemies finding the region of Kir reclaimed and cities and towns rebuilt the ancient hunters
                                    gather an army to lay siege to Kir Kiriath and Kir Barad. While Prince Gideon has to help his allies defend against the northmen's invasion and the return to help his 
                                    old friends and his new vassals defend their lands from invasion.
                                    </p>
                                    `,
                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/heroes-and-villains-california-dreaming-book-i/',
                                    barnes: 'https://www.barnesandnoble.com/w/prince-gideon-gary-caplan/1140783582?ean=9781648956393',
                                    amazon: 'https://www.amazon.com/Prince-Gideon-Chronicles-Ill%C3%BAmaril-Vol-ebook/dp/B09NMSTZB7/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1640182688&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Prince-Gideon-Chronicles-Ill%C3%BAmaril-Vol/dp/1648956386/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1640182688&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/prince-gideon-gary-caplan/1140783582?ean=9781648956386',
                                    booksamillion: 'https://www.booksamillion.com/p/Prince-Gideon/Gary-Caplan/9781648956386?id=8158356429268',
                                }
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