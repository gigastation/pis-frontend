import React, { useCallback, useState,useEffect } from 'react';
import Products from './Products';
import Dropzone, { useDropzone } from 'react-dropzone'
import csv from 'csv-parser'
import Loader from 'react-loader-spinner'

const App: React.FC = () => {
  useEffect(() => {
    fetch('./datafeed_01172020.csv')
    .then((r) => r.text())
    .then(async text  => {
      const arr = await csv2array(text)
      console.log(arr)
      setData(arr)
    },[])
  })
  
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
      // console.log('load')
      const result: string = reader.result as string
      // const stream = csv({ separator: '\t' })
      // stream.write(result)
      // let results: any[] = []
      // stream.on('data', (data) => {
      //   results.push(data)
      // })
      // stream.on('end', () => {
      //   console.log("load end")
      // })
      // return results
      
      return csv2array(result)
    }

    const content = reader.readAsText(file, 'Shift_JIS')
  })
  const setProducts = ((products: any) => {
    setData(data)
  })
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
