import PropTypes from "prop-types";
// import { useState } from "react"
import { useTodos } from "../hooks/useTodos";
import { useFormik } from 'formik'

function TodoForm() {

  const { handleAddTodo } = useTodos()

  const formikTodoForm = useFormik({
    initialValues: {
      title: '',
    },
    validate: values => {
      const errors = {};
      if (!values.title) {
        errors.title = 'Required';
      } else if (values.title.length > 20) {
        errors.title = 'Must be 20 characters or less';
      }

      return errors
    },
    onSubmit: values => {
      handleAddTodo({ title: values.title });
      values.title = ''
    }
  })

  return (
    <>

      <form className="mx-3 mt-10 w-full flex flex-col" onSubmit={formikTodoForm.handleSubmit}>
        <input type="text" id="title" name="title" placeholder="Hello world" className="flex-1 px-2.5 py-2 rounded-md"
          value={formikTodoForm.values.title}
          onChange={formikTodoForm.handleChange}
          onBlur={formikTodoForm.handleBlur}
        />
        {formikTodoForm.errors.title && <div className="text-red-500 ms-2 mt-1 text-sm">{formikTodoForm.errors.title}</div>}
        <button type="submit" className="bg-slate-900 text-slate-100 mt-2.5 py-2.5 rounded-md font-semibold">Add Todo</button>
      </form>

    </>
  )
}

TodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
}

export default TodoForm
