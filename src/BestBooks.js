import React from 'react';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }


  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/books`).then((bestBooksRes) => {

        this.setState({ books: bestBooksRes.data });
    }).catch(error => alert(error.message));
}

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>
         <div>
                {
                    this.state.books.length > 0 &&
                    <>
                        {
                            this.state.books.map(book => {
                                return (
                                    <>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Body>
                                                <Card.Title>{book.title}</Card.Title>
                                                <Card.Text>
                                                    {book.description}
                                                </Card.Text>
                                                <Card.Text>
                                                    {book.status}
                                                </Card.Text>
                                                <Card.Text>
                                                    {book.email}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </>
                                )
                            })
                        }
                    </>
                }
            </div>
        )
      </>
    )
  }
}

export default BestBooks;
