import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"
export default function ContactList({ handleDelete }) {
    const value = useSelector(state => state.contacts.items)
    console.log(value)
    return (
       <div className={css.contactsList}>
            {value.map((contact) => (
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