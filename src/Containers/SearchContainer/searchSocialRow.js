/**Social network's content of search result */

import React from 'react'

/*Images dependencies */
import linkedinImg from '../../Img/linkedin.png'
import pageImg from '../../Img/page.png'
import facebookImg from '../../Img/facebook.png'
import twitterImg from '../../Img/twitter.png'

const searchSocialRow = (props) => (
    <div className="row ">
        <div className="col">
            {
                //If person doesn't have social networks
                (!Array.isArray(props.social) || !props.social.length) ? (
                    (<div></div>)
                )
                //Person has social networks
                    : (
                        <li className="list-group-item">
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
                        </li>
                    )
            }
        </div>
    </div>
)

export default searchSocialRow;
