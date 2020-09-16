import React, { useState } from 'react';
import ComponentStyles from '../style/styles.module.css';

export default function Description({ premier, event }) {
  const [expandText, setExpandText] = useState(false);
  const paragraphClass = expandText ? ComponentStyles.event_page_description_expanded : ComponentStyles.event_page_description;

  const showMoreClass = expandText ? ComponentStyles.event_page_description_read_more_expanded : ComponentStyles.event_page_description_read_more;

  return (
    premier ?
      <section>
        <p
          className={`${paragraphClass} typography_spartacus_four`}
        >
          {event.description}
        </p>
        <span
          onClick={() => setExpandText(!expandText)}
          className={showMoreClass}
        >{expandText ? 'Show Less' : 'Read More'}
        </span>

      </section>
      :
      <>
        <p className={`${ComponentStyles.event_page_description_expanded} typography_spartacus_four`}>
          {event.description}
        </p>
      </>
  );
}
