import React from 'react'

const searchNamesRow = (props) => (
    <li className="list-group-item">
        <div className="row ">
            <div className="col-md-4 text-center">
                <img className="profile-img"
                    src={
                        (!Array.isArray(props.imgs) || !props.imgs.length) ? (
                            "http://getdrawings.com/img/unknown-person-silhouette-32.png"
                        )
                            : (
                                props.imgs[0].url
                            )

                    }
                    alt="Person" />
            </div>
            <div className="col-md-8">
                <h4>Names</h4>
                {
                    props.names.map((item, index) => {
                        return (<p key={index}>{item.full}</p>)
                    })
                }
            </div>
        </div>
    </li>

)

export default searchNamesRow;
