import {Plane} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const sleighType = defineType({
  name: 'sleigh',
  type: 'document',
  title: 'Sleigh',
  icon: Plane,
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'model', type: 'string'}),
    defineField({name: 'mileage', type: 'number', title: 'Distance Flown (in miles)'}),
    defineField({
      name: 'maintenanceHistory',
      type: 'array',
      of: [
        defineField({
          name: 'maintenanceEvent',
          type: 'object',
          fields: [
            defineField({name: 'date', type: 'datetime'}),
            defineField({name: 'description', type: 'text'}),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'model',
      mileage: 'mileage',
      maintenanceEvents: 'maintenanceHistory', // Select maintenance history
    },
    prepare({title, subtitle, mileage, maintenanceEvents}) {
      const eventCount = maintenanceEvents ? maintenanceEvents.length : 0 // Count maintenance events
      return {
        title: `${title} (Maint. Events: ${eventCount})`, // Update title to include event count
        subtitle:
          subtitle && mileage
            ? `Model: ${subtitle}, Mileage: ${mileage}`
            : subtitle
              ? `Model: ${subtitle}`
              : mileage
                ? `Mileage: ${mileage}`
                : undefined,
      }
    },
  },
})
