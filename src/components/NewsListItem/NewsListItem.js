import './NewsListItem.scss'
import ReactTimeAgo from 'react-time-ago'

const NewsListItem = props => {
  return (
    <div className="news-list-item">
        <div className="col d-flex">
            <div className="news-item-rank">{props.number}.</div>
            <div className="votearrow"></div>
        </div>

        <div className="col">
            <p className="news-list-headline"><a href={props.link} rel="noreferrer" target="_blank">{props.headline}</a> <span className="source">({props.getDomainFromUrl(props.link)})</span></p>
            <p className="news-list-meta">{props.score} points by {props.by} <ReactTimeAgo date={props.time} locale="en-US" timeStyle="round"/> | <a href="#">hide</a> | <a href={`${props.id}`}>{props.descendants} comments</a></p>
        </div>

    </div>
  )
}

export default NewsListItem