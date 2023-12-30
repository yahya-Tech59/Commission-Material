import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "../../api/axiosConfig";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import ClearButton from "../../components/ClearButton";
import SubmitButton from "../../components/SubmitButton";
import { Box, Typography, Button, InputLabel, Icon } from "@mui/material";

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
    <Box sx={{ display: "flex", bgcolor: "white" }}>
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
          height: "46rem",
          p: 3,
        }}
      >
        <Box sx={{ pb: 16, ml: 5, mt: 4 }}>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h4" sx={{ ml: 8 }}>
              Add New Order
            </Typography>
            <Button
              onClick={onClose}
              sx={{
                height: 18,
                width: 8,
                bgcolor: "#3A57E8",
                "&:hover": {
                  bgcolor: "#647ae6",
                },
                ml: 22,
                p: 3,
              }}
            >
              <Icon sx={{ color: "white", pb: 1 }}>
                <IoCloseOutline />
              </Icon>
            </Button>
          </Box>

          <Box sx={{ py: 10 }}>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, py: 0.5 }}
            >
              <InputLabel>ProductID</InputLabel>
              <select
                {...register("product_id")}
                defaultValue={product_id}
                onChange={(e) => setProduct_id(e.target.value)}
                placeholder="select product ID"
                style={{
                  placeholder: "#707070",
                  padding: 3,
                  marginRight: 1,
                  borderRadius: 6,
                  width: "34rem",
                  height: 32,
                }}
              >
                <option value="" disabled>
                  Select Product
                </option>
                {products.map((product) => (
                  <option
                    key={product.id}
                    value={product.id}
                    className="text-slate-700"
                  >
                    {product.name}
                  </option>
                ))}
              </select>
            </Box>

            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, py: 0.5 }}
            >
              <InputLabel>Customer</InputLabel>
              <select
                {...register("customer")}
                defaultValue={customer}
                onChange={(e) => setCustomer(e.target.value)}
                style={{
                  placeholder: "#707070",
                  padding: 3,
                  marginRight: 1,
                  borderRadius: 6,
                  width: "34rem",
                  height: 32,
                }}
              >
                <option value="" disabled>
                  Select Customer
                </option>
                {customers.map((cust) => (
                  <option key={cust.id} value={cust.id}>
                    {cust.fullname}
                  </option>
                ))}
              </select>
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, py: 0.5 }}
            >
              <InputLabel>Agent</InputLabel>
              <select
                {...register("agent")}
                defaultValue={agent}
                onChange={(e) => setAgent(e.target.value)}
                style={{
                  placeholder: "#707070",
                  padding: 3,
                  marginRight: 1,
                  borderRadius: 6,
                  width: "34rem",
                  height: 32,
                }}
              >
                <option value="" disabled>
                  Select an agent
                </option>
                {agents.map((agent) => (
                  <option key={agent.id} value={agent.id}>
                    {agent.fullname}
                  </option>
                ))}
              </select>
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, py: 0.5 }}
            >
              <InputLabel>Product Price</InputLabel>
              <select
                {...register("product_price_id")}
                defaultValue={product_price_id}
                onChange={(e) => setProduct_price_id(e.target.value)}
                style={{
                  placeholder: "#707070",
                  marginRight: 1,
                  borderRadius: 6,
                  width: "34rem",
                  height: 32,
                }}
              >
                <option value="" disabled>
                  Select Product Price
                </option>
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.price}
                  </option>
                ))}
              </select>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <InputLabel>Product Commission</InputLabel>
              <select
                {...register("product_commission_id")}
                defaultValue={product_commission_id}
                onChange={(e) => setProduct_commission_id(e.target.value)}
                style={{
                  placeholder: "#707070",
                  padding: 3,
                  marginRight: 1,
                  borderRadius: 6,
                  width: "34rem",
                  height: 32,
                }}
              >
                <option value="" disabled>
                  Select Product Commission
                </option>
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.commission}
                  </option>
                ))}
              </select>
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, py: 0.5 }}
            >
              <InputLabel>status</InputLabel>
              <select
                {...register("status")}
                defaultValue={status}
                onChange={(e) => setStatus(e.target.value)}
                style={{
                  placeholder: "#707070",
                  padding: 3,
                  marginRight: 1,
                  borderRadius: 6,
                  width: "34rem",
                  height: 32,
                }}
              >
                <option value="" disabled>
                  Select Order Status
                </option>
                {orders.map((order) => (
                  <option key={order.id} value={order.status}>
                    {order.status_label}
                  </option>
                ))}
              </select>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 33, ml: 5 }}>
            <SubmitButton label="Submit" />
            <ClearButton label="Clear" onClick={handleClear} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
