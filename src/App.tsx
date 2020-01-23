import React from 'react';
import Products from './Products';
import Dropzone, { useDropzone } from 'react-dropzone'
import { useCallback } from 'react';


const App: React.FC = () => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: Blob) => {
      const reader = new FileReader()
      reader.onload = async () => {
        console.log('load')
        
        console.log(reader.result)
        console.log(await reader.readAsText)
      }
      console.log('no load')
      const content = reader.readAsText(file)
      console.log(content)
    })
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})
  return (
    <div>
      <Products />
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
