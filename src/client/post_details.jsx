import "./dialog.css";
import { Dialog } from "./dialog.jsx";
import {
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown as ThumbsDownIcon,
} from "react-feather";

export function PostDetails({ isOpen, onClose }) {
  // TODO: Fetch post details

  return (
    <Dialog shouldOpen={isOpen} onClose={onClose} className="user-profile">
      <div className="card">
        <header>
          <h4>This are the details of the Post!</h4>
        </header>
        <p>And here goes the content</p>
        <footer className="is-right">
          <a className="button primary">
            <ThumbsUpIcon />
          </a>
          <a className="button">
            <ThumbsDownIcon />
          </a>
        </footer>
      </div>
    </Dialog>
  )
}
