import css from "./BlockUser.module.css";

let Block = (props) => {

  return (
    <div className={css.block}>
      <div className={css.infoBlock}>
        <h2>{props.username}</h2>
        <h3>{props.email}</h3>
        <h3>{props.profiles} profiles</h3>
      </div>
    </div>
  );
}

export default Block;
