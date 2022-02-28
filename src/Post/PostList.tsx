import * as React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';
import { AmplifyPagination, S3ImageField } from '../../../';

export const PostList: React.FC = props => {
  return (
    <List {...props} pagination={<AmplifyPagination />}>
      <Datagrid rowClick="edit">
        <ReferenceField
          label="Featured image"
          source="image.id"
          reference="Media"
        >
          <S3ImageField
            source="attachment"
            style={{ width: 100, height: 'auto' }}
          />
        </ReferenceField>
        <TextField source="title" />
      </Datagrid>
    </List>
  );
};
