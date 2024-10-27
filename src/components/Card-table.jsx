import Card from "./Card.jsx";

export default function CardTable() {
  return (
    <div className="card-table">
      <Card
        imgUrl={"https://picsum.photos/200"}
        title={"Random Image"}
        description={"This is a random image"}
      ></Card>
    </div>
  );
}
