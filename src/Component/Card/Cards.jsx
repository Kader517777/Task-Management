

import { useDropzone } from 'react-dropzone'

const Cards = () => {

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const files = acceptedFiles.map(file => file.path)
    console.log(files);
    return (
        <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />

        </div>
    );
};

export default Cards;