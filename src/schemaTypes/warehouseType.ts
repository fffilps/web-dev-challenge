import {Factory} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const warehouseType = defineType({
  name: 'warehouse',
  type: 'document',
  title: 'Warehouse',
  icon: Factory,
  fields: [
    defineField({name: 'locationName', type: 'string'}),
    defineField({name: 'address', type: 'string'}),
    defineField({name: 'capacity', type: 'number'}),
  ],
  preview: {
    select: {locationName: 'locationName', address: 'address', capacity: 'capacity'},
    prepare({locationName, address, capacity}) {
      return {
        title: `${locationName} (Capacity: ${capacity})`,
        subtitle: address,
      }
    },
  },
})
