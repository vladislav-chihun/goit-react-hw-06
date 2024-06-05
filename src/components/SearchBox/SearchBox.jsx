export default function SearchBox({ handleSearch }) {
    const handleChange = (event) => {
        handleSearch(event.currentTarget.value)
    }
    return (
        <>
            <p>Find contacts by name</p>
            <input type="text" onChange={handleChange} />
        </>
   )
}