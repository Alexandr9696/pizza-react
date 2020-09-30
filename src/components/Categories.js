import React from 'react'
import PropTypes from "prop-types";

const Categories = React.memo(({items, onClickCategories, activeCategories}) => {

  return (
    <div className="categories">
      <ul>
        <li onClick={() => onClickCategories(null)}
            className={activeCategories === null ? 'active' : ''}
        >
          Все
        </li>
        {items &&
        items.map((item, index) => {
          return (
            <li
              className={activeCategories === index ? 'active' : ''}
              onClick={() => onClickCategories(index)}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          )
        })
        }
      </ul>
    </div>
  )
})

// Categories.propTypes = {
//   activeCategories: PropTypes.oneOf([PropTypes.number, null]),
//   items: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onClickCategories: PropTypes.func
// }
//
// Categories.defaultProps = {
//   items: [],
//   activeCategories: null
// }

export default Categories