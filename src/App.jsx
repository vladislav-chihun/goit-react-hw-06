
import ContactForm from "./components/ContactForm/ContactForm"
import { useEffect, useState } from "react"
import ContactList from "./components/ContactList/ContactList"
import SearchBox from "./components/SearchBox/SearchBox"
import { nanoid } from "nanoid"
import * as yup from 'yup';

const contactSchema = yup.object().shape({
  nameField: yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
  numberField: yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
});

function App() {
  const [contacts, setContacts] = useState(() => {
    const storageData = localStorage.getItem("contacts")
    return storageData ? JSON.parse(storageData) :
    [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  })
  const [searchValue, setSearchValue] = useState("")
  const handleSearch = (values) => {
    setSearchValue(values);
  };
  
  
  useEffect(() => {
    localStorage.setItem("contacts",JSON.stringify(contacts))
  },[contacts])

  const handleCreate = (values,actions) => {
    const newContact = {id:nanoid(), name:values.nameField,number:values.numberField}
    setContacts([...contacts, newContact])
    actions.resetForm()
  }
  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id != id))
  }
  
 

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleCreate={handleCreate} contactSchema={contactSchema} />
      <SearchBox handleSearch={handleSearch} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
</div>
  )
}

export default App
