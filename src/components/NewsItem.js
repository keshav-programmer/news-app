import React from "react";


const NewsItem = (props)=> {

    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card" style={{margin: '10px', backgroundColor: props.mode ==='dark'? '#222': 'white', color: props.mode ==='dark'? 'white': 'black'}}>

          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>

        <span className="badge rounded-pill bg-danger"> {source}
  </span>
          </div>
        <img src={!imgUrl?"../2902935.jpg": imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">BY {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank"  rel="noreferrer" className="btn btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
