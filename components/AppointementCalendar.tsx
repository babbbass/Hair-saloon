// components/HairCoachingScheduler.tsx
"use client"

import { useState, useEffect } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { success, z } from "zod"
import { format, setHours, setMinutes } from "date-fns"
import { fr } from "date-fns/locale"
import {
  // Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  // User,
  // Mail,
  // Phone,
  Clock,
} from "lucide-react"
import { cn } from "@/lib/utils"
// import { bookCoachingSessionAction } from "@/app/coaching-actions"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Badge } from "@/components/ui/badge"

type TimeSlot = {
  time: string
  duration: number
}

type BookedSlot = {
  time: string
  date: string
}

const availableTimeSlots: TimeSlot[] = [
  { time: "11:00", duration: 60 },
  { time: "12:00", duration: 60 },
  { time: "14:00", duration: 60 },
  { time: "15:00", duration: 60 },
  { time: "16:00", duration: 60 },
]

const FormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Le prénom doit contenir au moins 2 caractères." }),
  lastName: z
    .string()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Adresse e-mail invalide." }),
  phone: z.string().optional(),
})

type FormValues = z.infer<typeof FormSchema>

type SchedulerProps = {
  serviceName: string
  basePrice: number
}

export function AppointmentCalendar({
  serviceName,
  basePrice,
}: SchedulerProps) {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | undefined>(
    undefined
  )
  const [bookedSlots, setBookedSlots] = useState<BookedSlot[]>([])

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  })

  const handleNextStep = () => setStep((prev) => prev + 1)
  const handlePrevStep = () => setStep((prev) => prev - 1)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedBookings = localStorage.getItem("bookedSlots")
      if (storedBookings) {
        try {
          setBookedSlots(JSON.parse(storedBookings))
        } catch (error) {
          console.error(
            "Erreur lors de la lecture des réservations depuis localStorage",
            error
          )
        }
      }
    }
  }, [])

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!selectedDate || !selectedSlot) {
      toast("Veuillez sélectionner une date et un créneau.")
      return
    }

    const [hours, minutes] = selectedSlot.time.split(":").map(Number)
    const finalDateTime = setMinutes(setHours(selectedDate, hours), minutes)

    const formData = new FormData()
    formData.append("serviceName", serviceName)
    formData.append("price", String(basePrice))
    formData.append("dateTime", finalDateTime.toISOString())
    formData.append("firstName", data.firstName)
    formData.append("lastName", data.lastName)
    formData.append("email", data.email)
    formData.append("phone", data.phone || "")
    console.log(formData, finalDateTime)
    // return
    // const result = await bookCoachingSessionAction(null, formData)
    const result = { success: true, message: "Réservation confirmée" }

    if (result.success) {
      const newBooking: BookedSlot = {
        date: format(selectedDate, "yyyy-MM-dd"),
        time: selectedSlot.time,
      }
      const updatedBookings = [...bookedSlots, newBooking]
      setBookedSlots(updatedBookings)
      localStorage.setItem("bookedSlots", JSON.stringify(updatedBookings))
      toast(
        "Réservation confirmée ! Un e-mail de confirmation vous a été envoyé."
      )
      setStep(4)
    } else {
      toast("Échec de la réservation")
    }
  }
  const isSlotBooked = (date: Date | undefined, time: string): boolean => {
    if (!date) return false
    const formattedDate = format(date, "yyyy-MM-dd")
    return bookedSlots.some(
      (slot) => slot.date === formattedDate && slot.time === time
    )
  }
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return (
    <Card className='w-full max-w-4xl mx-auto shadow-2xl my-6'>
      <CardHeader className='text-center'>
        <CardTitle className='text-3xl font-bold text-green-700'>
          {serviceName}
        </CardTitle>
        <CardDescription>
          Planifiez votre rendez-vous en quelques étapes.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {step === 1 && (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex flex-col items-center'>
              <h3 className='font-semibold mb-4 text-lg'>
                1. Choisissez une date
              </h3>
              <Calendar
                mode='single'
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) =>
                  date < today || date.getDay() === 0 || date.getDay() === 6
                } // disabled weekends and past dates
                className='rounded-md border'
              />
            </div>
            <div className='flex flex-col'>
              <h3 className='font-semibold mb-4 text-lg'>
                2. Choisissez un créneau
              </h3>
              {selectedDate ? (
                <div className='flex flex-col space-y-2'>
                  <p className='text-sm text-muted-foreground mb-2'>
                    Créneaux pour le{" "}
                    {format(selectedDate, "eeee dd MMMM", { locale: fr })} :
                  </p>
                  <div className='grid grid-cols-2 gap-2'>
                    {availableTimeSlots.map((slot) => {
                      const isBooked = isSlotBooked(selectedDate, slot.time)
                      return (
                        <Button
                          key={slot.time}
                          variant={
                            selectedSlot?.time === slot.time
                              ? "default"
                              : "outline"
                          }
                          onClick={() => setSelectedSlot(slot)}
                          disabled={isBooked}
                          className={cn("w-full", {
                            "line-through text-muted-foreground": isBooked,
                          })}
                        >
                          <Clock className='mr-2 h-4 w-4' />{" "}
                          {isBooked ? "Réservé" : slot.time}
                        </Button>
                      )
                    })}
                  </div>
                </div>
              ) : (
                <p>{`Veuillez d'abord sélectionner une date.`}</p>
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className='font-semibold mb-6 text-lg text-center'>
              Vos informations
            </h3>
            <div className='bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6 flex justify-between items-center'>
              <div>
                <p className='font-semibold'>
                  {format(selectedDate!, "eeee dd MMMM yyyy", { locale: fr })} à{" "}
                  {selectedSlot?.time}
                </p>
                <p className='text-sm text-muted-foreground'>{serviceName}</p>
              </div>
              <Badge variant='secondary' className='text-lg'>
                {basePrice} €
              </Badge>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleNextStep)}
                className='space-y-4'
              >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <FormField
                    control={form.control}
                    name='firstName'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prénom</FormLabel>
                        <FormControl>
                          <Input placeholder='Jean' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='lastName'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                          <Input placeholder='Dupont' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type='email'
                          placeholder='jean.dupont@email.com'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='phone'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone (Optionnel)</FormLabel>
                      <FormControl>
                        <Input
                          type='tel'
                          placeholder='06 12 34 56 78'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
        )}

        {/* ÉTAPE 3: Confirmation */}
        {step === 3 && (
          <div>
            <h3 className='font-semibold mb-6 text-lg text-center'>
              Veuillez confirmer votre réservation
            </h3>
            <div className='space-y-4 rounded-lg border p-6'>
              <div className='flex justify-between items-center'>
                <span className='text-muted-foreground'>Prestation</span>
                <span className='font-semibold'>{serviceName}</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-muted-foreground'>Date & Heure</span>
                <span className='font-semibold'>
                  {format(selectedDate!, "eeee dd MMMM yyyy", { locale: fr })} à{" "}
                  {selectedSlot?.time}
                </span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-muted-foreground'>Client</span>
                <span className='font-semibold'>
                  {form.getValues("firstName")} {form.getValues("lastName")}
                </span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-muted-foreground'>Email</span>
                <span className='font-semibold'>{form.getValues("email")}</span>
              </div>
              <div className='border-t my-4'></div>
              <div className='flex justify-between items-center text-xl'>
                <span className='text-muted-foreground'>Total</span>
                <span className='font-bold'>{basePrice} €</span>
              </div>
            </div>
          </div>
        )}

        {/* ÉTAPE 4: Succès */}
        {step === 4 && (
          <div className='text-center py-10'>
            <h3 className='text-2xl font-bold text-green-600'>Merci !</h3>
            <p className='mt-2 text-muted-foreground'>
              {`Votre rendez-vous pour un "${serviceName}" a bien été enregistré.`}
            </p>
            <p className='mt-4 font-semibold'>
              {format(selectedDate!, "eeee dd MMMM yyyy", { locale: fr })} à{" "}
              {selectedSlot?.time}
            </p>
          </div>
        )}
      </CardContent>

      {/* PIED DE PAGE AVEC BOUTONS DE NAVIGATION */}
      {step < 4 && (
        <CardFooter className='flex justify-between'>
          {step > 1 ? (
            <Button
              variant='outline'
              onClick={handlePrevStep}
              className='cursor-pointer'
            >
              <ChevronLeft className='mr-2 h-4 w-4 ' /> Précédent
            </Button>
          ) : (
            <div />
          )}

          {step === 1 && (
            <Button
              onClick={handleNextStep}
              disabled={!selectedDate || !selectedSlot}
              className='cursor-pointer hover:bg-green-700 bg-green-600'
            >
              Confirmer la date <ChevronRight className='ml-2 h-4 w-4' />
            </Button>
          )}

          {step === 2 && (
            <Button
              onClick={form.handleSubmit(handleNextStep)}
              className='cursor-pointer hover:bg-green-800 bg-green-700'
            >
              Suivant <ChevronRight className='ml-2 h-4 w-4' />
            </Button>
          )}

          {step === 3 && (
            <Button
              onClick={form.handleSubmit(onSubmit)}
              disabled={form.formState.isSubmitting}
              className='cursor-pointer hover:bg-green-700 bg-green-600'
            >
              {form.formState.isSubmitting
                ? "Confirmation en cours..."
                : "Je confirme ma réservation"}
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  )
}
