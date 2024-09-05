import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul className={css.list}>
        {contacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact onDelete={onDelete} userData={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;