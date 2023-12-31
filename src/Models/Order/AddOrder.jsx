import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "../../api/axiosConfig";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import ClearButton from "../../components/ClearButton";
import SubmitButton from "../../components/SubmitButton";
import {
  Box,
  Typography,
  Button,
  InputLabel,
  Icon,
  Select,
  MenuItem,
  ListItem,
  FormControl,
  TextField,
  Stack,
  Checkbox,
  Input,
  OutlinedInput,
} from "@mui/material";
import CloseButton from "../../components/CloseButton";

export const AddOrder = ({ onClose }) => {
  const [product_id, setProduct_id] = useState("");
  const [customer, setCustomer] = useState("");
  const [agent, setAgent] = useState("");
  const [product_price_id, setProduct_price_id] = useState("");
  const [product_commission_id, setProduct_commission_id] = useState("");
  const [status, setStatus] = useState("");
  const [products, setProducts] = useState([]);
  const [agents, setAgents] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClear = () => {
    setProduct_id("");
    setCustomer("");
    setAgent("");
    setProduct_price_id("");
    setProduct_commission_id("");
    setStatus("");
  };

  const schema = yup.object().shape({
    product_id: yup.number().required(),
    customer: yup.number().required(),
    agent: yup.number().required(),
    product_price_id: yup.number().required(),
    product_commission_id: yup.number().required(),
    status: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`/api/v1/products`);

      if (res.status === 200) {
        const productsData = await res.data;
        setProducts(productsData.data);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCustomers = async () => {
      const res = await axios.get(`/api/v1/customers`);

      if (res.status === 200) {
        const customersData = await res.data;
        setCustomers(customersData.data);
      }
    };

    fetchCustomers();
  }, []);

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

  useEffect(() => {
    const fetchOrderStatus = async () => {
      const res = await axios.get(`/api/v1/orders`);

      if (res.status === 200) {
        const OrderStatusData = await res.data;
        setOrders(OrderStatusData.data);
      }
    };

    fetchOrderStatus();
  }, []);

  const AddOrder = async (data) => {
    try {
      setProduct_id(data.product_id);
      setCustomer(data.customer);
      setAgent(data.agent);
      setProduct_price_id(data.product_price_id);
      setProduct_commission_id(data.product_commission_id);
      setStatus(data.status);

      //  customer: Array.isArray(customer) ? customer : [customer],
      // agent: Array.isArray(agent) ? agent : [agent],

      setLoading(true);
      const res = await axios.post(`/api/v1/orders`, {
        product_id,
        customer,
        agent,
        product_price_id,
        product_commission_id,
        status,
      });

      if (res.status === 200) {
        alert("Order Registered Successfully");

        onClose();
        setLoading(false);
      }
    } catch (error) {
      // Handle error appropriately
      console.error("Error adding order:", error);
      setLoading(false);
    }
  };

  return (
    <Box
      Box
      component="form"
      onSubmit={handleSubmit(AddOrder)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        bgcolor: "white",
        boxShadow: 2,
        width: "39rem",
        height: "47rem",
        p: 3,
      }}
    >
      <Box sx={{ pb: 16, ml: 5, mt: 4 }}>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h4" sx={{ ml: 8 }}>
            Add New Order
          </Typography>
          <Stack sx={{ ml: 18 }}>
            <CloseButton onClick={onClose} />
          </Stack>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <FormControl sx={{ py: 6 }}>
            <InputLabel>ProductID</InputLabel>
            <TextField
              {...register("product_id")}
              defaultValue={product_id}
              onChange={(e) => setProduct_id(e.target.value)}
              placeholder="select product ID"
              sx={{
                placeholder: "#707070",
                marginRight: 1,
                borderRadius: 3,
                width: "34rem",
                height: 2,
                color: "black",
              }}
              label="Select ProductID"
              select
              size="small"
            >
              {products.map((product) => (
                <MenuItem key={product.id} value={product.id}>
                  <ListItem>{product.name}</ListItem>
                </MenuItem>
              ))}
            </TextField>
          </FormControl>

          <FormControl sx={{ py: 6 }}>
            <InputLabel>Customer</InputLabel>
            <Select
              {...register("customer")}
              defaultValue={customer}
              onChange={(e) => setCustomer(e.target.value)}
              sx={{
                placeholder: "#707070",
                marginRight: 1,
                borderRadius: 3,
                width: "34rem",
                height: 2,
                color: "black",
              }}
              label="Select Customer"
              input={<Input />}
              renderValue={(selected) =>
                customers
                  .filter((cust) => selected.includes(cust.id))
                  .map((record) => record.name)
                  .join(", ")
              }
            >
              {customers.map((cust) => (
                <MenuItem key={cust.id} value={cust.id}>
                  <Checkbox checked={customers.indexOf(cust.id) > -1} />
                  <ListItem>{cust.fullname}</ListItem>
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ py: 6 }}>
            <InputLabel>Agent</InputLabel>
            <TextField
              {...register("agent")}
              defaultValue={agent}
              onChange={(e) => setAgent(e.target.value)}
              sx={{
                placeholder: "#707070",

                marginRight: 1,
                borderRadius: 3,
                width: "34rem",
                height: 2,
                color: "black",
              }}
              label="Select an agent"
              select
              size="small"
              multiple
              renderValue={(selected) => selected.join(", ")}
            >
              {agents.map((agent) => (
                <MenuItem key={agent.id} value={agent.id}>
                  <ListItem>{agent.fullname}</ListItem>
                </MenuItem>
              ))}
            </TextField>
          </FormControl>

          <FormControl sx={{ py: 6 }}>
            <InputLabel>Product Price</InputLabel>
            <TextField
              {...register("product_price_id")}
              defaultValue={product_price_id}
              onChange={(e) => setProduct_price_id(e.target.value)}
              sx={{
                placeholder: "#707070",
                marginRight: 1,
                borderRadius: 3,
                width: "34rem",
                height: 2,
                color: "black",
              }}
              label="Select Product Price"
              select
              size="small"
            >
              {products.map((product) => (
                <MenuItem key={product.id} value={product.id}>
                  <ListItem>{product.price}</ListItem>
                </MenuItem>
              ))}
            </TextField>
          </FormControl>

          <FormControl sx={{ py: 6 }}>
            <InputLabel>Product Commission</InputLabel>
            <TextField
              {...register("product_commission_id")}
              defaultValue={product_commission_id}
              onChange={(e) => setProduct_commission_id(e.target.value)}
              sx={{
                placeholder: "#707070",
                marginRight: 1,
                borderRadius: 3,
                width: "34rem",
                height: 2,
                color: "black",
              }}
              label="Select Product Commission"
              select
              size="small"
            >
              {products.map((product) => (
                <MenuItem key={product.id} value={product.id}>
                  <ListItem>{product.commission}</ListItem>
                </MenuItem>
              ))}
            </TextField>
          </FormControl>

          <FormControl sx={{ py: 6 }}>
            <InputLabel>Status</InputLabel>
            <TextField
              {...register("status")}
              defaultValue={status}
              onChange={(e) => setStatus(e.target.value)}
              sx={{
                placeholder: "#707070",

                marginRight: 1,
                borderRadius: 3,
                width: "34rem",
                height: 2,
                color: "black",
              }}
              label="Select Order Status"
              select
              size="small"
            >
              {orders.map((order) => (
                <MenuItem key={order.id} value={order.status}>
                  <ListItem>{order.status_label}</ListItem>
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Box>

        <Box sx={{ display: "flex", gap: 33, ml: 5, mt: 2 }}>
          <SubmitButton label="Submit" />
          <ClearButton label="Clear" onClick={handleClear} />
        </Box>
      </Box>
    </Box>
  );
};
