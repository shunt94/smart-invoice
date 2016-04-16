import React from 'react'

import InvoiceTable from './InvoiceTable'

class InvoiceTemplate extends React.Component {
    render() {
        return (
            <div className='invoice'>
                <div className='invoice__heading'>
                    <h2>Invoice #{this.props.invoiceNumber}</h2>
                </div>
                <div className='invoice__body'>
                    Invoice figures go here
                    Company name
                    Sales - Mixed with Sales count
                    <div className='invoice__body__sales-table'>
                        <InvoiceTable/>
                    </div>
                </div>
                <div className='invoice__footer'>

                </div>
            </div>
        );
    }
}

export default InvoiceTemplate
