"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Mail } from "lucide-react"

// import { subscribeToNewsletterAction } from '@/app/newsletter-actions';
import { toast } from "sonner"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const NewsletterFormSchema = z.object({
  email: z
    .string()
    .email({ message: "Veuillez entrer une adresse e-mail valide." }),
})

type NewsletterFormValues = z.infer<typeof NewsletterFormSchema>

export function NewsletterSignup() {
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(data: NewsletterFormValues) {
    const formData = new FormData()
    formData.append("email", data.email)

    // const result = await subscribeToNewsletterAction(null, formData);
    const result = {
      success: true,
      message: "Inscription à la newsletter confirmée",
    }
    if (result.success) {
      toast(result.message)
      form.reset()
    } else {
      toast(toast(result.message))
    }
  }

  return (
    <div className='bg-slate-50 dark:bg-slate-900/50 border rounded-lg p-8 md:p-12 -mt-12 mb-10 md:w-3/4 sm:mx-auto mx-1'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
        <div>
          <h3 className='text-2xl md:text-3xl font-bold text-titlecolor'>
            Inscription à la Newsletter
          </h3>
          <p className='mt-2 text-slate-600 dark:text-slate-400'>
            Abonnez-vous pour connaitre en avant-première nos dernières
            prestations, participer à nos événements et bien plus.
          </p>
        </div>

        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <div className='flex flex-col sm:flex-row gap-2'>
                      <FormControl>
                        <div className='relative w-full'>
                          <Mail className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground' />
                          <Input
                            type='email'
                            placeholder='Entrez votre adresse mail'
                            className='pl-10 py-8'
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <Button
                        type='submit'
                        className='w-full sm:w-auto bg-titlecolor hover:bg-titlecolor/80 font-semibold p-6 py-8'
                        disabled={form.formState.isSubmitting}
                      >
                        {form.formState.isSubmitting
                          ? "Inscription..."
                          : "Je m'inscris"}
                      </Button>
                    </div>
                    <FormMessage className='mt-2' />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
