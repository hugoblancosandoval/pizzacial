import "./dialog.css";
import { Dialog } from "./dialog.jsx";
import {
  Mail as MailIcon,
  Coffee as CoffeeIcon,
} from "react-feather";
import "./user_profile.css";

export function UserProfile({ isOpen, onClose }) {
  // TODO: Fetch user details

  return (
    <Dialog shouldOpen={isOpen} onClose={onClose} className="user-profile">
      <div className="card">
        <header>
          <h4>Name of the User</h4>
        </header>
        <p>          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <p>
          User since: {(new Date(Date.now())).toDateString()}        
        </p>
        <footer className="is-right">
          <a className="button primary">
            <MailIcon />
          </a>
          <a className="button">
            <CoffeeIcon />
          </a>
        </footer>
      </div>
    </Dialog>
  )
}
