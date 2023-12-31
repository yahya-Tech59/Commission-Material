import React, { useEffect } from "react";
import axios from "../api/axiosConfig";

export const useAddCustomer = () => {
  const [loading, setLoading] = useState(false);

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

  const AddCustomer = async (data) => {
    data.agency_id = agency_id;
    setLoading(true);
    const res = await axios.post(`/api/v1/customers`, data);

    if (res.status === 201) {
      alert("Customer Registered Successfully");
      onClose();
      setLoading(false);
    }
  };
  return { loading, AddCustomer };
};
