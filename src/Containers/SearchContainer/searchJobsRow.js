import React from 'react'

const searchJobsRow = (props) => (
    <div className="row ">
        <div className="col">
            {
                (!Array.isArray(props.jobs) || !props.jobs.length) ? (
                    (<div></div>)
                )
                    : (
                        props.jobs.map((item, index) => {
                            if (index === 0) {
                                return (<div>
                                    <h4>Jobs</h4>
                                    <div key={index} className="job-item" >
                                        <div className="close-txt">
                                            <p className="company-txt">{item.company}</p>
                                            <p className="title-txt">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                            else {
                                return (
                                    <div key={index} className="job-item" >
                                        <div className="close-txt">
                                            <p className="company-txt">{item.company}</p>
                                            <p className="title-txt">{item.title}</p>
                                        </div>
                                    </div>
                                )
                            }

                        })
                    )
            }
        </div>
    </div>
)

export default searchJobsRow;
