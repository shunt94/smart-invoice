import React from 'react'

// Components
import InvoiceTemplate from 'components/invoice/InvoiceTemplate'

class Invoice extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <InvoiceTemplate invoiceNumber={1}/>
            </div>
        );
    }
}

export default Invoice
