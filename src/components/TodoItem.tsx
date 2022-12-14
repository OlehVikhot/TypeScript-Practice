import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onClick: React.MouseEventHandler;
}> = ({ text, onClick }) => {
  return (
    <li className={styles.item} onClick={onClick}>
      {text}
    </li>
  );
};

export default TodoItem;
