import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const data = [
  {
    name: "Alice",
    surname: "Smith",
    badge_id: "A123",
    id: "EMP001",
    designation: "Software Engineer",
  },
  {
    name: "Bob",
    surname: "Johnson",
    badge_id: "B456",
    id: "EMP002",
    designation: "Data Scientist",
  },
  {
    name: "John",
    surname: "Doe",
    badge_id: "J789",
    id: "EMP003",
    designation: "Product Manager",
  },
  {
    name: "Max",
    surname: "Williams",
    badge_id: "M012",
    id: "EMP004",
    designation: "UI/UX Designer",
  },
  {
    name: "Keith",
    surname: "Richards",
    badge_id: "A1297",
    id: "EMP0076",
    designation: "Software Engineer",
  },
  {
    name: "Ezek",
    surname: "Brown",
    badge_id: "B4987",
    id: "EMP0096",
    designation: "Data Scientist",
  },
  {
    name: "Johnathan",
    surname: "Dove",
    badge_id: "J7908",
    id: "EMP0099",
    designation: "Product Manager",
  },
  {
    name: "Will",
    surname: "Kevins",
    badge_id: "M0123",
    id: "EMP0047",
    designation: "UI/UX Designer",
  },
  {
    name: "Sarah",
    surname: "Miller",
    badge_id: "KI765",
    id: "EMP005",
    designation: "Marketing Specialist",
  },
  {
    name: "Michael",
    surname: "Brown",
    badge_id: "LM7765",
    id: "EMP006",
    designation: "Financial Analyst",
  },
  {
    name: "Emily",
    surname: "Davis",
    badge_id: "YT564",
    id: "EMP007",
    designation: "HR Manager",
  },
  {
    name: "Daniel",
    surname: "Wilson",
    badge_id: "IU334",
    id: "EMP008",
    designation: "Operations Coordinator",
  },
];

const LogsTableComponent = ({ data }) => {
  const navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 150,
    },
    {
      field: "time",
      headerName: "Time",
      width: 150,
    },
    {
      field: "type",
      headerName: "Type",
      width: 110,
    },
    {
      field: "text",
      headerName: "Text",
      width: 110,
    },
  ];

  return (
    <DataGrid
      rows={data}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      pageSizeOptions={[10]}
      disableSelectionOnClick
      disableCell
    />
  );
};

export default LogsTableComponent;
