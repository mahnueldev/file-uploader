// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import axios from 'axios';


// const [image, setImage] = useState(null);
// const dispatch = useDispatch();

// const handleImageChange = e => {
//     setImage(e.target.files[0]);
// };

// const handleUpload = e => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('image', image);

//     axios
//         .post('/upload', formData)
//         .then(response => {
//             dispatch(uploadImage(response.data));
//         })
//         .catch(error => {
//             console.log(error);
//         });
// };