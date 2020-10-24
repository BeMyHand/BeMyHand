import React from 'react';
import './ArticleMainHeader.scss'

const ArticleMainHeader = (props) => (
    <div className="ArticleMainHeader">
        <div className="ArticleMainHeader__Img">
            <h1 className="ArticleMainHeader__Img--AboveText">
                Articles
            </h1>
        </div>
        <div className="ArticleMainHeader__Toolbar">
            <div className="ArticleMainHeader__Toolbar--ButtonsPalette">
                <div className="ArticleMainHeader__Toolbar--ButtonsPalette-Button">
                    <div className="ArticleMainHeader__Toolbar--ButtonsPalette-Button-Text">
                        <p>
                            All Topics
                        </p>
                    </div>
                    <div className="ArticleMainHeader__Toolbar--ButtonsPalette-Button-Bar">

                    </div>
                </div>
                <div className="ArticleMainHeader__Toolbar--ButtonsPalette-Button">
                    <div className="ArticleMainHeader__Toolbar--ButtonsPalette-Button-Text">
                        <p>
                            Popular
                        </p>
                    </div>
                    {/*<div className="ArticleMainHeader__Toolbar--ButtonsPalette-Button-Bar">*/}

                    {/*</div>*/}
                </div>
                <div className="ArticleMainHeader__Toolbar--ButtonsPalette-Button">
                    <div className="ArticleMainHeader__Toolbar--ButtonsPalette-Button-Text">
                        <p>
                           Trending
                        </p>
                    </div>
                    {/*<div className="ArticleMainHeader__Toolbar--ButtonsPalette-Button-Bar">*/}

                    {/*</div>*/}
                </div>
            </div>
        </div>
    </div>
);

export default ArticleMainHeader;