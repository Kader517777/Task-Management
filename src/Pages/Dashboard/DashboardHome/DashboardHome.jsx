import { useDropzone } from "react-dropzone";
import axios from "axios";
import { useState } from "react";
import Card from "../../../Component/Card/Card";

const DashboardHome = () => {
    const [datas, setDatas] = useState([]);
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const files = acceptedFiles.map(file => file.path)
    console.log(files);
    console.log(datas);
    axios.get('http://localhost:3000/createTask')
        .then(res => {
            setDatas(res.data)
        })
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 pb-5">


            <div className=" bg-red-600 border-[2px] border-red-500 h-screen">

                <div  {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <div className="h-screen">
                        <h1 className="text-3xl text-center bg-gray-400">To-do list</h1>
                        <div className="m-5">
                            {datas?.map(item => <Card key={item._id} item={item} />)}
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-red-600 border-[2px] border-red-500 h-screen">

                <div  {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <div className="h-screen">
                        <h1 className="text-3xl text-center bg-gray-400">Ongoing list</h1>
                    </div>
                </div>
            </div>
            <div className=" bg-red-600 border-[2px] border-red-500 h-screen">

                <div  {...getRootProps({ className: 'dropzone' })}>
                    <input className="bg-green-600"  {...getInputProps()} />
                    <div className="h-screen">
                        <h1 className="text-3xl text-center bg-gray-400">Compeleted list</h1>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default DashboardHome;