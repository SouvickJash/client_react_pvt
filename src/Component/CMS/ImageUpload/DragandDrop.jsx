import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

function DragandDrop() {
  const [files, setFiles] = useState([]);

  // Setup dropzone
  const { getRootProps, getInputProps, open: openDropzone } = useDropzone({
    accept: 'image/*', // Accept only images
    noClick: true,     // Disable automatic click trigger
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file), // Create preview URL for each file
        })
      );
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    },
  });

  // Remove file from list
  const removeFile = (file) => {
    setFiles((prevFiles) => prevFiles.filter((f) => f.path !== file.path));
    URL.revokeObjectURL(file.preview); // Clean up preview URL
  };

  return (
    <div className="container">
      {/* Dropzone area */}
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <button type="button" onClick={openDropzone}>
          Open File Dialog
        </button>
      </div>

      {/* File preview section */}
      <aside>
        <ul>
          {files.map((file) => (
            <li key={file.path} style={{ display: 'flex', alignItems: 'center' }}>
              <img src={file.preview} alt={file.path} style={{ width: '100px', marginRight: '10px' }} />
              <div>
                {file.path} - {file.size} bytes
                <button onClick={() => removeFile(file)} style={{ marginLeft: '10px' }}>❌</button>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default DragandDrop;
