//* IMPORT NEXT JS / THIRD PARTY
import { useState } from 'react';
import Router from 'next/router';
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBar() {
    const [querySearch, setQuerySearch] = useState(false);
    const [status, setStatus] = useState(false);

    const submitSearch = async (e) => {
        e.preventDefault();
        if (e.target.value.length >= 4) {
            setStatus(false);
            Router.push({
                pathname: '/search',
                query: { q: querySearch },
            });
            setQuerySearch(''), 10;
        } else if (e.target.value.length <= 3) {
            setStatus(true);
        }
    };

    const setKeyDown = async (e) => {
        if (e.keyCode === 13) {
            if (e.target.value.length >= 4) {
                setStatus(false);
                Router.push({
                    pathname: '/search',
                    query: { q: querySearch },
                });
                setQuerySearch(''), 10;
            } else if (e.target.value.length <= 3) {
                setStatus(true);
            }
        }
    };

    return (
        <>
            <input
                placeholder="Search"
                type="text"
                onChange={(e) => setQuerySearch(e.target.value)}
                value={querySearch ? querySearch : ''}
                onKeyDown={(e) => setKeyDown(e)}
                minLength={4}
            />
            {status === true && <span>Min 4 characters</span>}
            {querySearch && querySearch.length >= 4 && (
                <AiOutlineSearch
                    size={30}
                    style={{ color: '000' }}
                    onClick={submitSearch}
                />
            )}

            {/* {results.length > 0 && (
                <AiOutlineSearch
                    size={30}
                    style={{ color: '000' }}
                    onClick={submitSearch}
                />
                <span className={styles.found}>{results.length} FOUND</span>
            )} */}
        </>
    );
}
