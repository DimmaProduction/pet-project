import css from "./BlockProfile.module.css";
import imgEditBtn from '../../../img/edit.svg';
import imgDeleteBtn from '../../../img/delete.svg';

let Block = (props) => {

  let clickEdit = () => {
    props.clickEdit(props.id);
    // alert('edit');
  }

  let clickDelete = () => {
    props.clickDelete(props.id);
    // alert('delete');
  }
  console.log('id - ' + props.id);

  return (
    <div className={css.block}>
      <div className={css.infoBlock}>
        <h2>{props.name}</h2>
        <h3>{props.man}</h3>
        <h3>{props.date}</h3>
        <h3>{props.city}</h3>
      </div>
      <div className={css.btn}>
        <button onClick={clickEdit} className={css.btnEdit}>edit&ensp;<img src={imgEditBtn} alt='edit'></img></button>
        <button onClick={clickDelete} className={css.btnDelete}>delete&ensp;<img src={imgDeleteBtn} alt='del'></img></button>
      </div>

    </div>
  );

}

export default Block;
