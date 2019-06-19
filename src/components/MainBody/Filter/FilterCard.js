import React from 'react'

export default function FilterCard (props) {
  return (
    <div className='accordion' id='accordionExample'>
      <div className='card'>
        <div className='card-header' id={props.head}>
          <h2 className='mb-0'>
            <button
              className='btn btn-link'
              type='button'
              data-toggle='collapse'
              data-target={`#collaps${props.colapsId}`}
              aria-expanded='false'
              aria-controls='collapseOne'
            >
              {`Category ${props.head}`}
            </button>
          </h2>
        </div>

        <div id={`collaps${props.colapsId}`} className='collapse' aria-labelledby={props.head} data-parent='#accordionExample'>
          <div className='card-body'>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
            officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
            wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
            excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
            you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
    </div>
  )
}
