// AddCustomer.js
import React, { useEffect, useState } from "react";
import axios from "../../Services/axiosConfig";
import { Box } from "@mui/material";
import AddCustomerForm from "./AddCustomerForm";

export const AddCustomer = ({ onClose }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [agency_id, setAgency_id] = useState("");
  const [agents, setAgents] = useState([]);

  const handleClear = () => {
    setName("");
    setContact("");
    setAddress("");
    setAgency_id("");
  };

  useEffect(() => {
    const fetchAgents = async () => {
      const res = await axios.get(`/api/v1/agents`);

      if (res.status === 200) {
        const agentsData = await res.data;
        setAgents(agentsData.data);
      }
    };

    fetchAgents();
  }, []);

  const handleSubmit = async (data) => {
    data.agency_id = agency_id;
    setLoading(true);
    const res = await axios.post(`/api/v1/customers`, data);

    if (res.status === 201) {
      alert("Customer Registered Successfully");
      onClose();
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ ml: 3 }}>
        <AddCustomerForm
          onSubmit={handleSubmit}
          onClear={handleClear}
          onClose={onClose}
          loading={loading}
          name={name}
          setName={setName}
          address={address}
          setAddress={setAddress}
          contact={contact}
          setContact={setContact}
          agents={agents}
          agency_id={agency_id}
          setAgency_id={setAgency_id}
        />
      </Box>
    </Box>
  );
};

// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import axios from "../../Services/axiosConfig";
// import { IoCloseOutline } from "react-icons/io5";
// import SubmitButton from "../../components/SubmitButton";
// import ClearButton from "../../components/ClearButton";
// import {
//   Box,
//   Typography,
//   InputLabel,
//   Input,
//   MenuItem,
//   ListItem,
//   TextField,
// } from "@mui/material";
// import CloseButton from "../../components/CloseButton";

// export const AddCustomer = ({ onClose }) => {
//   const [name, setName] = useState("");
//   const [contact, setContact] = useState("");
//   const [address, setAddress] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [agency_id, setAgency_id] = useState("");
//   const [agents, setAgents] = useState([]);

//   const handleClear = () => {
//     setName("");
//     setContact("");
//     setAddress("");
//     setAgency_id("");
//   };

//   const schema = yup.object().shape({
//     fullname: yup.string().required(),
//     phone: yup.string().required(),
//     address: yup.string().required(),
//     agency_id: yup.string().required(),
//   });

//   const { register, handleSubmit } = useForm({
//     resolver: yupResolver(schema),
//   });

//   useEffect(() => {
//     const fetchAgents = async () => {
//       const res = await axios.get(`/api/v1/agents`);

//       if (res.status === 200) {
//         const agentsData = await res.data;
//         setAgents(agentsData.data);
//       }
//     };

//     fetchAgents();
//   }, []);

//   const AddCustomer = async (data) => {
//     data.agency_id = agency_id;
//     setLoading(true);
//     const res = await axios.post(`/api/v1/customers`, data);

//     if (res.status === 201) {
//       alert("Customer Registered Successfully");
//       onClose();
//       setLoading(false);
//     }
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <Box
//         component="form"
//         onSubmit={handleSubmit(AddCustomer)}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: 1,
//           bgcolor: "white",
//           boxShadow: 2,
//           width: "35rem",
//           height: "37rem",
//           borderRadius: 2,
//           p: 3,
//         }}
//       >
//         <Box sx={{ mt: 4 }}>
//           <Box sx={{ display: "flex", gap: 5 }}>
//             <Typography variant="h4" sx={{ ml: 7 }}>
//               Add New Customer
//             </Typography>
//             <Box sx={{ ml: 7 }}>
//               <CloseButton onClick={onClose} />
//             </Box>
//           </Box>

//           <Box sx={{ ml: 3, my: 7 }}>
//             <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
//               <InputLabel>Name</InputLabel>
//               <Input
//                 type="text"
//                 {...register("fullname")}
//                 sx={{
//                   bgcolor: "#F9F9F9",

//                   mr: 1,
//                   borderRadius: "0.5rem",
//                   width: "32rem",
//                   "::placeholder": {
//                     pl: 2,
//                     color: "#8A92A6",
//                   },
//                 }}
//                 placeholder="john"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </Box>
//             <Box
//               sx={{ display: "flex", flexDirection: "column", gap: 1, py: 2 }}
//             >
//               <InputLabel>Contact</InputLabel>
//               <Input
//                 type="string"
//                 {...register("phone")}
//                 sx={{
//                   bgcolor: "#F9F9F9",

//                   mr: 1,
//                   borderRadius: "0.5rem",
//                   width: "32rem",
//                   "::placeholder": {
//                     pl: 2,
//                     color: "#8A92A6",
//                   },
//                 }}
//                 placeholder="123456"
//                 value={contact}
//                 onChange={(e) => setContact(e.target.value)}
//               />
//             </Box>
//             <Box
//               sx={{ display: "flex", flexDirection: "column", gap: 1, py: 2 }}
//             >
//               <InputLabel>Address </InputLabel>
//               <Input
//                 type="text"
//                 {...register("address")}
//                 sx={{
//                   bgcolor: "#F9F9F9",

//                   mr: 1,
//                   borderRadius: "0.5rem",
//                   width: "32rem",
//                   "::placeholder": {
//                     pl: 2,
//                     color: "#8A92A6",
//                   },
//                 }}
//                 placeholder="mogadishu..."
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </Box>

//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: 1,
//                 py: 2,
//               }}
//             >
//               <InputLabel>Agency</InputLabel>
//               <TextField
//                 {...register("agency_id")}
//                 defaultValue={agency_id}
//                 onChange={(e) => setAgency_id(e.target.value)}
//                 sx={{
//                   borderRadius: 3,
//                   width: "32rem",
//                   height: 2,
//                   color: "black",
//                 }}
//                 label="Select an agent"
//                 select
//                 size="small"
//               >
//                 {agents.map((agent) => (
//                   <MenuItem
//                     key={agent.id}
//                     value={agent.id}
//                     sx={{ paddingBottom: 2 }}
//                   >
//                     <ListItem>{agent.fullname}</ListItem>
//                   </MenuItem>
//                 ))}
//               </TextField>
//             </Box>
//           </Box>

//           {/* <div className="flex mt-6 gap-4 justify-center ">
//             <input type="checkbox" />
//             <p>I agree With The Terms Of Use</p>
//           </div> */}
//           <Box
//             sx={{
//               display: "flex",
//               gap: 38,
//               ml: 2,
//             }}
//           >
//             <SubmitButton label="Submit" />
//             <ClearButton label="Clear" onClick={handleClear} />
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };
