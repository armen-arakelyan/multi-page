import React from 'react';

import ToolkitProvider,{ CSVExport } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';

const { ExportCSVButton } = CSVExport;

export default function Fcomp(props){
    const my=Object.keys(localStorage);
    const values=[];
    for (let i = 0; i < my.length; i++) {
        values.push(JSON.parse(localStorage.getItem(my[i])))
    }
    const columns=[
        {
            dataField:'name',
            text:'Name',
            sort:true
        },
        {
            dataField:'surname',
            text:'Surname',
            sort:true
        },
        {
            dataField:'mailReg',
            text:'Mail',
            sort:true
        },
        {
            dataField:'passReg',
            text:'Password',
            sort:true
        }
    ]
    return (
         <div>
             <div className="break"></div>
        <ToolkitProvider
        keyField="id"
        data={values}
        columns={columns}
        exportCSV
        >
            {
                props=>(
                    <div>
                         <BootstrapTable  {...props.baseProps} />
                         <div className="csvButton">
                         <ExportCSVButton { ...props.csvProps }>Export CSV!!</ExportCSVButton>
                         </div>
                    </div>
                )
            }
        </ToolkitProvider>
    </div>
    )
}