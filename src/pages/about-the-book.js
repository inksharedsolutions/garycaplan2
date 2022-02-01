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
                                    Gary Caplan was born in Philadelphia and earned three bachelor’s degrees from the University of Pittsburgh, later earning M.D. and M.P.H. degrees. He serves as a colonel and preventive medicine officer in the reserves and has published articles in medical journals. Caplan became interested in reading science fiction and fantasy books as a young man and, after practicing medicine for several years, began to write his own fiction. At first strictly a hobby, his writing flourished and he decided to publish both a science fiction and sword and sorcery novels in his spare time.
                                    </p>
                                    `,

                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/heroes-and-villains-california-dreaming-book-i/',
                                    barnes: 'https://www.barnesandnoble.com/w/prince-gideon-gary-caplan/1140783582?ean=9781648956386',
                                    amazon: 'https://www.amazon.com/Prince-Gideon-Chronicles-Ill%C3%BAmaril-Vol/dp/1648956386/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1640182688&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Prince-Gideon-Chronicles-Ill%C3%BAmaril-Vol-ebook/dp/B09NMSTZB7/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1640182688&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/prince-gideon-gary-caplan/1140783582?ean=9781648956393',
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