import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'

const SearchButton = () => {
    return (
      <div>
        <button
          class="btn waves-effect waves-light light-blue darken-1"
          type="submit"
          name="action"
        >
          Analyze
          <i class="material-icons right">search</i>
        </button>
      </div>
    );
}

export default SearchButton
