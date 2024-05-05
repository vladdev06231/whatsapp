import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BiHelpCircle } from 'react-icons/bi';

const QuickAnswers = () => {

    const [answerList, setAnswerList] = useState(
        [
            "Ugent",
            "Not Interested",
            "New",
            "Customer",
            "Suddenly",
            "Ugent",
            "Not Interested",
            "New",
            "Customer",
            "Suddenly",
            "Ugent",
            "Not Interested",
            "New",
            "Customer",
            "Suddenly",
            "Ugent",
            "Not Interested",
            "New",
            "Customer",
            "Suddenly",
        ]
    );

    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);

    const [pageCount, setPageCount] = useState(0);

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    const [itemsPerPage, setItemsPerPage] = useState(3);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % answerList.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(answerList.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(answerList.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const showItems = () => {
        let items = answerList.slice(itemOffset, itemOffset + itemsPerPage).map((each, index) => {
            return (
                <tr key={index + each}>
                    <td>{each}</td>
                    <td>
                        <button className='bg-danger text-white contact-btn border-0 edit-contact-btn'>Delete</button>
                    </td>
                </tr>
            )
        });
        return items;
    }

    return (
        <div>
            <h3 className='p-3 text-start'>Quick Answers</h3>

            <div className='row'>
                <div className='col-lg-7 col-md-12'>
                    <div className="table-responsive-sm">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Delete</th>
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

                <div className='col-lg-5 col-md-12 position-relative d-flex flex-column '>
                    <div className='text-center mb-3'>
                        <BiHelpCircle className='cursor-pointer' style={{ color: '#FFD233' }}  data-toggle="tooltip" data-placement="top" title="This setting is for quick setting." />
                    </div>

                    <Form.Label htmlFor='answer'>New Answer</Form.Label>
                    <InputGroup>
                        <Form.Control
                            aria-label="Example text with button addon"
                            aria-describedby="basic-addon1"
                            placeholder='Write Here'
                            id="answer"
                        />
                        <Button id="button-addon1">
                            ADD
                        </Button>
                    </InputGroup>
                </div>
            </div>

        </div>
    )
}

export default QuickAnswers;