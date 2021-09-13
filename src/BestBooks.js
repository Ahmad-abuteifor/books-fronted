import React from 'react';
// import Carousel from 'react-bootstrap/Carousel'
import { Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import AddBooks from './components/addbook';

class BestBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            showAddModal: false,

        }
    }



    handelAddModal = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);

        const reqBody = {
            title: e.target.bookTitle.value,
            description: e.target.bookdescription.value,
            status: e.target.bookstatus.value,
            email: e.target.bookemail.value,


        }


        axios.post(`${process.env.REACT_APP_API_URL}/books`, reqBody).then(creatBooksdata => {
            this.state.books.push(creatBooksdata.data);
            this.setState({ books: this.state.books });
        }).catch(() => alert("Something went wrong!"));
    }


    handelDeleteCat = (bookId) => {

      
    
        axios.delete(`${process.env.REACT_APP_API_URL}/books/${bookId}`).then(deleteResponse => {
          if (deleteResponse.data.deletedCount === 1) {
            const newBookArray = this.state.books.filter(book => book._id !== bookId);
            
            this.setState({ books: newBookArray });
          }
        }).catch(() => alert("something went wrong"));
      }



    handelDisplayAddModal = () => {
        this.setState({ showAddModal: !this.state.showAddModal });
    }

    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/books`).then((bestBooksRes) => {

            this.setState({ books: bestBooksRes.data });
        }).catch(error => alert(error.message));
    }
    /* TODO: Make a GET request to your API to fetch books for the logged in user  */

    render() {

        /* TODO: render user's books in a Carousel */
        console.log(this.state.books);

        return (

            <>
                <Button onClick={this.handelDisplayAddModal}>

                    creat a new book
                </Button>

                {this.state.showAddModal &&
                    <>
                        <AddBooks
                            show={this.state.showAddModal}
                            handelAddModal={this.handelAddModal}
                            handelDisplayAddModal={this.handelDisplayAddModal}
                        />
                    </>


                }



                <div>
                    {
                        this.state.books.length > 0 &&
                        <>


                            <>

                                <Carousel>

                                    {
                                        this.state.books.map(book => {
                                            return (<Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="http://trumpwallpapers.com/wp-content/uploads/Book-Wallpaper-03-3840-x-2400.jpg"
                                                    alt={book.title}
                                                />

                                                <Carousel.Caption>
                                                    <h3> {book.title}
                                                    </h3>
                                                    <p>   {book.description}
                                                    </p>
                                                    <p> statuse: {book.status} <br></br>
                                                        Email address:  {book.email}
                                                    </p>
                                                    <Button variant="danger" onClick={() => this.handelDeleteCat(book._id)}>delete book</Button>

                                                </Carousel.Caption>
                                            </Carousel.Item>

                                            )

                                        })
                                    }
                                </Carousel>
                            </>


                        </>
                    }
                </div>

            </>
        )
    }
}

export default BestBooks;
