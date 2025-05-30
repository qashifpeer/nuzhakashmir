import {defineType, defineField} from 'sanity';

export default defineType({
    name: 'tag',
    title: 'Tag',
    type: 'document',
    fields: [
        defineField({ 
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        defineField({ 
            name: 'description',
            title: 'Description',
            type: 'text'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type:'slug',
            options: {
                source: 'name',
                maxLength: 96,
            }
        })
    ]

})