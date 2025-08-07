import { CircleChevronRight } from "lucide-react"
import { services } from "@/lib/constants"

type ServiceSlug = keyof typeof services
type ServiceListType = { service: string }
export function ServicesList({ service }: ServiceListType) {
  if (service in services) {
    const serviceData = services[service as ServiceSlug]

    return (
      <div className='container mx-auto px-4 pb-16'>
        <h2 className='text-lg font-bold mb-4'>Description</h2>
        {"description" in serviceData && serviceData.description && (
          <p className='mb-4'>{serviceData?.description}</p>
        )}
        <h2 className='text-lg font-bold mb-4'>Contenu de ce coaching</h2>
        {"content" in serviceData && serviceData.content && (
          <ul>
            {serviceData.content.map((item) => (
              <li key={item} className='grid grid-cols-[auto_1fr] items-center'>
                <CircleChevronRight className='inline-block mr-2 text-gray-800' />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
