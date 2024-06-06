import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./ContactList.module.css"
export default function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);

    const handleDelete = (id) => {
        dispatch(deleteContact({ id }));
    };
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