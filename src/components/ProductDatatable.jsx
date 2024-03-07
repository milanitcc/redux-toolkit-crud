import React, { useEffect, useState } from 'react'
import Datatable from 'react-data-table-component';

const ProductDatatable = () => {

    const columns = [
        {
            name: "Sr.No",
            selector: (row) => row.id,
        },
        {
            name: "Title",
            selector: (row) => row.title,
        },
        {
            name: "Category",
            selector: (row) => row.category,
        },
        {
            name: "Price",
            selector: (row) => row.price,
        },
        {
            name: "Image",
            selector: (row) => <img src={row.image} height={70} width={80} alt='' />,
        },
        {
            name: "Actions",
            cell: (row) => (
                <button className='btn btn-danger' onClick={() => handleDelete(row.id)}>Delete</button>
            )
        }
    ];

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState([]);

    const getProducts = async() => {
        try {
            const req = await fetch("https://fakestoreapi.com/products");
            const res = await req.json();
            setProducts(res);
            setFilter(res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        const result = products.filter((product) => {
            return product.title.toLowerCase().match(search.toLowerCase());
        });

        setFilter(result);
    }, [search]);

    const handleDelete = (id) => {
        const newData = products.filter((product) => product.id !== id)
        setFilter(newData);
    }

    const tableHeaderStyle = {
        headCells: {
            style: {
                fontWeight: 'bold',
                fontSize: '14px',
                backgroundColor: '#ccc'
            }
        }
    }

    return (
        <div>
            <h1>Product List</h1>
            <Datatable
                customStyles={tableHeaderStyle}
                columns={columns}
                data={filter}
                pagination
                selectableRows
                fixedHeader
                selectableRowsHighlight
                highlightOnHover
                actions={
                    <button className='btn btn-success'>Exprt Pdf</button>
                }
                subHeader
                subHeaderComponent={
                    <input
                        type="text"
                        className='w-25 form-control'
                        placeholder='Search...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                }
                subHeaderAlign='right'
            />
        </div>
    )
}

export default ProductDatatable