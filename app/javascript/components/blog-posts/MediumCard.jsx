import React from 'react';
import { Card, CardBody } from 'shards-react';
import ShortenText from './ShortenText';
import ToText from './Totext'
import { faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// functional card component to display single item
export default function MediumCard(props) {

  // I've commented this code out, because it returns the publishing date.
  // However, that is breaking on safari.

  // const shortMonthName = (date) => new Intl.DateTimeFormat('en-US', {
  //   month: 'short'
  // }).format(date);

  // let shortMonth = date.toLocaleString('en-us', { month: 'short' });
  // const date = new Date(props.pubDate);

  // console.log(shortMonth)

 
  // const publishDate = `${shortMonth(date)} ${date.getDate()} ${date.getFullYear()}`;
  return (
    <Card small className="card-post card-post--1">
      <div className="card-post__image" style={{ backgroundImage: `url(${props.thumbnail})` }}>
        <div className="card-post__author d-flex">
          <a
            href={props.profilelink}
            target="_blank"
            className="card-post__author-avatar card-post__author-avatar--small"
            style={{
              backgroundImage: `url(${props.avatar})`
            }}
            rel="noopener noreferrer"
          >
            Written by {props.author}
          </a>
        </div>
      </div>
      <CardBody>
        <h5 className="card-title">
          <a href={props.link} target="_blank" className="text-fiord-blue" rel="noopener noreferrer">
            {ShortenText(props.title, 0, 50)}
          </a>
        </h5>
        <p className="card-text d-inline-block mb-3">{ShortenText(ToText(props.content), 0, 120) + '...'}</p>
        <br />
        <span className="text-dark">
          <FontAwesomeIcon icon={faUser} /> {props.author}
        </span>
        <br />

        {/* <span className="text-muted">
          <FontAwesomeIcon icon={faCalendarAlt} /> {publishDate}
        </span> */}
      </CardBody>
    </Card>
  );
}
