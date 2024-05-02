import { Table } from "antd";

const Orders = () => {
  const columns = [
    {
      title: "Order ID",
      dataIndex: "ID",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Total Price",
      dataIndex: "price",
    },
    {
      title: "More Info",
      dataIndex: "info",
    },
  ];

  const data = [
    {
      key: 1,
      ID: 26654326765433,
      email: "test1@g.com",
      price: "50$",
      info: (
        <button className="text-blue-600 hover:underline">Show Details</button>
      ),
    },
    {
      key: 2,
      ID: 26567875656566,
      email: "lol@g.com",
      price: "150$",
      info: (
        <button className="text-blue-600 hover:underline">Show Details</button>
      ),
    },
    {
      key: 3,
      ID: 26654676765437,
      email: "test@g.com",
      price: "20$",
      info: (
        <button className="text-blue-600 hover:underline">Show Details</button>
      ),
    },
  ];

  return (
    <div className="min-h-screen px-5 flex flex-col gap-10">
      <p className="text-3xl text-center">Orders</p>

      <Table columns={columns} dataSource={data} scroll={{ x: 550 }} />
    </div>
  );
};

export default Orders;
