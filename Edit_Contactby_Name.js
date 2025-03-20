import addressBook from './Add_NewContacts.js';
function editContactByName(name, updatedDetails) {
    let contact = addressBook.find(contact => contact.firstName === name || contact.lastName === name);
    if (contact) {
        Object.assign(contact, updatedDetails); // Update contact properties
    } else {
        console.log("Contact not found!");
    }
}
export default editContactByName;
// Example Usage
editContactByName("John", { city: "San Francisco", state: "CA" });
console.log(addressBook);