



//////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useEffect, useState } from "react";
// import { Button, Grid, Stack, Typography } from "@mui/material";
// import { useDropzone } from "react-dropzone";
// import styled from "styled-components";
// import axios from "axios";
// import pdfjs from 'pdfjs-dist'; // Import pdf.js library

// const ImageUploadContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   width: 500px;
//   height: 500px;
//   border: 5px dashed black;
//   margin: 10px;
//   padding: 10px;
//   font-size: 20px;
//   font-weight: bold;
//   text-align: center;
//   cursor: pointer;
// `;

// const ImageUploadDropzone = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ImageUploadButton = styled(Button)`
//   background-color: yellow;
//   color: black;
//   border: 1px solid black;
//   padding: 10px;
//   margin: 10px;
// `;

// const ImageUploadPreview = styled.img`
//   width: 100px;
//   height: 100px;
//   margin: 10px;
// `;

// const ImageUpload = () => {
//   const [files, setFiles] = useState([]);
//   const [pdfImages, setPdfImages] = useState([]); // To store extracted PDF images

//   // useEffect(() => {
//   //   pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.8.335/pdf.worker.min.js';
//   // }, []); 


//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop: async (acceptedFiles) => {
//       setFiles([...files, ...acceptedFiles]);

//       // Extract images from PDF files
//       for (const file of acceptedFiles) {
//         if (file.type === "application/pdf") {
//           const pdfImagesArray = await extractImagesFromPDF(file);
//           setPdfImages(pdfImagesArray);
//         }
//       }
//     },
//   });

//   const handleRemoveFile = (index) => {
//     const updatedFiles = [...files];
//     updatedFiles.splice(index, 1);
//     setFiles(updatedFiles);
//   };

//   const handleUpload = async () => {
//     const formData = new FormData();
//     for (const file of files) {
//       formData.append("files", file);
//     }

//     // Upload the images to the server.
//     const response = await axios.post("http://localhost:8000/uploadfiles/", formData);
//     console.log("response", response);
//     if (response.ok) {
//       // Upload successful.
//     } else {
//       // Upload failed.
//     }
//   };

//   const extractImagesFromPDF = async (pdfFile) => {
//     // pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.8.335/pdf.worker.min.js';

//  try{
//     const loadingTask = pdfjs.getDocument(URL.createObjectURL(pdfFile));
//     const pdfDocument = await loadingTask.promise;
//     const pdfImagesArray = [];

//     for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
//       const page = await pdfDocument.getPage(pageNum);
//       const viewport = page.getViewport({ scale: 1 });
//       const canvas = document.createElement('canvas');
//       const context = canvas.getContext('2d');

//       canvas.height = viewport.height;
//       canvas.width = viewport.width;

//       const renderTask = page.render({
//         canvasContext: context,
//         viewport: viewport,
//       });

//       await renderTask.promise;

//       // Convert canvas content to a data URL (base64 encoded image)
//       const imageDataURL = canvas.toDataURL('image/jpeg');
//       pdfImagesArray.push(imageDataURL);
//     }

//     return pdfImagesArray;

// } catch (error) {
//   console.error("Error extracting images from PDF:", error);
// }
//   };

//   return (
//     <Grid container spacing={2} justifyContent={"center"} alignItems={"center"}>
//       <Grid item>
//         <Typography variant="h3" textAlign={"center"}>
//           Upload your pdf
//         </Typography>

//         <ImageUploadContainer>
//           <ImageUploadDropzone {...getRootProps()}>
//             {isDragActive ? "Drop files here..." : "Add files"}
//           </ImageUploadDropzone>
//           <Button onClick={handleUpload}>Upload</Button>

//           <Stack direction="row" spacing={2} sx={{ marginTop: "10px" }}>
//             <ImageUploadButton>+</ImageUploadButton>
//             {files.map((file, index) => (
//               <>
//                 <ImageUploadPreview key={file.name} src={file.preview} alt={file.name} />
//                 <button onClick={() => handleRemoveFile(index)}>Remove</button>
//               </>
//             ))}
//           </Stack>

//           {pdfImages.length > 0 && (
//             <div>
//               <Typography variant="h5">Extracted PDF Images:</Typography>
//               {pdfImages.map((imageDataURL, index) => (
//                 <ImageUploadPreview key={index} src={imageDataURL} alt={`PDF Image ${index + 1}`} />
//               ))}
//             </div>
//           )}
//         </ImageUploadContainer>
//       </Grid>
//     </Grid>
//   );
// };

// export default ImageUpload;


//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////new testing code may work this time////////////////


import { Button, IconButton, Stack, Typography } from "@mui/material";
import { Progress, Upload } from "antd";
import React, { useState } from 'react'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import axios from "axios";
import { FileOpenOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Docs({setShowicon,setInputText}) {
  const [files, setFiles] = useState([]); // Initialize files as an array
  const [showbtn, setShowbtn] = useState(false);
  

const navigate=useNavigate();

  const handleRemoveFile = (index) => {
    debugger
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
    if (updatedFiles.length === 0) {
      setShowbtn(false)
    }
  };

  const handleUpload = async ({ file }) => {
    const formData = new FormData();
    formData.append('files', file); // Append the file to the FormData
    if (files != null) {
      setShowbtn(true)
    }


    setFiles(prevFiles => [...prevFiles, file]); // Add the new file to the files array

    const getFileObject = (progress) => {
      return {
        name: file.name,
        uid: file.uid,
        progress: progress
      };
    };

    await axios.post("http://localhost:8000/uploadfiles/", formData, {
      onUploadProgress: (event) => {
        setFiles(prevFiles => {
          // Update the file's progress in the array
          return prevFiles.map((prevFile) =>
            prevFile.uid === file.uid ? getFileObject(event.loaded / event.total) : prevFile
          );
        });
      }
    });
  }

const handleSubmit =()=>{
  setShowicon(true);
  setInputText(" ")
navigate("/askQues")
}

  // const handleUpload = async ({ file }) => {

  //   var file = new FormData();
  //   file.append('pdf_file', files);

  //   setFiles(prevFiles => [...prevFiles, file]); // Add the new file to the files array

  //   const getFileObject = (progress) => {
  //     return {
  //       name: file.name,
  //       uid: file.uid,
  //       progress: progress
  //     };
  //   };


  //   try{

  //   const res= await axios.post("http://localhost:8000/uploadfiles/", file, {
  //     onUploadProgress: (event) => {
  //       setFiles(prevFiles => {
  //         // Update the file's progress in the array
  //         return prevFiles.map((prevFile) =>
  //           prevFile.uid === file.uid ? getFileObject(event.progress) : prevFile
  //         );
  //       });
  //     }
  //   });
  //   console.log("123456",res)
  // }
  // catch(err)
  // {
  //         console.log("qwertyui",err)
  // }

  // }

  return (
    <Stack spacing={2} my={2} sx={{ width: "100vw" }} justifyContent={"center"} alignItems={"center"}>
      <Upload  multiple customRequest={handleUpload} showUploadList={false}>

        {/* <Button >Choose/Drag File to upload</Button> */}
        <div className="submit" style={{ width:"100%" }}>
        <button className="sbmt"  style={{ width: '100%' }}>Choose File to upload</button>
      </div>

      </Upload>
      {files.map((file, index) => {
        return (
          <Stack key={index}  spacing={2} sx={{ backgroundColor: "rgba(0,0,0,0.05)", width: 500, padding: "8px" }}>
            <Stack  direction={"row"} spacing={2} justifyContent={"space-between"}>
              <Stack direction={"row"} spacing={2}>
            <FileOpenOutlined />
            <Typography sx={{fontFamily:"cursive"}}>{file.name}</Typography>
            </Stack>
            <IconButton  onClick={() => handleRemoveFile(index)}><DeleteTwoToneIcon  fontSize="large"/></IconButton>
            </Stack>
            <Progress percent={Math.ceil(file.progress * 100)} />
          </Stack>
        );
      })}

      {showbtn && <div className="submit" style={{ width: 500 }}>
        <button className="sbmt" onClick={handleSubmit} style={{ width: '100%' }}>Submit</button>
      </div>}

    </Stack>
  )
}

export default Docs;

