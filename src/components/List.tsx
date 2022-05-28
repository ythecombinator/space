import { FC } from 'react';

/*~
 * COMPONENT
 */

const List: FC = (props) => {
  const { children } = props;

  return (
    <section
      sx={{
        mb: [5, 5, 6],
        ul: { margin: 0, padding: 0 },
        li: { listStyle: `none`, mb: 3, a: { variant: `links.listItem` } },
        variant: `section_bottom`,
      }}
    >
      {children}
    </section>
  );
};

export default List;
