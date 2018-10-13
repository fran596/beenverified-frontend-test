import React from 'react'
import linkedinImg from '../../Img/linkedin.png'
import pageImg from '../../Img/page.png'
import facebookImg from '../../Img/facebook.png'
import twitterImg from '../../Img/twitter.png'

const searchSocialRow = (props) => (
    <div className="row ">
        <div className="col">
            {
                (!Array.isArray(props.social) || !props.social.length) ? (
                    (<div></div>)
                )
                    : (
                        <div>
                            <h4>Social media</h4>
                            <div className="row close-txt">
                                {props.social.map((item, index) => {
                                    return (
                                        <div key={index} className="col-4 txt-center">
                                            <a href={item.url}>
                                                <img src={
                                                    (item.type.localeCompare("linkedin") === 0) ? (linkedinImg)
                                                        : (item.type.localeCompare("facebook") === 0 ? (facebookImg)
                                                            : (item.type.localeCompare("twitter") === 0 ? (twitterImg) : pageImg)
                                                        )
                                                }
                                                    alt="logo"
                                                />
                                            </a>
                                            <p className="social-txt">{
                                                (item.type !== "") ? item.type : "other"
                                            }</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
            }
        </div>
    </div>
)

export default searchSocialRow;
