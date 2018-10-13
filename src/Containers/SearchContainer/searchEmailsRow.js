import React from 'react'

const searchEmailsRow = (props) => (
    <div className="row ">
    <div className="col">
    <h4>Email addresses</h4>
        {
            props.emails.map((item,index) =>{
                return(
                    <div key={index}>
                        <a href={"mailto:"+item.email_address}>{item.email_address}</a>
                    </div>  
                )
            })
        }
    </div>
</div>
)

export default searchEmailsRow;
