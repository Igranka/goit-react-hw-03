import css from "./Contact.module.css";

const Contact = ({ userData: { name, number, id }, onDelete }) => {
    return (
        <div className={css.contact}>
            <div className={css.label}>
                <h3>{name}</h3>
                <p>{number}</p>
            </div>
            <button className={css.deleteBtn}  onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
};

export default Contact;