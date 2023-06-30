import PropTypes from 'prop-types';

const Search = ({ search, setSearch }) => {
    return(
        <>
            <div className='container'>
                <label htmlFor="exampleDataList" className="form-label fs-2 text-white">What university are you searching?</label>
                    <input 
                    onChange={(event) => {
                        setSearch({ input: event.target.value})
                    }}
                    className="form-control" 
                    type="text" 
                    id="exampleDataList" 
                    placeholder="Type to search..."/>
            </div>
        </>
    )
};

Search.propTypes = {
    search: PropTypes.object,
    setSearch: PropTypes.func,
}

export default Search