import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type TestimonialCardProps = {
  name: string
  comment: string
}
export function TestimonialCard({ name, comment }: TestimonialCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-titlecolor'>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-muted-foreground'>{comment}</p>
      </CardContent>
    </Card>
  )
}
