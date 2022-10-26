import { Box, TextInput } from '@mantine/core'
import type { NextPage } from 'next'
import { createFormContext, zodResolver } from '@mantine/form'
import { z } from 'zod'

interface FormValues {
  name: string
}

const [FormProvider, useFormContext, useForm] = createFormContext<FormValues>()

function ContextField() {
  const form = useFormContext()
  return <TextInput label="Your name" {...form.getInputProps('name')} />
}

export function Context() {
  // Create form as described in use-form documentation
  const form = useForm({
    initialValues: {
      name: '',
    },
    validate: zodResolver(z.object({ name: z.string().min(1) })),
  })

  // Wrap your form with FormProvider
  return (
    <FormProvider form={form}>
      <form
        onSubmit={form.onSubmit((values) => {
          console.log({ values })
        })}
      >
        <ContextField />
      </form>
    </FormProvider>
  )
}

const Home: NextPage = () => {
  const form = useForm()
  return (
    <Box component="main" sx={{}}>
      <Context />
    </Box>
  )
}

export default Home
