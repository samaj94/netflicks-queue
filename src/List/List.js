import ListItem from "../ListItem/ListItem";

function List({list}) {
  return (
    <ul>
      {list.map((item) => <ListItem title={item.title} />)}
    </ul>
  )
};

export default List;