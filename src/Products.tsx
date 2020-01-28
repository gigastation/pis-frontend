import React from 'react'
import MUIDataTable from 'mui-datatables'
import {Card, CardMedia, CardActionArea} from '@material-ui/core'
import src from '*.webp'

type Props = {
  data: any[]
}
export default function Products(props: Props) {

  const columns = 
  ["Price", 
  {
    name: "Description",
    options: {
    customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
      return (
        <div dangerouslySetInnerHTML={{ __html: value }} />
      )
    }
  }}, "Category", "Product name",
"Page title", 
  { name: "Image URL",
    options: {
      customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
        return (
          <Card>
            <CardActionArea>
            <CardMedia
            image={value}
            />
            </CardActionArea>
          </Card>
        )
      }
    }
  }, 
  "Options", "Parts Brand", "Model Brand",
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