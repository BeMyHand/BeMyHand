import React from 'react';
import './ArticleListItem.scss';

import Button from "../UIElements/Button/Button";


const ArticleListItem = (props) => (
    <div className="ArticleListItem">
        <div className="ArticleListItem__Img" style={{backgroundImage: `url(${props.cover})`}}>

        </div>
        <div className="ArticleListItem__Content">
            <h1 className="ArticleListItem__Content--Heading">
                {props.title}
            </h1>
            <p className="ArticleListItem__Content--Paragraph">
                {props.body.substr(0,180) + "..."}
            </p>

            <div className="ArticleListItem__Content--DateAndButtonDiv">
                <p className="ArticleListItem__Content--DateAndButtonDiv-PublishedDate">
                    {/*Oct 18 - 3:24 PM*/}
                    {props.date}
                </p>

                <Button
                    buttonText="Explore"
                    width = "114px"
                    height = "31px"
                    padding = "6px 24px 6px 24px"
                    fontSize = "13px"
                    borderRadius = "5px"
                />
            </div>
        </div>
    </div>
);

export default ArticleListItem;