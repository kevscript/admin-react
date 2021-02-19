import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const PostCreate = (props) => {
  return (
    <Edit title="edit a post" {...props}>
        <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="title" />
          <TextInput source="author" />
        </SimpleForm>
    </Edit>
  )
}

export default PostCreate