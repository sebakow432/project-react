import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchText } from '../../Redux/store';

const SearchForm = () => {
    const [searchString, setSearchString] = useState('');

    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch( searchText(searchString));
        setSearchString('');
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={searchString} onChange={e => setSearchString(e.target.value)}/>
            <Button >
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

export default SearchForm;