import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';

import WizardLayout from '../layout/WizardLayout';

const SystemSettingsContent = () => {

    const [contactList, setContactList] = useState(
        [
            {
                contact_name: "James Dean",
                created_date: "12/04/2022",
                owner: "James",
                phone_number: "+521335566996",
            },
            {
                contact_name: "James Dean",
                created_date: "12/04/2022",
                owner: "James",
                phone_number: "+521335566996",
            },
            {
                contact_name: "James Dean",
                created_date: "12/04/2022",
                owner: "James",
                phone_number: "+521335566996",
            },
            {
                contact_name: "James Dean",
                created_date: "12/04/2022",
                owner: "James",
                phone_number: "+521335566996",
            },
            {
                contact_name: "James Brook",
                created_date: "12/04/2022",
                owner: "James",
                phone_number: "+521335566996",
            },
            {
                contact_name: "William Julia",
                created_date: "12/04/2022",
                owner: "James",
                phone_number: "+521335566996",
            }
        ]
    );

    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % contactList.length;
        setItemOffset(newOffset);
    };

    const editContact = (contact) => {
        console.log(contact);
    }

    const blockContact = (contact) => {
        console.log(contact)
    }
    
    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(contactList.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(contactList.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const showItems = () => {
        let items = contactList.slice(itemOffset, itemOffset + itemsPerPage).map((each, index) => {
            return (
                <tr key={index + each}>

                    <td>{each.contact_name}</td>
                    <td>{each.created_date}</td>
                    <td>{each.owner}</td>
                    <td>{each.phone_number}</td>
                    <td>
                        <button
                            className='text-white contact-btn border-0 edit-contact-btn'
                            onClick={() => editContact(each)}
                        >
                            Edit
                        </button>
                    </td>
                    <td>
                        <button
                            className='text-white contact-btn border-0 delete-contact-btn'
                            onClick={() => blockContact(each)}
                        >
                            Block
                        </button>
                    </td>
                </tr>
            )
        });
        return items;
    }

    return (
        <div className='px-3 py-3'>
            <div className='db-example overflow-auto'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Nombre Cliente</th>
                            <th scope="col">Fecha Creacion</th>
                            <th scope="col">Allowed Licences</th>
                            <th scope="col">Phones numbers</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Block</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showItems()}
                    </tbody>
                </table>

            </div>

            <div className='p-1 mt-3'>
                <ReactPaginate
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={1}
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    previousLabel="<"
                    nextLabel=">"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    )
}

const SystemSettings = () => {
    return (
        <>
            <WizardLayout children={SystemSettingsContent()} name={"Settings"} />
        </>
    )
}

export default SystemSettings;