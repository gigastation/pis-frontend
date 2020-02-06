import React, { useCallback, useState, useEffect } from 'react';
import Products from './Products';
import Dropzone, { useDropzone } from 'react-dropzone'
import csv from 'csv-parser'
import Loader from 'react-loader-spinner'
import axios from 'axios'

const App: React.FC = () => {
  useEffect(() => {
    // fetch('./datafeed_01172020.csv')
    //   .then((r) => r.arrayBuffer())
    //   .then(async text => {
    //     const encoded = new TextDecoder('Shift_JIS').decode(text)
    //     const arr = await csv2array(encoded)
    //     console.log(arr)
    //     setData(arr)
    //   })
    loadData()
  }, [])

  const csv2array = ((content: string) => {
    const stream = csv({ separator: '\t' })
    stream.write(content)
    let results: any[] = []
    stream.on('data', (data) => {
      // console.log('data')
      results.push(data)
    })
    stream.on('end', () => {
      console.log('end')
    })
    // console.log(results)
    return results
  })
  const readCsvFile = ((file: Blob) => {
    const reader = new FileReader()
    reader.onload = async () => {
      const result: string = reader.result as string
      return csv2array(result)
    }

    const content = reader.readAsText(file, 'Shift_JIS')
  })
  const setProducts = ((products: any) => {
    setData(data)
  })

  const loadData = () => {
    axios.defaults.baseURL = 'http://192.168.33.10:8000/api'
    axios.get('/products', {})
      .then((response) => {
        console.log(response)
      }).catch((err) => {
        console.log(err)
      })
  }
  const [data, setData] = useState()
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: Blob) => {
      setData(readCsvFile(file))
    })
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })
  return (
    <div>
      <Products data={data} />
      <section>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </section>
    </div>
  );
}

export default App;
