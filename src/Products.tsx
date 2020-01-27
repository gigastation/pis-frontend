import React from 'react'
import MUIDataTable from 'mui-datatables'

type Props = {
  data: any[]
}
export default function Products(props: Props) {

  const columns = 
  ["Price", "Description", "Category", "Product name",
"Page title", "Image URL", "Options", "Parts Brand", "Model Brand",
"Model Year", "Displacement", "Model Name", "JAN"];

// const data = [
//  ["Joe James", "Test Corp", "Yonkers", "NY"],
//  ["John Walsh", "Test Corp", "Hartford", "CT"],
//  ["Bob Herm", "Test Corp", "Tampa", "FL"],
//  ["James Houston", "Test Corp", "Dallas", "TX"],
// ];

const options = {
  filterType: 'checkbox',
};
  return (
    <MUIDataTable
      title={'aaaaaa'}
      data={props.data} columns={columns}
    />
  )
}