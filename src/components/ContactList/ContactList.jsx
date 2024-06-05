import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"
export default function ContactList({contacts, handleDelete}) {
    return (
       <div className={css.contactsList}>
            {contacts.map((contact) => (
                <Contact
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                    handleDelete={handleDelete} />
            ))}
        </div>
    )
}