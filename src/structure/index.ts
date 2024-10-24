import {contextDocumentTypeName} from '@sanity/assist'
import {
  AlarmClockCheck,
  AlarmClockMinus,
  Baby,
  Check,
  Clock,
  Gift,
  PawPrint,
  SunSnow,
  ToyBrick,
  X,
} from 'lucide-react'
import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('North Pole')
    .items([
      // CRM types
      // S.documentTypeListItem('child').title('Children'),
      S.listItem()
        .title('Children')
        .icon(Baby)
        .child(
          S.list()
            .title('Children')
            .items([
              S.documentTypeListItem('child').title('All Children'),
              S.divider(),
              S.listItem()
                .title(`Nice Children`)
                .icon(Check)
                .child(
                  S.documentList()
                    .apiVersion('2024-10-01')
                    .title(`Nice Children`)
                    .schemaType('child')
                    .filter('_type == "child" && status == "nice"'),
                ),
              S.listItem()
                .title(`Naughty Children`)
                .icon(X)
                .child(
                  S.documentList()
                    .apiVersion('2024-10-01')
                    .title(`Naughty Children`)
                    .schemaType('child')
                    .filter('_type == "child" && status == "naughty"'),
                ),
            ]),
        ),
      S.documentTypeListItem('parent').title('Parents'),
      S.divider(),

      // HR types
      S.listItem()
        .title('Elves')
        .schemaType('elf')
        .child(
          S.list()
            .title('Elves')
            .items([
              S.documentTypeListItem('elf').title('All Elves'),
              S.divider(),
              S.listItem()
                .title('Full Time Elves')
                .icon(AlarmClockCheck)
                .child(
                  S.list()
                    .title('Full Time Elves')
                    .items([
                      S.listItem()
                        .title('All Full Time Elves')
                        .child(
                          S.documentList()
                            .apiVersion('2024-10-01')
                            .title('All Full Time Elves')
                            .schemaType('elf')
                            .filter('availability == "full-time"'),
                        ),
                      S.divider(),
                      S.listItem()
                        .title('Full Time Toy Makers')
                        .child(
                          S.documentList()
                            .apiVersion('2024-10-01')
                            .title('Full Time Toy Makers')
                            .schemaType('elf')
                            .filter('availability == "full-time" && role == "toy-maker"'),
                        ),
                      S.listItem()
                        .title('Full Time Sleigh Engineers')
                        .child(
                          S.documentList()
                            .apiVersion('2024-10-01')
                            .title('Full Time Sleigh Engineers')
                            .schemaType('elf')
                            .filter('availability == "full-time" && role == "sleigh-engineer"'),
                        ),
                      S.listItem()
                        .title('Full Time Reindeer Handlers')
                        .child(
                          S.documentList()
                            .apiVersion('2024-10-01')
                            .title('Full Time Reindeer Handlers')
                            .schemaType('elf')
                            .filter('availability == "full-time" && role == "reindeer-handler"'),
                        ),
                    ]),
                ),
              S.listItem()
                .title('Part Time Elves')
                .icon(AlarmClockMinus)
                .child(
                  S.list()
                    .title('Part Time Elves')
                    .items([
                      S.listItem()
                        .title('All Part Time Elves')
                        .child(
                          S.documentList()
                            .apiVersion('2024-10-01')
                            .title('All Part Time Elves')
                            .schemaType('elf')
                            .filter('availability == "part-time"'),
                        ),
                      S.divider(),
                      S.listItem()
                        .title('Part Time Toy Makers')
                        .child(
                          S.documentList()
                            .apiVersion('2024-10-01')
                            .title('Part Time Toy Makers')
                            .schemaType('elf')
                            .filter('availability == "part-time" && role == "toy-maker"'),
                        ),
                      S.listItem()
                        .title('Part Time Sleigh Engineers')
                        .child(
                          S.documentList()
                            .apiVersion('2024-10-01')
                            .title('Part Time Sleigh Engineers')
                            .schemaType('elf')
                            .filter('availability == "part-time" && role == "sleigh-engineer"'),
                        ),
                      S.listItem()
                        .title('Part Time Reindeer Handlers')
                        .child(
                          S.documentList()
                            .apiVersion('2024-10-01')
                            .title('Part Time Reindeer Handlers')
                            .schemaType('elf')
                            .filter('availability == "part-time" && role == "reindeer-handler"'),
                        ),
                    ]),
                ),
              S.listItem()
                .title('Seasonal Elves')
                .icon(SunSnow)
                .child(
                  S.list()
                    .title('Seasonal Elves')
                    .items([
                      S.listItem()
                        .title('All Seasonal Elves')
                        .child(
                          S.documentList()
                            .apiVersion('2024-10-01')
                            .title('All Seasonal Elves')
                            .schemaType('elf')
                            .filter('availability == "seasonal"'),
                        ),
                      S.divider(),
                      S.listItem()
                        .title('Seasonal Toy Makers')
                        .child(
                          S.documentList()
                            .apiVersion('2024-10-01')
                            .title('Seasonal Toy Makers')
                            .schemaType('elf')
                            .filter('availability == "seasonal" && role == "toy-maker"'),
                        ),
                      S.listItem()
                        .title('Seasonal Sleigh Engineers')
                        .child(
                          S.documentList()
                            .apiVersion('2024-10-01')
                            .title('Seasonal Sleigh Engineers')
                            .schemaType('elf')
                            .filter('availability == "seasonal" && role == "sleigh-engineer"'),
                        ),
                      S.listItem()
                        .title('Seasonal Reindeer Handlers')
                        .child(
                          S.documentList()
                            .apiVersion('2024-10-01')
                            .title('Seasonal Reindeer Handlers')
                            .schemaType('elf')
                            .filter('availability == "seasonal" && role == "reindeer-handler"'),
                        ),
                    ]),
                ),
            ]),
        ),
      S.listItem()
        .title('Reindeer')
        .icon(PawPrint) // You might want to replace this with a more appropriate icon
        .child(
          S.list()
            .title('Reindeer')
            .items([
              S.documentTypeListItem('reindeer').title('All Reindeer'),
              S.divider(),
              S.listItem()
                .title('Trained Reindeer')
                .child(
                  S.documentList()
                    .apiVersion('2024-10-01')
                    .title('Trained Reindeer')
                    .schemaType('reindeer')
                    .filter('_type == "reindeer" && trainingStatus == "trained"'),
                ),
              S.listItem()
                .title('Healthy Reindeer')
                .child(
                  S.documentList()
                    .apiVersion('2024-10-01')
                    .title('Healthy Reindeer')
                    .schemaType('reindeer')
                    .filter('_type == "reindeer" && currentHealth == "healthy"'),
                ),
              S.listItem()
                .title('Healthy and Trained Reindeer')
                .child(
                  S.documentList()
                    .apiVersion('2024-10-01')
                    .title('Healthy and Trained Reindeer')
                    .schemaType('reindeer')
                    .filter(
                      '_type == "reindeer" && trainingStatus == "trained" && currentHealth == "healthy"',
                    ),
                ),
            ]),
        ),
      S.documentTypeListItem('sleigh').title('Sleighs'),
      S.listItem()
        .title('Gifts')
        .icon(Gift) // Assuming you have a Gift icon imported
        .child(
          S.list()
            .title('Gifts')
            .items([
              S.documentTypeListItem('gift').title('All Gifts'),
              S.divider(),
              S.listItem()
                .title('Pending Gifts')
                .icon(Clock)
                .child(
                  S.documentList()
                    .apiVersion('2024-10-01')
                    .title('Pending Gifts')
                    .schemaType('gift')
                    .filter('_type == "gift" && approvalStatus == "pending"'),
                ),
              S.listItem()
                .title('Approved Gifts')
                .icon(Check)
                .child(
                  S.documentList()
                    .apiVersion('2024-10-01')
                    .title('Approved Gifts')
                    .schemaType('gift')
                    .filter('_type == "gift" && approvalStatus == "approved"'),
                ),
              S.listItem()
                .title('Denied Gifts')
                .icon(X)
                .child(
                  S.documentList()
                    .apiVersion('2024-10-01')
                    .title('Denied Gifts')
                    .schemaType('gift')
                    .filter('_type == "gift" && approvalStatus == "denied"'),
                ),
            ]),
        ),
      S.divider(),

      // Inventory types
      S.documentTypeListItem('material').title('Materials'),
      S.documentTypeListItem('supplier').title('Suppliers'),
      S.listItem()
        .title('Toys')
        .icon(ToyBrick)
        .child(
          S.list()
            .title('Toys')
            .items([
              S.documentTypeListItem('toy').title('All Toys'),
              S.divider(),
              S.listItem()
                .title('Toys by Warehouse')
                .child(
                  // This creates a list that loads warehouses dynamically
                  S.documentTypeList('warehouse')
                    .title('Select Warehouse')
                    .child((warehouseId) =>
                      S.documentList()
                        .apiVersion('2024-10-01')
                        .title('Toys in Warehouse')
                        .schemaType('toy')
                        .filter('_type == "toy" && storageLocation._ref == $warehouseId')
                        .params({warehouseId}),
                    ),
                ),
            ]),
        ),
      S.documentTypeListItem('warehouse').title('Warehouses'),
      S.divider(),

      // CMS types
      S.documentTypeListItem('page').title('Pages'),
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('event').title('Events'),
      S.documentTypeListItem('person').title('People'),
      S.divider(),

      // Built-in types
      S.documentTypeListItem(contextDocumentTypeName),
    ])
