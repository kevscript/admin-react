import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const PostCreate = (props) => {
  return (
    <Create title="create a post" {...props}>
        <SimpleForm>
          <TextInput source="id" />
          <TextInput source="title" />
          <TextInput source="author" />
        </SimpleForm>
    </Create>
  )
}

export default PostCreate