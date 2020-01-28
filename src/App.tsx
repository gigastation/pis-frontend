import React, { useCallback, useState } from 'react';
import Products from './Products';
import Dropzone, { useDropzone } from 'react-dropzone'
import csv from 'csv-parser'
import Loader from 'react-loader-spinner'


const App: React.FC = () => {
  const parseCsv = ((file: Blob): void => {
    const reader = new FileReader()
    reader.onload = async () => {
      console.log('load')
      const result: string = reader.result as string
      const stream = csv({ separator: '\t' })
      stream.write(result)
      let results: any[] = []
      stream.on('data', (data) => {
        results.push(data)
      })
      stream.on('end', () => {
        console.log("load end")
      })
      setData(results)
    }

    const content = reader.readAsText(file, 'Shift_JIS')
  })
  const [data, setData] = useState()
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: Blob) => {
      // const reader = new FileReader()
      // reader.onload = async () => {
      //   console.log('load')
      //   const result: string = reader.result as string
      //   const stream = csv({ separator: '\t'})
      //   stream.write(result)
      //   let results: any[] = []
      //   stream.on('data', (data) => {
      //     results.push(data)
      //   })
      //   stream.on('end', () => {
      //     console.log("load end")
      //   })
      //   setData(results)
      // }

      // const content = reader.readAsText(file, 'Shift_JIS')
      parseCsv(file)
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
