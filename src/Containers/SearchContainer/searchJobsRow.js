/**Jobs content of search result */

import React from 'react'

const searchJobsRow = (props) => (
    <div className="row ">
        <div className="col">
            {
                (!Array.isArray(props.jobs) || !props.jobs.length) ? (
                    (<div></div>)
                )
                    : (
                        <li className="list-group-item" >
                            <h4>Jobs</h4>
                            {
                                props.jobs.map((item, index) => {
                                    return (
                                        <div key={index} className="job-item" >
                                            <div className="close-txt">
                                                <p className="company-txt">{item.company}</p>
                                                <p className="title-txt">{item.title}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </li>
                    )
            }
        </div>
    </div>
)

export default searchJobsRow;
