import React from 'react';

const Filter = props => {
    return (
        <form className="filter-container">
            <label>
                <input
                    type="radio"
                    name="filter"
                    value="All"
                    onChange={props.handleChange}
                /> All
            </label>
            <label>
                <input
                    type="radio"
                    name="filter"
                    value="New"
                    onChange={props.handleChange}
                /> New
            </label>
            <label>
                <input
                    type="radio"
                    name="filter"
                    value="Avengers"
                    onChange={props.handleChange}
                /> Avengers
            </label>
            <label>
                <input
                    type="radio"
                    name="filter"
                    value="X-Men"
                    onChange={props.handleChange}
                /> X-Men
            </label>
            <label>
                <input
                    type="radio"
                    name="filter"
                    value="Princess"
                    onChange={props.handleChange}
                /> Princess
            </label>
            <label>
                <input
                    type="radio"
                    name="filter"
                    value="Batman"
                    onChange={props.handleChange}
                /> Batman
            </label>
        </form>
    )
}

export default Filter

//     < label for= "All" >
// <input type="radio" name="radio" class="radio-filter" id="All" value="All">
//             All</>
// <label for="New">
// <input type="radio" name="radio" class="radio-filter" id="New" value="New">
//                 New</label>
// <label for="Avengers">
// <input type="radio" name="radio" class="radio-filter" id="Avengers" value="Avengers">
//                     Avengers</label>
// <label for="X-Men">
// <input type="radio" name="radio" class="radio-filter" id="X-Men" value="X-Men">
//                         X-Men</label>
// <label for="Princess">
// <input type="radio" name="radio" class="radio-filter" id="Princess" value="Princess">
//                             Princess</label>
// <label for="Batman">
// <input type="radio" name="radio" class="radio-filter" id="Batman" value="Batman">
//                                 Batman</label>