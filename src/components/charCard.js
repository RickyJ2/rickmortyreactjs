import { Card, CardHeader, CardMedia } from "@mui/material";

const CharCard = ({ id, image, charName }) => {
  return (
    <Card
      key={id}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        borderRadius: "10px",
        marginY: "1rem",
        boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
      }}
    >
      <CardMedia component="img" image={image} alt={charName} />
      <CardHeader title={charName} sx={'& a:{textDecoration: none}'} />
    </Card>
  );
};

export default CharCard;
