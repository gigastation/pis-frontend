import React from 'react';
import Products from './Products';
import Dropzone, { useDropzone } from 'react-dropzone'


const App: React.FC = () => {
  return (
    <div>
      <Products />
      <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
}

export default App;
