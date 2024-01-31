import { useState } from 'react';
import {
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown as ThumbsDownIcon
} from "react-feather";
import { PostDetails } from './post_details.jsx';

export function Card ({ post }) {
  const {
    content,
    timestamp,
  } = post;

  const [showPostDetails, setShowPostDetails] = useState(false);
  
  return (
    <div className="card" onClick={() => setShowPostDetails(true) }>
      <PostDetails isOpen={showPostDetails} onClose={() => setShowPostDetails(false) }/>
      <header>
        <h4>{(new Date(timestamp)).toDateString()}</h4>
      </header>
      <p>{content}</p>
      <footer className="is-right">
        <a className="button primary">
          <ThumbsUpIcon />
        </a>
        <a className="button">
          <ThumbsDownIcon />
        </a>
      </footer>
    </div>
  )
}
