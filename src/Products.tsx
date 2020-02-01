import React from 'react'
import MUIDataTable from 'mui-datatables'
import {Card, CardMedia, CardActionArea, makeStyles} from '@material-ui/core'
import {TreeView, TreeItem} from '@material-ui/lab'
import {ExpandMore, ChevronRight} from '@material-ui/icons'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import Ellipsis from 'react-ellipsis-pjs'

type Props = {
  data: any[]
}
export default function Products(props: Props) {

  // const getMuiTheme = () => createMuiTheme({
  //   overrides: {
  //     MuiDataTableHead: {
  //       root: {
  //         whiteSpace: 'nowrap'
  //       }
  //     }
  //   }
  // })
  const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      width: 150,
      height: 100
    }
  })
  const classes = useStyles()
  const columns = 
  ["Price", 
  {
    name: "Description",
    options: {
    customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
      const ellipsis =<Ellipsis text={value} />
      return (
        // <Ellipsis text={value} />
        <div dangerouslySetInnerHTML={{ __html: value }} />
      )
    }
  }}, 
  { name: "Category",
    options: {
      customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
        return (value.replace('///', '-'))
      }
    }
  }, "Product name",
"Page title", 
  { name: "Image URL",
    options: {
      customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
        return (
          <Card className={classes.card}>
            <CardActionArea>
            <CardMedia className={classes.media}
            image={value}
            />
            </CardActionArea>
          </Card>
        )
      }
    }
  }, 
  { name: "Options",
    options: {
      customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
        return <Ellipsis text={value} />
      }
    }
  }, "Parts Brand", "Model Brand",
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