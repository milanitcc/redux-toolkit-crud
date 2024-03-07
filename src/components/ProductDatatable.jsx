import React, { useEffect } from 'react'
import Datatable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, setSearch, deleteProduct } from '../features/productSlice'
import StatusCode from '../utils/StatusCode';

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
                <button
                    className='btn btn-danger'
                    onClick={() => dispatch(deleteProduct(row.id))}
                >Delete</button>
            )
        }
    ];
    const {search, filter, status} = useSelector(state => state.products)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);

    const tableHeaderStyle = {
        headCells: {
            style: {
                fontWeight: 'bold',
                fontSize: '14px',
                backgroundColor: '#ccc'
            }
        }
    }

    if( status === StatusCode.LOADING ) {
        return (<h2>Loading...</h2>)
    }

    if( status === StatusCode.ERROR )
    {
        return <h2>Something went wrong. Try again later</h2>
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
                        onChange={(e) => dispatch(setSearch(e.target.value))}
                    />
                }
                subHeaderAlign='right'
            />
        </div>
    )
}

export default ProductDatatable