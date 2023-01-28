import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '../../Redux/store';

  const ListForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const id = useSelector(state => (state.lists.length + 1).toString());
 

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ id, title, description}));
    setTitle('');
    setDescription('');
  }

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <span className={styles.listFormText}>Title:</span>
        <TextInput type='text' value={title} onChange={e => setTitle(e.target.value)} />
      <span className={styles.listFormText}>Description:</span>
        <TextInput type='text' value={description} onChange={e => setDescription(e.target.value)} />
      <Button >Add list</Button>
    </form>
  );
}

export default ListForm;