import { useState } from "react";

import List from "../List";
import './Queue.css';

function Queue() {
  const [list, setList] = useState([{title: 'Pulp Fiction'}, { title: 'Die Another Day'}]);

  return (
    <>
    {/* <section className="queue-tabs">
      <h2 className="highlighted">Instant</h2>
      <h2>DVD</h2>
      <div>Add Movie</div>
    </section> */}
    <section classNames="queue-list">
      <List list={list} setList={setList}/>
    </section>
    </>
  );
};

export default Queue;