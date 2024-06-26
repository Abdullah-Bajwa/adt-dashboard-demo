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

const TableComponent = () => {
  const navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => (
        <Button
          onClick={() => openUserDetails(params.id)}
          variant="contained"
          color="primary"
        >
          Details
        </Button>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "surname",
      headerName: "Surname",
      width: 150,
    },
    {
      field: "badge_id",
      headerName: "Badge ID",
      width: 110,
    },
    {
      field: "designation",
      headerName: "Designation",
      description: "This column has a value getter and is not sortable.",
      width: 160,
    },
  ];

  const openUserDetails = (id) => {
    console.log(id);
    navigate(`/user-details/${id}`);
  };
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

export default TableComponent;
